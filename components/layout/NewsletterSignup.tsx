/* eslint-disable @next/next/no-img-element */

type Variant = "footer" | "onBlue";

/* `row` is when the field and button sit side by side. The footer column is
   narrow until `lg`, so it stacks longer than the full-width blue band does. */
const styles: Record<Variant, { border: string; buttonBg: string; row: string; field: string; button: string; label: string }> = {
  footer: {
    border: "border-input-border-newsletter-dark",
    buttonBg: "bg-accent",
    row: "lg:h-14 lg:flex-row lg:items-center lg:justify-between",
    field: "lg:w-[418px] lg:min-w-0 lg:flex-1 lg:flex-none",
    button: "lg:h-auto lg:py-4",
    label: "lg:whitespace-nowrap",
  },
  onBlue: {
    border: "border-input-border-newsletter-blue",
    buttonBg: "bg-page",
    row: "sm:h-14 sm:flex-row sm:items-center sm:justify-between",
    field: "sm:w-auto sm:min-w-0 sm:flex-1 lg:w-[418px] lg:flex-none",
    button: "sm:h-auto sm:py-4",
    label: "sm:whitespace-nowrap",
  },
};

export default function NewsletterSignup({ variant = "footer" }: { variant?: Variant }) {
  const s = styles[variant];
  return (
    <div className="flex flex-col items-start gap-px">
      <div className={`py-2.5 pr-2.5 ${s.label} font-space-grotesk text-base font-bold text-white`}>
        Get all latest updates from Kwekutech
      </div>
      <div className={`flex w-full flex-col gap-2.5 ${s.row}`}>
        <div
          className={`flex h-14 w-full items-center gap-2.5 rounded-control border bg-ink px-2.5 ${s.field} ${s.border}`}
        >
          <input
            type="email"
            placeholder="Enter e-mail"
            className="w-full bg-transparent text-base font-medium text-input-text placeholder:text-input-text outline-none"
          />
        </div>
        <button
          type="button"
          className={`flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-subscribe px-6 ${s.button} ${s.buttonBg}`}
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
