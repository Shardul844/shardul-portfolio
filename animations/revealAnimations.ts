import gsap from "gsap";

/** Reveals split characters rising up out of a clipped mask, used by the Hero title. */
export function charRevealTimeline(
  chars: gsap.TweenTarget,
  fadeTargets: gsap.TweenTarget,
  opts?: { delay?: number }
) {
  const tl = gsap.timeline({ delay: opts?.delay ?? 0, defaults: { ease: "power4.out" } });

  tl.set(chars, { yPercent: 120, rotate: 6 })
    .set(fadeTargets, { opacity: 0, y: 24 })
    .to(chars, { yPercent: 0, rotate: 0, duration: 1.4, stagger: 0.045 })
    .to(fadeTargets, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" }, "-=0.9");

  return tl;
}

/** Simple staggered fade + rise, used for secondary copy blocks. */
export function fadeUpStagger(targets: gsap.TweenTarget, opts?: { delay?: number; stagger?: number }) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: opts?.stagger ?? 0.12,
      delay: opts?.delay ?? 0,
    }
  );
}

/** Vertical clip-mask reveal, used for overlay panels sliding up into view. */
export function maskReveal(target: gsap.TweenTarget) {
  return gsap.fromTo(target, { yPercent: 100 }, { yPercent: 0, duration: 1, ease: "power4.out" });
}
