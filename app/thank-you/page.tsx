import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | BabyHomePlan",
  description: "Thank you for your interest in BabyHomePlan.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-offwhite py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-card p-8 md:p-12 shadow-lg">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">Thank You!</h1>
                <p className="text-body-secondary text-lg leading-relaxed mb-6">
                  We received your Family Home Plan request. We&apos;ll review your details and reach out within 24
                  hours with a clear recommendation and next steps.
                </p>
                <p className="text-body-secondary text-sm mb-8">
                  In the meantime, feel free to explore our resources or learn more about the areas we serve.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/" className="btn-primary text-center">
                  Return Home
                </Link>
                <Link
                  href="/areas"
                  className="border-2 border-clay text-clay font-semibold px-8 py-4 rounded-lg hover:bg-clay hover:text-white transition-colors text-center"
                >
                  Explore Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

