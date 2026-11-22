/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, anchorHref } from "@/lib/content";
import Button from "@/components/ui/Button";

/** White-on-dark top nav, fixed to the top of the viewport so it stays with
 * the page as it scrolls. It is transparent over the dark hero panel and turns
 * into a solid, blurred dark bar once the page scrolls (or the mobile menu is
 * open), so the links stay readable over the light sections below. The desktop layout below `xl` doesn't fit the
 * fixed 1179px Figma width, so it collapses to a hamburger menu instead. */
export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  const renderLink = (item: (typeof navItems)[number], onNavigate?: () => void) => {
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
        onClick={onNavigate}
        className={`rounded-pill px-4 py-2 font-inter text-nav font-medium whitespace-nowrap hover:bg-white/10 hover:text-white ${colorClasses}`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-2 top-2 z-50 rounded-panel px-[37px] transition-[background-color,box-shadow,padding] duration-300 ${
        solid ? "bg-ink/85 pt-0 shadow-lg shadow-black/25 backdrop-blur-md" : "bg-transparent pt-2.5"
      }`}
    >
    <nav
      className={`relative flex items-center justify-between gap-2.5 p-2.5 transition-[height] duration-300 ${
        scrolled ? "h-[68px]" : "h-[78px]"
      }`}
    >
      <div className="flex w-full items-center justify-between xl:w-294.75 xl:gap-150">
        <Link href="/" className="flex items-center">
          <img src="/svg/decorative/logo.svg" alt="BCCG" className="h-[38.919px] w-[84px]" />
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => renderLink(item))}
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-pill text-white hover:bg-white/10 xl:hidden"
        >
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden>
            {open ? (
              <path
                d="M1 1L19 15M19 1L1 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M0 1H20M0 8H20M0 15H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="hidden xl:block">
        <Button href="/register" size="lg" className="w-55.75">
          Register for event
        </Button>
      </div>

      {open && (
        <div className="absolute top-full right-0 left-0 z-30 mt-2 flex flex-col gap-1 rounded-panel bg-ink p-4 xl:hidden">
          {navItems.map((item) => renderLink(item, () => setOpen(false)))}
          <Button href="/register" size="lg" className="mt-2 w-full">
            Register for event
          </Button>
        </div>
      )}
    </nav>
    </header>
  );
}
