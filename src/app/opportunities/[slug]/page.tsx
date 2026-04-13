import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import {
  internshipPositions,
  opportunityPages
} from "@/content/site-content";

export default async function OpportunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = opportunityPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  if (slug === "internships") {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h1 className="page-title">Internship Positions</h1>
          <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
            Browse currently open roles across engineering, science, design, marketing, QA, business, and operations to find opportunities that match your strengths.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Internship listings">
          {internshipPositions.map((item) => (
            <article
              key={item.slug}
              className="flex h-full flex-col rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5"
            >
              <h2 className="text-2xl font-semibold leading-tight">{item.title}</h2>

              <div className="mt-3">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                    item.status === "Open"
                      ? "bg-green-500/15 text-green-300"
                      : item.status === "Closed"
                        ? "bg-rose-500/15 text-rose-300"
                        : "bg-amber-500/15 text-amber-300"
                  }`}
                >
                  {item.status ?? "Open"}
                </span>
              </div>

              <div className="mt-4 space-y-1 text-sm text-[var(--text-muted)]">
                {item.company ? <p>{item.company}</p> : null}
                {item.location ? <p>{item.location}</p> : null}
                {item.duration || item.schedule ? (
                  <p>{[item.duration, item.schedule].filter(Boolean).join(" - ")}</p>
                ) : null}
              </div>

              {item.summary ? <p className="mt-4 text-sm text-[var(--text-muted)]">{item.summary}</p> : null}

              <div className="mt-auto pt-6">
                <ButtonLink href="/opportunities/internships" variant="ghost">
                  More Details
                </ButtonLink>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-[var(--surface)] p-8">
        <h1 className="page-title">{page.title}</h1>
        <p className="max-w-3xl text-[var(--text-muted)]">{page.summary}</p>
      </section>

      <section className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">This page is being finalized</h2>
        <p className="mt-3 text-[var(--text-muted)]">
          Full details for {page.title.toLowerCase()} are being added from your source document.
        </p>
        <div className="mt-5">
          <ButtonLink href="/company/contact" variant="secondary">
            Contact Team
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
