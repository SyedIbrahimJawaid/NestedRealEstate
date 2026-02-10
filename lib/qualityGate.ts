// lib/qualityGate.ts
// Quality Gate: determines if a city page is index-worthy
// Pages that fail remain noindex,follow but still contribute to internal linking

export interface QualityInput {
  wordCount: number;
  faqCount: number;
  internalLinks: number;
  valueModules: number; // checklist, timeline, tradeoffs, questions-to-ask
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
