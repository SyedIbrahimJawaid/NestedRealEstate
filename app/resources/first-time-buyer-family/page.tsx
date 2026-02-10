import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First-Time Buyer Family Edition: Avoid Common Mistakes",
  description:
    "A guide for first-time home buyers who are also starting or growing a family in Southern California. Common mistakes, financial tips, and how to balance baby prep with buying a home.",
  keywords: [
    "first time home buyer family tips",
    "buying first home with baby on the way",
    "first time buyer mistakes to avoid",
    "family home buying guide california",
    "first home for growing family southern california",
  ],
  alternates: { canonical: "https://babyhomeplan.com/resources/first-time-buyer-family" },
};

const topMistakes = [
  {
    number: 1,
    title: "Spending Your Entire Budget on the House",
    description:
      "Qualifying for a loan amount and comfortably affording it are two different things. Stretching to your max approval leaves no room for baby expenses, parental leave income changes, or emergencies.",
    tip: "Leave at least 10\u201315% of breathing room below your maximum approval. Factor in baby-related expenses (healthcare, childcare, gear), potential income changes during parental leave, and a 3\u20136 month emergency reserve. A home that makes you financially anxious is not a home that makes your family happier.",
  },
  {
    number: 2,
    title: "Choosing the Wrong Location for Your Stage of Life",
    description:
      "First-time buyers sometimes prioritize nightlife, trendy restaurants, or proximity to friends \u2014 which makes sense for two. But with a baby, your daily world shifts to school districts, pediatricians, parks, and commute time.",
    tip: "Evaluate neighborhoods through a family lens: school district ratings (even if school is years away \u2014 it affects resale value), proximity to pediatricians and hospitals, park access, walkability for strollers, and commute time. An extra 20 minutes each way means 40 fewer minutes with your family every day.",
  },
  {
    number: 3,
    title: "Skipping or Rushing the Home Inspection",
    description:
      "In competitive Southern California markets, some buyers waive inspections to strengthen their offer. This is almost always a mistake \u2014 especially for a family home where safety is paramount.",
    tip: "Never waive a home inspection. A qualified inspector can identify safety issues (mold, electrical hazards, structural concerns, lead paint in pre-1978 homes) that are critical when bringing a baby into the home. The $400\u2013$600 inspection cost is trivial compared to discovering hidden problems after closing.",
  },
  {
    number: 4,
    title: "Ignoring Future Needs for Present Wants",
    description:
      "That stylish loft with the spiral staircase looks incredible online. But picture yourself navigating it at 2 AM with a crying infant, or chasing a toddler near an open railing.",
    tip: "Think 3\u20135 years ahead. You likely need at least one extra bedroom beyond what you use today, single-story living or a safe stairway layout, storage for baby gear (strollers, car seats, high chairs add up fast), and a yard or outdoor space \u2014 even a small one. Buy for the life you are about to live, not just the one you have now.",
  },
  {
    number: 5,
    title: "Not Getting Pre-Approved Before You Start Looking",
    description:
      "Browsing homes online is easy. But without a pre-approval letter, you do not actually know what you can afford \u2014 and you cannot make a competitive offer when you find the right home.",
    tip: "Get pre-approved (not just pre-qualified) before your first showing. Pre-approval involves a credit check, income verification, and a commitment from the lender. It tells sellers you are a serious buyer and helps you focus on homes you can actually purchase. This is especially important if one partner plans to take parental leave \u2014 get pre-approved while both incomes are active.",
  },
  {
    number: 6,
    title: "Underestimating Closing Costs and Move-In Expenses",
    description:
      "First-time buyers are often surprised by the costs beyond the down payment. In California, closing costs typically run 2\u20135% of the purchase price \u2014 and that is before you have bought a single piece of baby furniture.",
    tip: "Budget separately for closing costs (title insurance, escrow fees, loan origination, property taxes, homeowner\u2019s insurance), move-in expenses (movers, deposits, utility setup), and immediate home needs (baby-proofing, nursery setup, appliances). A realistic total budget prevents the financial stress that can overshadow what should be an exciting time.",
  },
  {
    number: 7,
    title: "Making Big Financial Changes Before Closing",
    description:
      "Opening new credit cards, financing furniture, changing jobs, or making large purchases before closing can derail your mortgage. Lenders re-check your finances before funding \u2014 and changes can trigger delays or denial.",
    tip: "Maintain financial stability from pre-approval through closing. No new credit accounts, no large purchases on credit, no job changes if possible, and do not move large sums between accounts without discussing it with your lender first. The baby gear shopping spree can wait until after you have the keys.",
  },
];

const priorityChecklist = [
  {
    category: "Financial Readiness",
    items: [
      "Get pre-approved for a mortgage while both incomes are active",
      "Build a 3\u20136 month emergency fund separate from your down payment",
      "Budget for closing costs (2\u20135% of purchase price in California)",
      "Factor in baby expenses: childcare, healthcare, gear, potential income changes",
      "Review and improve your credit score if needed \u2014 even small improvements can affect your rate",
    ],
  },
  {
    category: "Home Search Priorities",
    items: [
      "Define must-haves vs. nice-to-haves with your partner before searching",
      "Research school districts even if school is years away (it protects resale value)",
      "Prioritize layout and safety over cosmetic finishes",
      "Consider commute time as quality-of-life time with your family",
      "Look for homes with room to grow \u2014 at least one extra bedroom",
    ],
  },
  {
    category: "During the Process",
    items: [
      "Never waive the home inspection \u2014 especially for a family home",
      "Ask about lead paint, mold history, and HVAC age during due diligence",
      "Do not make major financial changes between pre-approval and closing",
      "Negotiate closing timeline to align with your family\u2019s needs",
      "Stay in close communication with your lender and agent throughout",
    ],
  },
  {
    category: "After Closing",
    items: [
      "Prioritize safety upgrades: outlet covers, furniture anchoring, water heater temp",
      "Set up the nursery before tackling cosmetic projects",
      "Transfer utilities, update address, establish care with local providers",
      "Build a relationship with your neighbors \u2014 community matters with a new baby",
      "Give yourself grace \u2014 you do not have to unpack everything in a week",
    ],
  },
];

const balancingTips = [
  {
    title: "Create a Unified Timeline",
    description:
      "Map your home buying milestones alongside your baby milestones (due date, parental leave, childcare start). When both timelines are visible in one place, you can spot conflicts early and plan around them rather than reacting to them.",
  },
  {
    title: "Divide Responsibilities",
    description:
      "One partner can take the lead on mortgage paperwork while the other handles nursery planning. Assign clear ownership so nothing falls through the cracks and neither person feels overwhelmed carrying everything.",
  },
  {
    title: "Accept Good Enough on Some Things",
    description:
      "The perfect home with the perfect nursery at the perfect price in the perfect neighborhood \u2014 it likely does not exist. Focus on what matters most to your family and be willing to compromise on the rest. You can always upgrade paint colors and fixtures later.",
  },
  {
    title: "Build In Margin",
    description:
      "Everything takes longer than expected when you are also growing a family. Add buffer to every timeline \u2014 closing dates, move-in plans, nursery setup. Margin reduces stress, and lower stress is better for everyone, including baby.",
  },
];

const faqs = [
  {
    q: "Can we buy a home if only one partner is working?",
    a: "Yes, though it affects your qualifying income and the loan amount you can access. Single-income households buy homes regularly. The key is being realistic about your budget and working with a lender who understands family income structures. If one partner plans to return to work, some lenders may consider future income in certain circumstances.",
  },
  {
    q: "How much should first-time buyers save for a down payment?",
    a: "While 20% down avoids private mortgage insurance (PMI), many first-time buyers put down 3\u201310%. FHA loans allow as little as 3.5% down. California also offers down payment assistance programs for qualifying families. The right amount depends on your financial situation \u2014 a lower down payment is not inherently bad if it allows you to maintain healthy reserves.",
  },
  {
    q: "Should we buy before or after the baby arrives?",
    a: "There is no universal answer. Buying before can mean settling in while you have more energy and mobility. Buying after can mean better clarity on what your family actually needs. Many families aim to close and move in at least 4\u20136 weeks before the due date. Our resources on buying while pregnant and the 45-day express pathway cover both scenarios in detail.",
  },
  {
    q: "What government programs help first-time buyers in California?",
    a: "California offers several programs including CalHFA (California Housing Finance Agency) loans, MyHome Assistance for down payment, and various county-specific programs in San Diego, Orange, and Los Angeles counties. FHA and VA loans are also popular options. Eligibility and availability change, so always verify current programs with your lender or a housing counselor.",
  },
  {
    q: "Is it better to buy a fixer-upper and save money?",
    a: "It can be \u2014 but timing matters when you have a baby on the way. Major renovations with an infant in the house create safety concerns (dust, fumes, construction debris) and add stress at an already demanding time. If you go the fixer-upper route, focus on homes that need cosmetic updates (paint, flooring, fixtures) rather than structural or safety-critical repairs.",
  },
  {
    q: "How do we choose between a condo, townhome, and single-family home?",
    a: "Each has trade-offs for families. Condos are typically more affordable but may lack outdoor space and have noise concerns with shared walls. Townhomes offer a middle ground with some private outdoor space. Single-family homes provide the most privacy and space but cost more. Consider your budget, lifestyle, HOA rules (some restrict modifications), and how long you plan to stay.",
  },
  {
    q: "What if we cannot afford to buy in our preferred area?",
    a: "This is common in Southern California where prices vary dramatically by neighborhood. Consider adjacent communities that offer similar school quality and amenities at lower prices. In San Diego, areas like Chula Vista or El Cajon offer family-friendly neighborhoods at lower price points than Carmel Valley. In Orange County, look beyond Irvine to communities like Lake Forest or Tustin. We help families find the best value across all three counties.",
  },
];

export default function FirstTimeBuyerFamilyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
              Resource Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              First-Time Buyer Family Edition:{" "}
              <span className="italic">Avoid Common Mistakes</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              Buying your first home is complex enough. Doing it while starting or growing a
              family adds another layer entirely. This guide helps you navigate both without
              the costly missteps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn-primary text-lg">
                Start Your Home Search
              </Link>
              <Link
                href="/buy"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-center"
              >
                How We Help You Buy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Two Life-Changing Events at Once
          </h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              Buying your first home and welcoming a baby are two of the biggest transitions
              a family can experience. When they happen at the same time &mdash; which is surprisingly
              common &mdash; the decisions multiply and the stakes feel higher.
            </p>
            <p>
              In Southern California, where the market moves fast and prices demand careful
              planning, first-time buyers who are also growing their families face unique
              challenges. You&apos;re not just finding a home &mdash; you&apos;re choosing a
              neighborhood for your child, a school district for the future, and a financial
              commitment that needs to work through parental leave and beyond.
            </p>
            <p>
              This guide is designed specifically for you. We cover the mistakes that first-time
              buyers with families most commonly make, what to prioritize when you can&apos;t
              prioritize everything, and practical strategies for balancing baby preparation
              with the home buying process. Every family&apos;s situation is different, so treat
              this as a framework &mdash; not a script.
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

      {/* Top Mistakes to Avoid */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">Learn From Others</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Top Mistakes First-Time Family Buyers Make</h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              These aren&apos;t hypothetical &mdash; they&apos;re patterns we see regularly with first-time buyers in San Diego, Orange County, and Los Angeles. Knowing them upfront can save you thousands of dollars and significant stress.
            </p>
          </div>
          <div className="space-y-6">
            {topMistakes.map((mistake) => (
              <div key={mistake.number} className="card">
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-clay/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-clay font-bold text-lg">{mistake.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{mistake.title}</h3>
                    <p className="text-body-secondary text-sm leading-relaxed mb-3">{mistake.description}</p>
                    <div className="bg-offwhite rounded-lg p-4">
                      <p className="text-body-secondary text-sm leading-relaxed">
                        <strong className="text-primary">What to do instead:</strong> {mistake.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Checklist */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">Stay on Track</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">First-Time Family Buyer Checklist</h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">A phase-by-phase checklist to keep your home buying process organized while managing the realities of a growing family.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {priorityChecklist.map((sec) => (
              <div key={sec.category} className="card">
                <h3 className="text-lg font-serif text-primary mb-4">{sec.category}</h3>
                <ul className="space-y-3">
                  {sec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body-secondary">
                      <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balancing Baby Prep and Home Buying */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">Practical Strategies</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Balancing Baby Prep With Home Buying</h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">You can&apos;t do everything at once &mdash; but you can do both well with the right approach.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {balancingTips.map((t) => (
              <div key={t.title} className="card">
                <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{t.title}</h3>
                <p className="text-body-secondary text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tips */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">Financial Tips Specific to Growing Families</h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>Standard first-time buyer advice doesn&apos;t always account for the financial realities of having a baby. Here&apos;s what we encourage family buyers to consider beyond the basics:</p>
            <ul className="space-y-3 pl-0">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong className="text-primary">Model your budget on one income temporarily.</strong> Even if both partners work, test whether you can handle the mortgage payment during parental leave or if one partner eventually stays home.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong className="text-primary">Account for childcare costs.</strong> Childcare in Southern California can run $1,500&ndash;$3,000+ per month. Lenders don&apos;t count it in your DTI, but you should &mdash; it&apos;s one of the largest expenses a new family faces.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong className="text-primary">Don&apos;t drain savings for a larger down payment.</strong> Putting 10% down with healthy reserves is often better than 20% down with nothing left. PMI costs roughly $50&ndash;$150/month and can be removed later.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong className="text-primary">Explore first-time buyer programs early.</strong> California and individual counties offer down payment and closing cost assistance. These programs have eligibility requirements and funding limits, so investigate early.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Southern California Context */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">First-Time Buying in Southern California</h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>Southern California&apos;s housing market has unique characteristics that first-time family buyers should understand. Prices are higher than the national average, inventory can be tight in desirable family neighborhoods, and competition from investors and repeat buyers is real.</p>
            <p>In <strong className="text-primary">San Diego County</strong>, family-friendly areas like Poway, Scripps Ranch, and Chula Vista offer strong schools and community feel at varying price points. In <strong className="text-primary">Orange County</strong>, communities like Irvine, Lake Forest, and Mission Viejo consistently rank among the best for families &mdash; though prices reflect that demand. In <strong className="text-primary">Los Angeles County</strong>, the range is enormous: from affordable first homes in the San Fernando Valley to premium family neighborhoods in the South Bay.</p>
            <p>The right area depends on your budget, your commute, and what kind of community matters to your family. We help first-time buyers across all three counties find neighborhoods that balance affordability with the quality of life a growing family needs &mdash; because where you buy is just as important as what you buy.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">Frequently Asked Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Ready to Buy Your Family&apos;s First Home?</h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">Buying your first home while growing a family doesn&apos;t have to be overwhelming. We help first-time buyers across Southern California find the right home, avoid common pitfalls, and move in with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary text-lg">Create My Family Home Plan</Link>
            <Link href="/areas" className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-center">Explore Areas We Serve</Link>
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
            headline: "First-Time Buyer Family Edition: Avoid Common Mistakes",
            description: "A guide for first-time home buyers who are also starting or growing a family in Southern California.",
            author: { "@type": "Organization", name: "BabyHomePlan.com", url: "https://babyhomeplan.com" },
            publisher: { "@type": "Organization", name: "BabyHomePlan.com", url: "https://babyhomeplan.com" },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://babyhomeplan.com/resources/first-time-buyer-family" },
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
