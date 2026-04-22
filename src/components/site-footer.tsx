"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { companyLinks, legalLinks, opportunityPages, resources, stayUpdatedBlock } from "@/content/site-content";
import { isValidEmail } from "@/lib/validation/email";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubscribeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setError(data.message ?? "Unable to subscribe right now.");
        return;
      }
      setStatus(data.message ?? "Subscribed successfully.");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="glass-panel-neutral mt-16 border-t border-white/15">
      <div className="container-shell grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        <section className="sm:col-span-2 lg:col-span-2">
          <h2 className="text-2xl font-semibold">{stayUpdatedBlock.title}</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{stayUpdatedBlock.body}</p>
          <form className="mt-4 max-w-xl" onSubmit={handleSubscribeSubmit} noValidate>
            <div className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={stayUpdatedBlock.placeholder}
                className="w-full rounded-md border border-[#4a4a4a] bg-[var(--bg)] px-3 py-2 text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-black disabled:opacity-60"
              >
                {stayUpdatedBlock.buttonLabel}
              </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            {status && <p className="mt-2 text-sm text-green-400">{status}</p>}
          </form>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="font-semibold">Resources</h2>
            <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
              {resources.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/resources/${item.slug}`}
                    className="focus-ring rounded hover:text-[var(--primary)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#faq-title" className="focus-ring rounded hover:text-[var(--primary)]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Opportunities</h2>
            <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
              {opportunityPages.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/opportunities/${item.slug}`}
                    className="focus-ring rounded hover:text-[var(--primary)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sm:col-span-2 lg:col-span-1">
          <h2 className="font-semibold">Company</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-4 font-semibold">Legal</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
