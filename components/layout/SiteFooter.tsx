/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerColumns, anchorHref, type NavItem } from "@/lib/content";
import NewsletterSignup from "@/components/layout/NewsletterSignup";

function FooterLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const href = item.anchor ? anchorHref(item.anchor, pathname) : item.href!;
  return (
    <Link
      href={href}
      className="whitespace-nowrap px-2.5 py-2.5 font-body text-base font-medium text-muted-footer hover:text-accent"
    >
      {item.label}
    </Link>
  );
}

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-ink px-6 pt-[50.5px] pb-10 md:px-25 xl:px-42.5">
      <div className="mx-auto flex max-w-[1173px] flex-wrap items-start gap-x-[90px] gap-y-10">
        <div className="flex w-[237px] flex-col items-start gap-[26px]">
          <img src="/svg/decorative/logo.svg" alt="BCCG" className="h-[38.919px] w-[84px]" />
          <p className="font-body text-base font-medium text-muted-footer">
            © 2026 Blockchain &amp; Crypto Conference Ghana. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="whitespace-nowrap px-2.5 py-2.5 font-space-grotesk text-base font-bold text-white">
            Navigation
          </div>
          <div className="flex flex-col items-start">
            {footerColumns.navigation.map((item) => (
              <FooterLink key={item.label} item={item} pathname={pathname} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="whitespace-nowrap px-2.5 py-2.5 font-space-grotesk text-base font-bold text-white">
            Legal
          </div>
          <div className="flex flex-col items-start">
            {footerColumns.legal.map((item) => (
              <FooterLink key={item.label} item={item} pathname={pathname} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="whitespace-nowrap px-2.5 py-2.5 font-space-grotesk text-base font-bold text-white">
            Contact
          </div>
          <div className="flex flex-col items-start">
            {footerColumns.contact.map((item) => (
              <FooterLink key={item.label} item={item} pathname={pathname} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="whitespace-nowrap px-2.5 py-2.5 font-space-grotesk text-base font-bold text-white">
            Connect
          </div>
          <div className="flex flex-col items-start">
            {footerColumns.connect.map((item) => (
              <FooterLink key={item.label} item={item} pathname={pathname} />
            ))}
          </div>
        </div>

        <div className="w-[596px] max-w-full">
          <NewsletterSignup variant="footer" />
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1112px] flex-col gap-5">
        <div className="h-px w-full bg-hairline-footer" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="whitespace-nowrap font-familjen text-base font-medium text-muted-footer">
              ©2025
            </span>
            <span className="whitespace-nowrap font-familjen text-base font-medium text-muted-footer">
              All Rights Reserved
            </span>
          </div>
          <div className="flex items-center gap-6">
            {footerColumns.connect.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap font-familjen text-base font-medium text-muted-footer hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
