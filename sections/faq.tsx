import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps {
  gym: GymConfig;
}

export function Faq({ gym }: FaqProps) {
  return (
    <Section id="faq" className="bg-section-alt">
      <Reveal>
        <SectionHeader
          eyebrow="FAQ"
          title="Questions,"
          highlight="Answered"
          description="Everything you need to know before walking through the doors."
        />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {gym.faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
