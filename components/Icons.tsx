import type { SVGProps } from "react";

const iconClass = "w-6 h-6 shrink-0";

export function IconHouse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function IconKey(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <circle cx="7" cy="14" r="3" />
      <path d="M10 14h11" />
      <path d="M17 14v3" />
      <path d="M20 14v2" />
    </svg>
  );
}

export function IconChecklist(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M9 4h6" />
      <path d="M9 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
      <path d="M8.5 10l1.5 1.5L13 9" />
      <path d="M14.5 10H19" />
      <path d="M8.5 15l1.5 1.5L13 14" />
      <path d="M14.5 15H19" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" />
    </svg>
  );
}

export function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M12 21s-7-4.4-9-8.4C1 9.2 3.4 6.7 6.3 6.7c2 0 3.4 1.1 3.7 2.5.3-1.4 1.7-2.5 3.7-2.5 2.9 0 5.3 2.5 3.3 5.9C19 16.6 12 21 12 21z" />
    </svg>
  );
}

export function IconCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 9h18" />
    </svg>
  );
}

export function IconMovingBox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M4 9l8-5 8 5" />
      <path d="M4 9v11h16V9" />
      <path d="M9 9l3 2 3-2" />
      <path d="M12 11v9" />
    </svg>
  );
}

export function IconBabyStroller(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <circle cx="8" cy="20" r="2" />
      <circle cx="16" cy="20" r="2" />
      <path d="M18 5l-3 3" />
      <path d="M10 10c0-3 2.5-5 5.5-5 2.2 0 4.1 1.1 5 3" />
      <path d="M10 10h7l2 6H7l3-6z" />
      <path d="M9 18h6" />
    </svg>
  );
}

export function IconSafetyGate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <rect x="4" y="6" width="16" height="14" rx="1" />
      <path d="M8 8v10" />
      <path d="M12 8v10" />
      <path d="M16 8v10" />
      <path d="M14.5 12h2" />
    </svg>
  );
}

/** Express boundary icon — face + check (doc design) */
export function IconExpressBoundary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clay" {...props}>
      <rect x="6" y="6" width="36" height="36" rx="10" />
      <circle cx="20" cy="21" r="5" />
      <path d="M12 36c2.2-6 13.8-6 16 0" />
      <circle cx="32" cy="31" r="6" />
      <path d="M29.5 31l1.8 1.8 3.7-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Speed boundary icon — calendar + check (doc design) */
export function IconSpeedBoundary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clay" {...props}>
      <rect x="6" y="6" width="36" height="36" rx="10" />
      <circle cx="23" cy="27" r="10" />
      <path d="M20 14h6" />
      <path d="M26.5 15.5l2.5 2.5" />
      <path d="M23 27l4-3" />
      <circle cx="34" cy="32" r="5" />
      <path d="M32 32l1.4 1.4 3-3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** No permit boundary icon — folder + diagonal (doc design) */
export function IconNoPermitBoundary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clay" {...props}>
      <rect x="6" y="6" width="36" height="36" rx="10" />
      <path d="M17 15h10l4 4v14H17V15z" strokeLinejoin="round" />
      <path d="M27 15v4h4" strokeLinejoin="round" />
      <path d="M19.5 23h9" />
      <circle cx="22" cy="30" r="3" />
      <path d="M16 36L34 18" />
    </svg>
  );
}

/** Honest boundary icon — heart + line (doc design) */
export function IconHonestBoundary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clay" {...props}>
      <rect x="6" y="6" width="36" height="36" rx="10" />
      <path d="M14 26c2.8-5 7-8 10-8s7.2 3 10 8c-2.8 5-7 8-10 8s-7.2-3-10-8z" strokeLinejoin="round" />
      <circle cx="24" cy="26" r="3" />
      <path d="M24 18v16" opacity="0.9" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function IconMapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
