"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackCtaClick } from "@/lib/analytics";

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

/**
 * CTA link that fires a GA4 cta_click event on click.
 * Drop-in replacement for <Link> on CTA buttons.
 */
export default function CtaLink({ href, children, className, label }: CtaLinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    const ctaLabel = label || (typeof children === "string" ? children : "CTA");
    trackCtaClick(ctaLabel, pathname);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
