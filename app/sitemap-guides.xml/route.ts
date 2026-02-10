// sitemap-guides.xml — scenario / resource pages
const base = "https://babyhomeplan.com";

const guidePages = [
  "/resources/moving-before-baby",
  "/resources/buying-while-pregnant",
  "/resources/sell-first-or-buy-first",
  "/resources/45-day-plan",
  "/resources/baby-ready-upgrades",
  "/resources/first-time-buyer-family",
];

export async function GET() {
  const now = new Date().toISOString().split("T")[0];

  const urls = guidePages
    .map(
      (path) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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
