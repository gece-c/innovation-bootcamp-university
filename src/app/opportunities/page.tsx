import { ButtonLink } from "@/components/ui/button-link";
import { SectionCard } from "@/components/ui/section-card";
import { opportunityPages } from "@/content/site-content";

export default function OpportunitiesPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title">Opportunities</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[var(--text-muted)]">
          Opportunities are currently focused on internship-based pathways across technical and non-technical fields.
        </p>
      </section>

      <section aria-label="Opportunity categories" className="grid gap-4 md:grid-cols-2">
        {opportunityPages.map((item) => (
          <SectionCard
            key={item.slug}
            title={item.title}
            footer={
              <ButtonLink href={`/opportunities/${item.slug}`} variant="secondary">
                {item.ctaLabel}
              </ButtonLink>
            }
          >
            <p>{item.summary}</p>
          </SectionCard>
        ))}
      </section>
    </div>
  );
}
