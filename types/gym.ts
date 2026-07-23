export interface GymColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  card: string;
  border: string;
}

export interface GymContact {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mapEmbedUrl: string;
  mapLink: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  headline: string;
  highlight: string;
  subheadline: string;
  backgroundImage: string;
  backgroundVideo?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: HeroStat[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialization: string[];
  certifications: string[];
  bio: string;
  instagram?: string;
  bookingHref: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "gym" | "equipment" | "workout" | "before-after" | "instagram";
  beforeSrc?: string;
  afterSrc?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
  videoUrl?: string;
  transformation?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  duration: string;
  level: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClassSession {
  id: string;
  name: string;
  trainer: string;
  day: string;
  time: string;
  duration: string;
  category: string;
  spots?: number;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  href: string;
}

export interface NutritionTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Offer {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  endDate: string;
  badge: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle?: string;
  canonicalUrl: string;
}

export interface GymConfig {
  name: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  favicon: string;
  colors: GymColors;
  contact: GymContact;
  openingHours: OpeningHour[];
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  hero: HeroContent;
  features: Feature[];
  membershipPlans: MembershipPlan[];
  trainers: Trainer[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  programs: Program[];
  facilities: Facility[];
  classSchedule: ClassSession[];
  reviews: Review[];
  faqs: FAQ[];
  blogs: BlogPost[];
  nutritionTips: NutritionTip[];
  offer: Offer;
  googleRating: {
    score: number;
    count: number;
    url: string;
  };
  seo: SeoConfig;
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    ctaLabel: string;
  };
  dietPdf: {
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
  };
  cookieConsent: {
    message: string;
    acceptLabel: string;
    declineLabel: string;
  };
  footer: {
    description: string;
    quickLinks: NavLink[];
    legalLinks: NavLink[];
    copyright: string;
  };
}
