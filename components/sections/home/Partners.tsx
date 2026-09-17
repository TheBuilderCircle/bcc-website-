import BlurredBlob from "@/components/ui/BlurredBlob";
import { partnerItems } from "@/lib/content";

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative mx-2 my-2 overflow-hidden rounded-panel bg-ink px-6 py-24"
    >
      <BlurredBlob src="/svg/decorative/blob-1.svg" className="right-0 top-0 h-[500px] w-[600px]" />
      <BlurredBlob
        src="/svg/decorative/blob-2.svg"
        className="right-20 top-0 h-[550px] w-[650px]"
      />
      <div className="relative mx-auto max-w-[1152px]">
        <h2 className="font-hanken text-partners-heading font-medium text-white">
          Whatever the <span className="font-playfair italic">objective.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {partnerItems.map((item) => (
            <div key={item.title} className="flex flex-col items-start">
              <div className="py-2 font-space-grotesk text-partner-item-title font-bold text-white">
                {item.title}
              </div>
              <span className="font-inter text-partner-body font-normal text-muted">
                {item.body}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
