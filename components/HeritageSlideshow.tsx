"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BRAND } from "@/config/brand";

/**
 * Heritage slideshow. Three real store photos stacked in one margin-aligned,
 * rounded frame. Each frame slowly pushes in (Ken Burns) while the transitions
 * cross-fade, so moving from picture to picture feels like a camera gliding
 * between frames — never a hard cut. Reduced-motion users see a static first
 * image with no zoom or fade.
 */
const SLIDES = [
  "/heritage/slide-1.jpg",
  "/heritage/slide-2.jpg",
  "/heritage/slide-3.jpg",
];

const HOLD_MS = 4200; // time each frame stays before crossfading to the next

export function HeritageSlideshow() {
  const count = SLIDES.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || count <= 1) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), HOLD_MS);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <div className="relative w-full overflow-hidden rounded-card border border-border shadow-xl shadow-black/40 ring-1 ring-white/5">
      <div className="relative aspect-[32/15] w-full">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            aria-hidden={i === index ? undefined : true}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="kenburns-pan h-full w-full">
              <Image
                src={src}
                alt={`${BRAND.businessName}, ${BRAND.city}`}
                fill
                priority={i === 0}
                sizes="(max-width: 1280px) 92vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* Soft bottom vignette so the progress dots stay legible over any frame. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === i ? "w-7 bg-gold" : "w-2 bg-ivory/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
