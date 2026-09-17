/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, anchorHref } from "@/lib/content";
import Button from "@/components/ui/Button";

/** White-on-dark top nav. Always overlays a dark hero panel (see each
 * page's top-level `relative` wrapper), so it is positioned by the caller,
 * not by this component. */
export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex h-[78px] items-center justify-between p-2.5">
      <div className="flex w-[1179px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/svg/decorative/logo.svg" alt="BCCG" className="h-[38.919px] w-[84px]" />
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const href = item.anchor ? anchorHref(item.anchor, pathname) : item.href!;
            const isActive = item.href !== undefined && pathname === item.href;
            const isExperience = item.label === "Experience";
            const colorClasses = isActive
              ? "bg-white/10 text-white"
              : isExperience
                ? "text-white/60"
                : "text-muted";
            return (
              <Link
                key={item.label}
                href={href}
                className={`rounded-pill px-4 py-2 font-inter text-nav font-medium whitespace-nowrap hover:bg-white/10 hover:text-white ${colorClasses}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <Button href="/register" size="lg" className="w-[223px]">
        Register for event
      </Button>
    </nav>
  );
}
