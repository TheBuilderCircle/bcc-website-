/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { experienceTracks } from "@/lib/content";
import { clusterA, clusterB, clusterC } from "@/lib/illustrations";
import FragmentIllustration from "@/components/ui/FragmentIllustration";
import ExperienceBlock from "./ExperienceBlock";

/** Phone/tablet version of the Experiences timeline (below `lg`, where the
 * 1512px absolute canvas can't fit). One dashed line travels the whole column:
 * a straight gutter beside each text block, then an S-swoop across an
 * illustration row, alternating left-to-right and right-to-left. Both gutters
 * are the container's edges, so a swoop's ends land exactly on the gutters. */

type Side = "left" | "right";

/** Grey dashes with the design's blue glow, and a blue dashed layer on top that
 * flows along the curve (fading in and out like the desktop's second path). */
function Swoop({ from }: { from: Side }) {
  const d = from === "left" ? "M0 0C0 55 100 45 100 100" : "M100 0C100 55 0 45 0 100";
  const gradientId = `swoop-${from}`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible drop-shadow-[0_2px_10px_rgba(0,123,255,0.6)]"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#007bff" />
          <stop offset="0.5" stopColor="#007bff" stopOpacity="0" />
          <stop offset="1" stopColor="#007bff" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="#6f6f6f"
        strokeWidth="3"
        strokeDasharray="7 9"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={d}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        strokeDasharray="7 9"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="motion-safe:animate-[path-flow_1.4s_linear_infinite]"
      />
    </svg>
  );
}

/** A text block with the dashed gutter running down one side and a node dot on
 * the title. `fade` softens the line where the timeline starts/ends. */
function TextRow({
  track,
  side,
  fade,
}: {
  track: (typeof experienceTracks)[number];
  side: Side;
  fade?: "top" | "bottom";
}) {
  const edge = side === "left" ? "left-0" : "right-0";
  const mask =
    fade === "top"
      ? "[mask-image:linear-gradient(to_bottom,transparent,#000_18%)]"
      : fade === "bottom"
        ? "[mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
        : "";
  return (
    <div className="relative py-2">
      <span
        aria-hidden
        className={`absolute inset-y-0 ${edge} w-0 border-l-[3px] border-dashed border-[#6f6f6f] ${mask}`}
      />
      <span
        aria-hidden
        className={`absolute top-[18px] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-page),0_0_14px_rgba(0,123,255,0.8)] ${
          side === "left" ? "left-[1.5px]" : "left-[calc(100%-1.5px)]"
        }`}
      />
      <div className={side === "left" ? "pl-9" : "pr-9"}>
        <ExperienceBlock track={track} align="left" />
      </div>
    </div>
  );
}

function SwoopRow({ from, children }: { from: Side; children: ReactNode }) {
  return (
    <div className="relative h-[250px] sm:h-[300px]">
      <Swoop from={from} />
      {children}
    </div>
  );
}

/** clusterB plus the coral head, which the design positions on the canvas rather
 * than inside the cluster frame (474x471 bounding box). */
function BirdB({ className }: { className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`} style={{ aspectRatio: "474 / 471" }}>
      <FragmentIllustration
        fragments={clusterB}
        widthPx={384.857}
        heightPx={471.225}
        className="absolute top-0 left-[18.8%] w-[81.2%]"
      />
      <img
        src="/svg/decorative/coral-ring.svg"
        alt=""
        className="absolute top-[32.9%] left-0 w-[42.3%]"
      />
    </div>
  );
}

/** clusterC plus its two canvas-positioned wing/tail pieces (418x500 box). */
function BirdC({ className }: { className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`} style={{ aspectRatio: "418 / 500" }}>
      <FragmentIllustration
        fragments={clusterC}
        widthPx={221.62}
        heightPx={499.999}
        className="absolute top-0 left-[17.7%] w-[53%]"
      />
      <img
        src="/svg/decorative/experiences/cluster-a/frag-58-112-1848.svg"
        alt=""
        className="absolute top-[2.4%] left-0 w-[26.8%]"
      />
      <img
        src="/svg/decorative/experiences/cluster-a/frag-51-112-1834.svg"
        alt=""
        className="absolute top-[20.2%] left-[63.2%] w-[36.9%]"
      />
    </div>
  );
}

export default function ExperiencesMobile() {
  const [policy, devLabs, marketplace, startup, university] = experienceTracks;

  return (
    <div className="relative mx-auto mt-14 max-w-[520px] px-6 sm:mt-16 lg:hidden">
      <div className="relative">
        <TextRow track={policy} side="left" fade="top" />

        <SwoopRow from="left">
          <FragmentIllustration
            fragments={clusterA}
            widthPx={455.841}
            heightPx={499.999}
            className="absolute top-2 right-2 w-[38%] sm:w-[34%]"
          />
        </SwoopRow>

        <TextRow track={devLabs} side="right" />

        <SwoopRow from="right">
          <img
            src="/svg/decorative/arrow-pair.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 w-[40%] sm:w-[36%]"
          />
          {/* The badge rides the midpoint of the S, like it sits on the curve in the design. */}
          <img
            src="/svg/decorative/experiences/curve-arrow.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-[60px] -translate-x-1/2 -translate-y-1/2"
          />
        </SwoopRow>

        <TextRow track={marketplace} side="left" />

        <SwoopRow from="left">
          <BirdB className="top-0 right-0 w-[40%] sm:w-[34%]" />
        </SwoopRow>

        <TextRow track={startup} side="right" />

        <SwoopRow from="right">
          <BirdC className="top-0 left-2 w-[38%] sm:w-[32%]" />
        </SwoopRow>

        <TextRow track={university} side="left" fade="bottom" />
      </div>
    </div>
  );
}
