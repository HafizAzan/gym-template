import type { MetadataRoute } from "next";
import { gym } from "@/data/gym";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${gym.seo.canonicalUrl}/sitemap.xml`,
    host: gym.seo.canonicalUrl,
  };
}
