import { ButtonLink } from "@/components/ui/button-link";
import { SectionCard } from "@/components/ui/section-card";
import { projects, projectsPage } from "@/content/site-content";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title">{projectsPage.title}</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[var(--text-muted)]">{projectsPage.subtitle}</p>
      </section>

      <section aria-label="Project listings" className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <SectionCard
            key={project.slug}
            title={project.title}
            footer={
              project.externalUrl ? (
                <ButtonLink href={project.externalUrl} variant="secondary" target="_blank" rel="noreferrer noopener">
                  Visit Site
                </ButtonLink>
              ) : null
            }
          >
            <p>
              <span className="font-semibold text-[var(--text)]">What Project Is:</span> {project.summary}
            </p>
            {project.currentWork ? (
              <p className="mt-3">
                <span className="font-semibold text-[var(--text)]">Current Work:</span> {project.currentWork}
              </p>
            ) : null}
            {project.focus?.length ? (
              <>
                <h3 className="mt-4 text-base font-semibold text-[var(--text)]">Focus</h3>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {project.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </SectionCard>
        ))}
      </section>
    </div>
  );
}
