import { SectionCard } from "@/components/ui/section-card";
import { resources } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title">Learning Resources</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[var(--text-muted)]">
          Current resources are focused on a single source of truth for how the internship-based model works.
        </p>
      </section>

      <section aria-label="Resource categories" className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <SectionCard
            key={resource.slug}
            title={resource.title}
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

      <section aria-labelledby="featured-resources-title">
        <h2 id="featured-resources-title" className="mb-4 text-3xl font-semibold">
          Current Focus
        </h2>
        <div className="grid gap-4 md:grid-cols-1">
          <SectionCard title="How It Works">
            <p className="text-sm text-[var(--text-muted)]">Live resource</p>
            <p className="mt-3">See the current IBU three-tier structure and internship-based learning model.</p>
          </SectionCard>
        </div>
      </section>
    </div>
  );
}
