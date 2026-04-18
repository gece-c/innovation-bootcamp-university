import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";
import {
  faqAccordionItems,
  hero,
  homeWhyItMatters,
  whyChoose
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "Innovation Bootcamp University"
};

export default function HomePage() {
  /** Organic blobs (8-value border-radius) to echo hero illustration shapes */
  const heroStatBlobRadius = [
    "58% 42% 62% 38% / 46% 55% 48% 52%",
    "42% 58% 48% 52% / 60% 40% 52% 48%",
    "52% 48% 38% 62% / 50% 52% 44% 56%"
  ] as const;

  const heroStatPositionClasses = [
    "sm:absolute sm:left-[-2%] sm:top-[10%] min-[980px]:left-[-5%] min-[980px]:top-[8%]",
    "sm:absolute sm:left-[-6%] sm:top-[43%] min-[980px]:left-[-10%] min-[980px]:top-[38%]",
    "sm:absolute sm:left-[10%] sm:bottom-[4%] min-[980px]:left-[5%] min-[980px]:bottom-[12%]"
  ];

  return (
    <div className="space-y-14">
      <section
        aria-labelledby="home-title"
        className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-[var(--surface)] p-6 max-[979px]:p-6 min-[980px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[980px]:p-8"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, color-mix(in srgb, var(--secondary) 22%, transparent), transparent 36%), radial-gradient(circle at 65% 58%, color-mix(in srgb, var(--primary) 20%, transparent), transparent 38%)"
        }}
      >
        <div className="relative z-[2]">
          {hero.badge ? (
            <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
              {hero.badge}
            </p>
          ) : null}
          <h1 id="home-title" className="page-title">
            <span className='font-["Playfair_Display",Georgia,"Times_New_Roman",serif] font-bold'>
              {hero.title}
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">{hero.lead}</p>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">{hero.body}</p>
          <ul className="mt-4 max-w-2xl list-none space-y-2 text-[var(--text-muted)]">
            {hero.highlights.map((h) => (
              <li key={h.title}>
                <strong className="text-[var(--text)]">{h.title}:</strong> {h.description}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={hero.actions[0].href}>{hero.actions[0].label}</ButtonLink>
            <ButtonLink href={hero.actions[1].href} variant="ghost">
              {hero.actions[1].label}
            </ButtonLink>
          </div>
        </div>

        <div
          className="relative z-[1] grid w-full justify-self-center gap-3 sm:min-h-[390px] sm:w-[min(100%,520px)] sm:block sm:justify-self-center min-[980px]:min-h-[420px] min-[980px]:justify-self-end"
          aria-label="Hero program highlights"
        >
          <Image
            src="/hero-person.svg"
            alt="Student standing in front of abstract shapes"
            width={531}
            height={582}
            className="relative z-[2] col-span-2 h-auto w-[min(100%,360px)] justify-self-center drop-shadow-[0_22px_30px_rgb(0_0_0_/_0.35)] sm:w-full"
            priority
          />
          {hero.stats.map((stat, index) => (
            <article
              key={`${stat.value}-${index}`}
              style={{ borderRadius: heroStatBlobRadius[index] ?? heroStatBlobRadius[0] }}
              className={`z-[3] flex w-full flex-col items-center justify-center border border-[color-mix(in_srgb,var(--primary)_32%,#4e6c73)] bg-[rgb(34_34_34_/_0.88)] px-3 py-2.5 text-center shadow-[0_10px_24px_rgb(0_0_0_/_0.38)] [container-type:inline-size] sm:px-2 sm:py-2 ${index === 2 ? "sm:h-[136px] sm:w-[136px]" : "sm:h-[120px] sm:w-[120px]"} ${heroStatPositionClasses[index] ?? ""}`}
              aria-label={stat.label ? `${stat.label}: ${stat.value}` : stat.value}
            >
              <p
                className="mb-0.5 shrink-0 leading-none text-[clamp(0.75rem,10cqw,0.9rem)] text-[var(--primary)] sm:mb-0.5 sm:text-[clamp(0.68rem,9.5cqw,0.82rem)]"
                aria-hidden="true"
              >
                {index === 0 ? "\u{1F310}" : index === 1 ? "\u{1F4BB}" : "\u{1F9E9}"}
              </p>
              <p className="w-full max-w-[min(100%,22ch)] text-balance text-[clamp(0.8rem,2.6vw,1rem)] font-semibold leading-snug break-words sm:max-w-none sm:font-bold sm:leading-[1.07] sm:text-[clamp(0.64rem,calc(7.4cqw+0.12rem),0.84rem)]">
                {stat.value}
              </p>
              {stat.label ? (
                <p className="mt-[0.12em] max-w-[min(100%,11ch)] text-balance text-[clamp(0.52rem,calc(5.5cqw+0.2rem),0.68rem)] leading-[1.2] text-[var(--text-muted)] break-words">
                  {stat.label}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-choose-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
          {whyChoose.badge}
        </p>
        <h2 id="why-choose-title" className="page-title max-w-3xl">
          {whyChoose.title}
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{whyChoose.body}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChoose.points.map((point) => (
            <article
              key={point.title}
              className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/45 p-5"
            >
              <div className="mb-4 text-2xl leading-none" aria-hidden="true">
                {point.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{point.title}</h3>
              <p className="text-[var(--text-muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="career-opportunities-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <h2 id="career-opportunities-title" className="mb-4 text-3xl font-semibold">
          Career <span className="text-[var(--primary)]">Opportunities</span>
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">
          Our curriculum prepares you for roles across a wide range of tech sectors. Here are the
          industries where our graduates can build successful careers.
        </p>

        <div className="mt-8 rounded-2xl border border-[#4a4a4a] bg-[var(--bg)]/30 p-6">
          <h3 className="text-2xl font-semibold">Explore 40+ Internship Paths Across Industries</h3>
          <p className="mt-3 text-[var(--text-muted)]">
            Not everyone wants the same career and that is exactly the{" "}
            point.
          </p>
          <p className="mt-2 text-[var(--text-muted)]">
            Whether you&apos;re into AI, business, science, or creativity, you can{" "}
            <strong>start working in your field from day one</strong>.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6">
          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Technology &amp; AI (Build the Future)
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F4BB}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Work on cutting-edge systems shaping tomorrow:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>AI/AGI Intern</li>
              <li>Machine Learning Engineering Intern</li>
              <li>Computer Vision Engineering Intern</li>
              <li>Prompt Engineer Intern</li>
              <li>Software Development Intern</li>
              <li>Front-end Developer Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              Perfect for builders, coders, and problem-solvers
            </p>
          </article>

          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Robotics &amp; Engineering (Hands-On Innovation)
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F9BE}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Design, build, and integrate real-world systems:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Robotics Engineering Intern</li>
              <li>Mechatronics Engineering Intern</li>
              <li>Embedded Systems Intern</li>
              <li>Sensor Integration Intern</li>
              <li>Control Systems Engineering Intern</li>
              <li>Human-Robot Interaction Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For those who want to create physical + intelligent systems
            </p>
          </article>

          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Science, Research &amp; Advanced Fields
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F52C}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Explore deep tech and scientific innovation:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Biomedical Engineering Intern</li>
              <li>Neuroscience Intern</li>
              <li>Quantum Engineer Intern</li>
              <li>Space Science Intern</li>
              <li>Research Associate Intern (Open-Source Projects)</li>
              <li>Animal Science and Veterinary Research Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              Ideal for analytical thinkers and future researchers
            </p>
          </article>

          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Business, Marketing &amp; Growth
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F4BC}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Work directly on company growth and strategy:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Business Development and Sales Intern</li>
              <li>Business Development (AI &amp; Robotics) Intern</li>
              <li>Marketing Intern</li>
              <li>Digital Marketing Intern</li>
              <li>SEO Specialist Intern</li>
              <li>Social Media Intern</li>
              <li>GTM Engineer Intern</li>
              <li>GTM Influencer Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For communicators, strategists, and growth-driven minds
            </p>
          </article>

          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Operations, Product &amp; Management
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F4CB}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Help build and run real companies:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Operations Intern</li>
              <li>Project Management Intern</li>
              <li>Product Development Intern (AI &amp; Robotics)</li>
              <li>Quality Assurance Intern</li>
              <li>Finance Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For leaders, organizers, and decision-makers
            </p>
          </article>

          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Creative, Media &amp; Communication
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F3A8}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Create content that reaches the world:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Content Marketing Intern</li>
              <li>Journalism &amp; PR Intern</li>
              <li>Podcast Production Intern</li>
              <li>Technical Writing Intern</li>
              <li>UI/UX Design Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For storytellers, designers, and creatives
            </p>
          </article>

          <article className="[container-type:inline-size] rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="min-w-0 flex-1 text-2xl font-semibold">
                Emerging &amp; Interdisciplinary Fields
              </h3>
              <span
                className="career-card-emoji shrink-0 select-none leading-none"
                aria-hidden="true"
              >
                {"\u{1F500}"}
              </span>
            </header>
            <p className="mt-2 text-[var(--text-muted)]">Where tech meets new industries:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>EdTech and Innovation Intern</li>
              <li>Ethical and Legal Research Intern</li>
              <li>Hospitality and Tourism Intern</li>
              <li>Sport Science Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For explorers who want something different
            </p>
          </article>
        </div>

        <article className="mt-8 rounded-2xl border border-[#4a4a4a] bg-[var(--bg)]/30 p-6">
          <h3 className="text-2xl font-semibold">{homeWhyItMatters.title}</h3>
          <p className="mt-3 text-lg font-semibold text-[var(--text)]">{homeWhyItMatters.headline}</p>
          <p className="mt-3 text-[var(--text-muted)]">{homeWhyItMatters.body}</p>
        </article>
      </section>

      <section aria-labelledby="faq-title">
        <h2 id="faq-title" className="mb-6 text-3xl font-semibold">
          FAQs
        </h2>
        <div className="space-y-3">
          {faqAccordionItems.map((item) => (
            <details key={item.question} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-4">
              <summary className="focus-ring cursor-pointer rounded font-semibold">{item.question}</summary>
              <p className="mt-3 whitespace-pre-line text-[var(--text-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
