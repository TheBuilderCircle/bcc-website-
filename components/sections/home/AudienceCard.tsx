/* eslint-disable @next/next/no-img-element */
import type { AudienceCard as AudienceCardType } from "@/lib/content";

const iconSrc: Record<AudienceCardType["icon"], string> = {
  gov: "/svg/icons/icon-gov.svg",
  chart: "/svg/icons/icon-chart.svg",
  cube: "/svg/icons/icon-cube.svg",
  person: "/svg/icons/icon-person.svg",
  capital: "/svg/icons/icon-capital.svg",
  search: "/svg/icons/icon-search.svg",
};

export default function AudienceCard({ card }: { card: AudienceCardType }) {
  const isLight = card.variant === "light";
  return (
    <div
      className={`flex flex-col items-start gap-2.5 rounded-panel px-8 py-6 ${
        isLight ? "bg-card-light" : "bg-card-dark/85 backdrop-blur-md"
      }`}
    >
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-pill bg-accent/20">
        <img src={iconSrc[card.icon]} alt="" aria-hidden className="h-6 w-6" />
      </div>
      <div className="flex flex-col items-start gap-3">
        <h3
          className={`font-space-grotesk text-audience-title font-bold ${
            isLight ? "text-ink-card" : "text-white"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`max-w-[392px] font-body text-base ${
            isLight ? "text-ink-strong" : "text-muted-serif"
          }`}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
