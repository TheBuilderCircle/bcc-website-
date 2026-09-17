/* eslint-disable @next/next/no-img-element */
import BlurredBlob from "@/components/ui/BlurredBlob";

export default function DateCard() {
  return (
    <div className="relative mx-auto max-w-[1496px] overflow-hidden rounded-panel bg-ink px-10 py-16">
      <BlurredBlob
        src="/svg/decorative/blob-1.svg"
        className="-left-[120px] -top-[180px] h-[480px] w-[580px]"
      />
      <BlurredBlob
        src="/svg/decorative/blob-3.svg"
        className="left-[80px] -top-[220px] h-[480px] w-[580px]"
      />
      <div className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-[9px]">
          <div className="mb-6 flex h-[113px] w-[113px] items-center justify-center rounded-pill bg-accent">
            <img
              src="/svg/icons/icon-bolt.svg"
              alt=""
              aria-hidden
              className="h-[29px] w-[17px] brightness-0 invert"
            />
          </div>
          <span className="font-space-grotesk text-md-tight font-bold text-white">
            13&ndash;14 November 2026 &middot; Accra, Ghana
          </span>
          <span className="font-playfair text-md-tight italic text-muted-venue">
            Venue to be confirmed
          </span>
        </div>
        <p className="max-w-[619px] font-space-grotesk text-date-paragraph font-medium text-white">
          Blockchain &amp; Crypto Conference Ghana brings together the builders, protocols,
          infrastructure, capital and talent advancing blockchain innovation and shaping
          Africa&rsquo;s next generation of decentralized technology.
        </p>
      </div>
    </div>
  );
}
