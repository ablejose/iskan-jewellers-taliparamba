"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { GOLDEN_GOAL } from "@/config/goldenGoal";

/**
 * Hero "Schemes" button (styled like the other hero buttons, with a tag icon
 * and a gentle bounce). Opens a modal popup introducing the Golden Goal Gold
 * Saving Scheme, with a single action to view the full scheme page. A full-
 * screen overlay sits over the page and the background scroll is locked while
 * the popup is open. Closes on the overlay, the X button, or Escape.
 */
export function SchemesPopup() {
  const [open, setOpen] = useState(false);

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

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="schemes-popup-title"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-lg border border-gold/20 bg-[#0B0B12] p-8 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)] sm:p-10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              ✕
            </button>

            <p className="label-eyebrow">{BRAND.businessName}</p>
            <h2
              id="schemes-popup-title"
              className="mt-3 font-display text-display-m text-gold-sweep"
            >
              {GOLDEN_GOAL.name}
            </h2>
            <p className="mt-1 font-sans text-caption uppercase tracking-[0.2em] text-gold/80">
              {GOLDEN_GOAL.subtitle}
            </p>

            <p className="mt-4 font-malayalam text-body text-gold">
              {GOLDEN_GOAL.malayalamTagline}
            </p>
            <p className="mt-4 font-sans text-body text-muted">{GOLDEN_GOAL.intro}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
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
                className="btn-primary w-full"
              >
                View Full Scheme
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
