/* eslint-disable @next/next/no-img-element */

type Variant = "footer" | "onBlue";

const styles: Record<Variant, { border: string; buttonBg: string }> = {
  footer: { border: "border-input-border-newsletter-dark", buttonBg: "bg-accent" },
  onBlue: { border: "border-input-border-newsletter-blue", buttonBg: "bg-page" },
};

export default function NewsletterSignup({ variant = "footer" }: { variant?: Variant }) {
  const s = styles[variant];
  return (
    <div className="flex flex-col items-start gap-px">
      <div className="whitespace-nowrap py-2.5 pr-2.5 font-space-grotesk text-base font-bold text-white">
        Get all latest updates from Kwekutech
      </div>
      <div className="flex h-14 w-full items-center justify-between gap-2.5">
        <div
          className={`flex h-14 w-[418px] items-center gap-2.5 rounded-control border bg-ink px-2.5 ${s.border}`}
        >
          <input
            type="email"
            placeholder="Enter e-mail"
            className="w-full bg-transparent text-base font-medium text-input-text placeholder:text-input-text outline-none"
          />
        </div>
        <button
          type="button"
          className={`flex shrink-0 items-center justify-center gap-2.5 rounded-subscribe px-6 py-4 ${s.buttonBg}`}
        >
          <span className="whitespace-nowrap font-space-grotesk text-base font-bold text-ink">
            Subscribe{" "}
          </span>
          <img src="/svg/icons/icon-arrow.svg" alt="" aria-hidden className="h-4 w-3.5 rotate-45" />
        </button>
      </div>
    </div>
  );
}
