import type { ExperienceTrack } from "@/lib/content";

export default function ExperienceBlock({
  track,
  align,
  className = "",
}: {
  track: ExperienceTrack;
  align: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 flex w-full ${align === "left" ? "justify-start" : "justify-end"} ${className}`}
    >
      <div className="flex w-[534px] max-w-full flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-[9px]">
          <h3 className="font-space-grotesk text-experience-title leading-[34px] font-bold text-ink-strong">
            {track.title}
          </h3>
          <p className="font-playfair text-md-tight leading-[27px] italic text-accent">
            {track.subLine}
          </p>
        </div>
        <p className="whitespace-pre-line font-body text-base leading-[19px] text-muted">{track.body}</p>
      </div>
    </div>
  );
}
