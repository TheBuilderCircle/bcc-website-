import type { Metadata } from "next";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import StayConnectedBand from "@/components/layout/StayConnectedBand";
import PartnersHero from "@/components/sections/partners/PartnersHero";
import PartnerLogos from "@/components/sections/home/PartnerLogos";
import Partners from "@/components/sections/home/Partners";

export const metadata: Metadata = {
  title: "Partners | Blockchain & Crypto Conference Ghana (BCCG) 2026",
  description:
    "The institutional and media partners behind BCCG 2026, and how your organisation can partner with the conference.",
};

export default function PartnersPage() {
  return (
    <>
      <div className="relative pt-2">
        <PartnersHero />
        <SiteNav />
      </div>
      <PartnerLogos />
      <Partners />
      <StayConnectedBand />
      <SiteFooter />
    </>
  );
}
