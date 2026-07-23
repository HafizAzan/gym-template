import { SafeImage as Image } from "@/components/shared/safe-image";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { InstagramIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TrainersProps {
  gym: GymConfig;
}

export function Trainers({ gym }: TrainersProps) {
  return (
    <Section id="trainers" className="bg-section-alt">
      <Reveal>
        <SectionHeader
          eyebrow="Elite Coaches"
          title="Personal"
          highlight="Trainers"
          description="World-class coaches who treat your goals like a professional sport."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
        {gym.trainers.map((trainer) => (
          <StaggerItem key={trainer.id}>
            <Card className="group overflow-hidden border-white/8 bg-transparent p-0">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 space-y-3 p-5">
                  <div>
                    <h3 className="font-display text-2xl text-white">{trainer.name}</h3>
                    <p className="text-sm text-gold">{trainer.role}</p>
                  </div>
                  <p className="text-xs text-zinc-400">{trainer.experience} experience</p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    {trainer.certifications.join(" · ")}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={trainer.bookingHref}>Book Session</a>
                    </Button>
                    {trainer.instagram ? (
                      <Button size="icon" variant="secondary" asChild>
                        <a
                          href={trainer.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} on Instagram`}
                        >
                          <InstagramIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
