import HighlightedWord from "@/components/ui/HighlightedWord";
import BlurredBlob from "@/components/ui/BlurredBlob";

export default function AboutHero() {
  return (
    <div className="relative mx-2 overflow-hidden rounded-panel bg-ink">
      <BlurredBlob
        src="/svg/decorative/blob-1.svg"
        className="-left-[120px] -top-[160px] h-[520px] w-[620px] -rotate-12"
      />
      <BlurredBlob
        src="/svg/decorative/blob-2.svg"
        className="-right-[160px] -top-[120px] h-[560px] w-[660px] rotate-12"
      />

      <div className="relative flex flex-col items-center gap-[52px] px-6 pt-[220px] pb-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="font-space-grotesk text-hero font-medium text-white">
              A <HighlightedWord tone="blue">National</HighlightedWord> Conference for
            </span>
            <span className="font-playfair text-hero italic text-muted-serif">
              <HighlightedWord tone="purple">Africa&rsquo;s</HighlightedWord> Builders.
            </span>
          </div>
          <p className="max-w-[542px] font-body text-base text-muted">
            BCCG is being built to bring the conversations shaping blockchain adoption into one
            place &mdash; and to connect the people shaping the market with the people building
            it.
          </p>
        </div>
      </div>
    </div>
  );
}
