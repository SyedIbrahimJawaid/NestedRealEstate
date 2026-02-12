// lib/contentStore.ts
// Content storage layer — reads pre-generated city content from JSON files
// In production, replace with CMS or database reads

import fs from "fs";
import path from "path";

export interface CityContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  sections: { heading: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  checklist?: {
    neighborhoods: { name: string; fit: string }[];
    schools: { notes: string[]; sources?: { label: string; url: string }[] };
    commute: { notes: string[]; corridors: string[]; transit?: string[] };
    amenities: {
      notes: string[];
      parks?: string[];
      hospitals?: string[];
      childcare?: string[];
    };
    marketSnapshot: { asOf: string; notes: string[] };
  };
  valueModules?: string[]; // e.g. ["checklist", "timeline"]
}

/**
 * Load stored content for a city page.
 * Returns null if no pre-generated content exists (page will use fallback template).
 */
export async function getStoredContent(
  countySlug: string,
  citySlug: string
): Promise<CityContent | null> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "areas",
    countySlug,
    `${citySlug}.json`
  );

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as CityContent;
  } catch {
    return null;
  }
}

/** Guide / scenario page content shape */
export interface GuideContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  sections: { heading: string; body: string[] }[];
  faqs?: { q: string; a: string }[];
}
