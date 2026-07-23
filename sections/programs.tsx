import { SafeImage as Image } from "@/components/shared/safe-image";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { getIcon } from "@/lib/icons";

interface ProgramsProps {
  gym: GymConfig;
}

export function Programs({ gym }: ProgramsProps) {
  return (
    <Section id="programs" className="bg-section-alt">
      <Reveal>
        <SectionHeader
          eyebrow="Workout Programs"
          title="Train With"
          highlight="Purpose"
          description="Structured pathways for fat loss, muscle, strength, and longevity."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
        {gym.programs.map((program) => {
          const Icon = getIcon(program.icon);
          return (
            <StaggerItem key={program.id}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-card">
                <div className="relative aspect-[5/4]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl text-white">{program.title}</h3>
                    <p className="text-xs text-zinc-400 line-clamp-2">{program.description}</p>
                    <div className="flex gap-3 pt-1 text-[10px] uppercase tracking-wider text-gold">
                      <span>{program.duration}</span>
                      <span>·</span>
                      <span>{program.level}</span>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
