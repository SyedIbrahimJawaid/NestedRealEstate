// lib/relatedCities.ts
// Deterministic related cities helper for internal linking

import { listCities } from "./cityData";

/**
 * Return a deterministic set of related cities (same county, sorted neighbors).
 * Used to build internal links on city pages.
 */
export function relatedCities(
  countySlug: string,
  citySlug: string,
  limit = 8
): string[] {
  const cities = listCities(countySlug).map((r) => r.city_slug);
  const sorted = [...cities].sort();
  const idx = sorted.indexOf(citySlug);
  if (idx === -1) return sorted.slice(0, limit);

  const picks: string[] = [];
  for (let i = 1; picks.length < limit && i < sorted.length; i++) {
    const left = sorted[(idx - i + sorted.length) % sorted.length];
    const right = sorted[(idx + i) % sorted.length];
    if (left !== citySlug) picks.push(left);
    if (picks.length < limit && right !== citySlug) picks.push(right);
  }
  return picks.slice(0, limit);
}
