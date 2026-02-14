import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryLabel,
  resourceArticles,
  resourceCategories,
  resourceCategorySlugs,
} from "@/lib/resources";

interface PageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return resourceCategorySlugs.map((slug) => ({ category: slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const label = getCategoryLabel(params.category);
  if (!label) return {};

  return {
    title: `${label} Resources for Growing Families`,
    description: `Guides and tips focused on ${label.toLowerCase()} for growing families navigating real estate in Southern California.`,
    alternates: { canonical: `/resources/${params.category}` },
  };
}

export default function ResourcesCategoryPage({ params }: PageProps) {
  const label = getCategoryLabel(params.category);
  if (!label) notFound();

  const articles = resourceArticles.filter(
    (article) => article.categorySlug === params.category
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {label} Guides for Growing Families
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Practical, family-first guidance focused on {label.toLowerCase()} in Southern California.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-offwhite border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {resourceCategories.map((cat) => {
              const isActive = cat.slug === params.category;
              const isAll = cat.slug === "";
              return (
                <Link
                  key={cat.label}
                  href={isAll ? "/resources" : `/resources/${cat.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-body-secondary hover:bg-primary/10 border border-border"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
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
                      aria-hidden="true"
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
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-3xl font-serif text-primary mb-4">
            Want a Personalized Plan?
          </h2>
          <p className="text-body-secondary text-lg max-w-xl mx-auto mb-8">
            Reading helps, but a plan tailored to your timeline and family makes it easier.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>
    </>
  );
}
