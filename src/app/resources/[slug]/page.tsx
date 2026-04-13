import { notFound } from "next/navigation";
import { SectionCard } from "@/components/ui/section-card";
import { ButtonLink } from "@/components/ui/button-link";
import { howItWorksPage, resources } from "@/content/site-content";

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  if (slug === "how-it-works") {
    return (
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="page-title">{howItWorksPage.title}</h1>
          <p className="mx-auto mb-6 max-w-3xl text-[var(--text-muted)]">{howItWorksPage.subtitle}</p>
          <ButtonLink href={howItWorksPage.cta.href}>{howItWorksPage.cta.label}</ButtonLink>
        </section>

        <section aria-label="Program tiers" className="grid gap-4 md:grid-cols-3">
          {howItWorksPage.stages.map((stage) => (
            <SectionCard key={stage.title} title={stage.title}>
              <p>{stage.description}</p>
            </SectionCard>
          ))}
        </section>

        <section aria-labelledby="comparison-title">
          <h2 id="comparison-title" className="mb-4 text-center text-3xl font-semibold">
            {howItWorksPage.comparisonTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <SectionCard title="Typical Alternative Path">
              <ul className="list-inside list-disc space-y-1">
                {howItWorksPage.comparison.traditional.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title="IBU Three-Tier Model">
              <ul className="list-inside list-disc space-y-1">
                {howItWorksPage.comparison.cooperative.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-2 text-3xl font-semibold">{howItWorksPage.finalCta.title}</h2>
          <p className="mx-auto mb-6 max-w-3xl text-[var(--text-muted)]">{howItWorksPage.finalCta.description}</p>
          <ButtonLink href={howItWorksPage.finalCta.href}>{howItWorksPage.finalCta.label}</ButtonLink>
        </section>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">{resource.title}</h1>
      <p className="max-w-3xl text-[var(--text-muted)]">{resource.summary}</p>
    </div>
  );
}
