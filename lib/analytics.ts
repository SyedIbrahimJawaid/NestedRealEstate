// lib/analytics.ts
// GA4 event helpers — safe no-op if gtag not loaded
// IMPORTANT: Do not send PII to analytics

/**
 * Fire a GA4 custom event.
 * Requires gtag.js to be loaded on the page (via Google Tag Manager or direct script).
 */
export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }
}

/** Track CTA button clicks (non-PII) */
export function trackCtaClick(ctaLabel: string, pagePath: string) {
  trackEvent("cta_click", {
    cta_label: ctaLabel,
    page_path: pagePath,
  });
}

/** Track area page views (county or city page) */
export function trackAreaPageView(areaType: "county" | "city", areaName: string, pagePath: string) {
  trackEvent("area_page_view", {
    area_type: areaType,
    area_name: areaName,
    page_path: pagePath,
  });
}
