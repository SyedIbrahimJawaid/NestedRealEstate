import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AreaPageTracker from "@/components/AreaPageTracker";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

export const metadata: Metadata = {
  title: "Family-Friendly Homes in Los Angeles County",
  description:
    "Find family-friendly homes in Los Angeles County. BabyHomePlan helps growing families discover the best neighborhoods, schools, and communities in LA.",
  keywords: ["family-friendly homes los angeles county", "buyer agent los angeles", "best family areas los angeles"],
  alternates: { canonical: "/areas/los-angeles-county" },
};

const cities = [
  { name: "Pasadena", description: "Tree-lined streets with cultural richness" },
  { name: "Burbank", description: "Media capital with family-friendly downtown" },
  { name: "Long Beach", description: "Diverse coastal city with strong communities" },
  { name: "Torrance", description: "South Bay living with excellent schools" },
  { name: "Santa Clarita", description: "Suburban feel with newer developments" },
  { name: "Arcadia", description: "Top schools and peaceful neighborhoods" },
  { name: "Redondo Beach", description: "Beach lifestyle meets family values" },
  { name: "Glendale", description: "Urban amenities with suburban pockets" },
  { name: "Claremont", description: "College town with village charm" },
  { name: "Manhattan Beach", description: "Premium coastal family living" },
];

const considerations = [
  {
    title: "Schools & Education",
    description: "LA County has diverse school options from LAUSD to highly-rated districts in Arcadia, Torrance, and Palos Verdes.",
  },
  {
    title: "Neighborhood Diversity",
    description: "From beach communities to mountain foothill towns, LA offers unmatched variety for families to find their fit.",
  },
  {
    title: "Career & Commute",
    description: "Multiple employment centers. Metro, Metrolink, and freeway access. Choose your location based on work-life balance.",
  },
  {
    title: "Home Variety & Budget",
    description: "Condos to estates, $500k to $5M+. The key is knowing which neighborhoods deliver value for families.",
  },
  {
    title: "Parks & Recreation",
    description: "Griffith Park, beach bike paths, community sports leagues — LA families have abundant outdoor options.",
  },
];

const faqs = [
  { q: "What are the best family neighborhoods in LA County?", a: "Pasadena, Torrance, Burbank, Arcadia, and Santa Clarita are consistently rated among the best for families. Each offers different lifestyles and price points." },
  { q: "Is LA County affordable for families?", a: "It depends on the area. Santa Clarita, Long Beach, and parts of the San Gabriel Valley offer more affordable options than the Westside or South Bay." },
  { q: "What are the safest areas in LA County?", a: "Glendale, Burbank, Torrance, Claremont, and many South Bay communities consistently rank among the safest in LA County." },
  { q: "How is the commute in LA County?", a: "Commutes vary significantly by location. We help families balance commute time with neighborhood quality and budget." },
];

export default function LosAngelesPage() {
  return (
    <>
      <AreaPageTracker areaType="county" areaName="Los Angeles County" />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/county-los-angeles.png')" }}
        >
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/areas" className="text-white/60 hover:text-white text-sm mb-4 inline-block">
              ← Areas We Serve
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Los Angeles County
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              From Pasadena&apos;s tree-lined streets to South Bay&apos;s beach towns, LA County offers
              diverse family neighborhoods with something for everyone.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Find Homes in Los Angeles
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Popular Family Communities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.name} href={`/areas/los-angeles-county/${city.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="card hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">{city.name}</h3>
                  <p className="text-body-secondary text-sm">{city.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Family Considerations in Los Angeles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {considerations.map((c) => (
              <div key={c.title} className="card">
                <h3 className="text-lg font-serif text-primary mb-3">{c.title}</h3>
                <p className="text-body-secondary text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            How BabyHomePlan Helps in Los Angeles
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            LA is vast and complex. We narrow it down to the neighborhoods that match your family&apos;s
            needs, budget, and lifestyle — so you&apos;re not overwhelmed.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-serif text-primary mb-10 text-center">Los Angeles FAQ</h2>
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

      {/* Internal Links — Services + Guides */}
      <section className="bg-white border-y border-border">
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
                <li><Link href="/resources/moving-before-baby" className="text-body-secondary hover:text-clay transition-colors">Moving Before Baby</Link></li>
                <li><Link href="/resources/first-time-buyer-family" className="text-body-secondary hover:text-clay transition-colors">First-Time Buyer Guide</Link></li>
                <li><Link href="/resources" className="text-body-secondary hover:text-clay transition-colors">All Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Other Areas</h3>
              <ul className="space-y-1.5">
                <li><Link href="/areas/san-diego-county" className="text-body-secondary hover:text-clay transition-colors">San Diego County</Link></li>
                <li><Link href="/areas/orange-county" className="text-body-secondary hover:text-clay transition-colors">Orange County</Link></li>
                <li><Link href="/areas" className="text-body-secondary hover:text-clay transition-colors">All Areas</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Ready to Explore Los Angeles?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Tell us about your family and we&apos;ll recommend the best LA neighborhoods for your needs.
              </p>
            </div>
            <LeadForm variant="sidebar" ctaLabel="Find Homes in Los Angeles" />
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
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

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Areas", item: new URL("/areas", siteUrl).toString() },
              { "@type": "ListItem", position: 2, name: "Los Angeles County", item: new URL("/areas/los-angeles-county", siteUrl).toString() },
            ],
          }),
        }}
      />
    </>
  );
}

