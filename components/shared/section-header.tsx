import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}{" "}
        {highlight ? <span className="text-gradient-gold">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
