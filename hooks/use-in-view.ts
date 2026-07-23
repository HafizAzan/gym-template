"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.2 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

export function useCounter(end: number, enabled: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let start: number | null = null;
    const isDecimal = !Number.isInteger(end);
    let frame: number;

    const step = (timestamp: number) => {
      if (start == null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;
      setValue(isDecimal ? Number(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, enabled, duration]);

  return value;
}
