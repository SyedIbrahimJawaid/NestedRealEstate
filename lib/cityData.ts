// lib/cityData.ts
// City data index — in production, load from CSV or database

export interface CityRow {
  county: string;
  county_slug: string;
  city: string;
  city_slug: string;
  url: string;
  primary_keyword: string;
  index: "index" | "noindex";
}

const cityIndex: CityRow[] = [
  // --- San Diego County ---
  { county: "San Diego County", county_slug: "san-diego-county", city: "Carlsbad", city_slug: "carlsbad", url: "/areas/san-diego-county/carlsbad", primary_keyword: "Family-Friendly Neighborhoods in Carlsbad", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "Encinitas", city_slug: "encinitas", url: "/areas/san-diego-county/encinitas", primary_keyword: "Family-Friendly Neighborhoods in Encinitas", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "Oceanside", city_slug: "oceanside", url: "/areas/san-diego-county/oceanside", primary_keyword: "Family-Friendly Neighborhoods in Oceanside", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "Escondido", city_slug: "escondido", url: "/areas/san-diego-county/escondido", primary_keyword: "Family-Friendly Neighborhoods in Escondido", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "Chula Vista", city_slug: "chula-vista", url: "/areas/san-diego-county/chula-vista", primary_keyword: "Family-Friendly Neighborhoods in Chula Vista", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "La Mesa", city_slug: "la-mesa", url: "/areas/san-diego-county/la-mesa", primary_keyword: "Family-Friendly Neighborhoods in La Mesa", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "Poway", city_slug: "poway", url: "/areas/san-diego-county/poway", primary_keyword: "Family-Friendly Neighborhoods in Poway", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "San Marcos", city_slug: "san-marcos", url: "/areas/san-diego-county/san-marcos", primary_keyword: "Family-Friendly Neighborhoods in San Marcos", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "Vista", city_slug: "vista", url: "/areas/san-diego-county/vista", primary_keyword: "Family-Friendly Neighborhoods in Vista", index: "index" },
  { county: "San Diego County", county_slug: "san-diego-county", city: "El Cajon", city_slug: "el-cajon", url: "/areas/san-diego-county/el-cajon", primary_keyword: "Family-Friendly Neighborhoods in El Cajon", index: "index" },

  // --- Orange County ---
  { county: "Orange County", county_slug: "orange-county", city: "Irvine", city_slug: "irvine", url: "/areas/orange-county/irvine", primary_keyword: "Family-Friendly Neighborhoods in Irvine", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Mission Viejo", city_slug: "mission-viejo", url: "/areas/orange-county/mission-viejo", primary_keyword: "Family-Friendly Neighborhoods in Mission Viejo", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Laguna Niguel", city_slug: "laguna-niguel", url: "/areas/orange-county/laguna-niguel", primary_keyword: "Family-Friendly Neighborhoods in Laguna Niguel", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Tustin", city_slug: "tustin", url: "/areas/orange-county/tustin", primary_keyword: "Family-Friendly Neighborhoods in Tustin", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Fullerton", city_slug: "fullerton", url: "/areas/orange-county/fullerton", primary_keyword: "Family-Friendly Neighborhoods in Fullerton", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Lake Forest", city_slug: "lake-forest", url: "/areas/orange-county/lake-forest", primary_keyword: "Family-Friendly Neighborhoods in Lake Forest", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Yorba Linda", city_slug: "yorba-linda", url: "/areas/orange-county/yorba-linda", primary_keyword: "Family-Friendly Neighborhoods in Yorba Linda", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "San Clemente", city_slug: "san-clemente", url: "/areas/orange-county/san-clemente", primary_keyword: "Family-Friendly Neighborhoods in San Clemente", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Aliso Viejo", city_slug: "aliso-viejo", url: "/areas/orange-county/aliso-viejo", primary_keyword: "Family-Friendly Neighborhoods in Aliso Viejo", index: "index" },
  { county: "Orange County", county_slug: "orange-county", city: "Dana Point", city_slug: "dana-point", url: "/areas/orange-county/dana-point", primary_keyword: "Family-Friendly Neighborhoods in Dana Point", index: "index" },

  // --- Los Angeles County ---
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Pasadena", city_slug: "pasadena", url: "/areas/los-angeles-county/pasadena", primary_keyword: "Family-Friendly Neighborhoods in Pasadena", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Burbank", city_slug: "burbank", url: "/areas/los-angeles-county/burbank", primary_keyword: "Family-Friendly Neighborhoods in Burbank", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Long Beach", city_slug: "long-beach", url: "/areas/los-angeles-county/long-beach", primary_keyword: "Family-Friendly Neighborhoods in Long Beach", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Torrance", city_slug: "torrance", url: "/areas/los-angeles-county/torrance", primary_keyword: "Family-Friendly Neighborhoods in Torrance", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Santa Clarita", city_slug: "santa-clarita", url: "/areas/los-angeles-county/santa-clarita", primary_keyword: "Family-Friendly Neighborhoods in Santa Clarita", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Arcadia", city_slug: "arcadia", url: "/areas/los-angeles-county/arcadia", primary_keyword: "Family-Friendly Neighborhoods in Arcadia", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Redondo Beach", city_slug: "redondo-beach", url: "/areas/los-angeles-county/redondo-beach", primary_keyword: "Family-Friendly Neighborhoods in Redondo Beach", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Glendale", city_slug: "glendale", url: "/areas/los-angeles-county/glendale", primary_keyword: "Family-Friendly Neighborhoods in Glendale", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Claremont", city_slug: "claremont", url: "/areas/los-angeles-county/claremont", primary_keyword: "Family-Friendly Neighborhoods in Claremont", index: "index" },
  { county: "Los Angeles County", county_slug: "los-angeles-county", city: "Manhattan Beach", city_slug: "manhattan-beach", url: "/areas/los-angeles-county/manhattan-beach", primary_keyword: "Family-Friendly Neighborhoods in Manhattan Beach", index: "index" },
];

/** Get all cities for a county */
export function listCities(countySlug: string): CityRow[] {
  return cityIndex.filter((r) => r.county_slug === countySlug);
}

/** Get a specific city */
export function getCity(countySlug: string, citySlug: string): CityRow | undefined {
  return cityIndex.find(
    (r) => r.county_slug === countySlug && r.city_slug === citySlug
  );
}

/** Get all cities that should be indexed */
export function getIndexedCities(): CityRow[] {
  return cityIndex.filter((r) => r.index === "index");
}

/** Get all unique county slugs */
export function getCountySlugs(): string[] {
  return [...new Set(cityIndex.map((r) => r.county_slug))];
}

/** Get county display name from slug */
export function getCountyName(slug: string): string {
  const map: Record<string, string> = {
    "san-diego-county": "San Diego County",
    "orange-county": "Orange County",
    "los-angeles-county": "Los Angeles County",
  };
  return map[slug] || slug;
}

export { cityIndex };
