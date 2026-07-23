"use client";

import { useEffect, type ReactNode } from "react";
import type { GymConfig } from "@/types/gym";

interface ThemeProviderProps {
  gym: GymConfig;
  children: ReactNode;
}

export function ThemeProvider({ gym, children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--gold", gym.colors.primary);
    root.style.setProperty("--gold-light", gym.colors.secondary);
    root.style.setProperty("--gold-dark", gym.colors.accent);
    root.style.setProperty("--background", gym.colors.background);
    root.style.setProperty("--foreground", gym.colors.foreground);
    root.style.setProperty("--card", gym.colors.card);
    root.style.setProperty("--muted", gym.colors.muted);
    root.style.setProperty("--border", gym.colors.border);
  }, [gym.colors]);

  return <>{children}</>;
}
