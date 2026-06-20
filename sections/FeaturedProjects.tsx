"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGsapContext";
import { pinPanel, parallaxImage, revealOverlay } from "@/animations/scrollTriggers";
import { PROJECTS } from "@/lib/constants";

export default function FeaturedProjects() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = root.current?.querySelectorAll<HTMLElement>(".project-panel");
      panels?.forEach((panel) => {
        const image = panel.querySelector(".project-image");
        const overlay = panel.querySelector(".project-overlay");
        parallaxImage(image, panel);
        revealOverlay(overlay, panel);
        pinPanel(panel);
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="projects" className="relative bg-parchment">
      <div className="absolute left-6 top-8 z-20 md:left-10 md:top-10">
        <span className="font-mono text-[11px] tracking-widest2 text-ink-soft">作品 — WORKS</span>
      </div>

      {PROJECTS.map((project) => (
        <div
          key={project.id}
          className="project-panel relative flex h-screen w-full items-end overflow-hidden"
        >
          <div
  className="project-image absolute inset-0 -z-10 bg-cover bg-center"
  style={{
    backgroundImage: `url(${project.image})`,
  }}
/>
          <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/80 via-black/45 to-black/20" />

          <div className="project-overlay relative z-10 grid w-full gap-8 px-6 pb-16 md:grid-cols-[auto_1fr_auto] md:items-end md:px-16">
            <span className="font-mono text-xs tracking-widest2 text-parchment/70">
              {project.id} / {project.jp}
            </span>
            <div>
              <h3 className="font-display text-5xl font-bold leading-none text-parchment md:text-8xl">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-accent">
                {project.category}
              </p>
              <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-parchment/80">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-parchment/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-parchment/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <span className="hidden font-display text-7xl font-bold text-parchment/10 md:block">
              {project.id}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
