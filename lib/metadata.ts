import type { Metadata } from "next";
import type { GymConfig } from "@/types/gym";

export function buildMetadata(gym: GymConfig): Metadata {
  return {
    title: {
      default: gym.seo.title,
      template: `%s | ${gym.name}`,
    },
    description: gym.seo.description,
    keywords: gym.seo.keywords,
    authors: [{ name: gym.name }],
    creator: gym.name,
    metadataBase: new URL(gym.seo.canonicalUrl),
    alternates: {
      canonical: gym.seo.canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: gym.seo.canonicalUrl,
      title: gym.seo.title,
      description: gym.seo.description,
      siteName: gym.name,
      images: [
        {
          url: gym.seo.ogImage,
          width: 1200,
          height: 630,
          alt: gym.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: gym.seo.title,
      description: gym.seo.description,
      images: [gym.seo.ogImage],
      creator: gym.seo.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
