"use client";

import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import type { GymConfig } from "@/types/gym";
import { Button } from "@/components/ui/button";
import { useScrollProgress, useScrolled } from "@/hooks/use-scroll";
import {
  formatEmailLink,
  formatPhoneLink,
  formatWhatsAppLink,
} from "@/lib/utils";

interface FloatingWidgetsProps {
  gym: GymConfig;
}

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-light to-gold transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function BackToTop() {
  const scrolled = useScrolled(600);

  if (!scrolled) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-black/80 text-gold shadow-lg backdrop-blur transition hover:bg-gold hover:text-black md:bottom-8 md:right-6"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export function FloatingContact({ gym }: FloatingWidgetsProps) {
  return (
    <div className="fixed bottom-24 left-5 z-40 flex flex-col gap-2 md:bottom-8 md:left-6">
      <a
        href={formatWhatsAppLink(gym.contact.whatsapp, `Hi ${gym.name}!`)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={formatPhoneLink(gym.contact.phone)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-black/80 text-gold shadow-lg backdrop-blur transition hover:bg-gold hover:text-black"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={formatEmailLink(gym.contact.email)}
        className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-lg backdrop-blur transition hover:border-gold/40 hover:text-gold sm:flex"
        aria-label="Email us"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}

export function StickyMobileCta({ gym }: FloatingWidgetsProps) {
  const scrolled = useScrolled(400);

  if (!scrolled) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 p-3 backdrop-blur-xl md:hidden">
      <div className="flex gap-2">
        <Button className="flex-1" size="sm" asChild>
          <a href="#membership">Join Now</a>
        </Button>
        <Button className="flex-1" size="sm" variant="whatsapp" asChild>
          <a
            href={formatWhatsAppLink(gym.contact.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

export function CookieConsent({ gym }: FloatingWidgetsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-xl rounded-2xl border border-white/10 bg-zinc-950/95 p-5 shadow-2xl backdrop-blur md:bottom-6">
      <p className="text-sm text-zinc-300">{gym.cookieConsent.message}</p>
      <div className="mt-4 flex gap-2">
        <Button size="sm" onClick={() => decide("accepted")}>
          {gym.cookieConsent.acceptLabel}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => decide("declined")}>
          {gym.cookieConsent.declineLabel}
        </Button>
      </div>
    </div>
  );
}
