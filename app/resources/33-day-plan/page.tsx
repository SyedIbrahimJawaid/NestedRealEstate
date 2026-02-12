import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 33-Day Plan: What Must Be True & What We Coordinate",
  description:
    "A detailed breakdown of the 33-day express home buying pathway — who qualifies, the day-by-day process, what BabyHomePlan coordinates, and honest boundaries about this accelerated timeline.",
  keywords: [
    "33 day home buying plan",
    "fast home purchase timeline",
    "accelerated home buying california",
    "buy home before baby arrives",
    "express home buying process",
  ],
  alternates: { canonical: "/resources/33-day-plan" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

const dayByDay = [
  {
    days: "Days 1–3",
    title: "Intake & Qualification Assessment",
    description:
      "We review your financial readiness, pre-approval status, timeline constraints, and family needs. If the 33-day pathway is a realistic fit, we define your must-haves and deal-breakers. If it isn't, we'll tell you — and recommend a better-suited timeline.",
  },
  {
    days: "Days 3–5",
    title: "Strategy & Lender Alignment",
    description:
      "Your lender confirms underwriting readiness. We build your custom search criteria — neighborhoods, price range, home size, school proximity — and prepare a showing schedule. Both partners should be aligned on priorities before we begin the active search.",
  },
  {
    days: "Days 5–14",
    title: "Intensive Home Search",
    description:
      "This is the most active phase. We pre-screen listings so you only visit strong candidates. Expect 2–4 showings per session, with daily check-ins on new inventory. Decisiveness matters here — not impulsiveness, but clarity on what fits.",
  },
  {
    days: "Days 14–18",
    title: "Offer Preparation & Submission",
    description:
      "Once we identify the right home, we craft a competitive offer. This includes strategic pricing, contingency terms, and timeline alignment. We negotiate on your behalf — price, repairs, closing date, and occupancy terms.",
  },
  {
    days: "Days 18–22",
    title: "Inspections & Due Diligence",
    description:
      "Home inspection, pest inspection, and any specialized assessments (roof, foundation, etc.) are scheduled within days of acceptance. We review every report with you and negotiate repairs or credits as needed. Nothing is skipped — it's just coordinated tightly.",
  },
  {
    days: "Days 22–30",
    title: "Appraisal & Loan Processing",
    description:
      "The appraisal is ordered immediately after inspection clearance. Your lender processes the file while we manage deadlines, documentation requests, and any conditions. We stay in daily contact with the loan officer to prevent delays.",
  },
  {
    days: "Days 30–40",
    title: "Contingency Removal & Final Coordination",
    description:
      "Contingencies are removed in stages as each milestone is met. Title, escrow, and insurance are all coordinated in parallel. We confirm utility transfers, HOA requirements, and any post-close preparation plans during this window.",
  },
  {
    days: "Days 40–33",
    title: "Final Walkthrough & Closing",
    description:
      "The final walkthrough confirms the home is in agreed-upon condition. Signing typically happens at a title company or via mobile notary. Keys are transferred, and we immediately connect you with trusted partners for any family-ready upgrades you've planned.",
  },
];

const qualificationRequirements = [
  {
    title: "Pre-Approved Financing",
    description:
      "You need a pre-approval letter (not just a pre-qualification) from a lender who can close within the required timeframe. Cash buyers or buyers with strong conventional financing are ideal candidates.",
  },
  {
    title: "Clear Budget & Location Preferences",
    description:
      "Vague preferences slow everything down. You should have a defined price range, 2–3 target neighborhoods, and alignment between partners on priorities like schools, commute, and home size.",
  },
  {
    title: "Decision Readiness",
    description:
      "Both decision-makers need to be available, aligned, and prepared to act within 24–48 hours when we find a strong match. Hesitation on an accelerated timeline can mean losing the right home.",
  },
  {
    title: "Flexibility on Cosmetics",
    description:
      "Paint colors, dated fixtures, and landscaping are fixable. Buyers on an express timeline should focus on structure, location, and layout — not whether the kitchen backsplash matches their Pinterest board.",
  },
  {
    title: "Availability for Showings",
    description:
      "During the active search phase (Days 5–14), you should be available for showings within 48 hours of notification. Evenings and weekends count — we work around your schedule, but responsiveness is critical.",
  },
];

const whatWeCoordinate = [
  "Lender communication and deadline management",
  "Showing scheduling and pre-screening",
  "Offer strategy, writing, and negotiation",
  "Inspection scheduling and report review",
  "Appraisal coordination with lender",
  "Title, escrow, and insurance setup",
  "Contingency tracking and removal",
  "Utility transfers and HOA coordination",
  "Post-close partner introductions (nursery prep, safety upgrades)",
];

const notForYouSigns = [
  "You haven't started the pre-approval process yet",
  "Partners disagree on budget, location, or timing",
  "You need to sell a current home before buying (consider our Sell & Upgrade service instead)",
  "You want to extensively renovate before moving in",
  "Your financing involves complex conditions (jumbo loans with extended underwriting, renovation loans, etc.)",
];

const faqs = [
  {
    q: "Is the 33-day timeline guaranteed?",
    a: "No — and we're upfront about that. The 33-day pathway is a coordinated plan, not a guarantee. Many factors affect closing timelines, including lender processing, appraisal scheduling, and seller cooperation. What we guarantee is that every step will be managed proactively to keep things on track.",
  },
  {
    q: "What happens if something delays the timeline?",
    a: "Delays can happen — an appraisal takes longer than expected, an inspection reveals a significant issue, or the lender needs additional documentation. We build buffer into the plan and communicate immediately when adjustments are needed. Most delays are measured in days, not weeks.",
  },
  {
    q: "Can I still get a thorough home inspection on an express timeline?",
    a: "Absolutely. We never recommend waiving inspections. The difference is scheduling — instead of waiting a week, we schedule inspections within 2–3 days of acceptance. The inspection itself is just as thorough.",
  },
  {
    q: "What if the express pathway isn't right for me?",
    a: "We'll tell you honestly during the intake assessment. Not every situation fits a 33-day timeline, and that's perfectly fine. We'll recommend our standard buying process or Sell & Upgrade service depending on your circumstances.",
  },
  {
    q: "How much does the 33-day express service cost?",
    a: "Our buyer representation services are typically compensated through the seller's side of the transaction, which is standard in real estate. There is no additional fee for the express pathway — the difference is in the intensity of coordination, not the cost structure.",
  },
  {
    q: "Do I need to be a first-time buyer to use express?",
    a: "No. The express pathway works for first-time buyers, move-up buyers, and relocating families alike. The key requirement is readiness — financial, logistical, and decisional — not buying history.",
  },
];

export default function ThirtyThreeDayPlanPage() {
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
              The 33-Day Plan: What Must Be True &amp;{" "}
              <span className="italic">What We Coordinate</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              An honest, detailed look at our accelerated home buying pathway — the qualifications,
              the day-by-day process, what we handle, and who this is (and isn&apos;t) designed for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn-primary text-lg">
                Check Your Eligibility
              </Link>
              <Link
                href="/33-day-express"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-center"
              >
                33-Day Express Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Why a 33-Day Pathway Exists
          </h2>
          <div className="prose max-w-none space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              For most families, buying a home takes 60 to 90 days from accepted offer to closing.
              That timeline works well when there&apos;s no urgency. But life doesn&apos;t always
              cooperate — a baby is due in ten weeks, a lease is ending, a job relocation has a hard
              start date, or a family simply needs to move before circumstances change.
            </p>
            <p>
              The 33-day express pathway exists for these moments. It&apos;s not about cutting corners
              or rushing decisions. It&apos;s about compressing the coordination — tightening handoffs
              between lenders, inspectors, appraisers, and escrow — so that every day counts.
            </p>
            <p>
              This guide explains exactly what needs to be true for the 33-day plan to work, what
              each phase looks like, and where the honest limitations are. We believe you deserve
              full transparency before committing to an accelerated timeline.
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

      {/* Qualification Requirements */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Prerequisites
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              What Must Be True Before We Start
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              The express pathway only works when certain conditions are already in place. Here&apos;s
              what we assess during your intake consultation.
            </p>
          </div>

          <div className="space-y-6">
            {qualificationRequirements.map((req) => (
              <div key={req.title} className="card">
                <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{req.title}</h3>
                <p className="text-body-secondary leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Breakdown */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Day-by-Day
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              The 33-Day Breakdown
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Every phase is planned. Here&apos;s what happens and when — from intake to keys.
            </p>
          </div>

          <div className="space-y-6">
            {dayByDay.map((phase, index) => (
              <div key={phase.days} className="flex gap-5 items-start">
                <div className="w-28 flex-shrink-0 pt-1">
                  <div className="text-sm font-bold text-clay">{phase.days}</div>
                  <div className="text-xs text-body-secondary mt-1">Phase {index + 1}</div>
                </div>
                <div className="w-px bg-border self-stretch relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-clay rounded-full" />
                </div>
                <div className="pb-8 flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2 font-sans">
                    {phase.title}
                  </h3>
                  <p className="text-body-secondary text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Coordinate */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
                Our Role
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                What BabyHomePlan Coordinates
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Speed comes from coordination, not shortcuts. Here&apos;s everything we manage behind
                the scenes so you can focus on your family and your decisions — not on chasing
                paperwork or scheduling calls.
              </p>
            </div>
            <div className="card">
              <ul className="space-y-3">
                {whatWeCoordinate.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-sage flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-body-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Isn't For */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Honest Boundaries
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              The Express Pathway May Not Be Right If…
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              We&apos;d rather be honest upfront than set unrealistic expectations. Here are situations
              where a standard timeline is typically the better choice.
            </p>
          </div>

          <div className="card max-w-2xl mx-auto">
            <ul className="space-y-4">
              {notForYouSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-clay flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-body-secondary">{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-body-secondary text-sm leading-relaxed">
                If any of these apply, don&apos;t worry — we still help. Our{" "}
                <Link href="/buy" className="text-clay hover:underline font-medium">
                  standard buying process
                </Link>{" "}
                or{" "}
                <Link href="/sell-and-upgrade" className="text-clay hover:underline font-medium">
                  Sell &amp; Upgrade service
                </Link>{" "}
                may be a better fit for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-offwhite">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Ready to See If the 33-Day Plan Fits Your Situation?
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Start with a no-pressure consultation. We&apos;ll assess your readiness, discuss your
            timeline, and recommend the pathway that gives your family the best outcome — whether
            that&apos;s express or standard.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The 33-Day Plan: What Must Be True & What We Coordinate",
            description:
              "A detailed breakdown of the 33-day express home buying pathway — who qualifies, the day-by-day process, what BabyHomePlan coordinates, and honest boundaries.",
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": new URL("/resources/33-day-plan", siteUrl).toString(),
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
