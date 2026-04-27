import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaChartLine, FaGlobe, FaHandshake, FaRocket } from "react-icons/fa";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: "About"
};

export default function CompanyPage() {
  const heroHighlights = [
    "Execution-first education model",
    "Global, interdisciplinary collaboration",
    "Clear path from learner to contributor"
  ];
  const coreValueIcons: IconType[] = [FaHandshake, FaRocket, FaGlobe, FaChartLine];
  const areaImageByTitle: Record<string, string> = {
    "Technology & Engineering": "/about/tech-and-engineer.png",
    "Creative & Design": "/about/creative-and-design.png",
    "Business & Growth": "/about/business-and-growth.png",
    "Research & Advanced Sciences": "/about/research.png"
  };

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl glass-panel px-6 py-12 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-55" aria-hidden="true">
          <div className="absolute top-[-7rem] right-[-5rem] h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--primary)_35%,transparent)] blur-3xl" />
          <div className="absolute bottom-[-7rem] left-[-4rem] h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--secondary)_24%,transparent)] blur-3xl" />
        </div>

        <div className="relative z-[1] mx-auto max-w-5xl space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--primary)_48%,transparent)] px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase text-[var(--primary)]">
              Innovation Bootcamp University
            </p>
            <h1 className='page-title font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] text-[clamp(2.2rem,3.8vw+1rem,4.4rem)] leading-[1.08] font-bold'>
              {aboutPage.title}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-[clamp(1rem,0.45vw+0.9rem,1.2rem)] leading-[1.7] text-[var(--text-muted)]">
              {aboutPage.missionLead}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-[var(--text-muted)]">{aboutPage.missionBody}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <article className="relative overflow-hidden glass-card-soft rounded-2xl px-4 py-4 text-center transition-none hover:!translate-y-0 hover:!shadow-none" key={item}>
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_74%,transparent),transparent)]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className='text-[clamp(1.85rem,2.1vw+1rem,3rem)] leading-tight font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] font-bold'>
            Our <span className="text-[var(--primary)]">Core Values</span>
          </h2>
        </div>
        <ul className="grid w-full gap-4 md:grid-cols-2">
          {aboutPage.coreValues.map((item, index) => {
            const Icon = coreValueIcons[index] ?? FaRocket;

            return (
              <li key={item.title} className="list-none">
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
                        Core Value
                      </p>
                      <h3 className="text-[clamp(1.35rem,0.85vw+1.1rem,1.9rem)] font-bold leading-tight text-[var(--text)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[clamp(1rem,0.45vw+0.9rem,1.18rem)] leading-relaxed text-[var(--text-muted)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="relative overflow-hidden rounded-3xl glass-panel-muted px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-[-5rem] left-[-3rem] h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--primary)_24%,transparent)] blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-3rem] h-44 w-44 rounded-full bg-[color-mix(in_srgb,var(--primary)_20%,transparent)] blur-3xl" />
        </div>
        <div className="mb-6 text-center">
          <h2 className='text-[clamp(1.85rem,2.1vw+1rem,3rem)] leading-tight font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] font-bold'>
            Areas of <span className="text-[var(--primary)]">Impact</span>
          </h2>
        </div>
        <div className="relative z-[1] grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {aboutPage.areas.map((item) => (
            <article
              key={item.title}
              className="relative isolate overflow-hidden rounded-2xl border border-white/20 min-h-[26rem] glass-card-soft transition-none hover:!translate-y-0 hover:!shadow-none"
            >
              <Image
                src={areaImageByTitle[item.title] ?? "/39-internships.png"}
                alt={`${item.title} visual`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/28 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 bg-[linear-gradient(130deg,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_42%)]" aria-hidden="true" />
              <div className="relative z-[1] flex h-full items-end p-5 sm:p-6">
                <div className="max-w-[92%]">
                  <h3 className="text-xl font-bold leading-tight text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.95),0_0_18px_rgba(0,0,0,0.65)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300 [text-shadow:0_4px_14px_rgba(0,0,0,0.95),0_0_14px_rgba(0,0,0,0.62)]">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden glass-panel-horizontal rounded-3xl px-6 py-10 text-center sm:px-8 sm:py-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_78%,transparent),transparent)]" />
          <div className="absolute -bottom-12 left-1/2 h-32 w-52 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--primary)_24%,transparent)] blur-3xl" />
        </div>
        <h2 className='text-[clamp(1.8rem,2vw+1rem,3rem)] leading-tight font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] font-bold'>
          Ready to Build <span className="text-[var(--primary)]">Your Future</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">{aboutPage.finalCta.body}</p>
        <div className="mt-6 flex justify-center">
          <ButtonLink href={aboutPage.finalCta.href}>{aboutPage.finalCta.label}</ButtonLink>
        </div>
      </section>
    </div>
  );
}
