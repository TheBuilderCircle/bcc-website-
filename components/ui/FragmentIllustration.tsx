/* eslint-disable @next/next/no-img-element */
import type { IllustrationFragment } from "@/lib/illustrations";

const STAGGER_MS = 25;

/** Renders a Figma illustration reconstructed from its individual vector
 * fragments, each popping in on a shared 2s infinite loop. Fragments are
 * phase-locked to one wall-clock loop via *negative* animation-delay, so
 * the whole illustration always assembles, holds, and restarts in sync. */
export default function FragmentIllustration({
  fragments,
  widthPx,
  heightPx,
  className,
}: {
  fragments: IllustrationFragment[];
  widthPx: number;
  heightPx: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className ?? ""}`}
      style={{ aspectRatio: `${widthPx} / ${heightPx}` }}
    >
      {fragments.map((fragment, i) => (
        <img
          key={fragment.id}
          src={fragment.src}
          alt=""
          className="absolute motion-safe:animate-[illustration-pop-in_2s_cubic-bezier(0.16,1,0.3,1)_infinite]"
          style={{
            ...fragment.pos,
            animationDelay: `${-(i * STAGGER_MS)}ms`,
          }}
        />
      ))}
    </div>
  );
}
