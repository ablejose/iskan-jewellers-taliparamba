import { BRAND } from "@/config/brand";
import { Button } from "@/components/Button";
import { SchemesPopup } from "@/components/SchemesPopup";
import { telHref } from "@/lib/format";

/**
 * Full-viewport hero with an autoplay, muted, looping Cloudinary film behind
 * the brand name, tagline and CTAs (Document 2 §4, Document 5 §7). The Schemes
 * button opens a popup for the Golden Goal Gold Saving Scheme; alongside it are
 * Visit Store and Call Now. Content anchored slightly left of center.
 */
export function Hero() {
  return (
    <section id="top" className="relative flex h-svh min-h-[640px] w-full items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={BRAND.heroVideo}
        poster={BRAND.heroVideo.replace("/upload/", "/upload/so_0/").replace(/\.mp4$/, ".jpg")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container-lux relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-display-xl text-gold-sweep">{BRAND.businessName}</h1>
          <p className="mt-6 font-sans text-body text-gold sm:whitespace-nowrap">{BRAND.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SchemesPopup />
            <Button href="#visit-store" variant="secondary">
              Visit Store
            </Button>
            <Button href={telHref(BRAND.phone)} variant="secondary">
              Call Now
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <span className="flex flex-col items-center gap-2 text-muted" aria-hidden="true">
          <span className="text-caption uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gold/60" />
        </span>
      </div>
    </section>
  );
}
