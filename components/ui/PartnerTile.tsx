"use client";

import { useState } from "react";
import Image from "next/image";
import PartnerDialog from "@/components/ui/PartnerDialog";
import { fitPadding } from "@/components/ui/partner-fit";
import type { Partner } from "@/lib/content";

/** One partner logo on a rounded tile (dark or light, per the logo). Clicking it
 * opens the partner's details card. The caller sets the tile size through
 * `className`. Renders an <li>, so use it inside a <ul>. */
export default function PartnerTile({
  partner,
  className = "",
  sizes,
  decorative = false,
}: {
  partner: Partner;
  className?: string;
  sizes: string;
  /** A duplicate copy in the looping marquee: hidden from assistive tech and the
   * tab order (the first copy is the one keyboard users reach), still clickable. */
  decorative?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`group relative shrink-0 rounded-panel shadow-black/10 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${
        partner.tone === "dark" ? "bg-ink" : partner.tone === "cream" ? "bg-card-cream" : "bg-card-light"
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        tabIndex={decorative ? -1 : undefined}
        aria-label={decorative ? undefined : `${partner.name}: view partner details`}
        aria-haspopup="dialog"
        className="absolute inset-0 cursor-pointer overflow-hidden rounded-panel focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset focus-visible:outline-none"
      >
        <Image
          src={partner.src}
          alt=""
          fill
          sizes={sizes}
          className={`object-contain ${fitPadding[partner.fit ?? "default"]}`}
        />
        <span
          aria-hidden
          className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-pill bg-accent text-base leading-none font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          +
        </span>
      </button>
      {open && <PartnerDialog partner={partner} onClose={() => setOpen(false)} />}
    </li>
  );
}
