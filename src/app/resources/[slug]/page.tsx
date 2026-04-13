import { notFound } from "next/navigation";
import { SectionCard } from "@/components/ui/section-card";
import { ButtonLink } from "@/components/ui/button-link";
import {
  blogPage,
  faqAccordionItems,
  faqPage,
  howItWorksPage,
  resources,
  studentHandbookPage
} from "@/content/site-content";

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

        <section aria-label="Program stages" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <SectionCard title="Traditional Education">
              <ul className="list-inside list-disc space-y-1">
                {howItWorksPage.comparison.traditional.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title="Our Cooperative Model">
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

        <section aria-label="Handbook categories" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

        <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
          <h2 className="mb-2 text-3xl font-semibold">{studentHandbookPage.helpBlock.title}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-[var(--text-muted)]">{studentHandbookPage.helpBlock.description}</p>
          <ButtonLink href={studentHandbookPage.helpBlock.href} variant="secondary">
            {studentHandbookPage.helpBlock.label}
          </ButtonLink>
        </section>
      </div>
    );
  }

  if (slug === "blog") {
    return (
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="page-title">{blogPage.title}</h1>
          <p className="mx-auto max-w-3xl text-[var(--text-muted)]">{blogPage.subtitle}</p>
        </section>

        <section aria-labelledby="featured-post-title">
          <SectionCard title={blogPage.featured.category}>
            <p className="text-sm text-[var(--primary)]">{blogPage.featured.kicker}</p>
            <h2 id="featured-post-title" className="mt-2 text-3xl font-semibold">
              {blogPage.featured.title}
            </h2>
            <p className="mt-3">{blogPage.featured.excerpt}</p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              {blogPage.featured.author} · {blogPage.featured.date}
            </p>
          </SectionCard>
        </section>

        <section aria-labelledby="recent-posts-title">
          <h2 id="recent-posts-title" className="mb-4 text-3xl font-semibold">
            {blogPage.recentTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {blogPage.posts.map((post) => (
              <SectionCard key={post.title} title={post.title}>
                <p>{post.excerpt}</p>
                <p className="mt-4 text-sm text-[var(--text-muted)]">
                  {post.author} · {post.date}
                </p>
              </SectionCard>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (slug === "faqs") {
    return (
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="page-title">{faqPage.title}</h1>
          <p className="mx-auto max-w-3xl text-[var(--text-muted)]">{faqPage.subtitle}</p>
        </section>

        <section aria-labelledby="faq-accordion-title" className="mx-auto max-w-4xl">
          <h2 id="faq-accordion-title" className="sr-only">
            FAQ Accordion
          </h2>
          <div className="space-y-3">
            {faqAccordionItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-4">
                <summary className="focus-ring cursor-pointer rounded font-semibold">{item.question}</summary>
                <p className="mt-3 text-[var(--text-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-center">
          <p className="text-[var(--text-muted)]">{faqPage.supportText}</p>
          <a className="focus-ring rounded text-[var(--primary)] underline" href={faqPage.supportLink.href}>
            {faqPage.supportLink.label}
          </a>
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
