import Link from "next/link";
import PartnerTile from "@/components/ui/PartnerTile";
import { partnerGroups, type Partner } from "@/lib/content";

/** Copies of a logo set in each track. The track slides left by exactly one set
 * per loop, so the copies must cover the widest screen plus one set. */
const SETS = 3;
/** A set is padded with repeats until it is at least this many logos wide
 * (~1800px), so a short list still fills the screen. */
const MIN_LOGOS_PER_SET = 8;
/** Fewer logos than this don't earn a scrolling line: repeating a handful of
 * logos across the screen looks like a mistake, so they sit in a still row. */
const STATIC_BELOW = 6;

const tileSize = "h-32 w-56";

function RowTitle({ children }: { children: string }) {
  return (
    <h3 className="mx-auto max-w-[1152px] px-6 font-space-grotesk text-sm font-medium uppercase tracking-widest text-ink-card">
      {children}
    </h3>
  );
}

function StaticRow({ title, partners }: { title: string; partners: Partner[] }) {
  return (
    <div>
      <RowTitle>{title}</RowTitle>
      <ul className="mx-auto mt-5 flex max-w-[1152px] flex-wrap justify-center gap-4 px-6 py-2">
        {partners.map((partner) => (
          <PartnerTile key={partner.name} partner={partner} sizes="224px" className={tileSize} />
        ))}
      </ul>
    </div>
  );
}

function MarqueeRow({
  title,
  partners,
  reverse,
  duration,
}: {
  title: string;
  partners: Partner[];
  reverse?: boolean;
  duration: number;
}) {
  const repeats = Math.ceil(MIN_LOGOS_PER_SET / partners.length);
  const set = Array.from({ length: repeats }, () => partners).flat();

  return (
    <div>
      <RowTitle>{title}</RowTitle>
      {/* py-2 leaves room for a hovered logo to lift without being clipped. */}
      <div className="mt-5 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div
          style={{ "--sets": SETS, "--duration": `${duration}s` } as React.CSSProperties}
          className={`flex w-max hover:[animation-play-state:paused] motion-safe:animate-[partner-marquee_var(--duration)_linear_infinite] ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {Array.from({ length: SETS }, (_, copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0 || undefined}
              className="flex shrink-0 gap-4 pr-4"
            >
              {set.map((partner, i) => (
                <PartnerTile
                  key={`${partner.name}-${i}`}
                  partner={partner}
                  decorative={copy > 0}
                  sizes="224px"
                  className={tileSize}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({
  title,
  partners,
  reverse,
  duration,
}: {
  title: string;
  partners: Partner[];
  reverse?: boolean;
  duration: number;
}) {
  return partners.length < STATIC_BELOW ? (
    <StaticRow title={title} partners={partners} />
  ) : (
    <MarqueeRow title={title} partners={partners} reverse={reverse} duration={duration} />
  );
}

/** Home-page partner section: institutional and media partners in two separate
 * lines. A long list loops (pausing on hover, still for reduced-motion users);
 * a short one sits still. The full wall lives at /partners. */
export default function PartnerMarquee() {
  const [institutional, media] = partnerGroups;

  return (
    <section id="our-partners" className="relative bg-page py-24">
      <div className="mx-auto flex max-w-[1152px] flex-wrap items-end justify-between gap-4 px-6">
        <h2 className="font-space-grotesk text-section font-medium text-ink-strong">
          Our partners
        </h2>
        <Link
          href="/partners"
          className="font-space-grotesk text-md-tight font-medium text-accent-chip-text hover:text-accent-hover"
        >
          View all partners &rarr;
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-12">
        <Row title={institutional.title} partners={institutional.partners} duration={45} />
        <Row title={media.title} partners={media.partners} duration={40} reverse />
      </div>
    </section>
  );
}
