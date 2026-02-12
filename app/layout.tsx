import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BabyHomePlan: Creating Homes for Growing Families",
    template: "%s | BabyHomePlan",
  },
  description:
    "We help growing families in Southern California find, sell, and prepare the right home so you can focus on your health, your baby, and what really matters.",
  keywords: [
    "family buyer agent southern california",
    "home for growing family",
    "move before baby",
    "calm home plan",
    "family-friendly homes san diego",
    "buyer agent orange county",
    "buyer agent los angeles",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BabyHomePlan",
    title: "BabyHomePlan: Creating Homes for Growing Families",
    description:
      "We help growing families in Southern California find, sell, and prepare the right home.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "BabyHomePlan",
              url: siteUrl,
              description:
                "Creating homes for growing families. Family-focused real estate agency serving Southern California. We help growing families find, sell, and prepare the right home.",
              areaServed: [
                { "@type": "County", name: "San Diego County, CA" },
                { "@type": "County", name: "Orange County, CA" },
                { "@type": "County", name: "Los Angeles County, CA" },
              ],
              serviceType: [
                "Buyer Representation",
                "Seller Representation",
                "Home Preparation Coordination",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

