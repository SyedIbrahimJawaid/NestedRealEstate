import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Guides for Growing Families",
  description:
    "Helpful guides, articles, and tips for growing families navigating real estate in Southern California.",
  alternates: { canonical: "https://babyhomeplan.com/resources" },
};

const articles = [
  {
    slug: "moving-before-baby",
    title: "Moving Before Baby: A Calm 30-Day Checklist",
    excerpt: "A practical 30-day checklist for families moving before a baby arrives. Planning, packing, logistics, and settling in — all in a calm, manageable timeline.",
    category: "Planning",
    readTime: "8 min",
  },
  {
    slug: "buying-while-pregnant",
    title: "Buying While Pregnant in California: Realistic Timeline & Steps",
    excerpt: "Everything you need to know about timing your home purchase around your pregnancy — from pre-approval to closing before the due date.",
    category: "Buying",
    readTime: "8 min",
  },
  {
    slug: "sell-first-or-buy-first",
    title: "Sell First or Buy First? A Decision Framework for Families",
    excerpt: "A practical decision framework to help families figure out whether to sell their current home before buying or vice versa.",
    category: "Selling",
    readTime: "7 min",
  },
  {
    slug: "45-day-plan",
    title: "The 45-Day Plan: What Must Be True & What We Coordinate",
    excerpt: "How our Express pathway works, who qualifies, and what to expect during an accelerated home purchase in Southern California.",
    category: "Express",
    readTime: "6 min",
  },
  {
    slug: "baby-ready-upgrades",
    title: "Baby-Ready Upgrades After Closing: Safe, Quick Wins",
    excerpt: "A room-by-room guide to making your new home safe for babies and toddlers — nursery setup, safety upgrades, and quick wins.",
    category: "Preparation",
    readTime: "6 min",
  },
  {
    slug: "first-time-buyer-family",
    title: "First-Time Buyer Family Edition: Avoid Common Mistakes",
    excerpt: "What to look for when buying your first family home — common mistakes to avoid and how to balance baby prep with home buying.",
    category: "Buying",
    readTime: "7 min",
  },
];

const categories = ["All", "Buying", "Selling", "Planning", "Preparation", "Express"];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Guides for Growing Families
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Helpful articles and guides to navigate real estate when your family is growing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-offwhite border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-white text-body-secondary hover:bg-primary/10 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/resources/${article.slug}`}>
                <article className="card hover:shadow-md transition-shadow group h-full">
                  <div className="h-40 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 bg-gradient-to-br from-primary/5 to-sage/10 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-clay uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-body-secondary">{article.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-body-secondary text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-clay text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links — Services + Areas */}
      <section className="bg-white border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-body-secondary text-center">
            Our services:{" "}
            <Link href="/buy" className="text-clay hover:underline">Buy a Home</Link>
            {" · "}
            <Link href="/sell-and-upgrade" className="text-clay hover:underline">Sell &amp; Upgrade</Link>
            {" · "}
            <Link href="/45-day-express" className="text-clay hover:underline">45-Day Express</Link>
            {" · "}
            <Link href="/areas" className="text-clay hover:underline">Areas We Serve</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-3xl font-serif text-primary mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-body-secondary text-lg max-w-xl mx-auto mb-8">
            Reading is great, but nothing beats a personalized plan. Tell us about your family and get started.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>
    </>
  );
}
