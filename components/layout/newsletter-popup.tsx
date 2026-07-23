"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GymConfig } from "@/types/gym";
import { NewsletterForm } from "@/components/shared/newsletter-form";

interface NewsletterPopupProps {
  gym: GymConfig;
}

export function NewsletterPopup({ gym }: NewsletterPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("newsletter-popup");
    if (seen) return;
    const timer = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem("newsletter-popup", "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="relative w-full max-w-md rounded-3xl border border-gold/30 bg-gradient-to-b from-[#1a150a] to-black p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 text-zinc-400 hover:text-white"
              aria-label="Close newsletter popup"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Exclusive Offer
            </p>
            <h3 className="mt-3 font-display text-3xl text-white">{gym.newsletter.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{gym.newsletter.description}</p>
            <div className="mt-6">
              <NewsletterForm
                placeholder={gym.newsletter.placeholder}
                ctaLabel={gym.newsletter.ctaLabel}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
