import { SafeImage as Image } from "@/components/shared/safe-image";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { getIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BlogsProps {
  gym: GymConfig;
}

export function Blogs({ gym }: BlogsProps) {
  return (
    <Section id="blog" className="bg-section-alt">
      <Reveal>
        <SectionHeader
          eyebrow="Latest Insights"
          title="Fitness"
          highlight="Blog"
          description="Training science, recovery tactics, and member stories from the floor."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3" delay={0.08}>
        {gym.blogs.map((post) => (
          <StaggerItem key={post.id}>
            <a href={post.href} className="group block h-full">
              <Card className="h-full overflow-hidden border-white/8 bg-transparent p-0 transition-transform hover:-translate-y-1">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-gold">
                    <span>{post.category}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{post.excerpt}</p>
                  <p className="text-xs text-zinc-600">{post.date}</p>
                </CardContent>
              </Card>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

interface NutritionTipsProps {
  gym: GymConfig;
}

export function NutritionTips({ gym }: NutritionTipsProps) {
  return (
    <Section id="nutrition">
      <Reveal>
        <SectionHeader
          eyebrow="Nutrition"
          title="Fuel Like An"
          highlight="Athlete"
          description="Simple habits that compound into visible physique and energy upgrades."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
        {gym.nutritionTips.map((tip) => {
          const Icon = getIcon(tip.icon);
          return (
            <StaggerItem key={tip.id}>
              <div className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{tip.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{tip.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.15} className="mt-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-gold/25 bg-gradient-to-r from-gold/15 via-card to-card p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-3xl text-white">{gym.dietPdf.title}</h3>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">{gym.dietPdf.description}</p>
          </div>
          <Button size="lg" asChild>
            <a href={gym.dietPdf.href}>{gym.dietPdf.ctaLabel}</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
