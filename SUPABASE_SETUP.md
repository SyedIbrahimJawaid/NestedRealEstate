# Supabase Database Setup Guide

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon/service_role keys

## Step 2: Run the SQL Schema

1. In Supabase Dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase-schema.sql`
3. Click **Run** to execute the schema

## Step 3: Get Your Supabase Credentials

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Service Role Key** (for server-side API access - keep this secret!)
   - **Anon Key** (for client-side if needed)

## Step 4: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## Step 5: Create Supabase Client

Create `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side client (uses service role key for full access)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Client-side client (uses anon key - if needed for public queries)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

## Step 6: Add Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Step 7: Update API Route to Save to Supabase

Update `app/api/lead/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// ... existing rate limiting and validation code ...

export async function POST(req: Request) {
  try {
    // ... existing validation code ...

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
```

## Step 8: Optional - Create Admin Dashboard

You can query leads in Supabase:

```typescript
// Get all new leads
const { data: newLeads } = await supabaseAdmin
  .from('leads')
  .select('*')
  .eq('status', 'new')
  .order('created_at', { ascending: false });

// Update lead status
await supabaseAdmin
  .from('leads')
  .update({ status: 'contacted', contacted_at: new Date().toISOString() })
  .eq('id', leadId);
```

## Database Schema Overview

### `leads` Table
- Stores all form submissions
- Includes form fields, contact info, UTM tracking
- Has status field for workflow management
- Auto-updates `updated_at` timestamp

### `form_events` Table
- Tracks form interactions (form_start, form_submit_success, etc.)
- Links to leads via `lead_id`
- Stores event metadata as JSONB

### Views
- `daily_leads_summary` - Daily statistics
- `lead_sources` - UTM source performance

## Security Notes

1. **Service Role Key**: Never expose this in client-side code. Only use in server-side API routes.
2. **RLS Policies**: The schema includes Row Level Security. Adjust policies based on your needs.
3. **Validation**: Always validate data server-side (already done in your API route).

## Next Steps

1. Set up email notifications (use Supabase Edge Functions or external service)
2. Create admin dashboard to view/manage leads
3. Set up webhooks to forward leads to CRM (HubSpot, Salesforce, etc.)
4. Add analytics dashboard using the views

