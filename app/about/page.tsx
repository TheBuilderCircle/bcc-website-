import type { Metadata } from "next";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import StayConnectedBand from "@/components/layout/StayConnectedBand";
import AboutHero from "@/components/sections/about/AboutHero";
import ConvenedBy from "@/components/sections/about/ConvenedBy";

export const metadata: Metadata = {
  title: "About | Blockchain & Crypto Conference Ghana (BCCG) 2026",
  description:
    "BCCG is convened by The Builders Circle Ghana — developing ecosystem infrastructure that connects communities, protocols, institutions and talent.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative pt-[65px]">
        <AboutHero />
        <div className="absolute inset-x-[45px] top-[75px] z-20">
          <SiteNav />
        </div>
      </div>
      <ConvenedBy />
      <StayConnectedBand />
      <SiteFooter />
    </>
  );
}
