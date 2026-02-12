import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AreaPageTracker from "@/components/AreaPageTracker";
import type { CityContent } from "@/lib/contentStore";
import type { CityRow } from "@/lib/cityData";

interface CityPageProps {
  city: CityRow;
  content: CityContent;
  relatedCitySlugs: string[];
  countyName: string;
}

export default function CityPageTemplate({
  city,
  content,
  relatedCitySlugs,
  countyName,
}: CityPageProps) {
  return (
    <>
      <AreaPageTracker areaType="city" areaName={city.city} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-clay rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb nav */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Link href="/areas" className="hover:text-white transition-colors">Areas</Link>
              <span>/</span>
              <Link href={`/areas/${city.county_slug}`} className="hover:text-white transition-colors">{countyName}</Link>
              <span>/</span>
              <span className="text-white/90">{city.city}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              {content.h1}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              {content.heroSubhead}
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Find Homes in {city.city}
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {content.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`section-padding ${i % 2 === 0 ? "bg-offwhite" : "bg-white"}`}
        >
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.body.map((paragraph, j) => (
                <p key={j} className="text-body-secondary text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Internal Links — Services + Guides */}
      <section className="bg-primary/5 border-y border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Our Services</h3>
              <ul className="space-y-1.5">
                <li><Link href="/buy" className="text-body-secondary hover:text-clay transition-colors">Buy a Home</Link></li>
                <li><Link href="/sell-and-upgrade" className="text-body-secondary hover:text-clay transition-colors">Sell &amp; Upgrade</Link></li>
                <li><Link href="/33-day-express" className="text-body-secondary hover:text-clay transition-colors">33-Day Express</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Helpful Guides</h3>
              <ul className="space-y-1.5">
                <li><Link href="/resources/buying-while-pregnant" className="text-body-secondary hover:text-clay transition-colors">Buying While Pregnant</Link></li>
                <li><Link href="/resources/first-time-buyer-family" className="text-body-secondary hover:text-clay transition-colors">First-Time Buyer Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Explore {countyName}</h3>
              <ul className="space-y-1.5">
                <li><Link href={`/areas/${city.county_slug}`} className="text-body-secondary hover:text-clay transition-colors">{countyName} Hub</Link></li>
                {relatedCitySlugs.slice(0, 5).map((slug) => {
                  const name = slug
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ");
                  return (
                    <li key={slug}>
                      <Link
                        href={`/areas/${city.county_slug}/${slug}`}
                        className="text-body-secondary hover:text-clay transition-colors"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How BabyHomePlan Helps */}
      <section className="section-padding bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            How BabyHomePlan Helps in {city.city}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            We know {countyName}&apos;s neighborhoods, school districts, and market dynamics.
            Whether you&apos;re buying your first family home or upgrading, we guide you with local expertise and a calm plan.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="section-padding bg-offwhite">
          <div className="container-max max-w-3xl">
            <h2 className="text-3xl font-serif text-primary mb-10 text-center">
              {city.city} FAQ
            </h2>
            <div className="space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{faq.q}</h3>
                  <p className="text-body-secondary leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Cities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-serif text-primary mb-6 text-center">
            Other Family Communities in {countyName}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedCitySlugs.map((slug) => {
              const name = slug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");
              return (
                <Link
                  key={slug}
                  href={`/areas/${city.county_slug}/${slug}`}
                  className="px-4 py-2 bg-offwhite text-sm text-body-secondary hover:text-clay hover:bg-sage/10 rounded-full border border-border transition-colors"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Ready to Explore {city.city}?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Tell us about your family and we&apos;ll recommend the best neighborhoods in {city.city} for your
                situation, budget, and lifestyle.
              </p>
            </div>
            <LeadForm variant="sidebar" ctaLabel={`Find Homes in ${city.city}`} />
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Areas", item: "https://babyhomeplan.com/areas" },
              { "@type": "ListItem", position: 2, name: countyName, item: `https://babyhomeplan.com/areas/${city.county_slug}` },
              { "@type": "ListItem", position: 3, name: city.city, item: `https://babyhomeplan.com${city.url}` },
            ],
          }),
        }}
      />
    </>
  );
}
