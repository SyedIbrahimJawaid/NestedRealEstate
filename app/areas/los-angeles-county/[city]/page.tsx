import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCity, listCities, getCountyName } from "@/lib/cityData";
import { getStoredContent } from "@/lib/contentStore";
import { relatedCities } from "@/lib/relatedCities";
import { qualityScore, robotsDirective } from "@/lib/qualityGate";
import CityPageTemplate from "@/components/CityPageTemplate";

const COUNTY_SLUG = "los-angeles-county";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return listCities(COUNTY_SLUG).map((c) => ({ city: c.city_slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const row = getCity(COUNTY_SLUG, citySlug);
  if (!row) return {};

  const content = await getStoredContent(COUNTY_SLUG, citySlug);
  const title = content?.metaTitle ?? row.primary_keyword;
  const description =
    content?.metaDescription ??
    `Family-focused real estate guidance in ${row.city}. Find family-friendly neighborhoods, schools, and homes.`;

  const score = content
    ? qualityScore({
        wordCount: content.sections.reduce((a, s) => a + s.body.join(" ").split(/\s+/).length, 0),
        faqCount: content.faqs.length,
        internalLinks: 10,
        valueModules: content.valueModules?.length ?? 2,
      })
    : 80;

  return {
    title,
    description,
    robots: robotsDirective(score),
    alternates: { canonical: `https://babyhomeplan.com${row.url}` },
    openGraph: {
      title,
      description,
      url: `https://babyhomeplan.com${row.url}`,
    },
  };
}

export default async function LosAngelesCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const row = getCity(COUNTY_SLUG, citySlug);
  if (!row) notFound();

  const content = await getStoredContent(COUNTY_SLUG, citySlug);
  const related = relatedCities(COUNTY_SLUG, citySlug, 8);

  const fallback = {
    metaTitle: row.primary_keyword,
    metaDescription: `Family-focused real estate guidance in ${row.city}.`,
    h1: row.primary_keyword,
    heroSubhead: `A calm guide for families looking to buy, sell, or upgrade in ${row.city}, ${getCountyName(COUNTY_SLUG)}.`,
    sections: [
      {
        heading: `Why Families Choose ${row.city}`,
        body: [
          `${row.city} offers a wonderful combination of community, schools, and lifestyle for growing families in Los Angeles County.`,
          `Whether you're a first-time buyer or upgrading to a larger home, ${row.city} has neighborhoods that fit a variety of budgets and preferences.`,
        ],
      },
      {
        heading: `What to Consider When Buying in ${row.city}`,
        body: [
          `School districts, commute times, neighborhood safety, and access to parks and family amenities are key factors when choosing a home in ${row.city}.`,
          `We recommend visiting at different times of day to get a true feel for the community before making a decision.`,
        ],
      },
    ],
    faqs: [
      { q: `Is ${row.city} good for families?`, a: `${row.city} is known for its family-friendly environment, good schools, and community amenities. It's a popular choice for growing families in Los Angeles County.` },
      { q: `What is the average home price in ${row.city}?`, a: `Home prices in ${row.city} vary by neighborhood. Contact us for current market data and guidance tailored to your budget.` },
      { q: `How long does it take to buy a home in ${row.city}?`, a: `Typically 60–90 days. With our Express pathway, qualified buyers may close in as few as 33 days.` },
      { q: `Do you help with selling too?`, a: `Yes. We help families sell their current home and buy a new one with a coordinated plan. See our Sell & Upgrade service.` },
      { q: `What school districts serve ${row.city}?`, a: `${row.city} is served by Los Angeles County school districts with options for every family. We can provide specific school zone information during your consultation.` },
    ],
    valueModules: ["checklist", "questions-to-ask"],
  };

  return (
    <CityPageTemplate
      city={row}
      content={content ?? fallback}
      relatedCitySlugs={related}
      countyName={getCountyName(COUNTY_SLUG)}
    />
  );
}
