import type { Metadata } from "next";
import Link from "next/link";
import { gym } from "@/data/gym";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${gym.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <Link href="/" className="text-sm text-gold hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-5xl text-white">Privacy Policy</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-400">
        <p>
          {gym.name} (“we”, “us”) respects your privacy. This policy explains how we collect,
          use, and protect personal information submitted through our website, forms, and
          membership processes.
        </p>
        <p>
          We may collect your name, email, phone number, and fitness-related preferences when
          you contact us, subscribe to our newsletter, or inquire about membership.
        </p>
        <p>
          Information is used to respond to inquiries, deliver services, send optional marketing
          communications, and improve the website experience. We do not sell your personal data.
        </p>
        <p>
          For privacy requests, email{" "}
          <a className="text-gold" href={`mailto:${gym.contact.email}`}>
            {gym.contact.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
