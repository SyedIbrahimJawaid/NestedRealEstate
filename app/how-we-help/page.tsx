import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import {
  IconHeart,
  IconChecklist,
  IconShield,
  IconHouse,
  IconKey,
  IconCalendar,
  IconSafetyGate,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "How We Help — Family-Focused Real Estate",
  description:
    "Learn how BabyHomePlan.com helps growing families in Southern California find, sell, and prepare the right home with a calm, coordinated plan.",
  alternates: { canonical: "https://babyhomeplan.com/how-we-help" },
};

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We listen. You tell us about your family, timeline, and what matters most. We assess your situation honestly — no sales pitch.",
    Icon: IconChecklist,
  },
  {
    step: "02",
    title: "Personalized Plan",
    description:
      "Based on your needs, we create a clear plan: buy, sell & upgrade, or our accelerated Express pathway if time is tight.",
    Icon: IconChecklist,
  },
  {
    step: "03",
    title: "Coordinated Search",
    description:
      "We find homes that fit — not just the specs, but the life you're building. Safe neighborhoods, good schools, the right space.",
    Icon: IconHouse,
  },
  {
    step: "04",
    title: "Negotiation & Closing",
    description:
      "We negotiate firmly on your behalf and coordinate every detail through closing. No surprises.",
    Icon: IconKey,
  },
  {
    step: "05",
    title: "Home Preparation",
    description:
      "After keys, we connect you with trusted partners for baby-safe renovations, nursery setup, and essential upgrades.",
    Icon: IconSafetyGate,
  },
  {
    step: "06",
    title: "Move-In Ready",
    description:
      "You focus on your family. We make sure your home is ready — safe, beautiful, and welcoming for your growing family.",
    Icon: IconHeart,
  },
];

const differentiators = [
  {
    title: "Family-First Approach",
    description: "Every decision we make considers your family's health, safety, and well-being first.",
    Icon: IconHeart,
  },
  {
    title: "Coordinated Team",
    description: "One point of contact who manages inspectors, contractors, lenders, and more.",
    Icon: IconChecklist,
  },
  {
    title: "Transparent Communication",
    description: "We tell you the truth — even when it's not what you want to hear. No games.",
    Icon: IconShield,
  },
  {
    title: "SoCal Expertise",
    description: "Deep knowledge of San Diego, Orange County, and Los Angeles family neighborhoods.",
    Icon: IconHouse,
  },
  {
    title: "Speed When Needed",
    description: "Our Express pathway can close in as few as 45 days — when the situation qualifies.",
    Icon: IconCalendar,
  },
  {
    title: "Trusted Partner Network",
    description: "Vetted contractors, inspectors, and specialists who understand family timelines.",
    Icon: IconSafetyGate,
  },
];

export default function HowWeHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/calm-checklist-plan.png')" }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              A Calm Plan for Your Family&apos;s Biggest Move
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              We don&apos;t just help you buy or sell a home. We create a coordinated plan so your
              family can move forward with confidence — no chaos, no surprises.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Create My Family Home Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              How We Work With You
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              From first conversation to move-in day, every step is planned and coordinated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-clay">
                    <item.Icon className="w-10 h-10" />
                  </div>
                  <span className="text-4xl font-bold text-clay/20 font-serif">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                <p className="text-body-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family-Ready Preparation Image Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src="/images/nursery-corner.png"
                alt="Beautiful nursery room ready for a baby"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
                Home Preparation
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                We Make Your Home Family-Ready
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-6">
                From nursery setup to safety upgrades, we coordinate everything through our trusted
                partner network so your home is ready before the baby arrives.
              </p>
              <ul className="space-y-3 text-body-secondary">
                <li className="flex items-center gap-3">
                  <IconSafetyGate className="w-5 h-5 text-sage flex-shrink-0" />
                  Baby-safe renovations and upgrades
                </li>
                <li className="flex items-center gap-3">
                  <IconHeart className="w-5 h-5 text-sage flex-shrink-0" />
                  Nursery setup coordination
                </li>
                <li className="flex items-center gap-3">
                  <IconSafetyGate className="w-5 h-5 text-sage flex-shrink-0" />
                  Trusted partner network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Why BabyHomePlan
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-white rounded-card">
                <div className="flex-shrink-0 text-clay">
                  <item.Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-body-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative aspect-[4/3] rounded-card overflow-hidden mb-8">
                <Image
                  src="/images/family-ready-preparation.png"
                  alt="Happy family with child in their new home surrounded by moving boxes"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Let&apos;s Build Your Plan
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-6">
                Every family&apos;s situation is unique. Tell us about yours and we&apos;ll create a clear
                path forward — whether you need to buy, sell, or both.
              </p>
              <ul className="space-y-3 text-body-secondary">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No obligation — just clarity
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  We respond within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Your information is kept private
                </li>
              </ul>
            </div>
            <LeadForm variant="sidebar" />
          </div>
        </div>
      </section>
    </>
  );
}

