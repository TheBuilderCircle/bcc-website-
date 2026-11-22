import HighlightedWord from "@/components/ui/HighlightedWord";
import BlurredBlob from "@/components/ui/BlurredBlob";

export default function PartnersHero() {
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

      <div className="relative flex flex-col items-center gap-4 px-6 pt-[220px] pb-24 text-center">
        <div className="flex flex-col items-center">
          <span className="font-space-grotesk text-hero font-medium text-white">
            Built with the <HighlightedWord tone="blue">institutions</HighlightedWord>
          </span>
          <span className="font-playfair text-hero italic text-muted-serif">
            and <HighlightedWord tone="purple">media</HighlightedWord> behind it.
          </span>
        </div>
        <p className="max-w-[542px] font-body text-base text-muted">
          The organisations backing BCCG 2026.
        </p>
      </div>
    </div>
  );
}
