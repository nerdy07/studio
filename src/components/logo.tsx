"use client";

import Link from "next/link";
import { Scale } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export function Logo() {
  let state;
  let inSidebar = true;
  try {
    // This will throw an error if not in a SidebarProvider, which is expected on public pages.
    ({ state } = useSidebar());
  } catch (e) {
    // Default state when not in a sidebar context.
    state = "expanded";
    inSidebar = false;
  }

  const textColorClass = inSidebar
    ? "text-sidebar-foreground"
    : "text-foreground";

  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Back to homepage"
      data-state={state}
    >
      <div className="p-2 bg-primary text-primary-foreground rounded-md group-hover:bg-primary/90 transition-colors">
        <Scale className="h-6 w-6" />
      </div>
      <div
        className={` text-[#fff] overflow-hidden transition-all duration-200 ease-in-out group-data-[state=collapsed]:w-0 group-data-[state=collapsed]:opacity-0 max-sm:hidden`}
      >
        <span className="font-bold text-sm font-headline uppercase tracking-wider whitespace-nowrap">
          Zamfara Judiciary
        </span>
        <br />
        <span className="text-xs font-headline uppercase tracking-wider -mt-1 block whitespace-nowrap">
          e-Affidavit System
        </span>
      </div>
    </Link>
  );
}
