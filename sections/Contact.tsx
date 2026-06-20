"use client";

import MagneticButton from "@/components/MagneticButton";
import { SOCIALS } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between bg-ink px-6 py-20 text-parchment md:px-16"
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest2 text-parchment/60">
        <span>連絡 — Contact</span>
        <span>Shardul Lad © 2026</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest2 text-parchment/60">
          Have a project in mind?
        </p>
        <MagneticButton>
          <a
            href="mailto:precisionsartisans@gmail.com"
            data-cursor-hover
            className="group inline-flex items-baseline gap-3 font-display text-[15vw] font-bold leading-none text-parchment transition-colors hover:text-accent md:text-[8vw]"
          >
            Let&apos;s Talk
            <span className="text-accent transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
              ↗
            </span>
          </a>
        </MagneticButton>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-parchment/15 pt-8 font-mono text-xs uppercase tracking-widest2 text-parchment/70">
        <div className="flex flex-wrap gap-6">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="transition-colors hover:text-accent">
              {s.label}
            </a>
          ))}
        </div>
        <span>Designed &amp; Built by Shardul Lad</span>
      </div>
    </section>
  );
}
