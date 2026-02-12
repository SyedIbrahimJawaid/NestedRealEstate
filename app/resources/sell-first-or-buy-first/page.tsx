import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell First or Buy First? A Decision Framework for Families",
  description:
    "Help your growing family decide whether to sell your current home before buying or buy first. Pros, cons, financial considerations, and bridge solutions for Southern California families.",
  keywords: [
    "sell first or buy first home",
    "sell before buying house california",
    "buy before selling house family",
    "bridge loan california real estate",
    "sell and buy home at same time",
  ],
  alternates: { canonical: "/resources/sell-first-or-buy-first" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

const sellFirstPros = [
  {
    point: "You know your exact budget",
    detail:
      "Once your current home sells, you know precisely how much equity you have for your next down payment. No guessing, no stretching, just clarity. This is especially valuable in Southern California's competitive market where overbidding is common.",
  },
  {
    point: "Stronger negotiating position as a buyer",
    detail:
      "Sellers prefer buyers without a home-sale contingency. When you've already sold, your offer is cleaner and more competitive. In multiple-offer situations (common in San Diego, Orange County, and LA) this can be the difference between winning and losing.",
  },
  {
    point: "No risk of carrying two mortgages",
    detail:
      "Double mortgage payments can strain even healthy finances. Selling first eliminates this risk entirely. You'll never face the pressure of paying for two homes simultaneously.",
  },
  {
    point: "Less financial stress during a major life transition",
    detail:
      "When you're expecting a baby, the last thing you need is financial uncertainty. Selling first simplifies your cash flow and lets you focus on finding the right family home without the anxiety of an unsold property.",
  },
];

const sellFirstCons = [
  {
    point: "You may need temporary housing",
    detail:
      "If there's a gap between selling and buying, you'll need somewhere to live. Options include short-term rentals, staying with family, or negotiating a rent-back arrangement with your buyer. In Southern California, short-term rentals can be expensive: budget $3,000 to $6,000+ per month depending on the area.",
  },
  {
    point: "Potential for two moves",
    detail:
      "Selling first often means moving your belongings twice: once to temporary housing, once to your new home. With a baby on the way (or already here), double moves are exhausting and costly. Storage units add $150 to $400/month.",
  },
  {
    point: "Market timing risk",
    detail:
      "If the market shifts between your sale and purchase, you could face higher prices or fewer options. While no one can predict market movements, a fast-moving market can work against sellers-turned-buyers.",
  },
];

const buyFirstPros = [
  {
    point: "Move once, directly into your new home",
    detail:
      "The biggest advantage: you go straight from your current home to your new one. No temporary housing, no storage units, no double moves. For families with young children or a baby on the way, this is a significant quality-of-life benefit.",
  },
  {
    point: "No rushed decision on your next home",
    detail:
      "Without the pressure of an expiring lease or temporary housing, you can take the time to find the right family home. You're not settling because you need to move quickly. You're choosing because it's the right fit.",
  },
  {
    point: "You can prepare the new home before moving in",
    detail:
      "Having access to your new home while still living in your current one means you can paint the nursery, install safety features, and set up the baby's room before moving day. This is a meaningful advantage for expecting families.",
  },
  {
    point: "Flexibility on closing timelines",
    detail:
      "Owning both homes temporarily gives you control over when you move. You can align the transition with your family's schedule, avoiding moves during the final weeks of pregnancy or the first weeks with a newborn.",
  },
];

const buyFirstCons = [
  {
    point: "Risk of carrying two mortgages",
    detail:
      "Until your current home sells, you're paying two mortgages, two sets of property taxes, two insurance policies, and maintaining two properties. In Southern California, where average mortgage payments are substantial, this can add $3,000–$8,000+ per month to your expenses.",
  },
  {
    point: "Your offer may be weaker with a home-sale contingency",
    detail:
      "If your offer is contingent on selling your current home, sellers may view it as riskier, especially in competitive markets. You may need to offer more or accept less favorable terms to compensate.",
  },
  {
    point: "Financial qualification can be tighter",
    detail:
      "Lenders will evaluate your ability to carry both mortgages. Your debt-to-income ratio may limit how much you can borrow for the new home. Some buyers may not qualify for a second mortgage without selling first.",
  },
  {
    point: "Pressure to sell quickly (and potentially for less)",
    detail:
      "Once you've committed to the new home, there's inherent pressure to sell the old one. This can lead to accepting a lower offer or making costly concessions to close faster.",
  },
];

const bridgeSolutions = [
  {
    title: "Bridge Loan",
    description:
      "A short-term loan that uses your current home's equity to fund the down payment on your new home. Typically 6–12 months, with interest rates higher than a standard mortgage. Works well when your current home is in good condition and priced to sell quickly.",
  },
  {
    title: "Home Equity Line of Credit (HELOC)",
    description:
      "If you have significant equity in your current home, a HELOC can provide the funds for a down payment on your next home. You'll need to apply before listing your current home, as most lenders won't open a HELOC on a property that's for sale.",
  },
  {
    title: "Rent-Back Agreement",
    description:
      "After selling your current home, you negotiate to remain in the home as a renter for a set period (typically 30–60 days). This gives you time to close on and move into your new home without needing temporary housing.",
  },
  {
    title: "Contingent Offer with Kick-Out Clause",
    description:
      "You make an offer on a new home contingent on selling your current one, but the seller can continue marketing their home. If another offer comes in, you get a set window (usually 72 hours) to remove your contingency or step aside.",
  },
  {
    title: "Coordinated Closing (Simultaneous Close)",
    description:
      "Both transactions close on the same day or within a few days. This requires precise coordination between two sets of buyers, sellers, agents, lenders, and escrow officers. It's possible but complex, and one delay can cascade.",
  },
];

const decisionFactors = [
  {
    question: "How much equity do you have in your current home?",
    sellFirst: "If your equity is your primary source of down payment funds, selling first gives you certainty.",
    buyFirst: "If you have substantial equity or separate savings for a down payment, buying first is more feasible.",
  },
  {
    question: "How competitive is the market you're buying in?",
    sellFirst: "A clean, non-contingent offer is stronger in a competitive seller's market.",
    buyFirst: "In a balanced or buyer's market, contingent offers are more commonly accepted.",
  },
  {
    question: "When is your baby due?",
    sellFirst: "If you have 4+ months, there's likely time to sell, find temporary housing, and buy.",
    buyFirst: "If the due date is close, avoiding a double move may be worth the financial complexity.",
  },
  {
    question: "Can you qualify for two mortgages?",
    sellFirst: "Not applicable — you'll only have one mortgage at a time.",
    buyFirst: "Essential. Talk to your lender early to understand your borrowing capacity with two loans.",
  },
  {
    question: "How quickly will your current home sell?",
    sellFirst: "If your home is in a desirable area and priced well, the gap between selling and buying can be short.",
    buyFirst: "If your home may take time to sell, carrying two mortgages for an extended period adds significant risk.",
  },
];

const faqs = [
  {
    q: "Which approach do most families choose?",
    a: "In our experience, slightly more families in Southern California choose to sell first — primarily because the financial certainty is valuable during an already uncertain time (new baby, new home). However, families with strong finances and a clear timeline increasingly choose to buy first to avoid the disruption of temporary housing and double moves.",
  },
  {
    q: "Can BabyHomePlan help us do both at the same time?",
    a: "Yes. Our Sell & Upgrade service is specifically designed for families who need to sell their current home and buy their next one in a coordinated process. We manage both transactions, align timelines, and work to minimize the gap between selling and buying.",
  },
  {
    q: "What's a bridge loan and is it right for us?",
    a: "A bridge loan is short-term financing that uses your current home's equity to fund your next purchase. It can be a good option if you want to buy first without a home-sale contingency, but it comes with higher interest rates and fees. We can connect you with lenders who offer bridge loans in California and help you evaluate whether the cost makes sense for your situation.",
  },
  {
    q: "How do we avoid being homeless between homes?",
    a: "There are several strategies: negotiating a rent-back on your sold home, coordinating simultaneous closings, using temporary furnished rentals, or staying with family. The key is planning ahead, knowing your options before they become urgent. We help families create a transition plan as part of our service.",
  },
  {
    q: "What if our home doesn't sell as quickly as expected?",
    a: "This is one of the key risks of buying first. Mitigation strategies include pricing your home competitively from day one, ensuring it's in show-ready condition, and having a financial cushion for 2–3 months of double payments. If you've sold first, this risk doesn't apply — but you may face pressure to find your next home before temporary housing becomes unsustainable.",
  },
  {
    q: "Does the current California market favor selling first or buying first?",
    a: "Market conditions vary by neighborhood and price point. Generally, in seller's markets (low inventory, high demand), selling first gives you more buying power since your non-contingent offer is stronger. In balanced or cooling markets, buying first becomes more viable as sellers are more willing to accept contingent offers. We provide market-specific guidance based on your target areas.",
  },
];

export default function SellFirstOrBuyFirstPage() {
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
              Sell First or Buy First?{" "}
              <span className="italic">A Decision Framework for Families</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              One of the biggest decisions growing families face when upgrading their home.
              There&apos;s no single right answer &mdash; but there is a right answer for your
              situation. Here&apos;s how to figure it out.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Get Personalized Guidance
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            The Classic Dilemma &mdash; With Higher Stakes
          </h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              When your family is growing and your current home no longer fits, the question
              isn&apos;t whether to move &mdash; it&apos;s how to sequence the move. Do you sell
              your current home first and then buy? Or find your next home first and sell after?
            </p>
            <p>
              For families expecting a baby or with young children, this decision carries extra
              weight. A double move with a newborn is exhausting. Carrying two mortgages during
              parental leave is stressful. Temporary housing with a toddler is challenging. The
              stakes are real, and the right approach depends on your finances, timeline, and risk
              tolerance.
            </p>
            <p>
              This guide walks through both options honestly &mdash; the advantages, the risks,
              the bridge solutions that exist, and a framework for making the decision that fits
              your family. As always, every situation is different, and we recommend discussing
              your specific circumstances with a qualified real estate professional and financial
              advisor.
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
                <li><Link href="/33-day-express" className="text-body-secondary hover:text-clay transition-colors">33-Day Express</Link></li>
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

      {/* Sell First Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Option A
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Sell First, Then Buy
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              The more conservative approach. You sell your current home, secure your funds, and
              then buy your next home with full financial clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 font-sans flex items-center gap-2">
                <svg className="w-5 h-5 text-sage" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advantages
              </h3>
              <div className="space-y-4">
                {sellFirstPros.map((item) => (
                  <div key={item.point} className="border-l-2 border-sage pl-4">
                    <p className="font-semibold text-primary text-sm font-sans">{item.point}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 font-sans flex items-center gap-2">
                <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Considerations
              </h3>
              <div className="space-y-4">
                {sellFirstCons.map((item) => (
                  <div key={item.point} className="border-l-2 border-clay/30 pl-4">
                    <p className="font-semibold text-primary text-sm font-sans">{item.point}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy First Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Option B
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Buy First, Then Sell
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              The convenience-first approach. You secure your next home before selling, avoiding
              temporary housing and double moves &mdash; but at a higher financial cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 font-sans flex items-center gap-2">
                <svg className="w-5 h-5 text-sage" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advantages
              </h3>
              <div className="space-y-4">
                {buyFirstPros.map((item) => (
                  <div key={item.point} className="border-l-2 border-sage pl-4">
                    <p className="font-semibold text-primary text-sm font-sans">{item.point}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 font-sans flex items-center gap-2">
                <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Considerations
              </h3>
              <div className="space-y-4">
                {buyFirstCons.map((item) => (
                  <div key={item.point} className="border-l-2 border-clay/30 pl-4">
                    <p className="font-semibold text-primary text-sm font-sans">{item.point}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Middle Ground
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Bridge Solutions That Can Help
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              You don&apos;t always have to choose one extreme. These strategies can bridge the
              gap between selling and buying &mdash; reducing risk while maintaining flexibility.
            </p>
          </div>

          <div className="space-y-6">
            {bridgeSolutions.map((solution) => (
              <div key={solution.title} className="card">
                <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{solution.title}</h3>
                <p className="text-body-secondary leading-relaxed text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Decision Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Which Approach Fits Your Family?
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Consider these factors honestly. There&apos;s no universally correct answer &mdash;
              only the answer that best matches your finances, timeline, and comfort level.
            </p>
          </div>

          <div className="space-y-6">
            {decisionFactors.map((factor) => (
              <div key={factor.question} className="card">
                <h3 className="text-lg font-semibold text-primary mb-4 font-sans">{factor.question}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-sage/10 rounded-lg p-4">
                    <p className="text-xs font-bold text-sage uppercase tracking-wider mb-2">Sell First</p>
                    <p className="text-body-secondary text-sm leading-relaxed">{factor.sellFirst}</p>
                  </div>
                  <div className="bg-clay/10 rounded-lg p-4">
                    <p className="text-xs font-bold text-clay uppercase tracking-wider mb-2">Buy First</p>
                    <p className="text-body-secondary text-sm leading-relaxed">{factor.buyFirst}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Related Guides for Your Journey
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Whichever path you choose, these resources can help with the next steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/moving-before-baby" className="card hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                Moving Before Baby
              </h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                A calm 30-day checklist for families moving into a new home before baby arrives.
              </p>
            </Link>
            <Link href="/resources/buying-while-pregnant" className="card hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                Buying While Pregnant
              </h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                Trimester-by-trimester timeline for purchasing a home during pregnancy.
              </p>
            </Link>
            <Link href="/resources/baby-ready-upgrades" className="card hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                Baby-Ready Upgrades
              </h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                Room-by-room safety checklist for making your new home ready for baby after closing.
              </p>
            </Link>
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
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Not Sure Which Path Is Right for Your Family?
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Every family&apos;s situation is unique. We&apos;ll review your finances, timeline,
            and priorities &mdash; and recommend the approach that gives your growing family the
            best outcome. No pressure, no obligation. Just honest guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary text-lg">
              Get Your Personalized Plan
            </Link>
            <Link href="/sell-and-upgrade" className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-center">
              Learn About Sell &amp; Upgrade
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
            headline: "Sell First or Buy First? A Decision Framework for Families",
            description:
              "Help your growing family decide whether to sell your current home before buying or buy first.",
            author: {
              "@type": "Organization",
              name: "BabyHomePlan",
              url: siteUrl,
            },
            publisher: {
              "@type": "Organization",
              name: "BabyHomePlan",
              url: siteUrl,
            },
            datePublished: "2026-02-01T00:00:00Z",
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": new URL("/resources/sell-first-or-buy-first", siteUrl).toString(),
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
