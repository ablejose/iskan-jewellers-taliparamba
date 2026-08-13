import Image from "next/image";

interface StoreImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  /**
   * Sizing + aspect classes for the frame. Defaults to the portrait card used
   * elsewhere; VisitStore passes a landscape (16:9) frame so the full store
   * photo is shown uncropped.
   */
  className?: string;
  /** next/image `sizes` hint; should reflect the rendered frame width. */
  sizes?: string;
}

/**
 * Responsive, lazy-loaded storefront image with soft rounded corners and a
 * gentle zoom on hover (Document 2 §7). Uses next/image for optimization.
 */
export function StoreImage({
  src,
  alt,
  priority = false,
  className = "aspect-[4/5] w-full",
  sizes = "(max-width: 768px) 60vw, 20vw",
}: StoreImageProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-gold/20 shadow-xl shadow-black/40 ring-1 ring-white/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
    </div>
  );
}
