"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/config/brand";

/**
 * Full-screen brand loading overlay.
 *
 * A black screen showing ONLY the business name with three pulsing dots
 * beneath it. It is painted immediately and cleared as soon as the page is
 * ready — on window load with a short beat, and with a hard time cap so slow
 * media (e.g. the hero video) can never keep the overlay up.
 * Reduced-motion users get an instant transition via app/globals.css.
 *
 * Reads the business name from config/brand.ts, so it is automatically
 * correct for every generated site with no per-site code changes.
 */
export function LoadingScreen() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let done = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const dismiss = () => {
      if (done) return;
      done = true;
      setFading(true);
      timers.push(setTimeout(() => setMounted(false), 500));
    };

    // Clear shortly after the page finishes loading…
    const onLoad = () => timers.push(setTimeout(dismiss, 250));
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // …but never wait on slow media beyond this hard cap.
    timers.push(setTimeout(dismiss, 1600));

    return () => {
      window.removeEventListener("load", onLoad);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading ${BRAND.businessName}`}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-500 ease-lux ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="px-6 text-center font-display text-display-m font-medium tracking-tight text-ivory">
        {BRAND.businessName}
      </span>
      <span className="flex items-center gap-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 animate-bounce rounded-pill bg-gold [animation-delay:-0.3s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-pill bg-gold [animation-delay:-0.15s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-pill bg-gold" />
      </span>
    </div>
  );
}
