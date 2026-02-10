// sitemap-areas.xml — county hubs + indexed city pages only
import { getIndexedCities } from "@/lib/cityData";

const base = "https://babyhomeplan.com";

const countyHubs = [
  "/areas/san-diego-county",
  "/areas/orange-county",
  "/areas/los-angeles-county",
];

export async function GET() {
  const now = new Date().toISOString().split("T")[0];
  const indexedCities = getIndexedCities();

  const allPaths = [
    ...countyHubs.map((p) => ({ path: p, priority: "0.8" })),
    ...indexedCities.map((c) => ({ path: c.url, priority: "0.6" })),
  ];

  const urls = allPaths
    .map(
      (p) => `  <url>
    <loc>${base}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
