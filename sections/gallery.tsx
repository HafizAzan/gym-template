"use client";

import { SafeImage as Image } from "@/components/shared/safe-image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { BeforeAfterSlider } from "@/components/shared/before-after-slider";
import { cn } from "@/lib/utils";

const filters = ["all", "gym", "equipment", "workout", "before-after", "instagram"] as const;

interface GalleryProps {
  gym: GymConfig;
}

export function Gallery({ gym }: GalleryProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [active, setActive] = useState<string | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? gym.gallery
        : gym.gallery.filter((item) => item.category === filter),
    [filter, gym.gallery]
  );

  const activeItem = gym.gallery.find((g) => g.id === active);

  return (
    <Section id="gallery">
      <Reveal>
        <SectionHeader
          eyebrow="Visual Proof"
          title="Transformation"
          highlight="Gallery"
          description="Facilities, equipment, and real member transformations — no filters required."
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
              filter === f
                ? "bg-gold text-black"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
            )}
          >
            {f.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {item.category === "before-after" && item.beforeSrc && item.afterSrc ? (
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                alt={item.alt}
                className="pointer-events-none aspect-[4/3] rounded-none"
              />
            ) : (
              <>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                  {item.alt}
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:text-gold"
              onClick={() => setActive(null)}
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
