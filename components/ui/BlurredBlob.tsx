/* eslint-disable @next/next/no-img-element */

/** A decorative blue glow shape, always rendered heavily blurred within a
 * `relative overflow-hidden` dark panel. Caller controls exact placement
 * and size via `className` (Tailwind arbitrary values). */
export default function BlurredBlob({
  src,
  className = "",
}: {
  src: "/svg/decorative/blob-1.svg" | "/svg/decorative/blob-2.svg" | "/svg/decorative/blob-3.svg";
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute blur-[160px] ${className}`}
    />
  );
}
