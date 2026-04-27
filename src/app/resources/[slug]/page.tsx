import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons";
import { FaBriefcase, FaCheck, FaCoins, FaFlagCheckered, FaGlobe, FaRocket, FaUserCheck, FaUsersCog } from "react-icons/fa";
import { SectionCard } from "@/components/ui/section-card";
import { ButtonLink } from "@/components/ui/button-link";
import {
  RESOURCE_SLUGS,
  communityPlaybookPage,
  howItWorksPage,
  resources
} from "@/content/site-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === RESOURCE_SLUGS.howItWorks) {
    return { title: "How It Works" };
  }
  if (slug === RESOURCE_SLUGS.communityPlaybook) {
    return { title: "Community Playbook" };
  }
  const resource = resources.find((item) => item.slug === slug);
  return { title: resource?.title ?? "Resources" };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  if (slug === RESOURCE_SLUGS.howItWorks) {
    const journeyIcons: IconType[] = [FaBriefcase, FaCoins, FaUsersCog, FaFlagCheckered];
    const tierIcons: IconType[] = [FaRocket, FaUserCheck, FaFlagCheckered];
    const howItWorksDesignPattern = {
      sectionGap: "space-y-16",
      heading:
        'text-[clamp(1.9rem,2.2vw+1rem,3.1rem)] leading-tight font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] font-bold',
      body: "text-[clamp(1.02rem,0.4vw+0.92rem,1.16rem)] leading-relaxed text-[var(--text-muted)]",
      panel: "glass-panel rounded-3xl",
      card: "glass-card-soft border-[color:color-mix(in_srgb,var(--text-muted)_24%,transparent)] bg-transparent rounded-2xl"
    } as const;

    return (
      <div className={howItWorksDesignPattern.sectionGap}>
        <section className={`relative overflow-hidden px-6 py-12 sm:px-10 sm:py-14 ${howItWorksDesignPattern.panel}`}>
          <Image
            src="/resources/how-it-works.png"
            alt="How it works overview"
            fill
            className="object-cover object-center opacity-24"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/30 to-black/58" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(130deg,color-mix(in_srgb,var(--primary)_24%,transparent),transparent_46%)]" aria-hidden="true" />

          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1 className='font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] text-[clamp(2.25rem,4vw+1rem,4.1rem)] leading-[1.06] font-bold text-white'>
              How It <span className="text-[var(--primary)]">Works</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[clamp(1.08rem,0.5vw+0.95rem,1.24rem)] leading-relaxed text-gray-200">
              {howItWorksPage.subtitle}
            </p>
            <div className="mt-8">
              <ButtonLink href={howItWorksPage.cta.href}>{howItWorksPage.cta.label}</ButtonLink>
            </div>
          </div>
        </section>

        <section aria-labelledby="journey-title">
          <div className="mb-8 text-center">
            <h2 id="journey-title" className={howItWorksDesignPattern.heading}>
              {howItWorksPage.journeyTitle}
            </h2>
            <p className={`mx-auto mt-3 max-w-3xl ${howItWorksDesignPattern.body}`}>{howItWorksPage.journeySubtitle}</p>
          </div>
          <ul aria-label="Journey steps" className="grid w-full gap-4 md:grid-cols-2">
            {howItWorksPage.journeySteps.map((step, index) => {
              const Icon = journeyIcons[index] ?? FaBriefcase;

              return (
                <li key={step.title} className="list-none">
                  <article className="group relative overflow-hidden rounded-2xl p-6">
                    <span
                      className="pointer-events-none absolute top-9 left-0 h-16 w-[2px] origin-top rounded-full bg-[var(--primary)] transition-all duration-300 ease-out group-hover:h-20 group-hover:shadow-[0_0_14px_var(--primary)]"
                      aria-hidden="true"
                    />
                    <div className="relative z-[1] flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-lg text-[var(--primary)]" aria-hidden="true">
                        <Icon />
                      </span>
                      <div>
                        <p className="mb-2 inline-flex px-2.5 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--primary)]">
                          Journey Step
                        </p>
                        <h3 className="text-[clamp(1.35rem,0.85vw+1.1rem,1.9rem)] font-bold leading-tight text-[var(--text)]">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[clamp(1rem,0.45vw+0.9rem,1.18rem)] leading-relaxed text-[var(--text-muted)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-label="Three-tier learning cards" className="grid gap-4 md:grid-cols-3">
          {howItWorksPage.tiers.map((tier, index) => {
            const [tierLabel, tierName] = tier.title.split("|").map((part) => part.trim());
            const TierIcon = tierIcons[index] ?? FaRocket;

            return (
              <SectionCard
                key={tier.title}
                className={`${howItWorksDesignPattern.card} border-[color:color-mix(in_srgb,var(--primary)_40%,transparent)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_58%)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary)_20%,transparent),0_12px_26px_color-mix(in_srgb,var(--primary)_14%,transparent)]`}
                title={
                  tierName ? (
                    <span className="block leading-tight">
                      <span className="mb-1 inline-flex items-center gap-2 text-[var(--primary)]">
                        <TierIcon aria-hidden="true" className="text-[0.85em] translate-y-[0.02em]" />
                        <span>{tierLabel}</span>
                      </span>
                      <span className="block">{tierName}</span>
                    </span>
                  ) : (
                    tier.title
                  )
                }
              >
                <p className="text-base font-semibold text-[var(--primary)]">{tier.tagline}</p>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-[var(--text-muted)]">{tier.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text)]">Duration:</span> {tier.duration}
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text)]">{tier.valueLabel}:</span> {tier.valueText}
                </p>
                <h3 className="mt-4 font-semibold text-[var(--text)]">What you&apos;ll gain:</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--text-muted)]">
                  {tier.gains.map((gain) => (
                    <li key={gain}>{gain}</li>
                  ))}
                </ul>
              </SectionCard>
            );
          })}
        </section>

        <section aria-labelledby="comparison-title">
          <h2 id="comparison-title" className={`mb-6 text-center ${howItWorksDesignPattern.heading}`}>
            {howItWorksPage.comparisonTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[color:color-mix(in_srgb,var(--text-muted)_24%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_88%,transparent)] p-4 sm:p-5">
              <div className="mb-4 border-b border-[color:color-mix(in_srgb,var(--text-muted)_24%,transparent)] pb-4">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-white" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-[var(--text)]">{howItWorksPage.comparison.traditionalTitle}</h3>
                </div>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Conventional route with delayed market outcomes.</p>
              </div>
              <ul className="list-disc space-y-3 pl-5">
                {howItWorksPage.comparison.traditional.map((item) => (
                  <li key={item} className="text-[var(--text-muted)]">{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[color:color-mix(in_srgb,var(--primary)_38%,transparent)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_62%)] p-4 sm:p-5">
              <div className="mb-4 border-b border-[color:color-mix(in_srgb,var(--primary)_34%,transparent)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-sm">
                    <Image src="/flolabs-logo.svg" alt="Website logo" fill className="object-contain" sizes="20px" />
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--text)]">{howItWorksPage.comparison.cooperativeTitle}</h3>
                </div>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Integrated path where education and contribution run together.</p>
              </div>
              <ul className="space-y-3">
                {howItWorksPage.comparison.cooperative.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-muted)]">
                    <FaCheck className="mt-1 shrink-0 text-[0.8rem] text-[var(--primary)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl glass-panel-horizontal px-6 py-10 text-center sm:px-8 sm:py-12">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_78%,transparent),transparent)]" />
            <div className="absolute -bottom-12 left-1/2 h-32 w-52 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--primary)_24%,transparent)] blur-3xl" />
          </div>
          <h2 className={`relative z-[1] mb-2 ${howItWorksDesignPattern.heading}`}>
            Ready to Start <span className="text-[var(--primary)]">Building</span>?
          </h2>
          <p className={`relative z-[1] mx-auto mb-6 max-w-3xl ${howItWorksDesignPattern.body}`}>
            {howItWorksPage.finalCta.description}
          </p>
          <ButtonLink href={howItWorksPage.finalCta.href}>{howItWorksPage.finalCta.label}</ButtonLink>
        </section>
      </div>
    );
  }

  if (slug === RESOURCE_SLUGS.communityPlaybook) {
    return (
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="page-title">{communityPlaybookPage.title}</h1>
          <p className="mx-auto mb-4 max-w-3xl text-[var(--text-muted)]">{communityPlaybookPage.subtitle}</p>
          <p className="mx-auto mb-6 max-w-3xl text-[var(--text-muted)]">{communityPlaybookPage.intro}</p>
          <ButtonLink href={communityPlaybookPage.cta.href}>{communityPlaybookPage.cta.label}</ButtonLink>
        </section>

        <section aria-label="Community playbook sections" className="grid gap-4 md:grid-cols-2">
          {communityPlaybookPage.sections.map((section) => (
            <SectionCard
              key={section.title}
              title={section.title}
              className="glass-card-soft border-[color-mix(in_srgb,var(--text-muted)_24%,transparent)] bg-transparent"
            >
              <ul className="list-inside list-disc space-y-1">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          ))}
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
