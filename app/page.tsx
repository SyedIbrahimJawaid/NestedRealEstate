import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "BabyHomePlan.com — Creating Homes for Growing Families",
  description:
    "We help growing families in Southern California find, sell, and prepare the right home — so you can focus on your health, your baby, and what really matters.",
  alternates: { canonical: "https://babyhomeplan.com/" },
};

const checkItems = [
  "Baby on the way—but your home feels too small",
  "You need to find and move within a few months",
  "Buying or selling feels overwhelming",
  "Renovations need to be quick and safe",
];

export default function HomePage() {
  return (
    <>
      {/* Hero + Situation + Floating Form */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[560px] md:min-h-[600px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-home.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6">
                A Home That&apos;s Ready for Your Family — When It Matters Most
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
                We help growing families in Southern California find, sell, and prepare the right home — so you
                can focus on your health, your baby, and what really matters.
              </p>
              <Link href="/get-started" className="btn-primary text-lg !py-4 !px-10 inline-block mb-8">
                Create My Family Home Plan
              </Link>
              <p className="text-white/80 text-sm tracking-wide">
                Family-Focused &bull; Trusted Partners &bull; SoCal Experts
              </p>
            </div>
          </div>
        </section>

        {/* Is This Your Situation + Floating Form */}
        <section className="relative section-padding bg-white -mt-16 md:-mt-24">
          <div className="container-max">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
              {/* Left — Situation */}
              <div className="pt-8 lg:pt-16">
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
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-body-secondary text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Floating Form Card */}
              <div className="lg:sticky lg:top-24 lg:-mt-48">
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gradient-to-b from-sage/10 to-offwhite">
          <div className="container-max">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                What Families Are Saying
              </h2>
              <p className="text-lg md:text-xl text-body-secondary max-w-3xl mx-auto">
                Real stories from families who made smooth, confident moves with our help.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 - Victoria & Mark */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-clay"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-primary mb-4">
                  Moving Before Baby
                </h3>

                {/* Testimonial Text */}
                <p className="text-body-secondary leading-relaxed mb-6">
                  We were in a rush with our second baby on the way, and they made everything so much easier. We moved into the perfect home ahead of schedule!
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-clay to-clay-dark flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                    V&M
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Victoria & Mark</p>
                    <p className="text-sm text-body-secondary">Carlsbad</p>
                  </div>
                </div>

                {/* CTA Link */}
                <Link
                  href="/resources/moving-before-baby"
                  className="inline-flex items-center gap-2 text-clay font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read the Guide
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Testimonial 2 - Sara & John */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-clay"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-primary mb-4">
                  Buying While Pregnant
                </h3>

                {/* Testimonial Text */}
                <p className="text-body-secondary leading-relaxed mb-6">
                  The team guided us through buying and selling seamlessly. We could focus on our kids, knowing the details were handled.
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage to-primary flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                    S&J
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Sara & John</p>
                    <p className="text-sm text-body-secondary">Irvine</p>
                  </div>
                </div>

                {/* CTA Link */}
                <Link
                  href="/resources/buying-while-pregnant"
                  className="inline-flex items-center gap-2 text-clay font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read the Guide
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Testimonial 3 - Daniel & Emily */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-clay"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-primary mb-4">
                  First-Time Family Buyers
                </h3>

                {/* Testimonial Text */}
                <p className="text-body-secondary leading-relaxed mb-6">
                  From our first call, we knew we made the right choice. Stress-free, honest guidance all the way to our new keys.
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-sage flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                    D&E
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Daniel & Emily</p>
                    <p className="text-sm text-body-secondary">Los Angeles</p>
                  </div>
                </div>

                {/* CTA Link */}
                <Link
                  href="/resources/first-time-buyer-family"
                  className="inline-flex items-center gap-2 text-clay font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read the Guide
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

