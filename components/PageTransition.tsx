"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = curtainRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -100,
        duration: prefersReduced ? 0.3 : 1.3,
        delay: prefersReduced ? 0 : 0.5,
        ease: "power4.inOut",
        onComplete: () => {
          el.style.visibility = "hidden";
          el.style.pointerEvents = "none";
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={curtainRef}
        aria-hidden="true"
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3 bg-ink"
      >
        <span className="font-display text-2xl font-bold text-parchment">SL</span>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-parchment/50">
          Loading the Frame
        </span>
      </div>
      {children}
    </>
  );
}
