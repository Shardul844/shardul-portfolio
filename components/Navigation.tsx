"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { useLenis } from "@/hooks/useLenis";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el && lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.4 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNav("#hero");
        }}
        className={cn(
          "font-display text-lg font-bold tracking-tight transition-colors",
          open ? "text-parchment" : "text-ink"
        )}
      >
        SL
      </a>

      <MagneticButton>
        <button
          onClick={() => setOpen((v) => !v)}
          data-cursor-hover
          className={cn(
            "font-mono text-[11px] uppercase tracking-widest2 transition-colors",
            open ? "text-parchment" : "text-ink"
          )}
        >
          {open ? "Close" : "Menu"}
        </button>
      </MagneticButton>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-ink"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                data-cursor-hover
                className="group flex items-baseline gap-4 font-display text-4xl text-parchment transition-colors hover:text-accent md:text-6xl"
              >
                <span className="font-mono text-xs text-accent">{link.jp}</span>
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
