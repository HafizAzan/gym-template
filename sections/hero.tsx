"use client";

import { SafeImage as Image } from "@/components/shared/safe-image";
import { ChevronDown, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { GymConfig } from "@/types/gym";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MagneticButton } from "@/components/shared/magnetic-button";

interface HeroSectionProps {
  gym: GymConfig;
}

export function HeroSection({ gym }: HeroSectionProps) {
  const { hero, googleRating, name } = gym;

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32">
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {hero.badge}
          </p>

          <h1 className="font-display text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.88] tracking-tight text-white">
            <span className="block">{name}</span>
            <span className="mt-2 block text-white/95">{hero.headline}</span>
            <span className="mt-1 block text-gradient-gold">{hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button size="xl" asChild>
                <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button size="xl" variant="secondary" asChild>
                <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </Button>
            </MagneticButton>
          </div>

          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-gold"
          >
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span>
              {googleRating.score} Google Rating · {googleRating.count.toLocaleString()} reviews
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4 lg:mt-20"
        >
          {hero.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>

      <a
        href="#why-us"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-400 transition-colors hover:text-gold sm:flex"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
