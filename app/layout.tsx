import type { Metadata } from "next";
import {
  Space_Grotesk,
  Playfair_Display,
  Inter,
  Hanken_Grotesk,
  Familjen_Grotesk,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk-loader",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--font-playfair-loader",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-loader",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-hanken-loader",
});

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-familjen-loader",
});

export const metadata: Metadata = {
  title: "Blockchain & Crypto Conference Ghana (BCCG) 2026",
  description:
    "BCCG 2026 brings together the builders, protocols, infrastructure, capital and talent advancing blockchain innovation in Ghana and across Africa. 13–14 November 2026, Accra.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${inter.variable} ${hankenGrotesk.variable} ${familjenGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
