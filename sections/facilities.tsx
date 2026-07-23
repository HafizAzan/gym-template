import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { getIcon } from "@/lib/icons";

interface FacilitiesProps {
  gym: GymConfig;
}

export function Facilities({ gym }: FacilitiesProps) {
  return (
    <Section id="facilities">
      <Reveal>
        <SectionHeader
          eyebrow="Facilities"
          title="Everything You"
          highlight="Need"
          description="From recovery suites to protein cafe — the full high-performance ecosystem."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
        {gym.facilities.map((facility) => {
          const Icon = getIcon(facility.icon);
          return (
            <StaggerItem key={facility.id}>
              <div className="group flex h-full gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:border-gold/30 hover:bg-gold/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{facility.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{facility.description}</p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
