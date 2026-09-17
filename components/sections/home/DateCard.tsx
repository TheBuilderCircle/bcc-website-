/* eslint-disable @next/next/no-img-element */
import BlurredBlob from "@/components/ui/BlurredBlob";

export default function DateCard() {
  return (
    <div className="relative mx-auto max-w-[1496px] transform-gpu overflow-hidden rounded-panel bg-ink px-10 py-16">
      <BlurredBlob
        src="/svg/decorative/blob-1.svg"
        className="-right-[60px] -bottom-[140px] h-[560px] w-[660px] -rotate-12"
      />
      <BlurredBlob
        src="/svg/decorative/blob-3.svg"
        className="right-[120px] -top-[100px] h-[480px] w-[580px] rotate-12"
      />
      <div className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-[9px]">
          <img
            src="/svg/decorative/bolt-badge.svg"
            alt=""
            aria-hidden
            className="-mt-8 -mb-6 w-58.25"
          />
          <span className="font-space-grotesk text-md-tight font-bold text-white">
            13&ndash;14 November 2026 &middot; Accra, Ghana
          </span>
          <span className="font-playfair text-md-tight italic text-muted-venue">
            Venue to be confirmed
          </span>
        </div>
        <p className="max-w-[619px] text-[24px] leading-8 tracking-[-0.02em]">
          <span className="font-space-grotesk font-bold text-white">
            Blockchain &amp; Crypto Conference Ghana brings together the builders,
          </span>{" "}
          <span className="font-playfair font-normal text-[#B2D4F9] italic">
            protocols, infrastructure, capital and talent advancing blockchain innovation and
            shaping Africa&rsquo;s next generation of decentralized technology.
          </span>
        </p>
      </div>
    </div>
  );
}
