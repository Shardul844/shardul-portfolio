"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@/hooks/useGsapContext";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CrowSilhouette() {
  const floatRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { nx, ny } = useMousePosition();

  // ambient floating drift, independent of mouse
  useGSAP(() => {
    if (!floatRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.to(floatRef.current, {
      y: "+=20",
      x: "+=12",
      rotate: 2.5,
      duration: 4.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, { scope: floatRef });

  // mouse-driven parallax on a separate layer so it never fights the float tween
  const quickXRef = useRef<((value: number) => void) | null>(null);
  const quickYRef = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    if (!parallaxRef.current) return;
    quickXRef.current = gsap.quickTo(parallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
    quickYRef.current = gsap.quickTo(parallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
  }, []);

  useEffect(() => {
    quickXRef.current?.(nx * 22);
    quickYRef.current?.(ny * 14);
  }, [nx, ny]);

  return (
    <div ref={floatRef} className="pointer-events-none absolute right-[8%] top-[18%] z-[5]">
      <div ref={parallaxRef}>
        <svg
          viewBox="0 0 200 120"
          className="w-[120px] opacity-80 md:w-[190px]"
          aria-hidden="true"
        >
          <path
            fill="#13120e"
            d="M10 70 C 30 40, 55 35, 70 45 C 78 30, 95 22, 110 28 C 108 18, 118 10, 130 14 C 142 8, 158 14, 160 26 C 175 24, 190 34, 188 46 C 170 44, 160 52, 150 50 C 140 62, 120 64, 108 56 C 100 68, 80 72, 68 64 C 50 76, 26 78, 10 70 Z"
          />
          <path fill="#13120e" d="M160 26 C 168 18, 180 18, 184 26 C 178 28, 168 28, 160 26 Z" />
        </svg>
      </div>
    </div>
  );
}
