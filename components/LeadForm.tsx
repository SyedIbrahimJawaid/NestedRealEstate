"use client";

import { useState, useEffect, FormEvent } from "react";
import { IconHouse } from "@/components/Icons";

interface LeadFormProps {
  variant?: "sidebar" | "full" | "inline";
  heading?: string;
  ctaLabel?: string;
  defaultIntent?: "buying" | "selling" | "both";
}

/** Extract UTM params + referrer + landing page for CRM enrichment */
function getTrackingData(): Record<string, string> {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      referrer: "",
      landing_page: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    referrer: document.referrer || "",
    landing_page: window.location.pathname,
  };
}

/** Fire GA4 custom event (safe no-op if gtag not loaded) */
function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }
}

export default function LeadForm({
  variant = "sidebar",
  heading = "Get Started",
  ctaLabel = "Create My Family Home Plan",
  defaultIntent,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    intent: defaultIntent || "",
    timeline: "",
    budget: "",
    area: "",
    city: "",
    babyStatus: "yes",
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    notes: "",
    consent: false,
    honeypot: "",
  });
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formStarted, setFormStarted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setTracking(getTrackingData());
  }, []);

  const handleFieldInteraction = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_start", { form_location: variant });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.intent) newErrors.intent = "Please select an option";
    if (!formData.timeline) newErrors.timeline = "Please select a timeline";
    if (!formData.budget) newErrors.budget = "Please select a budget";
    if (!formData.area) newErrors.area = "Please select an area";
    if (!formData.preferredContact) newErrors.preferredContact = "Please select a contact method";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.consent) return;
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...tracking }),
      });
      if (res.ok) {
        setStatus("success");
        trackEvent("form_submit_success", {
          form_location: variant,
          intent: formData.intent,
          area: formData.area,
        });
      } else {
        setStatus("error");
        trackEvent("form_submit_error", { form_location: variant, error: "server_error" });
      }
    } catch {
      setStatus("error");
      trackEvent("form_submit_error", { form_location: variant, error: "network_error" });
    }
  };

  const update = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (status === "success") {
    return (
      <div className={variant === "sidebar" ? "card" : "bg-white rounded-card p-8 md:p-12 text-center"}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-serif text-primary">Thank You!</h3>
          <p className="text-body-secondary text-sm max-w-md">
            We received your Family Home Plan request. We&apos;ll review your details and reach out within 24 hours
            with a clear recommendation and next steps.
          </p>
        </div>
      </div>
    );
  }

  const fieldError = (field: string) =>
    errors[field] ? <p className="text-red-500 text-xs mt-1">{errors[field]}</p> : null;

  return (
    <div className={`relative overflow-hidden ${variant === "sidebar" ? "card bg-[#F5F3F0] shadow-lg" : "bg-white rounded-card p-8 md:p-12"}`}>
      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <IconHouse className="w-6 h-6 text-body-secondary/70" />
          <h3 className="text-xl font-bold font-sans text-body">{heading}</h3>
        </div>
        <p className="text-sm text-body-secondary mb-6">
          Answer a few quick questions. We&apos;ll follow up with a clear recommendation and next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => update("honeypot", e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name *"
                className={`form-input ${errors.name ? "!border-red-400 focus:!ring-red-400" : ""}`}
                value={formData.name}
                onChange={(e) => update("name", e.target.value)}
                onFocus={handleFieldInteraction}
                required
                name="name"
              />
              {fieldError("name")}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address *"
                className={`form-input ${errors.email ? "!border-red-400 focus:!ring-red-400" : ""}`}
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                onFocus={handleFieldInteraction}
                required
                name="email"
              />
              {fieldError("email")}
            </div>
          </div>

          {/* Phone (optional) */}
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="form-input"
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            onFocus={handleFieldInteraction}
            name="phone"
          />

          {/* Preferred Contact Method */}
          <div>
            <select
              className={`form-select ${errors.preferredContact ? "!border-red-400 focus:!ring-red-400" : ""}`}
              value={formData.preferredContact}
              onChange={(e) => { update("preferredContact", e.target.value); handleFieldInteraction(); }}
              required
              aria-label="Preferred contact method"
              name="preferredContact"
            >
              <option value="">Preferred Contact Method *</option>
              <option value="email">Email</option>
              <option value="text">Text</option>
              <option value="call">Call</option>
            </select>
            {fieldError("preferredContact")}
          </div>

          <div>
            <select
              className={`form-select ${errors.intent ? "!border-red-400 focus:!ring-red-400" : ""}`}
              value={formData.intent}
              onChange={(e) => { update("intent", e.target.value); handleFieldInteraction(); }}
              required
              aria-label="Buying, Selling, or Both?"
              name="intent"
            >
              <option value="">Buying, Selling, or Both? *</option>
              <option value="buying">Buying</option>
              <option value="selling">Selling</option>
              <option value="both">Both</option>
            </select>
            {fieldError("intent")}
          </div>

          <div>
            <select
              className={`form-select ${errors.timeline ? "!border-red-400 focus:!ring-red-400" : ""}`}
              value={formData.timeline}
              onChange={(e) => { update("timeline", e.target.value); handleFieldInteraction(); }}
              required
              aria-label="How time-sensitive is your situation?"
              name="timeline"
            >
              <option value="">How time-sensitive is your situation? *</option>
              <option value="0-45">0–45 days</option>
              <option value="2-3">2–3 months</option>
              <option value="3-6">3–6 months</option>
              <option value="6+">6+ months</option>
            </select>
            {fieldError("timeline")}
          </div>

          <div>
            <select
              className={`form-select ${errors.budget ? "!border-red-400 focus:!ring-red-400" : ""}`}
              value={formData.budget}
              onChange={(e) => { update("budget", e.target.value); handleFieldInteraction(); }}
              required
              aria-label="Estimated Budget"
              name="budget"
            >
              <option value="">Estimated Budget *</option>
              <option value="700-900">700k–900k</option>
              <option value="900-1200">900k–1.2M</option>
              <option value="1200-1500">1.2M–1.5M</option>
              <option value="1500-2000">1.5M–2.0M</option>
              <option value="2000+">2.0M+</option>
            </select>
            {fieldError("budget")}
          </div>

          <div>
            <select
              className={`form-select ${errors.area ? "!border-red-400 focus:!ring-red-400" : ""}`}
              value={formData.area}
              onChange={(e) => { update("area", e.target.value); handleFieldInteraction(); }}
              required
              aria-label="Select an area"
              name="area"
            >
              <option value="">Select an area *</option>
              <option value="San Diego County">San Diego County</option>
              <option value="Orange County">Orange County</option>
              <option value="Los Angeles County">Los Angeles County</option>
            </select>
            {fieldError("area")}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-sm text-body-secondary">Baby on the way or recent birth?</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="babyStatus"
                  value="yes"
                  checked={formData.babyStatus === "yes"}
                  onChange={(e) => { update("babyStatus", e.target.value); handleFieldInteraction(); }}
                  className="accent-clay w-4 h-4"
                />
                <span className="text-sm text-body-secondary">Yes</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="babyStatus"
                  value="no"
                  checked={formData.babyStatus === "no"}
                  onChange={(e) => { update("babyStatus", e.target.value); handleFieldInteraction(); }}
                  className="accent-clay w-4 h-4"
                />
                <span className="text-sm text-body-secondary">No</span>
              </label>
            </div>
          </div>

          {variant === "full" && (
            <>
              <input
                type="text"
                placeholder="City or Neighborhood (optional)"
                className="form-input"
                value={formData.city}
                onChange={(e) => update("city", e.target.value)}
                onFocus={handleFieldInteraction}
                name="city"
              />
              <textarea
                placeholder="Any additional details (optional)"
                className="form-input min-h-[100px] resize-none"
                value={formData.notes}
                onChange={(e) => update("notes", e.target.value)}
                onFocus={handleFieldInteraction}
                name="notes"
              />
            </>
          )}

          {/* Consent */}
          <label className="flex gap-2 items-start cursor-pointer text-sm text-body-secondary">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="accent-clay w-4 h-4 mt-0.5 flex-shrink-0"
              required
            />
            <span>I agree to be contacted about my request. See <a href="/privacy" className="text-clay underline hover:text-clay-dark">Privacy Policy</a>.</span>
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Submitting..." : ctaLabel}
          </button>

          <p className="text-xs text-body-secondary/70 text-center">
            We&apos;ll only contact you about your eligibility request. No spam.
          </p>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
