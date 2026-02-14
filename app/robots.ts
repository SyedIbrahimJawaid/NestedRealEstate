import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      `${base}/sitemap.xml`,
      `${base}/sitemap-main.xml`,
      `${base}/sitemap-guides.xml`,
      `${base}/sitemap-areas.xml`,
    ],
  };
}

