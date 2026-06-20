# Shardul Lad — Portfolio

A cinematic, award-style portfolio built with **Next.js 15**, **Tailwind CSS**, **GSAP +
ScrollTrigger**, **Lenis**, **Framer Motion**, and **Three.js**. Vintage parchment aesthetic,
black editorial typography, Japanese print-design influences, and a single red-orange accent.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

> This project was authored offline, so dependencies have not been installed or build-verified
> in this environment. Run `npm install` and `npm run build` once before deploying to catch any
> dependency-resolution issues on your machine/Node version (Node 18.18+ or 20+ recommended).

## Structure

```
app/                 Next.js App Router entry (layout, page, global styles)
components/           Reusable, mostly cross-section UI: SmoothScroll (Lenis provider),
                      PageTransition (curtain intro), Cursor, GrainOverlay, Navigation,
                      MagneticButton, CrowSilhouette, ThreeBackground
sections/             One file per page section (Hero, Introduction, FeaturedProjects,
                      ShowcaseSequence, Skills, About, Contact)
hooks/                useLenis, useMousePosition, useGsapContext (useGSAP re-export)
animations/           Reusable GSAP logic: textSplit (char/word splitting),
                      revealAnimations (tween presets), scrollTriggers (ScrollTrigger
                      factories: pin, parallax, horizontal scroll, word reveal)
lib/                  utils.ts (cn/lerp/clamp), constants.ts (all site copy + data)
```

## Theme tokens

| Token             | Value      | Use                                  |
|--------------------|------------|---------------------------------------|
| `parchment`        | `#d1cfbd`  | Base background                       |
| `parchment-dark`   | `#c3c1ac`  | Section alternation                   |
| `ink`               | `#13120e`  | Primary typography / dark sections    |
| `accent`            | `#e85d2a`  | Sparingly — links, hovers, emphasis   |

Fonts (via `next/font/google`, zero layout shift):

- **Display** — Shippori Mincho (Japanese serif, giant typography, headlines)
- **Body** — Zen Kaku Gothic New (editorial sans, body copy)
- **Mono** — JetBrains Mono (eyebrows, labels, captions)

## Notable implementation details

- **Smooth scroll**: `components/SmoothScroll.tsx` wires Lenis into the GSAP ticker and keeps
  `ScrollTrigger.update` in sync — the standard, recommended integration pattern.
- **Page transition**: `components/PageTransition.tsx` is a curtain wipe that blocks interaction
  while loading, then reveals the Hero already mid-animation.
- **Project imagery**: the four Featured Project panels use CSS gradients as placeholder
  "plates" instead of stock photography (no real project images were available to embed).
  Swap `project-image` divs for `next/image` components in `sections/FeaturedProjects.tsx` —
  the parallax/scale ScrollTrigger in `animations/scrollTriggers.ts` works unchanged with an
  `<Image fill />` in place of the gradient div.
- **Reduced motion**: Lenis duration, the Three.js particle drift, the crow's ambient float,
  and the global CSS all check/respect `prefers-reduced-motion`.
- **Custom cursor**: disabled automatically on touch devices and when reduced motion is
  requested.
- **Performance**: the Three.js particle field disposes all GPU resources on unmount, pauses
  rendering work via `IntersectionObserver` when off-screen, and caps `devicePixelRatio` at 1.75.

## Customizing copy & projects

All site copy lives in `lib/constants.ts` — nav links, the four featured projects, showcase
gallery items, skills list, social links, and the Introduction narrative paragraph.
