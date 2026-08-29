"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { GOLDEN_GOAL } from "@/config/goldenGoal";
import { whatsappHref } from "@/lib/format";

/**
 * Hero "Schemes" button. Opens a premium popup introducing the Golden Goal
 * Gold Saving Scheme, with quick actions to view the full scheme page or join
 * on WhatsApp. Closes on backdrop click, the X button or Escape, and locks the
 * page scroll while open.
 */
export function SchemesPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="btn-primary">
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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/schemes"
                onClick={() => setOpen(false)}
                className="btn-primary w-full sm:w-auto"
              >
                View Full Scheme
              </Link>
              <a
                href={whatsappHref(BRAND.whatsapp, GOLDEN_GOAL.joinMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Join on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
