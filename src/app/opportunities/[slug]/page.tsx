import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import {
  becomeAdvisorPage,
  careerSupportPage,
  industryPartnersPage,
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
            Browse currently open roles and find opportunities that match your strengths.
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

  if (slug === "industry-partners") {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h1 className="page-title">{industryPartnersPage.title}</h1>
          <p className="mx-auto mb-6 max-w-2xl text-[var(--text-muted)]">{industryPartnersPage.subtitle}</p>
          <ButtonLink href={industryPartnersPage.primaryCta.href}>{industryPartnersPage.primaryCta.label}</ButtonLink>
        </section>

        <section className="grid gap-5 md:grid-cols-2" aria-label="Industry partners">
          {industryPartnersPage.partners.map((partner) => (
            <article key={partner.name} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
              <h2 className="text-2xl font-semibold">{partner.name}</h2>
              <p className="mt-1 text-sm text-[var(--primary)]">{partner.category}</p>
              <p className="mt-3 text-[var(--text-muted)]">{partner.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {partner.support.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#4a4a4a] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl bg-[var(--surface)] p-8">
          <h2 className="mb-6 text-center text-3xl font-semibold">{industryPartnersPage.benefitsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {industryPartnersPage.benefits.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/45 p-5 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h2 className="text-3xl font-semibold">{industryPartnersPage.finalCta.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[var(--text-muted)]">{industryPartnersPage.finalCta.description}</p>
          <div className="mt-6">
            <ButtonLink href={industryPartnersPage.finalCta.href} variant="secondary">
              {industryPartnersPage.finalCta.label}
            </ButtonLink>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "become-an-advisor") {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h1 className="page-title">{becomeAdvisorPage.title}</h1>
          <p className="mx-auto mb-6 max-w-2xl text-[var(--text-muted)]">{becomeAdvisorPage.subtitle}</p>
          <ButtonLink href={becomeAdvisorPage.primaryCta.href}>{becomeAdvisorPage.primaryCta.label}</ButtonLink>
        </section>

        <section>
          <h2 className="mb-6 text-center text-3xl font-semibold">{becomeAdvisorPage.requirementsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {becomeAdvisorPage.requirements.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-center text-3xl font-semibold">{becomeAdvisorPage.reasonsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {becomeAdvisorPage.reasons.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--text-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-center text-3xl font-semibold">{becomeAdvisorPage.testimonialsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {becomeAdvisorPage.testimonials.map((item) => (
              <article key={item.name} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
                <p className="text-yellow-300">★★★★★</p>
                <p className="mt-3 text-[var(--text-muted)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 font-semibold">{item.name}</p>
                <p className="text-sm text-[var(--text-muted)]">{item.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h2 className="text-3xl font-semibold">{becomeAdvisorPage.finalCta.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[var(--text-muted)]">{becomeAdvisorPage.finalCta.description}</p>
          <div className="mt-6">
            <ButtonLink href={becomeAdvisorPage.finalCta.href} variant="secondary">
              {becomeAdvisorPage.finalCta.label}
            </ButtonLink>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "career-support") {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h1 className="page-title">{careerSupportPage.title}</h1>
          <p className="mx-auto max-w-3xl text-[var(--text-muted)]">{careerSupportPage.subtitle}</p>
        </section>

        <section className="grid gap-4 md:grid-cols-4" aria-label="Career support metrics">
          {careerSupportPage.metrics.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
              <p className="text-4xl font-semibold text-[var(--primary)]">{metric.value}</p>
              <p className="mt-1 text-lg font-semibold">{metric.label}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{metric.note}</p>
            </article>
          ))}
        </section>

        <section>
          <h2 className="mb-6 text-center text-3xl font-semibold">{careerSupportPage.servicesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {careerSupportPage.services.map((service) => (
              <article key={service.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-center text-3xl font-semibold">{careerSupportPage.resourcesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {careerSupportPage.resources.map((resource) => (
              <article key={resource.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
                <h3 className="text-xl font-semibold">{resource.title}</h3>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--text-muted)]">
                  {resource.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h2 className="text-3xl font-semibold">{careerSupportPage.partnerCta.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[var(--text-muted)]">{careerSupportPage.partnerCta.description}</p>
          <div className="mt-6">
            <ButtonLink href={careerSupportPage.partnerCta.href} variant="secondary">
              {careerSupportPage.partnerCta.label}
            </ButtonLink>
          </div>
        </section>

        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h2 className="text-3xl font-semibold">{careerSupportPage.storiesCta.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[var(--text-muted)]">{careerSupportPage.storiesCta.description}</p>
          <div className="mt-6">
            <ButtonLink href={careerSupportPage.storiesCta.href} variant="ghost">
              {careerSupportPage.storiesCta.label}
            </ButtonLink>
          </div>
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
