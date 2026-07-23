import {
  Activity,
  Apple,
  Baby,
  BadgeCheck,
  Car,
  Coffee,
  Droplets,
  Drumstick,
  Dumbbell,
  Flame,
  Heart,
  HeartPulse,
  Leaf,
  Lock,
  type LucideIcon,
  Moon,
  ShoppingBag,
  ShowerHead,
  Sparkles,
  Timer,
  Trophy,
  User,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import type { ComponentType, SVGProps } from "react";

type AnyIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const iconMap: Record<string, AnyIcon> = {
  dumbbell: Dumbbell,
  "badge-check": BadgeCheck,
  user: User,
  apple: Apple,
  heart: Heart,
  lock: Lock,
  flame: Flame,
  car: Car,
  wind: Wind,
  "shower-head": ShowerHead,
  wifi: Wifi,
  "shopping-bag": ShoppingBag,
  coffee: Coffee,
  baby: Baby,
  zap: Zap,
  activity: Activity,
  "heart-pulse": HeartPulse,
  trophy: Trophy,
  timer: Timer,
  sparkles: Sparkles,
  drumstick: Drumstick,
  droplets: Droplets,
  leaf: Leaf,
  moon: Moon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  tiktok: TikTokIcon,
};

export function getIcon(name: string): AnyIcon {
  return iconMap[name] ?? Dumbbell;
}
