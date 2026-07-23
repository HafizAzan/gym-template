import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";

interface WhyChooseUsProps {
  gym: GymConfig;
}

export function WhyChooseUs({ gym }: WhyChooseUsProps) {
  return (
    <Section id="why-us" className="bg-section-alt">
      <Reveal>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built for"
          highlight="Results"
          description="Every detail of the club is engineered to remove friction and amplify performance."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
        {gym.features.map((feature) => {
          const Icon = getIcon(feature.icon);
          return (
            <StaggerItem key={feature.id}>
              <Card className="group h-full border-white/8 bg-gradient-to-b from-white/[0.06] to-transparent transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_50px_-28px_rgba(212,175,55,0.45)]">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
