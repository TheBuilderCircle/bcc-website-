import HighlightedWord from "@/components/ui/HighlightedWord";
import Button from "@/components/ui/Button";

export default function CtaPanel() {
  return (
    <div className="mx-2 my-2 overflow-hidden rounded-panel bg-page px-6 py-24">
      <div className="mx-auto flex max-w-[526px] flex-col items-center gap-[52px] text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="whitespace-nowrap font-space-grotesk text-hero font-medium text-ink-strong">
              Be <HighlightedWord tone="blue">Part</HighlightedWord>
            </span>
            <span className="whitespace-nowrap font-playfair text-hero italic text-accent">
              of <HighlightedWord tone="purple">BCCG 2026.</HighlightedWord>
            </span>
          </div>
          <p className="max-w-[454px] font-body text-base text-muted">
            Join the people shaping the future of blockchain innovation in Ghana and across
            Africa.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button href="/about" variant="outline-light" className="w-[197px]">
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
