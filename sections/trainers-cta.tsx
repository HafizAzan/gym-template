import { MessageCircle, UserRound } from "lucide-react";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { formatWhatsAppLink } from "@/lib/utils";

interface TrainersCtaProps {
  gym: GymConfig;
}

export function TrainersCta({ gym }: TrainersCtaProps) {
  return (
    <Section className="py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/20 via-[#16120a] to-black p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Personal Training
              </p>
              <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                Book a Personal Trainer
              </h2>
              <p className="max-w-xl text-zinc-300">
                Get matched with a coach who specializes in your goal — strength, physique,
                fat loss, or athletic performance.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:justify-self-end">
              <MagneticButton>
                <Button size="lg" asChild>
                  <a href="#contact">
                    <UserRound className="h-4 w-4" />
                    Book Session
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="whatsapp" asChild>
                  <a
                    href={formatWhatsAppLink(
                      gym.contact.whatsapp,
                      `Hi ${gym.name}! I want to book a personal trainer.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Now
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
