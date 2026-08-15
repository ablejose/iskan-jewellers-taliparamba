import type { BrandConfig } from "@/types/brand";

/** Resolve the public site URL, preferring the environment variable. */
export function getSiteUrl(brand: BrandConfig): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? brand.seo.canonical).replace(
    /\/$/,
    "",
  );
}

/**
 * Build JSON-LD structured data (Organization, LocalBusiness, WebSite).
 * Reference: Document 3 §7.
 */
export function buildJsonLd(brand: BrandConfig): Record<string, unknown>[] {
  const url = getSiteUrl(brand);
  const sameAs = [brand.instagram, brand.facebook, brand.youtube].filter(
    (v): v is string => Boolean(v),
  );

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.businessName,
    url,
    logo: `${url}${brand.logo}`,
    sameAs,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: brand.businessName,
    image: brand.storeImages,
    url,
    telephone: brand.phone.split(",")[0].trim(),
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address,
      addressLocality: brand.city,
      addressRegion: brand.state,
      postalCode: brand.pincode,
      addressCountry: "IN",
    },
    openingHours: ["Mo-Sa 09:30-19:30"],
    sameAs,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.businessName,
    url,
  };

  return [organization, localBusiness, website];
}
