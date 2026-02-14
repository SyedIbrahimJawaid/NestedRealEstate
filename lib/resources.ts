const categorySlugMap: Record<string, string> = {
  Buying: "buying",
  Selling: "selling",
  Planning: "planning",
  Preparation: "preparation",
  Express: "express",
};

export const resourceCategories = [
  { label: "All", slug: "" },
  { label: "Buying", slug: "buying" },
  { label: "Selling", slug: "selling" },
  { label: "Planning", slug: "planning" },
  { label: "Preparation", slug: "preparation" },
  { label: "Express", slug: "express" },
];

export const resourceCategorySlugs = resourceCategories
  .map((category) => category.slug)
  .filter((slug): slug is string => Boolean(slug));

export const resourceArticles = [
  {
    slug: "moving-before-baby",
    title: "Moving Before Baby: A Calm 30-Day Checklist",
    excerpt:
      "A practical 30-day checklist for families moving before a baby arrives. Planning, packing, logistics, and settling in, all in a calm, manageable timeline.",
    category: "Planning",
    categorySlug: categorySlugMap.Planning,
    readTime: "8 min",
  },
  {
    slug: "buying-while-pregnant",
    title: "Buying While Pregnant in California: Realistic Timeline & Steps",
    excerpt:
      "Everything you need to know about timing your home purchase around your pregnancy, from pre-approval to closing before the due date.",
    category: "Buying",
    categorySlug: categorySlugMap.Buying,
    readTime: "8 min",
  },
  {
    slug: "sell-first-or-buy-first",
    title: "Sell First or Buy First? A Decision Framework for Families",
    excerpt:
      "A practical decision framework to help families figure out whether to sell their current home before buying or vice versa.",
    category: "Selling",
    categorySlug: categorySlugMap.Selling,
    readTime: "7 min",
  },
  {
    slug: "33-day-plan",
    title: "The 33-Day Plan: What Must Be True & What We Coordinate",
    excerpt:
      "How our Express pathway works, who qualifies, and what to expect during an accelerated home purchase in Southern California.",
    category: "Express",
    categorySlug: categorySlugMap.Express,
    readTime: "6 min",
  },
  {
    slug: "baby-ready-upgrades",
    title: "Baby-Ready Upgrades After Closing: Safe, Quick Wins",
    excerpt:
      "A room-by-room guide to making your new home safe for babies and toddlers: nursery setup, safety upgrades, and quick wins.",
    category: "Preparation",
    categorySlug: categorySlugMap.Preparation,
    readTime: "6 min",
  },
  {
    slug: "first-time-buyer-family",
    title: "First-Time Buyer Family Edition: Avoid Common Mistakes",
    excerpt:
      "What to look for when buying your first family home: common mistakes to avoid and how to balance baby prep with home buying.",
    category: "Buying",
    categorySlug: categorySlugMap.Buying,
    readTime: "7 min",
  },
];

export function getCategoryLabel(slug: string) {
  return resourceCategories.find((category) => category.slug === slug)?.label ?? null;
}
