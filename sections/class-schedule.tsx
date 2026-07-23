"use client";

import { useMemo, useState } from "react";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface ClassScheduleProps {
  gym: GymConfig;
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function ClassSchedule({ gym }: ClassScheduleProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(gym.classSchedule.map((c) => c.category)))],
    [gym.classSchedule]
  );
  const [category, setCategory] = useState("All");
  const [day, setDay] = useState<(typeof days)[number]>("Monday");

  const sessions = gym.classSchedule.filter(
    (c) => c.day === day && (category === "All" || c.category === category)
  );

  return (
    <Section id="schedule" className="bg-section-alt">
      <Reveal>
        <SectionHeader
          eyebrow="Weekly Timetable"
          title="Class"
          highlight="Schedule"
          description="Filter by day and style. Book your spot before classes fill up."
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
              category === cat
                ? "bg-gold text-black"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {days.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDay(d)}
            className={cn(
              "shrink-0 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
              day === d
                ? "bg-white text-black"
                : "border border-white/10 bg-black/30 text-zinc-400 hover:text-white"
            )}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {sessions.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-white/15 py-12 text-center text-zinc-500">
            No classes scheduled for this filter.
          </p>
        ) : (
          sessions.map((session) => (
            <div
              key={session.id}
              className="grid gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-gold/25 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{session.name}</h3>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {session.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">
                  Coach {session.trainer} · {session.duration}
                  {session.spots != null ? ` · ${session.spots} spots` : null}
                </p>
              </div>
              <p className="font-display text-2xl text-gold sm:text-right">{session.time}</p>
            </div>
          ))
        )}
      </div>
    </Section>
  );
}
