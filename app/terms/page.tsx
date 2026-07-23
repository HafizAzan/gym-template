import type { Metadata } from "next";
import Link from "next/link";
import { gym } from "@/data/gym";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${gym.name}.`,
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <Link href="/" className="text-sm text-gold hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-5xl text-white">Terms of Service</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-400">
        <p>
          By using the {gym.name} website and purchasing memberships, you agree to these terms.
          Membership privileges, class bookings, and facility access are subject to club rules
          and applicable local law.
        </p>
        <p>
          Website content is provided for informational purposes. Training advice does not
          replace professional medical consultation. Always consult a physician before starting a
          new exercise program.
        </p>
        <p>
          Pricing, offers, and schedules may change. Limited-time promotions are subject to
          availability and stated end dates.
        </p>
        <p>
          Questions about these terms:{" "}
          <a className="text-gold" href={`mailto:${gym.contact.email}`}>
            {gym.contact.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
