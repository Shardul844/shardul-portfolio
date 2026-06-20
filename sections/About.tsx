"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative bg-parchment-dark px-6 py-32 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="vertical-text font-mono text-[11px] tracking-widest2 text-ink-soft">
            経歴 — ABOUT
          </span>
          <h2 className="mt-8 font-display text-5xl font-bold leading-[0.95] text-ink md:text-7xl">
            Design is
            <br />
            a discipline
            <br />
            of attention.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-6 font-body text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          <p>
  I&apos;m Shardul Lad, a creative developer and designer based in Mumbai. Currently pursuing a degree in Computer Engineering, I enjoy building immersive web experiences, visual identities, and editorial design projects that combine storytelling with technology.
</p>

          <p>
  My work ranges from motion-driven websites built with Next.js, Three.js, and GSAP to design projects such as The Student&apos;s Canva Handbook, poster collections, and digital experiences. I focus on creating work that feels cinematic, intentional, and memorable.
</p>

          <p className="border-l-2 border-accent pl-6 font-display text-2xl italic text-ink md:text-3xl">
            The best experiences aren't just seen. They're felt.

          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 font-mono text-xs uppercase tracking-widest2 text-ink-soft">
            <span>Mumbai, India</span>
            <span>Available for freelance work</span>
            <span>Designer & Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
