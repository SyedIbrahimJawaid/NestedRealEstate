import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buying While Pregnant in California: Realistic Timeline & Steps",
  description:
    "A trimester-by-trimester guide for families buying a home during pregnancy in Southern California. Timeline planning, financial prep, and practical tips from BabyHomePlan.com.",
  keywords: [
    "buying a house while pregnant california",
    "home buying during pregnancy timeline",
    "pregnant house hunting tips",
    "buy home before baby arrives",
    "family home buying guide southern california",
  ],
  alternates: { canonical: "https://babyhomeplan.com/resources/buying-while-pregnant" },
};

const trimesterTimeline = [
  {
    trimester: "First Trimester",
    title: "Lay the Groundwork",
    description:
      "The first trimester is often when the idea of buying takes shape. Energy may be unpredictable, but this is an ideal time for the behind-the-scenes work.",
    items: [
      "Get pre-approved for a mortgage — know your budget before you start looking",
      "Have an honest conversation about your family's needs: bedrooms, yard, school proximity, commute",
      "Research neighborhoods in San Diego, Orange County, or Los Angeles that fit your criteria",
      "Connect with a family-focused agent who understands pregnancy timelines",
      "Review your finances: savings, debt-to-income ratio, and estimated closing costs",
      "Start a list of must-haves vs. nice-to-haves — clarity now saves time later",
    ],
  },
  {
    trimester: "Second Trimester",
    title: "Search & Act",
    description:
      "Many families find the second trimester to be the sweet spot — energy tends to return, and there's still plenty of time before the due date.",
    items: [
      "Begin active house hunting with focused, efficient showings",
      "Tour homes with your family's future in mind: layout, safety, neighborhood feel",
      "Make offers when you find the right fit — hesitation in competitive markets can mean missed opportunities",
      "Negotiate terms that account for your timeline: closing dates, contingencies, rent-back options",
      "Schedule inspections and appraisals promptly to keep the process moving",
      "Stay in close contact with your lender to ensure smooth underwriting",
    ],
  },
  {
    trimester: "Third Trimester",
    title: "Close & Settle In",
    description:
      "The goal in the third trimester is to minimize stress. Ideally, you're closing on your home and beginning to settle in well before the due date.",
    items: [
      "Finalize the purchase — sign documents, complete the closing process",
      "Coordinate the move with realistic expectations about energy and mobility",
      "Set up the nursery and essential baby-safe areas first",
      "Transfer utilities, update your address, and establish care with local providers",
      "Build in rest days between major tasks — your body is doing a lot right now",
      "If timing is tight, explore our 45-Day Express pathway for qualified buyers",
    ],
  },
];

const faqs = [
  {
    q: "Can I get a mortgage while pregnant?",
    a: "Yes. Pregnancy is not a factor in mortgage approval. Lenders evaluate your income, credit, debt-to-income ratio, and assets — not your family status. It's illegal under the Fair Housing Act for lenders to discriminate based on familial status.",
  },
  {
    q: "Will being on maternity leave affect my loan approval?",
    a: "It can, depending on your lender and employment situation. Some lenders want to see that you'll return to work or have sufficient income during leave. Getting pre-approved before maternity leave begins is often the smoothest path. We can connect you with lenders experienced in this area.",
  },
  {
    q: "How far in advance should we start the home buying process?",
    a: "Ideally, 4–6 months before your desired move-in date. This allows time for pre-approval, searching, negotiating, closing, and settling in. Starting in the first trimester gives you the most flexibility.",
  },
  {
    q: "Is it realistic to buy and move before the baby arrives?",
    a: "For many families, yes — with proper planning. The key factors are your timeline, financial readiness, and the local market conditions. We've helped families across Southern California close and move in well before their due date, though every situation has its own pace.",
  },
  {
    q: "What if we find a home but the closing timeline is too tight?",
    a: "We negotiate closing dates strategically. Options include requesting a longer escrow, arranging a rent-back from the seller, or using our Express pathway to compress the timeline. We always have a plan B.",
  },
  {
    q: "Should we buy a home we can grow into, or just what we need now?",
    a: "We generally encourage families to think 3–5 years ahead. An extra bedroom or a slightly larger yard may cost more now but can save you from another move in a few years. That said, every family's budget is different — we help you find the right balance.",
  },
];

export default function BuyingWhilePregnantPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
              Resource Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Buying While Pregnant in California: Realistic Timeline &amp; Steps
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Buying a home during pregnancy is more common than you might think. With the right
              timeline and support, it&apos;s entirely possible to find and close on your family&apos;s
              home before the baby arrives.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Start Your Home Search
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">
            A Growing Family Needs a Home That Fits
          </h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              Finding out you&apos;re expecting often triggers a re-evaluation of where you live. That
              one-bedroom apartment or starter home that worked perfectly for two suddenly feels small
              when you picture a crib, a stroller, and all the gear that comes with a baby.
            </p>
            <p>
              In Southern California&apos;s competitive housing market, the idea of buying a home while
              pregnant can feel daunting. But plenty of families do it — and do it well — when they
              approach it with a clear plan and realistic expectations.
            </p>
            <p>
              This guide walks you through a trimester-by-trimester timeline, covering the practical
              steps, financial considerations, and common questions that come up when you&apos;re buying
              a home while growing your family. Every family&apos;s situation is different, so treat
              this as a framework you can adapt — not a rigid rulebook.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links — Services + Areas + Cities */}
      <section className="bg-primary/5 border-y border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Our Services</h3>
              <ul className="space-y-1.5">
                <li><Link href="/buy" className="text-body-secondary hover:text-clay transition-colors">Buy a Family Home</Link></li>
                <li><Link href="/sell-and-upgrade" className="text-body-secondary hover:text-clay transition-colors">Sell &amp; Upgrade</Link></li>
                <li><Link href="/45-day-express" className="text-body-secondary hover:text-clay transition-colors">45-Day Express</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Areas We Serve</h3>
              <ul className="space-y-1.5">
                <li><Link href="/areas/san-diego-county" className="text-body-secondary hover:text-clay transition-colors">San Diego County</Link></li>
                <li><Link href="/areas/orange-county" className="text-body-secondary hover:text-clay transition-colors">Orange County</Link></li>
                <li><Link href="/areas/los-angeles-county" className="text-body-secondary hover:text-clay transition-colors">Los Angeles County</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3 font-sans">Popular Family Cities</h3>
              <ul className="space-y-1.5">
                <li><Link href="/areas/san-diego-county/carlsbad" className="text-body-secondary hover:text-clay transition-colors">Carlsbad</Link></li>
                <li><Link href="/areas/orange-county/irvine" className="text-body-secondary hover:text-clay transition-colors">Irvine</Link></li>
                <li><Link href="/areas/los-angeles-county/pasadena" className="text-body-secondary hover:text-clay transition-colors">Pasadena</Link></li>
                <li><Link href="/areas/san-diego-county/poway" className="text-body-secondary hover:text-clay transition-colors">Poway</Link></li>
                <li><Link href="/areas/orange-county/mission-viejo" className="text-body-secondary hover:text-clay transition-colors">Mission Viejo</Link></li>
                <li><Link href="/areas/los-angeles-county/torrance" className="text-body-secondary hover:text-clay transition-colors">Torrance</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trimester Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Your Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Trimester-by-Trimester Home Buying Plan
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              A realistic framework for buying a home during pregnancy. Adjust based on your
              energy, finances, and local market conditions.
            </p>
          </div>

          <div className="space-y-8">
            {trimesterTimeline.map((phase) => (
              <div key={phase.trimester} className="card">
                <div className="md:flex md:gap-8">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <div className="text-sm font-bold text-clay uppercase tracking-wider mb-2">
                      {phase.trimester}
                    </div>
                    <h3 className="text-xl font-serif text-primary mb-3">{phase.title}</h3>
                    <p className="text-body-secondary text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-body-secondary">
                          <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Considerations */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">
            Financial Considerations for Expecting Buyers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-serif text-primary mb-3">Budget for the Full Picture</h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                Beyond the down payment and closing costs, factor in upcoming expenses: medical bills,
                baby gear, potential income changes during parental leave, and home preparation costs.
                A realistic budget accounts for all of it.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-serif text-primary mb-3">Get Pre-Approved Early</h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                Pre-approval before maternity or paternity leave simplifies the lending process. Your
                current income documentation is typically stronger while you&apos;re actively employed.
                Talk to a lender who understands family timelines.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-serif text-primary mb-3">Understand Your DTI Ratio</h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                Your debt-to-income ratio is a key factor in loan approval. If you&apos;re carrying student
                loans, car payments, or credit card debt, work with your lender to understand how these
                affect your buying power.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-serif text-primary mb-3">Explore Down Payment Options</h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                California offers several programs that may help first-time buyers or families with
                moderate incomes. FHA loans, VA loans, and state-specific programs are worth exploring
                with your lender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">
            What to Look for in a Family Home
          </h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              When you&apos;re buying with a baby on the way, your priorities shift. Here are factors
              that families in Southern California commonly prioritize:
            </p>
            <ul className="space-y-3 pl-0">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-primary">Space to grow:</strong> At least one extra bedroom beyond your current needs gives you flexibility as your family grows.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-primary">School district quality:</strong> Even if school is years away, buying in a strong district protects your investment and your child&apos;s future options.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-primary">Neighborhood safety and walkability:</strong> Parks, sidewalks, and a family-friendly community make daily life easier with little ones.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-primary">Proximity to healthcare:</strong> Being close to your hospital or birthing center provides peace of mind as the due date approaches.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-primary">Manageable commute:</strong> Less time commuting means more time with your family — especially in the early months.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Frequently Asked Questions
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

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Ready to Find Your Family&apos;s Home?
          </h2>
          <p className="text-body-secondary text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re in your first trimester or counting down the weeks, we can help you
            find and close on the right home in Southern California. Let&apos;s build a plan around
            your timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary text-lg">
              Create My Family Home Plan
            </Link>
            <Link href="/areas" className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-center">
              Explore Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Buying While Pregnant in California: Realistic Timeline & Steps",
            description:
              "A trimester-by-trimester guide for families buying a home during pregnancy in Southern California.",
            author: {
              "@type": "Organization",
              name: "BabyHomePlan.com",
              url: "https://babyhomeplan.com",
            },
            publisher: {
              "@type": "Organization",
              name: "BabyHomePlan.com",
              url: "https://babyhomeplan.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://babyhomeplan.com/resources/buying-while-pregnant",
            },
          }),
        }}
      />

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
    </>
  );
}
