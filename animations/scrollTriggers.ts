import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Pins a fullscreen panel in place while the next panel scrolls over it. */
export function pinPanel(panel: Element) {
  return ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });
}

/** Scales + de-saturates an image from "establishing shot" to "in focus" as the panel enters. */
export function parallaxImage(image: Element | null, panel: Element) {
  if (!image) return;
  return gsap.fromTo(
    image,
    { scale: 1.25, filter: "grayscale(0.4) brightness(0.9)" },
    {
      scale: 1,
      filter: "grayscale(0) brightness(1)",
      ease: "none",
      scrollTrigger: { trigger: panel, start: "top bottom", end: "top top", scrub: true },
    }
  );
}

/** Slides a text/info overlay up into place once its panel is mostly in view. */
export function revealOverlay(overlay: Element | null, panel: Element) {
  if (!overlay) return;
  return gsap.fromTo(
    overlay,
    { yPercent: 100 },
    { yPercent: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: panel, start: "top 75%" } }
  );
}

/** Drives a horizontally-scrolling track from vertical scroll input, with pin + snap. */
export function horizontalScroll(track: HTMLElement, container: Element, itemCount: number) {
  const distance = track.scrollWidth - window.innerWidth;
  return gsap.to(track, {
    x: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${distance}`,
      scrub: 0.6,
      pin: true,
      invalidateOnRefresh: true,
      snap: itemCount > 1 ? 1 / (itemCount - 1) : undefined,
    },
  });
}

/** Fades individual word spans in as the section is scrubbed through, pinned in place. */
export function wordReveal(words: Element[] | NodeListOf<Element>, container: Element) {
  gsap.set(words, { opacity: 0.12 });
  return gsap.to(words, {
    opacity: 1,
    stagger: 0.04,
    ease: "none",
    scrollTrigger: { trigger: container, start: "top top", end: "+=120%", scrub: 0.4, pin: true },
  });
}
