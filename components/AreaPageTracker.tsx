"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackAreaPageView } from "@/lib/analytics";

interface AreaPageTrackerProps {
  areaType: "county" | "city";
  areaName: string;
}

/**
 * Invisible component that fires area_page_view on mount.
 * Place at the top of county and city page templates.
 */
export default function AreaPageTracker({ areaType, areaName }: AreaPageTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    trackAreaPageView(areaType, areaName, pathname);
  }, [areaType, areaName, pathname]);

  return null;
}
