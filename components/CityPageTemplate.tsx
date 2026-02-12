import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AreaPageTracker from "@/components/AreaPageTracker";
import type { CityContent } from "@/lib/contentStore";
import type { CityRow } from "@/lib/cityData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

interface CityPageProps {
  city: CityRow;
  content: CityContent;
  relatedCitySlugs: string[];
  countyName: string;
}

const defaultFaqs = (cityName: string) => [
  {
    q: `Is ${cityName} a good place to raise a family?`,
    a: `${cityName} offers a range of neighborhoods and housing types that can work well for families. We help you compare areas based on schools, commute patterns, and lifestyle priorities.`,
  },
  {
    q: `What price range should we expect in ${cityName}?`,
    a: `Pricing varies by neighborhood, home type, and condition. We provide a current market snapshot based on live listings and recent sales during your consultation.`,
  },
  {
    q: `How competitive is the market in ${cityName}?`,
    a: `Competition typically increases in top school zones and for move-in-ready homes. We help families set a strategy that balances speed, price, and inspections.`,
  },
  {
    q: `Which neighborhoods fit our commute and school needs?`,
    a: `School assignments and commute times vary by address. We map school boundaries and typical drive patterns before you tour homes.`,
  },
  {
    q: `Do you help with buying and selling at the same time?`,
    a: `Yes. We coordinate timing, financing, and temporary housing options so your move feels calm and predictable.`,
  },
  {
    q: `What should we do first if we are relocating?`,
    a: `Start with a quick needs assessment and a financing check. We can then narrow neighborhoods and set realistic timelines.`,
  },
];

function normalizeFaqs(faqs: { q: string; a: string }[], cityName: string) {
  const trimmed = faqs.slice(0, 8);
  if (trimmed.length >= 5) return trimmed;

  const additions = defaultFaqs(cityName).filter(
    (item) => !trimmed.some((faq) => faq.q.toLowerCase() === item.q.toLowerCase())
  );

  return [...trimmed, ...additions].slice(0, 8);
}

function buildChecklistFallback(cityName: string) {
  return {
    neighborhoods: [
      { name: "Family-focused pockets", fit: "Great for buyers prioritizing parks, schools, and community activities." },
      { name: "Walkable mixed-use areas", fit: "Ideal for those who value cafes, shops, and short errands on foot." },
      { name: "Quiet residential streets", fit: "Fits families seeking calmer blocks and lower through-traffic." },
      { name: "Newer construction zones", fit: "Good for buyers who prefer modern layouts and lower maintenance." },
      { name: "Larger-lot neighborhoods", fit: "Appeals to those who want yard space, storage, or home offices." },
      { name: "Commute-friendly corridors", fit: "Best for households optimizing for freeway or transit access." },
    ],
    schools: {
      notes: [
        "School assignments are address-based and can change. We verify boundaries and enrollment options before you decide.",
        "We prioritize clarity and avoid rankings unless a source is provided.",
      ],
      sources: undefined,
    },
    commute: {
      notes: [
        "Commute times vary by destination and time of day. We help you test drive times during peak windows.",
      ],
      corridors: ["Primary freeway and arterial corridors vary by neighborhood"],
      transit: ["Regional rail and bus options vary by station and route"],
    },
    amenities: {
      notes: [
        "Family amenities typically include parks, recreation programs, libraries, and youth activities.",
        "Healthcare and childcare availability vary by neighborhood and can be verified during your search.",
      ],
    },
    marketSnapshot: {
      asOf: "Feb 2026",
      notes: [
        "Pricing and inventory shift by season and neighborhood. We provide a live snapshot using current listings.",
      ],
    },
  };
}

export default function CityPageTemplate({
  city,
  content,
  relatedCitySlugs,
  countyName,
}: CityPageProps) {
  const checklist = content.checklist ?? buildChecklistFallback(city.city);
  const faqs = normalizeFaqs(content.faqs, city.city);
  const isChecklistFallback = !content.checklist;

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

      {/* Quality Checklist Sections */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            {city.city} Neighborhoods, Schools, and Market Snapshot
          </h2>
          {isChecklistFallback && (
            <p className="text-body-secondary text-lg leading-relaxed mb-6">
              This section provides a structured framework. For neighborhood-specific details and school boundaries,
              we confirm the latest data during your consultation.
            </p>
          )}

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">
                Neighborhoods (Who It Fits)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {checklist.neighborhoods.slice(0, 10).map((n) => (
                  <div key={n.name} className="bg-white border border-border rounded-xl p-5">
                    <p className="font-semibold text-primary mb-2 font-sans">{n.name}</p>
                    <p className="text-body-secondary leading-relaxed">{n.fit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Schools</h3>
              <div className="space-y-3">
                {checklist.schools.notes.map((note) => (
                  <p key={note} className="text-body-secondary text-lg leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
              {(() => {
                const schools = checklist.schools;
                if ('sources' in schools) {
                  const schoolsWithSources = schools as { notes: string[]; sources?: { label: string; url: string }[] };
                  const sources = schoolsWithSources.sources;
                  if (sources && sources.length > 0) {
                    return (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-primary mb-2 font-sans">Sources</p>
                        <ul className="space-y-1.5">
                          {sources.map((source) => (
                            <li key={source.url}>
                              <a
                                href={source.url}
                                className="text-sm text-body-secondary hover:text-clay transition-colors"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {source.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                }
                return null;
              })()}
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Commute and Transit</h3>
              <div className="space-y-3">
                {checklist.commute.notes.map((note) => (
                  <p key={note} className="text-body-secondary text-lg leading-relaxed">
                    {note}
                  </p>
                ))}
                <p className="text-body-secondary text-lg leading-relaxed">
                  Major corridors: {checklist.commute.corridors.join(", ")}
                </p>
                {'transit' in checklist.commute && checklist.commute.transit && checklist.commute.transit.length > 0 && (
                  <p className="text-body-secondary text-lg leading-relaxed">
                    Transit options: {checklist.commute.transit.join(", ")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Family Amenities</h3>
              <div className="space-y-3">
                {checklist.amenities.notes.map((note) => (
                  <p key={note} className="text-body-secondary text-lg leading-relaxed">
                    {note}
                  </p>
                ))}
                {'parks' in checklist.amenities && checklist.amenities.parks && checklist.amenities.parks.length > 0 && (
                  <p className="text-body-secondary text-lg leading-relaxed">
                    Parks and recreation: {checklist.amenities.parks.join(", ")}
                  </p>
                )}
                {'hospitals' in checklist.amenities && checklist.amenities.hospitals && checklist.amenities.hospitals.length > 0 && (
                  <p className="text-body-secondary text-lg leading-relaxed">
                    Hospitals and care: {checklist.amenities.hospitals.join(", ")}
                  </p>
                )}
                {'childcare' in checklist.amenities && checklist.amenities.childcare && checklist.amenities.childcare.length > 0 && (
                  <p className="text-body-secondary text-lg leading-relaxed">
                    Childcare density: {checklist.amenities.childcare.join(", ")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Market Snapshot</h3>
              <p className="text-body-secondary text-lg leading-relaxed mb-3">
                As of {checklist.marketSnapshot.asOf}
              </p>
              <div className="space-y-3">
                {checklist.marketSnapshot.notes.map((note) => (
                  <p key={note} className="text-body-secondary text-lg leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            </div>
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
      {faqs.length > 0 && (
        <section className="section-padding bg-offwhite">
          <div className="container-max max-w-3xl">
            <h2 className="text-3xl font-serif text-primary mb-10 text-center">
              {city.city} FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
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
              { "@type": "ListItem", position: 1, name: "Areas", item: new URL("/areas", siteUrl).toString() },
              { "@type": "ListItem", position: 2, name: countyName, item: new URL(`/areas/${city.county_slug}`, siteUrl).toString() },
              { "@type": "ListItem", position: 3, name: city.city, item: new URL(city.url, siteUrl).toString() },
            ],
          }),
        }}
      />
    </>
  );
}
