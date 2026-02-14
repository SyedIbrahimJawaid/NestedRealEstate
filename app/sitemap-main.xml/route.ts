// sitemap-main.xml — core / service / legal pages
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

const mainPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/how-we-help", priority: "0.8", changefreq: "monthly" },
  { path: "/buy", priority: "0.8", changefreq: "monthly" },
  { path: "/sell-and-upgrade", priority: "0.8", changefreq: "monthly" },
  { path: "/33-day-express", priority: "0.8", changefreq: "monthly" },
  { path: "/areas", priority: "0.8", changefreq: "monthly" },
  { path: "/resources", priority: "0.7", changefreq: "monthly" },
  { path: "/resources/buying", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/selling", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/planning", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/preparation", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/express", priority: "0.6", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/get-started", priority: "0.9", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/disclosures", priority: "0.3", changefreq: "yearly" },
];

export async function GET() {
  const now = new Date().toISOString().split("T")[0];
  const urls = mainPages
    .map(
      (p) => `  <url>
    <loc>${base}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
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
