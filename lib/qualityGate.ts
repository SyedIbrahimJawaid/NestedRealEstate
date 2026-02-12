// lib/qualityGate.ts
// Quality Gate: determines if a city page is index-worthy
// Pages that fail remain noindex,follow but still contribute to internal linking

import type { CityContent } from "./contentStore";

export interface QualityInput {
  wordCount: number;
  faqCount: number;
  internalLinks: number;
  valueModules: number; // checklist, timeline, tradeoffs, questions-to-ask
}

export interface ChecklistValidation {
  hasNeighborhoods: boolean;
  neighborhoodCount: number;
  hasSchools: boolean;
  hasCommute: boolean;
  hasAmenities: boolean;
  hasMarketSnapshot: boolean;
  marketSnapshotHasDate: boolean;
  hasFaqs: boolean;
  faqCount: number;
  allRequirementsMet: boolean;
}

/**
 * Validate checklist compliance against quality standards.
 * Requirements:
 * 1. Neighborhoods (6-10) with who-it-fits notes
 * 2. Schools section (careful wording + source references where possible)
 * 3. Commute and transit notes (typical times, major corridors)
 * 4. Family amenities (parks, hospitals, childcare density)
 * 5. Market snapshot with explicit date (for example: 'as of Jan 2026')
 * 6. FAQ at the bottom (5-8 questions) + FAQPage schema
 */
export function validateChecklist(content: CityContent): ChecklistValidation {
  const checklist = content.checklist;
  const neighborhoods = checklist?.neighborhoods ?? [];
  const neighborhoodCount = neighborhoods.length;
  const hasNeighborhoods = neighborhoodCount >= 6 && neighborhoodCount <= 10;

  const hasSchools = !!(
    checklist?.schools &&
    checklist.schools.notes &&
    checklist.schools.notes.length > 0
  );

  const hasCommute = !!(
    checklist?.commute &&
    checklist.commute.notes &&
    checklist.commute.notes.length > 0 &&
    checklist.commute.corridors &&
    checklist.commute.corridors.length > 0
  );

  const hasAmenities = !!(
    checklist?.amenities &&
    checklist.amenities.notes &&
    checklist.amenities.notes.length > 0
  );

  const hasMarketSnapshot = !!(
    checklist?.marketSnapshot &&
    checklist.marketSnapshot.notes &&
    checklist.marketSnapshot.notes.length > 0
  );
  const marketSnapshotHasDate = !!(
    checklist?.marketSnapshot?.asOf &&
    checklist.marketSnapshot.asOf.trim().length > 0
  );

  const faqCount = content.faqs?.length ?? 0;
  const hasFaqs = faqCount >= 5 && faqCount <= 8;

  const allRequirementsMet =
    hasNeighborhoods &&
    hasSchools &&
    hasCommute &&
    hasAmenities &&
    hasMarketSnapshot &&
    marketSnapshotHasDate &&
    hasFaqs;

  return {
    hasNeighborhoods,
    neighborhoodCount,
    hasSchools,
    hasCommute,
    hasAmenities,
    hasMarketSnapshot,
    marketSnapshotHasDate,
    hasFaqs,
    faqCount,
    allRequirementsMet,
  };
}

/**
 * Compute a quality score (0–100) for a city page.
 * Only index pages with score >= 80.
 */
export function qualityScore(content: QualityInput): number {
  let score = 0;
  if (content.wordCount >= 900) score += 30;
  if (content.wordCount >= 1200) score += 10;
  if (content.faqCount >= 5) score += 20;
  if (content.internalLinks >= 10) score += 20;
  if (content.valueModules >= 2) score += 20;
  return Math.min(score, 100);
}

/**
 * Determine robots directive based on quality score.
 */
export function robotsDirective(score: number): "index,follow" | "noindex,follow" {
  return score >= 80 ? "index,follow" : "noindex,follow";
}
