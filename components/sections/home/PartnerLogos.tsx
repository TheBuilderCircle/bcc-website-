import PartnerTile from "@/components/ui/PartnerTile";
import { partnerGroups } from "@/lib/content";

/** Columns on large screens: pick the one that fills every row (4 or 3) so no
 * lone tile is left on the last line; anything else falls back to 4. */
function columnsFor(count: number) {
  if (count % 4 === 0) return 4;
  if (count % 3 === 0) return 3;
  return 4;
}

/** Full partner wall, grouped. Tiles wrap and centre, so an incomplete last row
 * is centred rather than hanging off the left edge. */
export default function PartnerLogos() {
  return (
    <section id="our-partners" className="relative bg-page px-6 pt-20 pb-24">
      <div className="mx-auto max-w-[1152px]">
        <div className="flex flex-col gap-14">
          {partnerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-space-grotesk text-sm font-medium uppercase tracking-widest text-ink-card">
                {group.title}
              </h3>
              <ul
                style={{ "--cols": columnsFor(group.partners.length) } as React.CSSProperties}
                className="mt-6 flex flex-wrap justify-center gap-4"
              >
                {group.partners.map((partner) => (
                  <PartnerTile
                    key={partner.name}
                    partner={partner}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw"
                    className="h-40 w-[calc((100%_-_1rem)/2)] sm:h-44 sm:w-[calc((100%_-_2rem)/3)] lg:w-[calc((100%_-_1rem_*_(var(--cols)_-_1))/var(--cols))]"
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
