"use client";

import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/use-scroll";

interface PricingCtaProps {
  gym: GymConfig;
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-[72px] rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-center backdrop-blur">
      <p className="font-display text-3xl text-white">{String(value).padStart(2, "0")}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</p>
    </div>
  );
}

export function PricingCta({ gym }: PricingCtaProps) {
  const { days, hours, minutes, seconds, expired } = useCountdown(gym.offer.endDate);

  return (
    <Section id="offer" className="bg-section-alt">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1408_50%,#0a0a0a_100%)] p-8 text-center sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />
          <div className="relative space-y-6">
            <span className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              {gym.offer.badge}
            </span>
            <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
              {gym.offer.title}
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-300">{gym.offer.description}</p>

            {!expired ? (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <TimeBox label="Days" value={days} />
                <TimeBox label="Hours" value={hours} />
                <TimeBox label="Mins" value={minutes} />
                <TimeBox label="Secs" value={seconds} />
              </div>
            ) : (
              <p className="text-sm text-zinc-500">This offer has ended — ask about current promos.</p>
            )}

            <Button size="xl" asChild>
              <a href={gym.offer.ctaHref}>{gym.offer.ctaLabel}</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
