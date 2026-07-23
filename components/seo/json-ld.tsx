import type { GymConfig } from "@/types/gym";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildLocalBusinessJsonLd,
} from "@/lib/seo";

interface JsonLdProps {
  gym: GymConfig;
}

export function JsonLd({ gym }: JsonLdProps) {
  const schemas = [
    buildLocalBusinessJsonLd(gym),
    buildFaqJsonLd(gym),
    buildBreadcrumbJsonLd(gym),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
