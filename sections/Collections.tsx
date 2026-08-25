"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/config/brand";

/**
 * "Our Collections" — an auto-playing banner carousel placed directly below the
 * hero. Each collection banner slides in from the RIGHT and out to the LEFT
 * over 1 second, looping seamlessly. A cloned first slide is appended so the
 * wrap from the last banner back to the first also moves right-to-left, then
 * the track snaps back instantly (no visible jump).
 *
 * Fully config-driven: reads BRAND.collections from config/brand.ts.
 */

const SLIDE_MS = 1000; // the 1s right-to-left swap
const HOLD_MS = 4000; // time each banner rests before the next swap

export function Collections() {
  const collections = BRAND.collections ?? [];
  const count = collections.length;

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Auto-advance one slide at a time.
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => i + 1), HOLD_MS);
    return () => clearInterval(id);
  }, [count]);

  // When we land on the appended clone (index === count), let the 1s slide
  // finish, then snap back to the real first slide without a transition.
  useEffect(() => {
    if (index !== count || count === 0) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, count]);

  // Re-enable the transition on the next frame after a snap-back.
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  if (count === 0) return null;

  const slides = [...collections, collections[0]]; // clone first for seamless wrap
  const activeDot = index % count;

  return (
    <section id="collections" className="w-full bg-background py-16 md:py-24">
      <div className="container-lux">
        <p className="label-eyebrow">Curated Ranges</p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-gold-sweep sm:text-5xl md:text-6xl">
          Our Collections
        </h2>
      </div>

      <div className="container-lux mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-gold/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: animate ? `transform ${SLIDE_MS}ms ease-in-out` : "none",
            }}
          >
            {slides.map((c, i) => (
              <div key={`${c.name}-${i}`} className="w-full shrink-0">
                <img
                  src={c.image}
                  alt={`${c.name} — ${c.label}`}
                  className="block aspect-[3/2] w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">
          {collections.map((c, i) => (
            <span
              key={c.name}
              className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                activeDot === i ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
