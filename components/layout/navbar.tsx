"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GymConfig } from "@/types/gym";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/use-scroll";
import { cn, formatWhatsAppLink } from "@/lib/utils";

interface NavbarProps {
  gym: GymConfig;
}

export function Navbar({ gym }: NavbarProps) {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-black/70 py-3 backdrop-blur-xl shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-gold/10">
            <Image
              src={gym.logo}
              alt={gym.logoAlt}
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </span>
          <span className="font-display text-xl tracking-wide text-white transition-colors group-hover:text-gold">
            {gym.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {gym.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="whatsapp" size="sm" asChild>
            <a
              href={formatWhatsAppLink(gym.contact.whatsapp, `Hi ${gym.name}! I'd like to know more.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="#membership">Membership</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/8 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {gym.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-200 hover:bg-white/5 hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 px-1 pb-2">
                <Button variant="whatsapp" asChild>
                  <a
                    href={formatWhatsAppLink(gym.contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
                <Button asChild>
                  <a href="#membership" onClick={() => setOpen(false)}>
                    Membership
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
