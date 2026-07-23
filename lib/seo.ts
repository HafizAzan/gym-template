import type { GymConfig } from "@/types/gym";

export function buildLocalBusinessJsonLd(gym: GymConfig) {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness", "SportsActivityLocation"],
    name: gym.name,
    description: gym.seo.description,
    url: gym.seo.canonicalUrl,
    image: gym.seo.ogImage,
    telephone: gym.contact.phone,
    email: gym.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: gym.contact.address,
      addressLocality: gym.contact.city,
      addressRegion: gym.contact.state,
      postalCode: gym.contact.zip,
      addressCountry: gym.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.102,
      longitude: -118.34,
    },
    openingHoursSpecification: gym.openingHours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.hours.split("–")[0]?.trim(),
        closes: h.hours.split("–")[1]?.trim(),
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: gym.googleRating.score,
      reviewCount: gym.googleRating.count,
    },
    priceRange: "$$",
    sameAs: gym.socialLinks.map((s) => s.url),
  };
}

export function buildFaqJsonLd(gym: GymConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gym.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(gym: GymConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: gym.seo.canonicalUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Membership",
        item: `${gym.seo.canonicalUrl}/#membership`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: `${gym.seo.canonicalUrl}/#contact`,
      },
    ],
  };
}
