"use client";

import { SafeImage as Image } from "@/components/shared/safe-image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { StarRating } from "@/components/shared/star-rating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsProps {
  gym: GymConfig;
}

export function Testimonials({ gym }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const item = gym.testimonials[index];

  if (!item) return null;

  const prev = () =>
    setIndex((i) => (i - 1 + gym.testimonials.length) % gym.testimonials.length);
  const next = () => setIndex((i) => (i + 1) % gym.testimonials.length);

  return (
    <Section id="stories" className="bg-section-alt overflow-hidden">
      <Reveal>
        <SectionHeader
          eyebrow="Success Stories"
          title="Real Members."
          highlight="Real Results."
          description="Hear from athletes who rebuilt their bodies and routines inside Apex Forge."
        />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent">
              <CardContent className="grid gap-8 p-8 sm:grid-cols-[160px_1fr] sm:p-10">
                <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl sm:mx-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
                <div className="space-y-4 text-center sm:text-left">
                  <StarRating rating={item.rating} />
                  <blockquote className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
                    “{item.quote}”
                  </blockquote>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gold">{item.role}</p>
                    {item.transformation ? (
                      <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                        {item.transformation}
                      </p>
                    ) : null}
                  </div>
                  {item.videoUrl ? (
                    <Button variant="outline" size="sm" onClick={() => setVideoOpen(true)}>
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="secondary" size="icon" onClick={prev} aria-label="Previous story">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {gym.testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to story ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-gold" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <Button variant="secondary" size="icon" onClick={next} aria-label="Next story">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {videoOpen && item.videoUrl ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="aspect-video w-full max-w-3xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={item.videoUrl}
                title={`${item.name} testimonial`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
