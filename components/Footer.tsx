"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  Services: [
    { label: "How We Help", href: "/how-we-help" },
    { label: "Buy a Home", href: "/buy" },
    { label: "Sell & Upgrade", href: "/sell-upgrade" },
    { label: "33-Day Express", href: "/33-day-express" },
  ],
  Areas: [
    { label: "San Diego County", href: "/areas/san-diego-county" },
    { label: "Orange County", href: "/areas/orange-county" },
    { label: "Los Angeles County", href: "/areas/los-angeles-county" },
    { label: "All Areas", href: "/areas" },
  ],
  Company: [
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Get Started", href: "/get-started" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclosures", href: "/disclosures" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <footer className="bg-offwhite py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-body-secondary text-sm">
            Buyer Agents for Families in Southern California — Serving San Diego &bull; Orange County &bull; Los Angeles
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-white/70">
          Buyer Agents for Families in Southern California · Serving San Diego · Orange County · Los Angeles
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="BabyHomePlan.com"
                className="h-10 w-auto object-contain brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Creating homes for growing families in Southern California.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4 font-sans">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} BabyHomePlan.com. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center max-w-xl">
            BabyHomePlan is a licensed real estate brokerage in the State of California.
            DRE License #XXXXXXXX. All information is deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}

