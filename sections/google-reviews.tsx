import { SafeImage as Image } from "@/components/shared/safe-image";
import { ExternalLink } from "lucide-react";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { StarRating } from "@/components/shared/star-rating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GoogleReviewsProps {
  gym: GymConfig;
}

export function GoogleReviews({ gym }: GoogleReviewsProps) {
  return (
    <Section id="reviews">
      <Reveal>
        <SectionHeader
          eyebrow="Google Reviews"
          title={`${gym.googleRating.score}`}
          highlight="Star Reputation"
          description={`${gym.googleRating.count.toLocaleString()} verified members trust ${gym.name}.`}
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-5 md:grid-cols-2" delay={0.08}>
        {gym.reviews.map((review) => (
          <StaggerItem key={review.id}>
            <Card className="h-full border-white/8 bg-white/[0.03]">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-zinc-500">
                        {review.source} · {review.date}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} size={14} />
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">{review.text}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-10 flex justify-center">
        <Button variant="outline" asChild>
          <a href={gym.googleRating.url} target="_blank" rel="noopener noreferrer">
            View on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </Section>
  );
}
