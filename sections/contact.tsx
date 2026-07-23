"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import type { GymConfig } from "@/types/gym";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  formatEmailLink,
  formatPhoneLink,
  formatWhatsAppLink,
} from "@/lib/utils";

interface ContactProps {
  gym: GymConfig;
}

export function Contact({ gym }: ContactProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.message.trim().length < 5) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <Section id="contact">
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Start Your"
          highlight="Journey"
          description="Book a free trial, ask about memberships, or visit us on the floor."
        />
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full border-white/8 bg-white/[0.03]">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div className="space-y-4">
                <a
                  href={formatPhoneLink(gym.contact.phone)}
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-black/30 p-4 transition-colors hover:border-gold/30"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Phone</p>
                    <p className="text-white">{gym.contact.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={formatWhatsAppLink(gym.contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-black/30 p-4 transition-colors hover:border-gold/30"
                >
                  <MessageCircle className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">WhatsApp</p>
                    <p className="text-white">{gym.contact.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={formatEmailLink(gym.contact.email, "Membership inquiry")}
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-black/30 p-4 transition-colors hover:border-gold/30"
                >
                  <Mail className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
                    <p className="text-white">{gym.contact.email}</p>
                  </div>
                </a>
                <a
                  href={gym.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-white/8 bg-black/30 p-4 transition-colors hover:border-gold/30"
                >
                  <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Address</p>
                    <p className="text-white">
                      {gym.contact.address}, {gym.contact.city}, {gym.contact.state}{" "}
                      {gym.contact.zip}
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-gold">
                  <Clock className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Business Hours
                  </p>
                </div>
                <ul className="space-y-2">
                  {gym.openingHours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm text-zinc-400"
                    >
                      <span>{h.day}</span>
                      <span className="text-zinc-300">{h.closed ? "Closed" : h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title={`${gym.name} location map`}
                  src={gym.contact.mapEmbedUrl}
                  className="h-56 w-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal variant="slideRight" delay={0.1}>
          <Card className="border-gold/20 bg-gradient-to-b from-gold/10 to-card">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-display text-3xl text-white">Send a Message</h3>
              <p className="mt-2 text-sm text-zinc-400">
                We typically reply within a few hours during business hours.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Alex Rivera"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="alex@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+1 555 000 0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="I'd like to book a free trial..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
