"use client";

import { SafeImage as Image } from "@/components/shared/safe-image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-2xl select-none touch-none",
        className
      )}
      onPointerDown={() => {
        dragging.current = true;
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerLeave={() => {
        dragging.current = false;
      }}
      onPointerMove={(e) => {
        if (dragging.current) updatePosition(e.clientX);
      }}
      role="img"
      aria-label={`Before and after: ${alt}`}
    >
      <Image src={afterSrc} alt={`After — ${alt}`} fill className="object-cover" sizes="400px" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`Before — ${alt}`}
          fill
          className="object-cover"
          sizes="400px"
        />
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-gold pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-black text-xs font-bold text-gold shadow-lg">
          ⟷
        </div>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
        After
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 z-20 cursor-ew-resize opacity-0"
        aria-label="Compare before and after"
      />
    </div>
  );
}
