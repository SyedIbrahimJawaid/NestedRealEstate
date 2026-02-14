import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { businessInfo } from "@/lib/businessInfo";

export const metadata: Metadata = {
  title: "Creating Homes for Growing Families",
  description:
    "We help growing families in Southern California find, sell, and prepare the right home so you can focus on your health, your baby, and what really matters.",
  alternates: { canonical: "/" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const checkItems = [
  "Baby on the way but your home feels too small",
  "You need to find and move within a few months",
  "Buying or selling feels overwhelming",
  "Renovations need to be quick and safe",
];

const whatYouGetItems = [
  { bold: "A realistic timeline + area fit", rest: " tailored to your family\u2019s unique needs" },
  { bold: "Lender, inspector, and contractor coordination", rest: " handled seamlessly" },
  { bold: "An honest answer", rest: " on whether Express (the 33-day pathway) is right for you" },
  { bold: "Clear expectations", rest: " about process, costs, and what\u2019s possible" },
  { bold: "No pressure", rest: " \u2014 we\u2019ll give you next steps at your speed" },
];

const howItWorks = [
  {
    step: 1,
    title: "Discovery",
    description: "We evaluate your needs, discuss timing, and agree on your timeline goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F5F0EB" />
        <rect x="18" y="16" width="28" height="32" rx="3" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M24 24h16M24 30h16M24 36h10" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 24l2 2 4-4" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M22 30l2 2 4-4" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Plan",
    description: "We map out your route, align finances, and anticipate key dates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F5F0EB" />
        <rect x="16" y="18" width="26" height="24" rx="3" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M22 14v8M36 14v8M16 26h26" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 32h4M22 37h8" stroke="#1F3A4A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="42" cy="40" r="9" stroke="#C96A4A" strokeWidth="2" fill="#F5F0EB" />
        <path d="M39 40l2 2 4-4" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Execute",
    description: "We list, tour, and negotiate for you, coordinating a smooth move timeline.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F5F0EB" />
        <path d="M36 28l-4-4-8 6 6 4 8-6-4-4z" stroke="#1F3A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M24 30l-4 12 4-2 3 3 4-12" stroke="#C96A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M36 20v6h6" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M36 20l6 6" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <rect x="36" y="32" width="10" height="12" rx="1" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M39 44v-4h4v4" stroke="#1F3A4A" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

const waysWeHelp = [
  {
    title: "Buy a Home",
    description: "Find the right fit fast\u2014without sacrificing due diligence.",
    href: "/buy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill="#F5F0EB" />
        <path d="M16 28l12-10 12 10" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M20 26v14h16V26" stroke="#1F3A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <rect x="25" y="33" width="6" height="7" rx="1" stroke="#C96A4A" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Sell & Upgrade",
    description: "Coordinate your sale and next purchase with a timeline that protects your outcomes.",
    href: "/sell-and-upgrade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill="#F5F0EB" />
        <path d="M14 30l8-7 8 7" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M17 28v10h10V28" stroke="#1F3A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M30 26l2-2" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 22l8-7 8 7" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M37 20v10h10V20" stroke="#1F3A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M30 26l4-4" stroke="#C96A4A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "33-Day Express",
    description: "A safe, compressed path for qualified, time-sensitive buyers.",
    href: "/33-day-express",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill="#F5F0EB" />
        <circle cx="28" cy="30" r="12" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M28 22v8l5 3" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 16h4" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" />
        <path d="M37 19l2-2" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const areas = [
  {
    name: "San Diego County",
    href: "/areas/san-diego-county",
    description: "Great schools, peaceful suburbs, close to beaches and parks.",
    image: "/images/county-san-diego.png",
  },
  {
    name: "Orange County",
    href: "/areas/orange-county",
    description: "Pristine neighborhoods near top-rated schools, work, and family recreation.",
    image: "/images/county-orange.jpeg",
  },
  {
    name: "Los Angeles County",
    href: "/areas/los-angeles-county",
    description: "Family-friendly communities, city access, plenty of recreation.",
    image: "/images/county-los-angeles.png",
  },
];

const testimonials = [
  {
    quote: "We felt calm and informed the whole time\u2014exactly what we needed with a baby on the way.",
    author: "Victoria & Mark",
    location: "San Diego",
    initials: "V&M",
    gradient: "from-clay to-clay-dark",
  },
  {
    quote: "They gave us a clear plan and honest timelines. No pressure, just great guidance.",
    author: "Sara & John",
    location: "Orange County",
    initials: "S&J",
    gradient: "from-sage to-primary",
  },
  {
    quote: "Fast, organized, and still thorough. The Express plan was realistic and safe.",
    author: "Daniel & Emily",
    location: "Los Angeles",
    initials: "D&E",
    gradient: "from-primary to-sage",
  },
];

const guides = [
  {
    title: "Moving Before Baby",
    description: "Tips on quickly settling into your new home before baby arrives.",
    href: "/resources/moving-before-baby",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F5F0EB" />
        <rect x="20" y="26" width="20" height="16" rx="2" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M20 30h20" stroke="#1F3A4A" strokeWidth="1.5" />
        <circle cx="30" cy="20" r="5" stroke="#C96A4A" strokeWidth="2" fill="none" />
        <path d="M28 18c1-1 3-1 4 0" stroke="#C96A4A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 22l-2 4M34 22l2 4" stroke="#C96A4A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M33 16c1-2 3-2 4-1" stroke="#9FB6A1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Buying While Pregnant",
    description: "How to navigate the market with a baby on the way.",
    href: "/resources/buying-while-pregnant",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F5F0EB" />
        <circle cx="32" cy="22" r="6" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M24 36c0-5 3.5-8 8-8s8 3 8 8" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="32" cy="40" rx="6" ry="4" stroke="#C96A4A" strokeWidth="2" fill="none" />
        <path d="M30 20c0.5-1 1.5-1.5 2.5-1" stroke="#1F3A4A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sell First or Buy First?",
    description: "Pros and cons of each approach to upgrading.",
    href: "/resources/sell-first-or-buy-first",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F5F0EB" />
        <path d="M16 34l6-5 6 5" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M19 32v8h6v-8" stroke="#1F3A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M30 30l2-2 2 2" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 34l6-5 6 5" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M39 32v8h6v-8" stroke="#1F3A4A" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <rect x="41" y="36" width="3" height="4" rx="0.5" stroke="#C96A4A" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

const whyFamilies = [
  {
    title: "Licensed Brokerage",
    description: "California licensed, DRE compliant, focused on your family\u2019s needs.",
    detail: businessInfo.dreLicense ? `CA DRE License #${businessInfo.dreLicense}` : undefined,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill="#F5F0EB" />
        <path d="M28 14c-8 0-12 4-12 10 0 8 12 18 12 18s12-10 12-18c0-6-4-10-12-10z" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M24 26l2 2 4-4" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description: "Prompt, honest advice with 24-hour response time.",
    href: "/areas/orange-county",
    linkText: "View Orange County Areas \u2192",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill="#F5F0EB" />
        <rect x="14" y="20" width="22" height="14" rx="3" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <path d="M14 23l11 6 11-6" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="38" cy="18" r="7" stroke="#C96A4A" strokeWidth="2" fill="#F5F0EB" />
        <path d="M36 18h4M38 16v4" stroke="#C96A4A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Partner Network",
    description: "Vetted lenders, inspectors, and contractors ready to help.",
    href: "/areas/los-angeles-county",
    linkText: "View Los Angeles Areas \u2192",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill="#F5F0EB" />
        <path d="M18 32c4-4 6-2 10 0s6 4 10 0" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="22" cy="22" r="5" stroke="#1F3A4A" strokeWidth="2" fill="none" />
        <circle cx="34" cy="22" r="5" stroke="#C96A4A" strokeWidth="2" fill="none" />
        <path d="M28 36v6" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                            */
/* ------------------------------------------------------------------ */

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: businessInfo.name,
  url: new URL("/", siteUrl).toString(),
  logo: new URL("/images/logo.png", siteUrl).toString(),
  description:
    "Family-focused real estate agency serving Southern California. Helping growing families buy, sell, and prepare homes with a calm, coordinated approach.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "San Diego County, CA" },
    { "@type": "AdministrativeArea", name: "Orange County, CA" },
    { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
  ],
  ...(businessInfo.telephone && { telephone: businessInfo.telephone }),
  ...(businessInfo.email.general && { email: businessInfo.email.general }),
  ...(businessInfo.dreLicense && {
    identifier: {
      "@type": "PropertyValue",
      name: "DRE License",
      value: businessInfo.dreLicense,
    },
  }),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BabyHomePlan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BabyHomePlan is a family-focused real estate agency serving Southern California. We help growing families buy, sell, and prepare homes with a coordinated, calm approach.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve San Diego County, Orange County, and Los Angeles County, with deep knowledge of family-friendly neighborhoods in each region.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the intake form. We\u2019ll review your situation and reach out within 24 hours with a clear recommendation and next steps.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to buy a home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical home purchase takes 60–90 days from offer to close. Our Express pathway can compress this to 33 days for qualified buyers in time-sensitive situations.",
      },
    },
    {
      "@type": "Question",
      name: "Does everyone qualify for Express?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Express requires pre-approved financing, decision readiness, and a due diligence plan. We\u2019ll be honest about whether it\u2019s right for you.",
      },
    },
    {
      "@type": "Question",
      name: "Does Express mean cutting corners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Inspections, due diligence, and negotiation still happen\u2014just on a compressed, tightly coordinated schedule.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============================================================ */}
      {/* 1) HERO                                                      */}
      {/* ============================================================ */}
      <div className="relative">
        <section className="relative min-h-[560px] md:min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center hero-home-bg">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

            <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex justify-start text-left">
              <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6">
                Ready for Your Family&apos;s Next Home?
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
                We help growing families buy, sell, and prepare homes with a calm, coordinated plan so
                you can move before baby arrives.
              </p>
              <Link href="/get-started" className="btn-primary text-lg !py-4 !px-10 inline-block mb-6">
                Create My Family Home Plan
              </Link>
              <p className="text-white/80 text-sm tracking-wide">
                Response within 24 hours &bull; No pressure &bull; Serving Southern California
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2) TRUST BAR                                                */}
        {/* ============================================================ */}
        <div className="bg-white border-b border-border">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 py-4 text-sm text-body-secondary">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L3 7v6c0 5 3.5 7.74 7 9 3.5-1.26 7-4 7-9V7l-7-5z" /></svg>
                Licensed CA Real Estate
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z" /><circle cx="10" cy="8" r="2" /><path d="M6 16c0-2 2-4 4-4s4 2 4 4" /></svg>
                San Diego &bull; Orange County &bull; Los Angeles
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="8" /><path d="M10 6v4l3 2" /></svg>
                Response within 24 hours
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L15 7" /></svg>
                No pressure, just clear guidance
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3) IS THIS YOUR SITUATION + FLOATING FORM                   */}
        {/* ============================================================ */}
        <section className="relative section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
              <div className="pt-4 lg:pt-8">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary mb-6">
                  Is This Your Situation?
                </h2>
                <p className="text-body-secondary text-lg leading-relaxed mb-8">
                  Starting or growing a family comes with pressure and excitement. We&apos;re here to
                  take some of the burden away.
                </p>
                <ul className="space-y-4">
                  {checkItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-body-secondary text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:sticky lg:top-24">
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4) WHAT YOU'LL GET (Intake Variant B copy)                   */}
        {/* ============================================================ */}
        <section className="section-padding bg-offwhite">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                What You&apos;ll Get
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                A clear plan in calm, experienced hands so you can focus on what matters most.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
              {/* Left — image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/moving-planning.png"
                  alt="Family preparing for their move with boxes and nursery items"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right — bullets */}
              <div>
                <ul className="space-y-5">
                  {whatYouGetItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-lg bg-clay/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-body-secondary leading-relaxed">
                        <strong className="text-primary">{item.bold}</strong>{item.rest}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-body-secondary/70 italic">
                    Only about your real estate path; no spam or endless follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5) HOW IT WORKS                                             */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                How BabyHomePlan Works
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                A coordinated plan for a smooth transition. Calm, family-first, with clarity at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {howItWorks.map((step) => (
                <div key={step.step} className="bg-offwhite rounded-2xl p-8 text-center border border-border">
                  <p className="text-clay font-serif text-lg mb-2">
                    {step.step}. <strong className="text-primary">{step.title}</strong>
                  </p>
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <p className="text-body-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6) WAYS WE HELP (Buy / Sell / Express)                      */}
        {/* ============================================================ */}
        <section className="section-padding bg-offwhite">
          <div className="container-max">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Ways We Help
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                Whether you&apos;re buying, selling, or both, we coordinate the steps so nothing falls through the cracks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {waysWeHelp.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-200 group text-center"
                >
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-xl font-serif text-primary mb-3 group-hover:text-clay transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-body-secondary text-sm leading-relaxed">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7) WHY FAMILIES CHOOSE US                                    */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Why Families Choose Us
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                We minimize stress, maximize clarity, and deliver results while treating your family like our own.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyFamilies.map((card) => (
                <div key={card.title} className="bg-offwhite rounded-2xl p-8 text-center border border-border">
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-xl font-serif text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-body-secondary text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  {card.detail && (
                    <p className="text-xs text-body-secondary/70 font-medium">{card.detail}</p>
                  )}
                  {card.href && card.linkText && (
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1 text-clay text-sm font-semibold hover:gap-2 transition-all duration-200 mt-2"
                    >
                      {card.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8) AREAS WE SERVE                                           */}
        {/* ============================================================ */}
        <section className="section-padding bg-offwhite">
          <div className="container-max">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Areas We Serve
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                Family-wise real estate experts dedicated to helping you succeed in popular SoCal areas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {areas.map((area) => (
                <div key={area.name} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={area.image}
                      alt={`${area.name} neighborhoods for families`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-primary mb-2">{area.name}</h3>
                    <p className="text-body-secondary text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-1 text-clay text-sm font-semibold hover:gap-2 transition-all duration-200"
                    >
                      View {area.name} Areas
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-body-secondary text-base leading-relaxed max-w-3xl mx-auto mt-12">
              We serve growing families across Southern California, with a focus on neighborhoods that support real
              life: commutes, schools, parks, walkability, and day-to-day convenience.{" "}
              <Link href="/get-started" className="text-clay font-semibold hover:text-clay-dark">
                Tell us your timeline
              </Link>{" "}
              so we can recommend the smartest path.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9) SOCIAL PROOF / TESTIMONIALS                              */}
        {/* ============================================================ */}
        <section
          className="relative section-padding overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/images/family-moving-boxes.png')" }}
        >
          <div className="absolute inset-0 bg-white/85" />
          <div className="container-max relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                What Families Are Saying
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                Real stories from families who made smooth, confident moves with our help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-offwhite rounded-2xl p-8 border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} className="w-5 h-5 text-clay" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-body-secondary leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">{t.author}</p>
                      <p className="text-xs text-body-secondary">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10) FEATURED GUIDES                                          */}
        {/* ============================================================ */}
        <section className="section-padding bg-offwhite">
          <div className="container-max">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Featured Guides
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                Practical advice for growing families. Read our most popular questions and tips before you move.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {guides.map((guide) => (
                <div key={guide.title} className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="flex justify-center mb-4">{guide.icon}</div>
                  <h3 className="text-lg font-serif text-primary mb-3">{guide.title}</h3>
                  <p className="text-body-secondary text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <Link
                    href={guide.href}
                    className="inline-flex items-center gap-1 text-clay text-sm font-semibold hover:gap-2 transition-all duration-200"
                  >
                    Read the Guide
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-clay font-semibold hover:gap-3 transition-all duration-200"
              >
                See All Guides
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11) FAQ                                                      */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-body-secondary text-lg max-w-2xl mx-auto">
                Get the answers you need for a confident, family-first move.
              </p>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12) FINAL CTA                                                */}
        {/* ============================================================ */}
        <section className="section-padding bg-offwhite">
          <div className="container-max text-center">
            <p className="text-lg md:text-xl text-body-secondary mb-4 max-w-xl mx-auto">
              Explore our services and guides to start your journey.
            </p>
            <Link
              href="/get-started"
              className="btn-primary text-lg !py-4 !px-10 inline-block mb-4"
            >
              Create My Family Home Plan
            </Link>
            <p className="text-sm text-body-secondary/70">
              Or{" "}
              <Link href="/get-started" className="text-clay underline hover:text-clay-dark">
                fill out the intake form
              </Link>{" "}
              to connect &rarr;
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

