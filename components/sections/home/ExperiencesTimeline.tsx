/* eslint-disable @next/next/no-img-element */
import { experienceTracks } from "@/lib/content";
import { clusterA, clusterB, clusterC } from "@/lib/illustrations";
import GuideLines from "@/components/ui/GuideLines";
import FragmentIllustration from "@/components/ui/FragmentIllustration";
import ExperienceBlock from "./ExperienceBlock";

const aligns: Array<"left" | "right"> = ["right", "left", "left", "right", "left"];

/** The design pins all five blocks absolutely on the 1512x3563 canvas (Frame
 * 21-25): tops 445 / 1092 / 1735 / 2363 / 3003 and lefts 757 / 374 / 234 / 791 /
 * 234. Both are relative to the timeline column, which starts at y 230.5 and
 * x 116.5. Pinned rather than flowed because neither axis is evenly spaced. */
const blockPlacement = [
  "lg:top-[214.5px] lg:left-[640.5px]",
  "lg:top-[861.5px] lg:left-[257.5px]",
  "lg:top-[1504.5px] lg:left-[117.5px]",
  "lg:top-[2132.5px] lg:left-[674.5px]",
  "lg:top-[2772.5px] lg:left-[117.5px]",
];

export default function ExperiencesTimeline() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-page pt-[76px] pb-24">
      <GuideLines horizontalPositions={[3469.5, 3561.5]} />

      {/* Placed at its design frame: 456x500 at 146,409 on the 1512px canvas. */}
      <FragmentIllustration
        fragments={clusterA}
        widthPx={455.841}
        heightPx={499.999}
        className="absolute left-[146px] top-[409px] hidden w-[456px] lg:block"
      />
      {/* Placed at its design frame ("Frame 1597882579"): 384.86x471.23 at
          148.14px from the right, 1842px down on the 1512px canvas. */}
      <FragmentIllustration
        fragments={clusterB}
        widthPx={384.857}
        heightPx={471.225}
        className="absolute right-[148.14px] top-[1842px] hidden w-[384.86px] lg:block"
      />
      {/* Placed at its design frame: 325x157, 176px from the right, 892px down
          on the 1512px canvas. */}
      <img
        src="/svg/decorative/arrow-pair.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[176px] top-[892px] hidden w-[325px] lg:block"
      />
      {/* The coral shape nested in clusterB's Figma group, but positioned against
          the canvas rather than the cluster frame: 200.37x199.285 at 890,1997. */}
      <img
        src="/svg/decorative/coral-ring.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[890px] top-[1997px] hidden w-[200.37px] lg:block"
      />
      {/* Two more canvas-positioned shapes whose percentages resolve against the
          1512x3563 canvas, not a cluster frame. The design reuses clusterA's
          frag-51/58 artwork here (identical paths), and without them the bird
          above University Innovation is missing its wing and tail. */}
      <img
        src="/svg/decorative/experiences/cluster-a/frag-51-112-1834.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[402.04px] top-[2506.9px] hidden w-[154.127px] lg:block"
      />
      <img
        src="/svg/decorative/experiences/cluster-a/frag-58-112-1848.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[138.05px] top-[2417.85px] hidden w-[112.231px] lg:block"
      />

      {/* The design's three #007BFF rules down the column (Line 5-7): each is a
          3px bar with a 16px dot on both ends, so they are drawn from the
          reference's own paths rather than as plain 3px divs. */}
      <img src="/svg/decorative/experiences/blue-rule-5.svg" alt="" aria-hidden className="pointer-events-none absolute left-[654px] top-[479px] hidden w-[16px] lg:block" />
      <img src="/svg/decorative/experiences/blue-rule-6.svg" alt="" aria-hidden className="pointer-events-none absolute left-[971px] top-[1506px] hidden w-[16px] lg:block" />
      <img src="/svg/decorative/experiences/blue-rule-7.svg" alt="" aria-hidden className="pointer-events-none absolute left-[862px] top-[2684px] hidden w-[16px] lg:block" />
      <div aria-hidden className="pointer-events-none absolute left-[298px] top-[226px] z-[5] hidden h-[134px] w-[321px] bg-gradient-to-b from-page to-transparent lg:block" />
      <div aria-hidden className="pointer-events-none absolute left-[898px] top-[2889px] z-[5] hidden h-[200px] w-[393px] bg-gradient-to-t from-page to-transparent lg:block" />

      {/* Heading frame: 1279 wide, 149 tall, from y 76, h2 38/46, body 16/19. */}
      <div className="relative mx-auto flex max-w-[1279px] flex-col items-center gap-[19px] px-6 text-center">
        <h2 className="max-w-[461px] font-space-grotesk text-section leading-[46px] font-medium text-ink-strong">
          One Conference, Five Connected Experiences.
        </h2>
        <p className="max-w-[587px] font-body text-base leading-[19px] text-muted">
          BCCG targets blockchain communities, providing spaces for policy, technology, products,
          capital, and talent, ensuring connections at the event.
        </p>
      </div>

      {/* Timeline column: the design starts it at y 230.5 (6px less than the
          heading frame's 225 bottom + pt above) and the path is 762.15x2816.5
          there, so the path is sized rather than stretched to the block list. */}
      <div className="relative mx-auto mt-24 flex max-w-[1279px] flex-col gap-32 px-6 lg:mt-[5.5px] lg:h-[3236.5px] lg:gap-0">
        <img
          src="/svg/decorative/timeline-path.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-auto -translate-x-1/2 lg:left-[270.35px] lg:block lg:h-[2816.5px] lg:w-[762.15px] lg:translate-x-0 lg:drop-shadow-[0_4px_20px_rgba(0,123,255,0.8)]"
        />
        {/* The design stacks a second path over the grey dashes (Vector 4): the
            same geometry stroked with a gradient that is solid #007BFF for the
            first ~34% of its length, transparent through the middle, then 30%
            blue from ~86% on — the blue stretch of the line. */}
        <img
          src="/svg/decorative/timeline-path-blue.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-auto -translate-x-1/2 lg:left-[270.35px] lg:block lg:h-[2816.5px] lg:w-[762.15px] lg:translate-x-0"
        />
        {experienceTracks.map((track, i) => (
          <ExperienceBlock
            key={track.id}
            track={track}
            align={aligns[i]}
            className={`lg:absolute lg:w-[534px] ${blockPlacement[i]}`}
          />
        ))}
      </div>

      {/* clusterC's design frame ("Frame 1597882580"): 221.62x500 at 212,2406. */}
      <FragmentIllustration
        fragments={clusterC}
        widthPx={221.62}
        heightPx={499.999}
        className="absolute left-[212px] top-[2406px] hidden w-[221.62px] lg:block"
      />
    </section>
  );
}
