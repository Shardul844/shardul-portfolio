"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGsapContext";
import { charRevealTimeline } from "@/animations/revealAnimations";
import { splitChars } from "@/animations/textSplit";
import CrowSilhouette from "@/components/CrowSilhouette";
import ThreeBackground from "@/components/ThreeBackground";

const NAME = "SHARDUL LAD";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;
      const chars = titleRef.current.querySelectorAll("[data-char]");
      charRevealTimeline(chars, ".hero-fade", { delay: 0.9 });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-parchment"
    >
      <ThreeBackground />
      <CrowSilhouette />

      <div className="hero-fade absolute left-6 top-24 z-10 md:left-10 md:top-28">
        <span className="vertical-text font-mono text-[11px] tracking-widest2 text-ink-soft">
          序章 — PROLOGUE
        </span>
      </div>

      <div className="hero-fade absolute right-6 top-24 z-10 text-right md:right-10 md:top-28">
        <span className="font-mono text-[11px] tracking-widest2 text-ink-soft">
          PORTFOLIO / 2026
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1
          ref={titleRef}
          aria-label={NAME}
          className="select-none font-display font-extrabold leading-[0.82] text-ink"
        >
          <span aria-hidden="true" className="block overflow-hidden text-[15vw] md:text-[11.5vw]">
            {splitChars(NAME).map(({ key, char }) => (
              <span key={key} className="inline-block overflow-hidden">
                <span data-char className="inline-block">
                  {char}
                </span>
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-fade mt-6 font-body text-sm uppercase tracking-widest2 text-ink-soft md:text-base">
          Creative Designer &amp; Frontend Developer
        </p>
      </div>

      <div className="hero-fade absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center">
        <span className="font-mono text-[10px] tracking-widest2 text-ink-soft">SCROLL</span>
        <div className="mx-auto mt-3 h-14 w-px bg-ink/30" />
      </div>
    </section>
  );
}
