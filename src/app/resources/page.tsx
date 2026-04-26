import { SectionCard } from "@/components/ui/section-card";
import { resources } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title">Learning Resources</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[var(--text-muted)]">
          Explore practical guides that support your full journey at Innovation Bootcamp University, from understanding
          the co-op pathway to navigating student expectations and support channels.
        </p>
      </section>

      <section aria-label="Resource categories" className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <SectionCard
            key={resource.slug}
            title={resource.title}
            className="glass-card-soft border-[color-mix(in_srgb,var(--text-muted)_24%,transparent)] bg-transparent"
            footer={
              <ButtonLink href={`/resources/${resource.slug}`} variant="secondary">
                Open Page
              </ButtonLink>
            }
          >
            <p>{resource.summary}</p>
          </SectionCard>
        ))}
      </section>
    </div>
  );
}
