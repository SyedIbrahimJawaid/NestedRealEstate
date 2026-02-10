// Sitemap index — references the 3 child sitemaps
const base = "https://babyhomeplan.com";

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${base}/sitemap-main.xml</loc></sitemap>
  <sitemap><loc>${base}/sitemap-areas.xml</loc></sitemap>
  <sitemap><loc>${base}/sitemap-guides.xml</loc></sitemap>
</sitemapindex>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
