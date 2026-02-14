import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { businessInfo } from "@/lib/businessInfo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://babyhomeplan.com"),
  title: {
    default: "BabyHomePlan — Homes for Growing Families",
    template: "%s | BabyHomePlan",
  },
  description: "Family-focused real estate plans across Southern California.",
  openGraph: {
    siteName: "BabyHomePlan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={dmSans.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: businessInfo.name,
              legalName: businessInfo.legalName,
              url: siteUrl,
              telephone: businessInfo.telephone,
              email: businessInfo.email.general,
              address: {
                "@type": "PostalAddress",
                addressLocality: businessInfo.address.locality,
                addressRegion: businessInfo.address.region,
                addressCountry: businessInfo.address.country,
              },
              areaServed: businessInfo.serviceAreas.map((area) => ({
                "@type": "AdministrativeArea",
                name: `${area}, CA`,
              })),
              ...(businessInfo.sameAs.length > 0 && { sameAs: businessInfo.sameAs }),
              ...(process.env.NEXT_PUBLIC_DRE_LICENSE && {
                identifier: {
                  "@type": "PropertyValue",
                  name: "DRE License",
                  value: process.env.NEXT_PUBLIC_DRE_LICENSE,
                },
              }),
            }),
          }}
        />
      </body>
    </html>
  );
}

