import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const checkItems = [
  "Baby on the way - but your home feels too small",
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
                We help growing families in San Diego find, sell, and prepare the right home — so you
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
      </div>
    </>
  );
}

