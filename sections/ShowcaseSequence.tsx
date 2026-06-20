"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGsapContext";
import { horizontalScroll } from "@/animations/scrollTriggers";
import { SHOWCASE_ITEMS } from "@/lib/constants";

export default function ShowcaseSequence() {
  const root = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current || !root.current) return;
      horizontalScroll(trackRef.current, root.current, SHOWCASE_ITEMS.length);
    },
    { scope: root }
  );

  return (
    <section ref={root} id="showcase" className="relative h-screen w-full overflow-hidden bg-ink">
      <div className="absolute left-6 top-8 z-10 md:left-10 md:top-10">
        <span className="font-mono text-[11px] tracking-widest2 text-parchment/60">
          展示 — SHOWCASE
        </span>
      </div>

      <div ref={trackRef} className="flex h-full w-max items-center gap-8 px-[8vw]">
        {SHOWCASE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="showcase-card group relative h-[60vh] w-[78vw] shrink-0 overflow-hidden border border-parchment/15 sm:w-[60vw] md:w-[34vw]"
          >
            <div
  className="absolute inset-0 transition-transform duration-700 ease-cinematic group-hover:scale-110"
  style={{
    background:
      item.id === "i01"
        ? "linear-gradient(135deg, #0d0d0d 0%, #2a2a2a 40%, #5b5b5b 100%)"
        : item.id === "i02"
        ? "linear-gradient(135deg, #000000 0%, #120000 35%, #5b0000 70%, #9b111e 100%)"
        : item.id === "i03"
        ? "linear-gradient(135deg, #d1cfbd 0%, #bfb9a7 45%, #8b7e6a 100%)"
        : item.id === "i04"
        ? "linear-gradient(135deg, #f2eee2 0%, #d1cfbd 25%, #ff3c00 55%, #8b0000 100%)"
        : "linear-gradient(135deg, #0d0d0d 0%, #3a352c 50%, #d1cfbd 100%)",
  }}
/>
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
              <span
  className={`font-display text-xl font-semibold md:text-2xl ${
    item.id === "i03"
      ? "text-ink"
      : item.id === "i04"
      ? "text-ink"
      : "text-parchment"
  }`}
>
                {item.label}
              </span>
              <span className="font-mono text-xs text-accent">{item.jp}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
