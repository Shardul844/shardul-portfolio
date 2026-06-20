"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGsapContext";
import gsap from "gsap";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  const root = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const width = marquee.scrollWidth / 2;
        gsap.to(marquee, { x: -width, duration: 28, ease: "none", repeat: -1 });
      }

      const words = gsap.utils.toArray<HTMLElement>(".skill-word", root.current ?? undefined);

      const handleMove = (e: MouseEvent) => {
        words.forEach((word) => {
          const rect = word.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const radius = 220;

          if (dist < radius) {
            const power = 1 - dist / radius;
            gsap.to(word, {
              x: (dx / dist) * power * -16,
              y: (dy / dist) * power * -16,
              color: "#e85d2a",
              duration: 0.4,
              overwrite: "auto",
            });
          } else {
            gsap.to(word, { x: 0, y: 0, color: "#13120e", duration: 0.6, overwrite: "auto" });
          }
        });
      };

      root.current?.addEventListener("mousemove", handleMove);
      return () => root.current?.removeEventListener("mousemove", handleMove);
    },
    { scope: root }
  );

  return (
    <section ref={root} id="skills" className="relative overflow-hidden bg-parchment py-28">
      <div className="mb-16 px-6 md:px-16">
        <span className="font-mono text-[11px] tracking-widest2 text-ink-soft">技術 — CRAFT</span>
      </div>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 px-6 md:px-16">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="skill-word cursor-default font-display text-3xl font-semibold text-ink transition-colors md:text-5xl"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-24 overflow-hidden border-y border-ink/15 py-5">
        <div ref={marqueeRef} className="flex w-max gap-12 whitespace-nowrap">
          {[...SKILLS, ...SKILLS].map((skill, i) => (
            <span key={i} className="font-mono text-sm uppercase tracking-widest2 text-ink-soft">
              {skill} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
