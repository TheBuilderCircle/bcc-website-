"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import Pill from "@/components/ui/Pill";
import { fitPadding } from "@/components/ui/partner-fit";
import type { Partner, PartnerLinks } from "@/lib/content";

const linkLabels: { key: keyof PartnerLinks; label: string }[] = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "x", label: "X" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "youtube", label: "YouTube" },
  { key: "whatsapp", label: "WhatsApp" },
];

/** Modal card with a partner's logo, type, description and links. Opens itself
 * as a native modal <dialog> on mount (so Esc, focus trapping and focus return
 * come from the browser) and tells its parent when it closes. */
export default function PartnerDialog({
  partner,
  onClose,
}: {
  partner: Partner;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const links = linkLabels.filter(({ key }) => partner.links?.[key]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        // Clicks on the backdrop land on the <dialog> itself, not its inner panel.
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[640px] overflow-y-auto overscroll-contain rounded-panel bg-card-light p-0 text-ink-strong backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-5 sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => ref.current?.close()}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-pill bg-ink/80 text-white backdrop-blur hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:top-6 sm:right-6"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div
          className={`relative h-44 w-full overflow-hidden rounded-panel sm:h-52 ${
            partner.tone === "dark"
              ? "bg-ink"
              : `${partner.tone === "cream" ? "bg-card-cream" : "bg-card-light"} shadow-[inset_0_0_0_1px_#e4e4e4]`
          }`}
        >
          <Image
            src={partner.src}
            alt=""
            fill
            sizes="(min-width: 640px) 576px, 90vw"
            className={`object-contain ${fitPadding[partner.fit ?? "default"]}`}
          />
        </div>

        <div className="mt-6 flex flex-col items-start gap-3">
          <Pill>{partner.type}</Pill>
          <h2
            id={titleId}
            className="font-space-grotesk text-experience-title font-medium text-ink-strong"
          >
            {partner.name}
          </h2>
          {partner.role && (
            <p className="font-playfair text-md-tight italic text-accent">{partner.role}</p>
          )}
          {partner.description?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-body text-base leading-relaxed text-muted-on-light"
            >
              {paragraph}
            </p>
          ))}
          {links.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-2">
              {links.map(({ key, label }) => (
                <li key={key}>
                  <a
                    href={partner.links![key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-1.5 rounded-pill px-4 font-space-grotesk text-sm font-medium text-ink-strong shadow-[inset_0_0_0_1px_#bdbdbd] transition-shadow hover:shadow-[inset_0_0_0_1px_#2a2a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {label}
                    <span aria-hidden>↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </dialog>
  );
}
