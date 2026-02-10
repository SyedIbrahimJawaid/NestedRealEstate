import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving Before Baby: A Calm 30-Day Checklist",
  description:
    "A practical 30-day checklist for families moving before a baby arrives in Southern California. Week-by-week planning, packing tips, logistics, and settling-in guidance.",
  keywords: [
    "moving before baby checklist",
    "moving while pregnant california",
    "30 day moving checklist baby",
    "relocating before baby arrives",
    "family moving checklist southern california",
  ],
  alternates: { canonical: "https://babyhomeplan.com/resources/moving-before-baby" },
};

const weekOneTwo = [
  {
    task: "Confirm your closing date and move-in timeline",
    detail:
      "Coordinate with your agent, lender, and escrow officer to lock down exact dates. If you're renting, confirm your lease end date and whether early termination is possible. Having firm dates reduces every other decision.",
  },
  {
    task: "Create a master moving binder or digital folder",
    detail:
      "Gather all documents in one place — closing paperwork, lease agreements, utility account numbers, insurance policies, medical records, and your OB/midwife contact info. Accessibility matters when things move fast.",
  },
  {
    task: "Book movers or reserve a moving truck",
    detail:
      "In Southern California, reputable movers book up 2–4 weeks in advance — especially on weekends and at month-end. Get at least two quotes, verify licensing (CPUC for in-state moves), and confirm insurance coverage. If using a truck rental, reserve early for the size you need.",
  },
  {
    task: "Notify your healthcare providers",
    detail:
      "If you're changing areas, ask your OB/midwife for records transfer and referrals in your new location. If staying within the same health system, confirm your new address is within their service area. Don't wait — new patient appointments can take weeks.",
  },
  {
    task: "Start decluttering room by room",
    detail:
      "Moving fewer things costs less and takes less energy. Donate, sell, or discard anything you won't need in the new home. Be realistic — you're about to accumulate a lot of baby gear. A lighter move is a calmer move.",
  },
  {
    task: "Order packing supplies",
    detail:
      "Boxes, tape, bubble wrap, markers, and labels. Buy more than you think you need. Color-coded labels by room save significant time on unpacking day. Many moving supply companies in San Diego, OC, and LA offer next-day delivery.",
  },
];

const weekTwoThree = [
  {
    task: "Pack non-essential rooms first",
    detail:
      "Start with guest rooms, storage areas, and seasonal items. Leave daily-use rooms (kitchen, bedroom, bathroom) for last. Pack one room at a time to maintain a sense of progress without overwhelming your living space.",
  },
  {
    task: "Set up utilities at your new address",
    detail:
      "Contact SDG&E, SoCal Edison, SoCal Gas, water district, internet, and trash services. Schedule activation for the day before your move-in — you'll want lights, water, and air conditioning waiting for you. Many utilities allow online scheduling.",
  },
  {
    task: "Update your address with key institutions",
    detail:
      "USPS mail forwarding, DMV, insurance companies, banks, employer, subscriptions, and Amazon. The USPS forwarding form takes 7–10 days to activate, so submit it early. California DMV requires address updates within 10 days of moving.",
  },
  {
    task: "Prepare a 'hospital bag + essentials' box",
    detail:
      "If baby could arrive around move time, pack a clearly labeled box with hospital bag items, important documents, chargers, medications, snacks, and a change of clothes. This box goes in your car — not the moving truck.",
  },
  {
    task: "Arrange childcare or pet care for moving day",
    detail:
      "If you have older children or pets, moving day is much smoother when they're cared for elsewhere. Ask family, friends, or book a sitter for the full day. An empty house with kids underfoot is stressful and potentially unsafe.",
  },
  {
    task: "Deep clean and photograph your current home",
    detail:
      "If you're renting, this protects your security deposit. If you've sold, your buyer will appreciate a clean handover. Photograph every room for your records before handing over keys.",
  },
];

const weekThreeFour = [
  {
    task: "Pack remaining rooms and label everything clearly",
    detail:
      "Mark boxes with room destination AND contents (not just 'kitchen' — 'kitchen: pots, pans, utensils'). This saves hours on the other end. Mark fragile items on multiple sides. Stack heavy boxes on the bottom.",
  },
  {
    task: "Do a final walkthrough of your new home",
    detail:
      "Verify that agreed-upon repairs were completed, appliances work, and the home is in the expected condition. Check water pressure, light switches, outlets, HVAC, and garage door openers. Flag issues to your agent before closing if they haven't been addressed.",
  },
  {
    task: "Set up the nursery and master bedroom first",
    detail:
      "On move-in day, prioritize assembling the bed, setting up the nursery basics (crib, changing station, rocking chair), and making the bathroom functional. Everything else can wait. You need sleep more than you need an organized garage.",
  },
  {
    task: "Install safety essentials immediately",
    detail:
      "Smoke detectors, CO detectors, and a basic first aid kit should be in place on day one. If your new home has a pool, verify the fence and gate latch before anyone steps outside. See our Baby-Ready Upgrades guide for the full checklist.",
  },
  {
    task: "Introduce yourself to neighbors",
    detail:
      "A brief hello goes a long way — especially when you'll soon have a newborn. Neighbors who know you're expecting may offer help, watch for packages, or share useful local knowledge (best pediatrician, quiet parks, grocery delivery tips).",
  },
  {
    task: "Schedule your first postnatal appointment at your new provider",
    detail:
      "If you changed OB/midwife, confirm your first appointment and ensure records have transferred. If you stayed with the same provider, update your address in their system. Know the fastest route from your new home to your delivery hospital.",
  },
];

const movingDayTips = [
  "Start early — aim to begin loading by 8 AM to maximize daylight and cool morning temperatures (especially in summer months across Southern California).",
  "Keep a cooler with water, snacks, and easy meals accessible. Dehydration and low blood sugar make everything harder — especially during pregnancy.",
  "Wear supportive shoes and take breaks. If you're pregnant, delegate heavy lifting entirely. No box is worth a back injury or complications.",
  "Do a final sweep of every closet, cabinet, and drawer before leaving your old home. Check the attic, garage rafters, and under sinks.",
  "Take a photo of the empty old home for your records. Confirm all keys, garage remotes, and access devices are handed over.",
  "At the new home, direct movers to place boxes in the correct rooms. This is where your color-coded labels pay off.",
  "Unpack the essentials box first: toiletries, medications, phone chargers, a few dishes, towels, and bedding. Everything else can wait until tomorrow.",
];

const faqs = [
  {
    q: "Is it safe to move during pregnancy?",
    a: "Generally, yes — with precautions. Avoid heavy lifting, stay hydrated, take frequent breaks, and delegate physically demanding tasks. Consult your healthcare provider about any specific restrictions based on your pregnancy stage and health. The emotional stress of moving is real too — give yourself permission to let some things be imperfect.",
  },
  {
    q: "How far in advance should we start planning a move before baby?",
    a: "Ideally, 4–6 weeks before your target move date — and at least 8–10 weeks before your due date. This provides buffer for delays, which are common in real estate transactions. If you're buying a home, the closing process alone typically takes 30–45 days from accepted offer.",
  },
  {
    q: "Should we hire professional movers or do it ourselves?",
    a: "For a move during pregnancy or with young children, professional movers are generally worth the investment. In Southern California, a local move for a 2–3 bedroom home typically costs $800–$2,500 depending on distance, volume, and services. The reduced physical strain and time savings are significant.",
  },
  {
    q: "What if our move date is close to the due date?",
    a: "If your move and due date are within 2–3 weeks of each other, we strongly recommend having a backup plan — a family member's home or hotel near your delivery hospital where you could stay if labor begins during the move. Pack your hospital bag separately and keep it in your personal vehicle at all times.",
  },
  {
    q: "Can BabyHomePlan help coordinate our move timeline?",
    a: "Yes. We help families align their home purchase closing date with their personal timeline — including due dates, lease expirations, and work schedules. Our goal is to reduce the overlap between moving chaos and baby arrival as much as possible.",
  },
  {
    q: "What's the most important thing to set up on day one?",
    a: "A safe place to sleep and a functional bathroom. If baby has already arrived, the nursery basics (crib with a firm mattress, no loose bedding) come first. Everything else — unpacking the kitchen, hanging art, organizing the garage — can happen over the following weeks. Rest takes priority over perfection.",
  },
];

export default function MovingBeforeBabyPage() {
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
              Moving Before Baby:{" "}
              <span className="italic">A Calm 30-Day Checklist</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              A week-by-week plan for moving into your new home before baby arrives — covering
              logistics, packing, healthcare transfers, and settling in with less stress and more
              confidence.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Get Your Family Home Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Moving and Expecting — at the Same Time
          </h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              Moving is stressful under any circumstances. Moving while preparing for a baby adds
              another layer of urgency, emotion, and logistics. But with the right plan, it
              doesn&apos;t have to feel chaotic.
            </p>
            <p>
              This 30-day checklist is designed for families in Southern California who are closing on
              a home and need to move in before — or shortly after — their baby arrives. It&apos;s
              organized week by week, with practical tasks, local context, and realistic expectations.
            </p>
            <p>
              <strong className="text-primary">A note on timelines:</strong> Every move is different.
              This guide provides a general framework, but your specific situation — whether
              you&apos;re 20 weeks pregnant or 36 weeks, moving across town or across the county —
              will shape the details. Adjust the timeline to fit your reality, and always consult your
              healthcare provider about physical limitations during pregnancy.
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

      {/* Week 1–2 Checklist */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Days 1–14
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Week 1–2: Planning &amp; Preparation
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Lay the groundwork. These early tasks set the tone for the entire move — the more you
              handle now, the calmer the final week will be.
            </p>
          </div>

          <div className="space-y-5">
            {weekOneTwo.map((item) => (
              <div key={item.task} className="card">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary text-sm font-sans">{item.task}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week 2–3 Checklist */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Days 14–21
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Week 2–3: Packing &amp; Logistics
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              The middle stretch. Focus on packing systematically, setting up services, and
              handling administrative details while your energy is still manageable.
            </p>
          </div>

          <div className="space-y-5">
            {weekTwoThree.map((item) => (
              <div key={item.task} className="card">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary text-sm font-sans">{item.task}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week 3–4 Checklist */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Days 21–30
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Week 3–4: Moving In &amp; Settling
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              The final push. Move day and the first days in your new home — prioritize safety,
              sleep, and the essentials. Perfection can wait.
            </p>
          </div>

          <div className="space-y-5">
            {weekThreeFour.map((item) => (
              <div key={item.task} className="card">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary text-sm font-sans">{item.task}</p>
                    <p className="text-body-secondary text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Day Tips */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
                Day-Of Advice
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Moving Day Survival Tips
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Moving day is a marathon, not a sprint — especially when you&apos;re expecting.
                These tips come from families who&apos;ve done it and the professionals who help
                them. Pace yourself, stay hydrated, and remember: the hard part is almost over.
              </p>
            </div>
            <div className="card">
              <ul className="space-y-3">
                {movingDayTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-body-secondary text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Related Guides for Growing Families
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Your move is one piece of the puzzle. These guides cover the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/buying-while-pregnant" className="card hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                Buying While Pregnant
              </h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                Timeline considerations and practical steps for purchasing a home during pregnancy.
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
            <Link href="/resources/sell-first-or-buy-first" className="card hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                Sell First or Buy First?
              </h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                A decision framework to help families figure out the right order of operations.
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
            Need Help Coordinating Your Move and Home Purchase?
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We help families across San Diego, Orange County, and Los Angeles align their home
            purchase timeline with their growing family. Start with a free consultation — no
            obligation, just a clear plan.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Start Your Family Home Plan
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
            headline: "Moving Before Baby: A Calm 30-Day Checklist",
            description:
              "A practical 30-day checklist for families moving before a baby arrives in Southern California. Week-by-week planning, packing tips, logistics, and settling-in guidance.",
            author: {
              "@type": "Organization",
              name: "BabyHomePlan.com",
            },
            publisher: {
              "@type": "Organization",
              name: "BabyHomePlan.com",
              url: "https://babyhomeplan.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://babyhomeplan.com/resources/moving-before-baby",
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
