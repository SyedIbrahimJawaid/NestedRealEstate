import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/how-we-help",
    "/buy",
    "/sell-and-upgrade",
    "/33-day-express",
    "/areas",
    "/areas/san-diego-county",
    "/areas/orange-county",
    "/areas/los-angeles-county",
    "/resources",
    "/resources/moving-before-baby",
    "/resources/buying-while-pregnant",
    "/resources/sell-first-or-buy-first",
    "/resources/33-day-plan",
    "/resources/baby-ready-upgrades",
    "/resources/first-time-buyer-family",
    "/faq",
    "/get-started",
    "/privacy",
    "/terms",
    "/disclosures",
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
