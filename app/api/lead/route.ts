import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// Rate limiting store (in-memory, replace with Redis in production)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true }); // Silently accept spam
    }

    // Validate required fields
    const required = ["intent", "timeline", "budget", "area", "name", "email", "preferredContact"];
    const missingFields = required.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { ok: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    // Validate consent
    if (!body.consent) {
      return NextResponse.json(
        { ok: false, error: "Consent is required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate phone is required if Text/Call is selected
    if ((body.preferredContact === "text" || body.preferredContact === "call") && !body.phone?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Phone number is required when selecting Text or Call" },
        { status: 400 }
      );
    }

    // Validate phone format if provided (basic validation: at least 10 digits)
    if (body.phone && body.phone.trim()) {
      const phoneDigits = body.phone.replace(/\D/g, "");
      if (phoneDigits.length < 10) {
        return NextResponse.json(
          { ok: false, error: "Please enter a valid phone number" },
          { status: 400 }
        );
      }
    }

    // Save to Supabase
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert({
        intent: body.intent,
        timeline: body.timeline,
        budget: body.budget,
        area: body.area,
        city: body.city || null,
        baby_status: body.babyStatus,
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        preferred_contact: body.preferredContact,
        notes: body.notes || null,
        consent: body.consent,
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
        utm_term: body.utm_term || null,
        utm_content: body.utm_content || null,
        referrer: body.referrer || null,
        landing_page: body.landing_page || null,
        form_location: body.form_location || 'sidebar',
        ip_address: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || null,
        user_agent: req.headers.get("user-agent") || null,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to save lead. Please try again." },
        { status: 500 }
      );
    }

    // Log form event (optional)
    if (data) {
      await supabaseAdmin
        .from('form_events')
        .insert({
          lead_id: data.id,
          event_type: body.intent === 'buying' ? 'lead_submit_buy' : 'form_submit_success',
          event_data: {
            form_location: body.form_location || 'sidebar',
            intent: body.intent,
            area: body.area,
          },
          ip_address: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || null,
          user_agent: req.headers.get("user-agent") || null,
        });
    }

    console.log("New lead saved to Supabase:", data.id);

    // TODO: Forward to CRM (e.g., HubSpot, Salesforce)
    // TODO: Send notification email
    // TODO: Send Slack/Teams webhook
    // TODO: Verify anti-spam token (Turnstile/reCAPTCHA)

    return NextResponse.json({
      ok: true,
      message: "Thank you! We'll review your details and be in touch shortly.",
      lead_id: data.id, // Optional: return lead ID for tracking
    });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
