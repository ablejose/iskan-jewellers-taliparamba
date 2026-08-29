import type { MetadataRoute } from "next";
import { BRAND } from "@/config/brand";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl(BRAND);
  const now = new Date();
  return [
    {
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/schemes", url).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
