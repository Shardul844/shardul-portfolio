"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGsapContext";
import { wordReveal } from "@/animations/scrollTriggers";
import { splitWords } from "@/animations/textSplit";
import { INTRO_PARAGRAPH } from "@/lib/constants";

export default function Introduction() {
  const root = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !root.current) return;
      const words = textRef.current.querySelectorAll("[data-word]");
      wordReveal(words, root.current);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="introduction"
      className="paper-texture relative flex min-h-screen items-center bg-parchment-dark px-6 py-32 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[auto_1fr]">
        <span className="vertical-text font-mono text-[11px] tracking-widest2 text-ink-soft">
          物語 — NARRATIVE
        </span>
        <p
          ref={textRef}
          className="max-w-4xl font-display text-3xl leading-[1.35] text-ink md:text-5xl"
        >
          {splitWords(INTRO_PARAGRAPH).map(({ key, word }) => (
            <span key={key} data-word className="mr-[0.28em] inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
