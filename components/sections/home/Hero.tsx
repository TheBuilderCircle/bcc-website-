import Image from "next/image";
import HighlightedWord from "@/components/ui/HighlightedWord";
import BlurredBlob from "@/components/ui/BlurredBlob";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <div className="relative mx-2 overflow-hidden rounded-panel bg-ink">
      <div className="absolute inset-[14px] overflow-hidden opacity-30">
        <Image
          src="/community/ayahq-lisk-panel-session.jpg"
          alt=""
          fill
          className="object-cover object-[48.585%_14.043%]"
        />
      </div>
      <BlurredBlob
        src="/svg/decorative/blob-1.svg"
        className="-left-[120px] -top-[160px] h-[520px] w-[620px] -rotate-12"
      />
      <BlurredBlob
        src="/svg/decorative/blob-2.svg"
        className="-right-[160px] -top-[120px] h-[560px] w-[660px] rotate-12"
      />

      <div className="relative flex flex-col items-center gap-[52px] px-6 pt-[300px] pb-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="whitespace-nowrap font-space-grotesk text-hero font-medium text-white">
              Powering <HighlightedWord tone="blue">Africa&rsquo;s</HighlightedWord>
            </span>
            <span className="whitespace-nowrap font-playfair text-hero italic text-muted-serif">
              Blockchain <HighlightedWord tone="purple">Innovation.</HighlightedWord>
            </span>
          </div>
          <p className="max-w-[454px] font-body text-base text-muted">
            Connecting the builders, capital and talent shaping Africa&rsquo;s blockchain future.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button href="/about" variant="outline-dark" className="w-[197px]">
            Partner with us
          </Button>
          <Button href="/register" variant="primary" className="w-[195px]">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
