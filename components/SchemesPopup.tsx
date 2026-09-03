"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { GOLDEN_GOAL } from "@/config/goldenGoal";

/**
 * Hero "Schemes" button (styled like the other hero buttons, with a tag icon
 * and a gentle bounce). Opens a modal popup introducing the Golden Goal Gold
 * Saving Scheme, with a single action to view the full scheme page.
 *
 * The popup is rendered through a portal into <body> so its fixed overlay is
 * never trapped by a transformed/animated ancestor (e.g. motion/react).
 *
 * Mobile reliability: the CARD has a capped height and scrolls INTERNALLY,
 * while the close button is pinned to the card (not the scrolling region) with a
 * 44px tap target and touch-manipulation. Previously the whole overlay scrolled
 * and the X was absolutely placed on the card, so on a tall popup the X scrolled
 * off-screen and taps during momentum-scroll missed it. Background scroll on
 * <html>/<body> is locked while open. Closes on the backdrop, the X, or Escape.
 */
export function SchemesPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portals require the DOM; only render after mount to stay SSR-safe.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Lock background scrolling on both <html> and <body> so nothing behind
    // the overlay can move until the popup is closed.
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="schemes-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Solid full-screen backdrop — tap anywhere outside the card to close. */}
      <div
        className="absolute inset-0 bg-black"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Card: capped height + internal scroll so the pinned close button never
          scrolls away on small screens. */}
      <div className="relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-gold/20 bg-[#0B0B12] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]">
        {/* Close: pinned to the card (never scrolls), 44px tap target, always
            legible over the title via a translucent backdrop. */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-border bg-[#0B0B12]/85 text-muted backdrop-blur transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Only this region scrolls. */}
        <div className="min-h-0 overflow-y-auto overscroll-contain p-6 sm:p-10">
          <h2
            id="schemes-popup-title"
            className="pr-12 font-display text-display-m text-gold-sweep"
          >
            {GOLDEN_GOAL.name}
          </h2>
          <p className="mt-1 font-sans text-caption uppercase tracking-[0.2em] text-gold">
            {GOLDEN_GOAL.subtitle}
          </p>

          <p className="mt-4 font-malayalam text-body text-gold">
            {GOLDEN_GOAL.malayalamTagline}
          </p>
          <p className="mt-4 font-sans text-body text-muted">{GOLDEN_GOAL.intro}</p>

          {/* Pills stacked in a single column — each on its own line, sized to
              content, left-aligned (never side-by-side). */}
          <ul className="mt-6 flex flex-col items-start gap-2">
            {GOLDEN_GOAL.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-pill border border-gold/30 px-4 py-1.5 font-sans text-caption uppercase tracking-[0.12em] text-gold"
              >
                {pill}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/schemes"
              onClick={() => setOpen(false)}
              className="btn-primary w-full touch-manipulation"
            >
              View Full Scheme
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-secondary animate-scheme-nudge gap-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3H4v5.59A2 2 0 0 0 4.59 10l9.58 9.59a2 2 0 0 0 2.83 0l3.59-3.59a2 2 0 0 0 0-2.83z" />
          <circle cx="7.5" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
        </svg>
        Schemes
      </button>

      {mounted && open ? createPortal(overlay, document.body) : null}
    </>
  );
}
