import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baby-Ready Upgrades After Closing: Safe, Quick Wins",
  description:
    "A practical room-by-room guide for new homeowners preparing their home for a baby — nursery setup, safety upgrades, air quality, storage, and contractor coordination.",
  keywords: [
    "baby proof new home",
    "nursery setup checklist",
    "baby safety home upgrades",
    "prepare home for baby california",
    "new home baby ready checklist",
  ],
  alternates: { canonical: "/resources/baby-ready-upgrades" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

const roomChecklist = [
  {
    room: "Nursery",
    priority: "High",
    items: [
      {
        task: "Paint with zero-VOC or low-VOC paint",
        detail: "Allow at least 2–3 days of ventilation before baby sleeps in the room. Most zero-VOC paints from major brands are safe once dry, but airing out is still recommended.",
      },
      {
        task: "Install blackout curtains or shades",
        detail: "Cordless options are strongly recommended — corded blinds are a strangulation hazard for young children. Many affordable cordless roller shades are available at home improvement stores.",
      },
      {
        task: "Secure furniture to walls",
        detail: "Anchor dressers, bookshelves, and changing tables with anti-tip brackets. This is one of the most important safety steps and is often overlooked. Furniture tip-overs injure thousands of children each year.",
      },
      {
        task: "Check electrical outlets and install covers",
        detail: "Tamper-resistant outlets (required by code in newer homes) are the safest option. For older homes, plug-in outlet covers work but can be a choking hazard if dislodged — sliding plate covers are a better alternative.",
      },
      {
        task: "Install a smoke detector and CO monitor",
        detail: "If the nursery doesn't already have a working smoke detector, add one. A carbon monoxide detector is also recommended, especially in homes with gas appliances.",
      },
    ],
  },
  {
    room: "Kitchen",
    priority: "High",
    items: [
      {
        task: "Install cabinet locks on lower cabinets",
        detail: "Magnetic locks are discreet and effective. Focus on cabinets that store cleaning products, sharp objects, and heavy cookware. This becomes critical once baby starts crawling (typically 6–10 months).",
      },
      {
        task: "Check water heater temperature",
        detail: "Set to 120°F or below to reduce scald risk. Most water heaters ship at 140°F. This is a quick adjustment on gas or electric units — consult the manual or a plumber if you're unsure.",
      },
      {
        task: "Secure stove with an anti-tip bracket",
        detail: "Free-standing ranges should be anchored to the wall. Many manufacturers include the bracket but it's rarely installed. This prevents the stove from tipping forward if a child climbs on the door.",
      },
      {
        task: "Add a baby gate at the kitchen entrance (if applicable)",
        detail: "A pressure-mounted gate works for most doorways. For top-of-stairs locations, use hardware-mounted gates only. Measure the opening before purchasing.",
      },
    ],
  },
  {
    room: "Bathrooms",
    priority: "High",
    items: [
      {
        task: "Install toilet locks",
        detail: "Toddlers are fascinated by toilets, and the drowning risk is real. Simple adhesive or clamp-style toilet locks are inexpensive and effective.",
      },
      {
        task: "Add non-slip mats to tubs and showers",
        detail: "Textured adhesive strips or a rubber bath mat reduce the risk of slips. Check that existing mats are in good condition and securely placed.",
      },
      {
        task: "Check for mold or moisture issues",
        detail: "Inspect around the tub, under sinks, and along grout lines. Mold can be a significant respiratory concern for infants. Address any issues with proper ventilation and, if necessary, professional remediation.",
      },
      {
        task: "Secure medications and cleaning supplies",
        detail: "Move all medications, cleaning products, and sharp objects (razors, scissors) to high, locked cabinets. Even items that seem harmless to adults can be dangerous for small children.",
      },
    ],
  },
  {
    room: "Living Areas",
    priority: "Medium",
    items: [
      {
        task: "Add corner guards to sharp furniture edges",
        detail: "Coffee tables, TV stands, and fireplace hearths with sharp corners should have cushioned guards. Clear silicone bumpers are discreet and effective.",
      },
      {
        task: "Secure TVs and monitors to the wall or furniture",
        detail: "Flat-screen TVs are top-heavy and tip easily. Wall-mounting is the safest option. If wall-mounting isn't possible, anti-tip straps are an alternative.",
      },
      {
        task: "Check window safety",
        detail: "Install window guards or stops that prevent windows from opening more than 4 inches. Falls from windows are preventable with proper hardware. This is especially critical for second-story rooms.",
      },
      {
        task: "Manage cords and cables",
        detail: "Bundle and hide electrical cords behind furniture or in cord covers. This prevents tripping, strangulation, and electrical hazards as baby becomes mobile.",
      },
    ],
  },
  {
    room: "Garage & Storage",
    priority: "Medium",
    items: [
      {
        task: "Store hazardous materials on high shelves or in locked cabinets",
        detail: "Paint, pesticides, automotive fluids, and tools should be completely inaccessible. A locking wall cabinet is a worthwhile investment.",
      },
      {
        task: "Install a self-closing, self-latching door to the garage",
        detail: "If your home connects to the garage through an interior door, consider adding a self-closing hinge and high latch. Garages contain many hazards for curious toddlers.",
      },
      {
        task: "Organize for stroller and car seat storage",
        detail: "You'll be surprised how much space baby gear takes. Wall-mounted hooks, overhead racks, and a designated baby gear zone in the garage make daily routines much smoother.",
      },
    ],
  },
  {
    room: "Outdoor Spaces",
    priority: "Medium",
    items: [
      {
        task: "Inspect and secure pool or spa fencing",
        detail: "California law requires pool fencing with self-closing, self-latching gates. If your new home has a pool, verify compliance immediately — this is non-negotiable for child safety.",
      },
      {
        task: "Check yard for toxic plants",
        detail: "Oleander, sago palm, and certain mushrooms are common in Southern California yards and are toxic if ingested. A quick survey and removal can prevent a serious incident.",
      },
      {
        task: "Ensure gates and fences are secure",
        detail: "Walk the perimeter. Look for gaps a small child could squeeze through, broken latches, or areas where a toddler could climb. Repair before they become mobile.",
      },
    ],
  },
];

const airQualityTips = [
  {
    title: "Replace HVAC Filters",
    description:
      "Switch to MERV 8–13 rated filters and replace them every 60–90 days. After construction or renovation, check filters monthly — new homes often have residual dust in the ductwork.",
  },
  {
    title: "Ventilate After Any Work",
    description:
      "After painting, flooring, or any installation, open windows and run fans for at least 48–72 hours. Even \"low-VOC\" products release some compounds during curing.",
  },
  {
    title: "Consider an Air Purifier for the Nursery",
    description:
      "A HEPA air purifier in the nursery can reduce allergens, dust, and particulates. Look for units certified by AHAM (Association of Home Appliance Manufacturers) and avoid models that produce ozone.",
  },
  {
    title: "Test for Radon if Applicable",
    description:
      "While radon levels in most of Southern California are low, testing is inexpensive and provides peace of mind. DIY test kits are available at hardware stores for under $20.",
  },
];

const contractorTips = [
  "Get at least two quotes for any project over $500",
  "Verify California contractor's license (CSLB lookup is free online)",
  "Ask for proof of insurance — both liability and workers' comp",
  "Get everything in writing: scope, timeline, payment schedule",
  "Prioritize safety upgrades before cosmetic ones",
  "Schedule noisy/dusty work before baby arrives if possible",
  "Ask about lead paint testing in homes built before 1978",
];

const faqs = [
  {
    q: "How soon after closing should I start baby-proofing?",
    a: "Ideally, start with high-priority items (nursery prep, outlet covers, furniture anchoring) within the first week. Safety-critical upgrades like water heater adjustment and cabinet locks should happen before baby becomes mobile — typically 6–9 months. You don't need to do everything at once.",
  },
  {
    q: "How much do basic baby safety upgrades typically cost?",
    a: "A comprehensive baby-proofing package for a typical 3-bedroom home runs roughly $200–$600 for DIY materials (outlet covers, cabinet locks, corner guards, furniture anchors, gates). Professional baby-proofing services in Southern California typically charge $300–$800 for a full-home assessment and installation.",
  },
  {
    q: "Should I hire a professional baby-proofing service?",
    a: "It depends on your comfort level and time. Professional services are thorough and save time, but many safety upgrades are straightforward DIY projects. We recommend a professional for homes with complex layouts, pools, or if you want a certified assessment of hazards you might miss.",
  },
  {
    q: "What about lead paint in older homes?",
    a: "Homes built before 1978 may contain lead paint. If your home falls in this category, get a professional lead inspection before disturbing any painted surfaces (sanding, scraping, renovation). Lead is especially dangerous for infants and young children. California disclosure laws require sellers to report known lead paint, but testing provides certainty.",
  },
  {
    q: "Can BabyHomePlan connect me with trusted contractors?",
    a: "Yes. After closing, we introduce you to our network of vetted partners — contractors, baby-proofing specialists, painters, and handymen who understand family-home priorities. These are professionals we've worked with and trust, though we always recommend getting your own quotes as well.",
  },
  {
    q: "What upgrades add the most value to a family home?",
    a: "From a safety perspective: furniture anchoring, outlet protection, water heater adjustment, and pool fencing provide the most critical protection. From a livability perspective: nursery prep, organized storage, and air quality improvements make the biggest daily difference for new parents.",
  },
];

export default function BabyReadyUpgradesPage() {
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
              Baby-Ready Upgrades After Closing:{" "}
              <span className="italic">Safe, Quick Wins</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              You have the keys. Now it&apos;s time to make your new house safe and ready for your
              little one. A practical, room-by-room guide with prioritized checklists and qualified
              advice.
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
            Closing Day Is Just the Beginning
          </h2>
          <div className="space-y-4 text-body-secondary text-lg leading-relaxed">
            <p>
              Congratulations — you closed on your family home. But between unpacking boxes and setting
              up the crib, there&apos;s a critical window to address safety upgrades and baby-ready
              preparations that are much easier to handle before baby arrives (or before they start
              crawling).
            </p>
            <p>
              This guide covers the upgrades that matter most, organized room by room with priority
              levels so you can focus your time and budget where it counts. We&apos;ve included cost
              context and practical tips based on what families in Southern California typically
              encounter in their new homes.
            </p>
            <p>
              <strong className="text-primary">A note on qualifications:</strong> Every home is
              different. This guide covers common upgrades and general safety recommendations, but
              it&apos;s not a substitute for a professional home safety assessment — especially for
              homes with pools, older construction, or unique layouts. When in doubt, consult a
              qualified professional.
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

      {/* Room-by-Room Checklist */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Room-by-Room
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              The Baby-Ready Checklist
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Organized by room and priority level so you can tackle the most important items first.
            </p>
          </div>

          <div className="space-y-10">
            {roomChecklist.map((room) => (
              <div key={room.room} className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif text-primary">{room.room}</h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      room.priority === "High"
                        ? "bg-clay/10 text-clay"
                        : "bg-sage/20 text-primary"
                    }`}
                  >
                    {room.priority} Priority
                  </span>
                </div>
                <ul className="space-y-5">
                  {room.items.map((item) => (
                    <li key={item.task} className="flex items-start gap-3">
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
                        <p className="text-body-secondary text-sm leading-relaxed mt-1">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Air Quality */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Often Overlooked
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Indoor Air Quality for Baby
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Infants breathe faster than adults and are more vulnerable to airborne irritants.
              These steps can help create a healthier indoor environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {airQualityTips.map((tip) => (
              <div key={tip.title} className="card">
                <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{tip.title}</h3>
                <p className="text-body-secondary text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Tips */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
                Practical Advice
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Working With Contractors
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Whether you&apos;re hiring a handyman for outlet covers or a contractor for bigger
                projects, these tips can help you avoid common issues — especially when you&apos;re
                also managing the chaos of a new home and a growing family.
              </p>
            </div>
            <div className="card">
              <ul className="space-y-3">
                {contractorTips.map((tip) => (
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
            Need Help Making Your Home Baby-Ready?
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our post-close support connects you with trusted contractors, baby-proofing specialists,
            and family-home experts in San Diego, Orange County, and Los Angeles. Start with a
            conversation — no obligation.
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
            headline: "Baby-Ready Upgrades After Closing: Safe, Quick Wins",
            description:
              "A practical room-by-room guide for new homeowners preparing their home for a baby — nursery setup, safety upgrades, air quality, storage, and contractor coordination.",
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
              "@id": new URL("/resources/baby-ready-upgrades", siteUrl).toString(),
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
