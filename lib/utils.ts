import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function formatWhatsAppLink(whatsapp: string, message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsapp.replace(/\D/g, "")}${text}`;
}

export function formatEmailLink(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${query}`;
}

export function calculateBMI(weightKg: number, heightCm: number) {
  const heightM = heightCm / 100;
  if (heightM <= 0 || weightKg <= 0) return 0;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}

export function getBMICategory(bmi: number) {
  if (bmi < 18.5) {
    return {
      label: "Underweight",
      color: "text-sky-400",
      suggestion:
        "Focus on calorie-dense meals and progressive strength training to build healthy mass.",
    };
  }
  if (bmi < 25) {
    return {
      label: "Healthy",
      color: "text-emerald-400",
      suggestion:
        "Maintain with balanced macros, consistent training, and quality recovery.",
    };
  }
  if (bmi < 30) {
    return {
      label: "Overweight",
      color: "text-amber-400",
      suggestion:
        "Prioritize a moderate calorie deficit, strength training, and daily steps.",
    };
  }
  return {
    label: "Obese",
    color: "text-rose-400",
    suggestion:
      "Start with coach-guided fat-loss programming and sustainable nutrition habits.",
  };
}

export function lbsToKg(lbs: number) {
  return lbs * 0.453592;
}

export function ftInToCm(feet: number, inches: number) {
  return feet * 30.48 + inches * 2.54;
}
