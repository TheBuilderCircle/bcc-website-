import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import StayConnectedBand from "@/components/layout/StayConnectedBand";
import Hero from "@/components/sections/home/Hero";
import Statement from "@/components/sections/home/Statement";
import ExperiencesTimeline from "@/components/sections/home/ExperiencesTimeline";
import Audience from "@/components/sections/home/Audience";
import CtaPanel from "@/components/sections/home/CtaPanel";
import Partners from "@/components/sections/home/Partners";
import PartnerMarquee from "@/components/sections/home/PartnerMarquee";

export default function HomePage() {
  return (
    <>
      <div className="relative pt-2">
        <Hero />
        <SiteNav />
      </div>
      <Statement />
      <ExperiencesTimeline />
      <Audience />
      <CtaPanel />
      <Partners />
      <PartnerMarquee />
      <StayConnectedBand hasPhoto />
      <SiteFooter />
    </>
  );
}
