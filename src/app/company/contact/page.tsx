 "use client";

import { FormEvent, useState } from "react";
import { stayUpdatedBlock } from "@/content/site-content";
import { isValidEmail } from "@/lib/validation/email";

export default function ContactPage() {
  const [contactEmail, setContactEmail] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [contactStatus, setContactStatus] = useState<string | null>(null);
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>(null);
  const [contactError, setContactError] = useState<string | null>(null);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isSubscribeSubmitting, setIsSubscribeSubmitting] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactStatus(null);
    setContactError(null);

    if (!isValidEmail(contactEmail)) {
      setContactError("Please enter a valid email address.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: contactEmail,
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    setIsContactSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setContactError(data.message ?? "Unable to send message right now.");
        return;
      }
      setContactStatus(data.message ?? "Message sent successfully.");
      event.currentTarget.reset();
      setContactEmail("");
    } catch {
      setContactError("Network error. Please try again.");
    } finally {
      setIsContactSubmitting(false);
    }
  }

  async function handleSubscribeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribeStatus(null);
    setSubscribeError(null);

    if (!isValidEmail(subscribeEmail)) {
      setSubscribeError("Please enter a valid email address.");
      return;
    }

    setIsSubscribeSubmitting(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscribeEmail })
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setSubscribeError(data.message ?? "Unable to subscribe right now.");
        return;
      }
      setSubscribeStatus(data.message ?? "Subscribed successfully.");
      setSubscribeEmail("");
    } catch {
      setSubscribeError("Network error. Please try again.");
    } finally {
      setIsSubscribeSubmitting(false);
    }
  }

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="page-title">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
          Have questions about our cooperative education model? We&apos;re here to help.
        </p>
      </section>

      <section className="grid gap-6 rounded-2xl border border-[#4a4a4a] bg-[var(--surface)] p-6 md:grid-cols-2">
        <article>
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Whether you have questions about our programs, want to learn more about our cooperative education model, or
            need assistance, our team is ready to help.
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-[var(--text-muted)]">analytics@flomadlabs.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-[var(--text-muted)]">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-[var(--text-muted)]">
                123 Innovation Way
                <br />
                Tech Hub, CA 94103
                <br />
                United States
              </p>
            </div>
          </div>
        </article>

        <article>
          <h2 className="text-3xl font-semibold">Send Us a Message</h2>
          <form className="mt-4 space-y-4" onSubmit={handleContactSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1 block text-[var(--text-muted)]">Name</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-md border border-[#4a4a4a] bg-[var(--bg)] px-3 py-2"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-[var(--text-muted)]">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.target.value)}
                  className="w-full rounded-md border border-[#4a4a4a] bg-[var(--bg)] px-3 py-2"
                />
              </label>
            </div>
            <label className="text-sm">
              <span className="mb-1 block text-[var(--text-muted)]">Subject</span>
              <select
                name="subject"
                required
                defaultValue=""
                className="w-full rounded-md border border-[#4a4a4a] bg-[var(--bg)] px-3 py-2"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option>Program Inquiry</option>
                <option>Cooperative Education</option>
                <option>Application Help</option>
                <option>Partnership Opportunities</option>
                <option>Other</option>
              </select>
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-[var(--text-muted)]">Message</span>
              <textarea
                name="message"
                required
                minLength={10}
                className="h-32 w-full rounded-md border border-[#4a4a4a] bg-[var(--bg)] px-3 py-2"
              />
            </label>
            {contactError && <p className="text-sm text-red-400">{contactError}</p>}
            {contactStatus && <p className="text-sm text-green-400">{contactStatus}</p>}
            <button
              type="submit"
              disabled={isContactSubmitting}
              className="rounded-md bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-black disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </article>
      </section>

      <section className="rounded-2xl border border-[#4a4a4a] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">{stayUpdatedBlock.title}</h2>
        <p className="mt-2 max-w-2xl text-[var(--text-muted)]">{stayUpdatedBlock.body}</p>
        <form className="mt-4 max-w-xl" onSubmit={handleSubscribeSubmit} noValidate>
          <div className="flex gap-2">
            <input
              type="email"
              required
              value={subscribeEmail}
              onChange={(event) => setSubscribeEmail(event.target.value)}
              placeholder={stayUpdatedBlock.placeholder}
              className="w-full rounded-md border border-[#4a4a4a] bg-[var(--bg)] px-3 py-2"
            />
            <button
              type="submit"
              disabled={isSubscribeSubmitting}
              className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-black disabled:opacity-60"
            >
              {stayUpdatedBlock.buttonLabel}
            </button>
          </div>
          {subscribeError && <p className="mt-2 text-sm text-red-400">{subscribeError}</p>}
          {subscribeStatus && <p className="mt-2 text-sm text-green-400">{subscribeStatus}</p>}
        </form>
      </section>
    </div>
  );
}
