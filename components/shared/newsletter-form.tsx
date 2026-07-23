"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterFormProps {
  placeholder: string;
  ctaLabel: string;
}

export function NewsletterForm({ placeholder, ctaLabel }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    toast.success("You're on the list. Welcome to the forge.");
    setEmail("");
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Email for newsletter"
        className="sm:flex-1"
      />
      <Button type="submit" disabled={loading} className="shrink-0">
        {loading ? "Joining..." : ctaLabel}
      </Button>
    </form>
  );
}
