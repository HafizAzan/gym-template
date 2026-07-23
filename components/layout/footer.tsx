import Link from "next/link";
import type { GymConfig } from "@/types/gym";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";

interface FooterProps {
  gym: GymConfig;
}

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  tiktok: TikTokIcon,
} as const;

export function Footer({ gym }: FooterProps) {
  return (
    <footer className="relative border-t border-white/8 bg-[#070707] pt-20 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-4">
          <p className="font-display text-3xl tracking-wide text-white">{gym.name}</p>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">{gym.footer.description}</p>
          <div className="flex gap-3">
            {gym.socialLinks.map((social) => {
              const Icon =
                socialIcons[social.icon as keyof typeof socialIcons] ?? InstagramIcon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Quick Links
          </p>
          <ul className="space-y-3">
            {gym.footer.quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Legal
          </p>
          <ul className="space-y-3">
            {gym.footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Newsletter
          </p>
          <p className="text-sm text-zinc-400">{gym.newsletter.description}</p>
          <NewsletterForm
            placeholder={gym.newsletter.placeholder}
            ctaLabel={gym.newsletter.ctaLabel}
          />
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/8 px-5 pt-8 text-center text-xs text-zinc-500 sm:flex-row sm:px-8 sm:text-left">
        <p>{gym.footer.copyright}</p>
        <p>
          {gym.contact.address}, {gym.contact.city} · {gym.contact.phoneDisplay}
        </p>
      </div>
    </footer>
  );
}
