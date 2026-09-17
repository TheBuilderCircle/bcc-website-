import type { Metadata } from "next";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import StayConnectedBand from "@/components/layout/StayConnectedBand";
import RegisterHero from "@/components/sections/register/RegisterHero";

export const metadata: Metadata = {
  title: "Register | Blockchain & Crypto Conference Ghana (BCCG) 2026",
  description:
    "Register for BCCG 2026 — 13–14 November 2026, Accra, Ghana.",
};

export default function RegisterPage() {
  return (
    <>
      <div className="relative pt-[65px]">
        <RegisterHero />
        <div className="absolute inset-x-[45px] top-[75px] z-20">
          <SiteNav />
        </div>
      </div>
      <StayConnectedBand />
      <SiteFooter />
    </>
  );
}
