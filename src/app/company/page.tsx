import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: "About"
};

export default function CompanyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="page-title">{aboutPage.title}</h1>
        <p className="mx-auto max-w-3xl text-[var(--text-muted)]">{aboutPage.missionLead}</p>
        <p className="mx-auto mt-4 max-w-3xl text-[var(--text-muted)]">{aboutPage.missionBody}</p>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">{aboutPage.coreValuesHeading}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutPage.coreValues.map((item) => (
            <article key={item.title} className="glass-card-soft rounded-xl p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">{aboutPage.areasHeading}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {aboutPage.areas.map((item) => (
            <article key={item.title} className="glass-card-soft rounded-xl p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card-soft rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-semibold">{aboutPage.finalCta.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--text-muted)]">{aboutPage.finalCta.body}</p>
        <div className="mt-6 flex justify-center">
          <ButtonLink href={aboutPage.finalCta.href}>{aboutPage.finalCta.label}</ButtonLink>
        </div>
      </section>
    </div>
  );
}
