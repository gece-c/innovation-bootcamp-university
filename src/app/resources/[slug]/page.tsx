import { notFound } from "next/navigation";
import { SectionCard } from "@/components/ui/section-card";
import { ButtonLink } from "@/components/ui/button-link";
import { howItWorksPage, resources, studentHandbookPage } from "@/content/site-content";

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

        <section aria-labelledby="journey-title">
          <h2 id="journey-title" className="mb-2 text-center text-3xl font-semibold">
            {howItWorksPage.journeyTitle}
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-[var(--text-muted)]">
            {howItWorksPage.journeySubtitle}
          </p>
          <div aria-label="Journey steps" className="grid gap-4 md:grid-cols-2">
            {howItWorksPage.journeySteps.map((step) => (
              <SectionCard key={step.title} title={step.title}>
                <p>{step.description}</p>
              </SectionCard>
            ))}
          </div>
        </section>

        <section aria-label="Three-tier learning cards" className="grid gap-4 md:grid-cols-3">
          {howItWorksPage.tiers.map((tier) => {
            const [tierLabel, tierName] = tier.title.split("|").map((part) => part.trim());

            return (
              <SectionCard
                key={tier.title}
                title={
                  tierName ? (
                    <span className="block leading-tight">
                      <span className="block">{tierLabel}</span>
                      <span className="block">{tierName}</span>
                    </span>
                  ) : (
                    tier.title
                  )
                }
              >
              <p className="font-medium text-[var(--primary)]">{tier.tagline}</p>
              <p className="mt-2">{tier.description}</p>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text)]">Duration:</span> {tier.duration}
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text)]">{tier.valueLabel}:</span> {tier.valueText}
              </p>
              <h3 className="mt-4 font-semibold">What you&apos;ll gain:</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                {tier.gains.map((gain) => (
                  <li key={gain}>{gain}</li>
                ))}
              </ul>
              </SectionCard>
            );
          })}
        </section>

        <section aria-labelledby="comparison-title">
          <h2 id="comparison-title" className="mb-4 text-center text-3xl font-semibold">
            {howItWorksPage.comparisonTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <SectionCard title={howItWorksPage.comparison.traditionalTitle}>
              <ul className="list-inside list-disc space-y-1">
                {howItWorksPage.comparison.traditional.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title={howItWorksPage.comparison.cooperativeTitle}>
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

  if (slug === "student-handbook") {
    return (
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="page-title">{studentHandbookPage.title}</h1>
          <p className="mx-auto mb-6 max-w-3xl text-[var(--text-muted)]">{studentHandbookPage.subtitle}</p>
          <ButtonLink href={studentHandbookPage.cta.href}>{studentHandbookPage.cta.label}</ButtonLink>
        </section>

        <section aria-label="Student handbook sections" className="grid gap-4 md:grid-cols-2">
          {studentHandbookPage.sections.map((section) => (
            <SectionCard key={section.title} title={section.title}>
              <ul className="list-inside list-disc space-y-1">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          ))}
        </section>

        <section className="text-center">
          <h2 className="mb-2 text-3xl font-semibold">{studentHandbookPage.helpBlock.title}</h2>
          <p className="mx-auto mb-6 max-w-3xl text-[var(--text-muted)]">
            {studentHandbookPage.helpBlock.description}
          </p>
          <ButtonLink href={studentHandbookPage.helpBlock.href}>{studentHandbookPage.helpBlock.label}</ButtonLink>
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
