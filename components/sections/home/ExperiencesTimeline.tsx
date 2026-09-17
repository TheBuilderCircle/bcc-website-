/* eslint-disable @next/next/no-img-element */
import { experienceTracks } from "@/lib/content";
import GuideLines from "@/components/ui/GuideLines";
import ExperienceBlock from "./ExperienceBlock";

const aligns: Array<"left" | "right"> = ["right", "left", "left", "right", "left"];

export default function ExperiencesTimeline() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-page py-24">
      <GuideLines />

      <img
        src="/svg/decorative/bird-3.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-8 top-20 hidden w-64 opacity-70 lg:block"
      />
      <img
        src="/svg/decorative/arrow-pair.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-24 top-40 hidden w-40 opacity-70 lg:block"
      />

      <div className="relative mx-auto flex max-w-[1279px] flex-col items-center gap-[19px] px-6 text-center">
        <h2 className="max-w-[461px] font-space-grotesk text-section font-medium text-ink-strong">
          One Conference, Five Connected Experiences.
        </h2>
        <p className="max-w-[587px] font-body text-base text-muted">
          BCCG targets blockchain communities, providing spaces for policy, technology, products,
          capital, and talent, ensuring connections at the event.
        </p>
      </div>

      <div className="relative mx-auto mt-24 flex max-w-[1279px] flex-col gap-32 px-6">
        {experienceTracks.map((track, i) => (
          <ExperienceBlock key={track.id} track={track} align={aligns[i]} />
        ))}
      </div>

      <img
        src="/svg/decorative/bird-2.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-12 hidden w-40 opacity-70 lg:block"
      />
    </section>
  );
}
