import Image from "next/image";
import { audienceCards } from "@/lib/content";
import BlurredBlob from "@/components/ui/BlurredBlob";
import AudienceCard from "./AudienceCard";

export default function Audience() {
  return (
    <section className="relative mx-2 my-2 overflow-hidden rounded-panel bg-ink px-8 py-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/audience-bg.jpg"
          alt=""
          fill
          className="object-cover mix-blend-exclusion"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
      </div>
      <BlurredBlob src="/svg/decorative/blob-1.svg" className="right-0 top-0 h-[500px] w-[600px]" />

      <div className="relative flex flex-col items-start gap-[19px] pb-12">
        <span className="font-playfair text-md-tight italic text-white">
          Who will be in the room?
        </span>
        <h2 className="font-space-grotesk text-section font-medium text-white">
          The Entire Market,{" "}
          <span className="font-playfair italic text-accent-deep">Connected</span>
        </h2>
        <p className="max-w-[486px] font-body text-base text-muted">
          BCCG is designed for people working across the blockchain and digital economy
          ecosystem.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {audienceCards.map((card) => (
          <AudienceCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
