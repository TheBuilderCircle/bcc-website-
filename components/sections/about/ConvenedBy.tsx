import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";
import { aboutChips } from "@/lib/content";

export default function ConvenedBy() {
  return (
    <section className="relative bg-page py-24">
      <div className="relative mx-auto flex max-w-[1239px] flex-col items-center gap-5 px-6 text-center">
        <h2 className="max-w-[841px] font-space-grotesk text-section font-medium text-ink-strong">
          Convened by The Builders Circle Ghana.
        </h2>
        <p className="max-w-[785px] font-body text-base text-muted">
          The Builders Circle Ghana is developing ecosystem infrastructure that connects
          communities, protocols, institutions and talent around responsible emerging technology
          adoption.
        </p>
        <p className="max-w-[785px] font-body text-base leading-relaxed text-muted">
          <span className="font-playfair text-md-tight italic text-accent">
            Institution first. Event second.
          </span>{" "}
          BCCG is part of a broader ambition to build sustained connections between
          Ghana&rsquo;s technology ecosystem and the institutions, talent and capital required
          for long-term innovation.
        </p>
        <div className="flex max-w-[1027px] flex-wrap items-center justify-center gap-2 py-8">
          {aboutChips.map((chip) => (
            <Pill key={chip}>{chip}</Pill>
          ))}
        </div>
        <Button href="/register" size="form">
          Be part of BCCG 2026
        </Button>
      </div>
    </section>
  );
}
