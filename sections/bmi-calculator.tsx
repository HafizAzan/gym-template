"use client";

import { useState, type FormEvent } from "react";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { calculateBMI, getBMICategory } from "@/lib/utils";

interface BmiCalculatorProps {
  gym: GymConfig;
}

export function BmiCalculator({ gym }: BmiCalculatorProps) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "other">("male");
  const [bmi, setBmi] = useState<number | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = calculateBMI(Number(weight), Number(height));
    setBmi(result > 0 ? result : null);
  };

  const category = bmi != null ? getBMICategory(bmi) : null;

  return (
    <Section id="bmi">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            align="left"
            eyebrow="Health Check"
            title="BMI"
            highlight="Calculator"
            description={`Use ${gym.name}'s quick calculator to understand your starting point — then let our coaches build the plan.`}
            className="mx-0"
          />
          <p className="mt-6 text-sm text-zinc-500">
            Healthy BMI range for most adults: 18.5 – 24.9. This tool is informational and not medical advice.
          </p>
        </Reveal>

        <Reveal variant="slideRight" delay={0.1}>
          <Card className="border-gold/20 bg-gradient-to-br from-gold/10 via-card to-card">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    min={100}
                    max={250}
                    required
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    min={30}
                    max={300}
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    min={12}
                    max={100}
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="28"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    id="gender"
                    value={gender}
                    onChange={(e) =>
                      setGender(e.target.value as "male" | "female" | "other")
                    }
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full" size="lg">
                    Calculate BMI
                  </Button>
                </div>
              </form>

              {bmi != null && category ? (
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Your BMI</p>
                  <p className="mt-2 font-display text-5xl text-white">{bmi}</p>
                  <p className={`mt-2 text-lg font-semibold ${category.color}`}>
                    {category.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {category.suggestion}
                  </p>
                  <Button className="mt-5" variant="outline" asChild>
                    <a href="#contact">Talk to a Coach</a>
                  </Button>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
