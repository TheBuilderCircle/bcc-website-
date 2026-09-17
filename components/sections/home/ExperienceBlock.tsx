import type { ExperienceTrack } from "@/lib/content";

export default function ExperienceBlock({
  track,
  align,
}: {
  track: ExperienceTrack;
  align: "left" | "right";
}) {
  return (
    <div className={`relative z-10 flex w-full ${align === "left" ? "justify-start" : "justify-end"}`}>
      <div className="flex w-[534px] max-w-full flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-[9px]">
          <h3 className="font-space-grotesk text-experience-title font-bold text-ink-strong">
            {track.title}
          </h3>
          <p className="font-playfair text-md-tight italic text-accent">{track.subLine}</p>
        </div>
        <p className="whitespace-pre-line font-body text-base text-muted">{track.body}</p>
      </div>
    </div>
  );
}
