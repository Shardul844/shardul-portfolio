import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import GrainOverlay from "@/components/GrainOverlay";
import Navigation from "@/components/Navigation";

const display = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shardul Lad — Creative Designer & Frontend Developer",
  description:
    "Portfolio of Shardul Lad, a creative designer and frontend developer working across brand, motion, and the web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-parchment font-body text-ink antialiased">
        <PageTransition>
          <SmoothScroll>
            <Cursor />
            <GrainOverlay />
            <Navigation />
            {children}
          </SmoothScroll>
        </PageTransition>
      </body>
    </html>
  );
}
