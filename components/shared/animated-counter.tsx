"use client";

import type { RefObject } from "react";
import { useCounter, useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const count = useCounter(value, inView);

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={cn("text-center", className)}>
      <p className="font-display text-4xl text-white sm:text-5xl">
        {count}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
        {label}
      </p>
    </div>
  );
}
