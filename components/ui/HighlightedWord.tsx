import type { ReactNode } from "react";

type Tone = "blue" | "purple";

const rectOutline: Record<Tone, string> = {
  blue: "",
  purple: "shadow-[inset_0_0_0_1px_#7300ff]",
};

const dotOutline: Record<Tone, string> = {
  blue: "shadow-[inset_0_0_0_1px_#007bff]",
  purple: "shadow-[inset_0_0_0_1px_#7300ff]",
};

const corners = ["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"];

/** Tinted rectangle + 4 corner dots behind a headline word, matching the
 * design's "selection marker" motif. Sized by padding around the text
 * rather than copied Figma pixel offsets, since those depend on Figma's
 * own text metrics, not the browser's. */
export default function HighlightedWord({
  children,
  tone = "blue",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={`relative inline-block px-2 py-1 ${className}`}>
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 bg-accent-tint/20 ${rectOutline[tone]}`}
      />
      {corners.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute ${pos} h-1 w-1 bg-marker-dot-fill ${dotOutline[tone]}`}
        />
      ))}
      {children}
    </span>
  );
}
