import Image from "next/image";
import NewsletterSignup from "@/components/layout/NewsletterSignup";

/** Shared newsletter band. `hasPhoto` is Home-only; About/Register render
 * the flat accent-blue variant. */
export default function StayConnectedBand({ hasPhoto = false }: { hasPhoto?: boolean }) {
  return (
    <section className="bg-ink px-6 py-[26px]">
      <div className="relative mx-auto min-h-[436px] max-w-[1464px] overflow-hidden rounded-panel bg-accent">
        {hasPhoto && (
          <>
            <Image
              src="/images/stay-connected-bg.jpg"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/[0.77]" />
          </>
        )}
        <div className="relative flex flex-col items-start justify-between gap-10 px-10 py-16 md:flex-row md:items-end">
          <div className="flex max-w-[395px] flex-col items-start gap-5">
            <h2 className="font-space-grotesk text-stay-connected font-bold text-white">
              Stay Connected
            </h2>
            <p className="font-body text-base text-on-accent-body">
              Speakers. Programme updates. Partner announcements. The Road to BCCG. Get the
              latest from Blockchain &amp; Crypto Conference Ghana.
            </p>
          </div>
          <div className="w-full max-w-[596px]">
            <NewsletterSignup variant="onBlue" />
          </div>
        </div>
      </div>
    </section>
  );
}
