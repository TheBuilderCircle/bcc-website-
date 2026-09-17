/** Hairline vertical guides (at the design's ~114px margins) plus optional
 * horizontal guide lines with 6px corner dots, used behind two Home
 * sections. Purely decorative, absolutely positioned within a `relative`
 * section wrapper. */
export default function GuideLines({
  horizontalPositions = [],
  className = "",
}: {
  horizontalPositions?: number[];
  className?: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute top-0 bottom-0 left-[113.5px] w-px bg-hairline" />
      <div className="absolute top-0 bottom-0 right-[113.5px] w-px bg-hairline" />
      {horizontalPositions.map((y) => (
        <div key={y}>
          <div className="absolute inset-x-0 h-px bg-hairline" style={{ top: y }} />
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-hairline-dot"
            style={{ left: "111px", top: y - 3 }}
          />
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-hairline-dot"
            style={{ right: "111px", top: y - 3 }}
          />
        </div>
      ))}
    </div>
  );
}
