import GuideLines from "@/components/ui/GuideLines";
import PhotoStrip from "./PhotoStrip";
import DateCard from "./DateCard";

export default function Statement() {
  return (
    <section className="relative bg-page py-24">
      <GuideLines horizontalPositions={[380, 620]} />
      <div className="relative mx-auto flex max-w-[1239px] flex-col items-center gap-[19px] px-6 text-center">
        <h2 className="max-w-[841px] font-space-grotesk text-section font-medium text-ink-strong">
          Blockchain is moving beyond experimentation into infrastructure.
        </h2>
        <p className="max-w-[817px] font-body text-base text-muted">
          Across payments, tokenisation, digital identity, decentralized applications and new
          financial rails, the focus is shifting from what blockchain could do to what can
          actually be built, deployed and scaled.
        </p>
      </div>
      <PhotoStrip />
      <div className="relative px-6">
        <DateCard />
      </div>
    </section>
  );
}
