import { Check } from "lucide-react";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MembershipPlansProps {
  gym: GymConfig;
}

export function MembershipPlans({ gym }: MembershipPlansProps) {
  return (
    <Section id="membership">
      <Reveal>
        <SectionHeader
          eyebrow="Membership"
          title="Choose Your"
          highlight="Plan"
          description="Transparent pricing. Premium access. Commit at the level that matches your ambition."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4" delay={0.1}>
        {gym.membershipPlans.map((plan) => (
          <StaggerItem key={plan.id}>
            <Card
              className={cn(
                "relative flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-gold/50 bg-gradient-to-b from-gold/15 via-card to-card shadow-[0_25px_60px_-30px_rgba(212,175,55,0.55)]"
                  : "border-white/8"
              )}
            >
              {plan.badge ? (
                <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                  {plan.badge}
                </span>
              ) : null}
              <CardHeader className="space-y-3 pb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {plan.duration}
                </p>
                <h3 className="font-display text-3xl text-white">{plan.name}</h3>
                <p className="text-sm text-zinc-400">{plan.description}</p>
                <p className="pt-2">
                  <span className="font-display text-5xl text-white">
                    {plan.currency}
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-zinc-500">{plan.period}</span>
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-auto w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.ctaHref}>{plan.ctaLabel}</a>
                </Button>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
