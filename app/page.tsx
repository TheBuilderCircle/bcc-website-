import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import StayConnectedBand from "@/components/layout/StayConnectedBand";
import Hero from "@/components/sections/home/Hero";
import Statement from "@/components/sections/home/Statement";
import ExperiencesTimeline from "@/components/sections/home/ExperiencesTimeline";
import Audience from "@/components/sections/home/Audience";
import CtaPanel from "@/components/sections/home/CtaPanel";
import Partners from "@/components/sections/home/Partners";

export default function HomePage() {
  return (
    <>
      <div className="relative pt-[65px]">
        <Hero />
        <div className="absolute inset-x-[45px] top-[75px] z-20">
          <SiteNav />
        </div>
      </div>
      <Statement />
      <ExperiencesTimeline />
      <Audience />
      <CtaPanel />
      <Partners />
      <StayConnectedBand hasPhoto />
      <SiteFooter />
    </>
  );
}
