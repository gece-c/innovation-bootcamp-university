import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGlobeAmericas, FaLaptopCode, FaPuzzlePiece, FaUnlockAlt, FaUsers } from "react-icons/fa";
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
  const heroHighlightPhrase = "Real Internships";
  const heroLeadBoldPhrase = "all at one place.";
  const heroInfoBlobs = [
    ...hero.stats.map((stat) => ({ icon: "stat", title: stat.value, description: stat.label })),
    ...hero.highlights.map((highlight) => ({
      icon: "highlight",
      title: highlight.title,
      description: highlight.description
    }))
  ] as const;
  const heroStatBlobRadius = [
    "58% 42% 62% 38% / 46% 55% 48% 52%",
    "42% 58% 48% 52% / 60% 40% 52% 48%",
    "52% 48% 38% 62% / 50% 52% 44% 56%",
    "54% 46% 50% 50% / 44% 58% 42% 56%",
    "46% 54% 56% 44% / 58% 42% 54% 46%"
  ] as const;

  const heroStatPositionClasses = [
    "sm:absolute sm:left-[2%] sm:top-[10%] min-[980px]:left-[-5%] min-[980px]:top-[8%]",
    "sm:absolute sm:left-[-6%] sm:top-[43%] min-[980px]:left-[-10%] min-[980px]:top-[38%]",
    "sm:absolute sm:left-[10%] sm:bottom-[4%] min-[980px]:left-[5%] min-[980px]:bottom-[12%]",
    "sm:absolute sm:right-[4%] sm:top-[12%] min-[980px]:right-[-9%] min-[980px]:top-[1%]",
    "sm:absolute sm:right-[12%] sm:bottom-[2%] min-[980px]:right-[-4%] min-[980px]:bottom-[10%]"
  ];
  const heroBlobIcons: IconType[] = [FaUsers, FaLaptopCode, FaPuzzlePiece, FaGlobeAmericas, FaUnlockAlt];

  return (
    <div className="min-w-0 space-y-14">
      <section
        aria-labelledby="home-title"
        className="relative isolate -mt-10 ml-[calc(50%-50vw)] w-screen max-w-[100vw] min-h-[calc(100dvh-5rem)] grid grid-cols-1 items-stretch min-[980px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <video
            className="h-full w-full object-cover object-center opacity-10"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src="/hero-video.webm" type="video/webm" />
          </video>
        </div>
        <div className="relative z-[2] flex min-h-0 flex-col justify-center px-[120px] py-[clamp(1.75rem,3.2vh,2.7rem)] min-[980px]:min-h-[calc(100dvh-5rem)]">
          {hero.badge ? (
            <p className="hero-text-reveal hero-text-delay-1 mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
              {hero.badge}
            </p>
          ) : null}
          <h1
            id="home-title"
            className='hero-text-reveal hero-text-delay-2 mb-[clamp(0.45rem,1.3vh,0.85rem)] max-w-[100%] text-[82px] leading-[1.07] font-["Playfair_Display",Georgia,"Times_New_Roman",serif] font-bold tracking-[-0.015em]'
          >
            <span className='font-["Playfair_Display",Georgia,"Times_New_Roman",serif] font-bold'>
              {hero.title.includes(heroHighlightPhrase) ? (
                <>
                  {hero.title.split(heroHighlightPhrase)[0]}
                  <br />
                  <span className="hero-highlight-reveal text-[var(--primary)]">{heroHighlightPhrase}</span>
                  {hero.title.split(heroHighlightPhrase)[1]}
                </>
              ) : (
                hero.title
              )}
            </span>
          </h1>
          <p className="hero-text-reveal hero-text-delay-3 mt-[clamp(0.45rem,1.2vh,0.8rem)] mb-[12px] w-fit rounded-full border border-white/90 px-5 py-2 text-left text-[clamp(0.99rem,0.4vw+0.88rem,1.08rem)] leading-[1.45] text-white shadow-[0_0_0.8rem_rgb(255_255_255_/_0.45),0_0_1.4rem_rgb(255_255_255_/_0.25)]">
            {hero.lead.includes(heroLeadBoldPhrase) ? (
              <>
                {hero.lead.split(heroLeadBoldPhrase)[0]}
                <strong>{heroLeadBoldPhrase}</strong>
                {hero.lead.split(heroLeadBoldPhrase)[1]}
              </>
            ) : (
              hero.lead
            )}
          </p>
          <p className="hero-text-reveal hero-text-delay-4 mt-[clamp(0.35rem,1vh,0.7rem)] max-w-[62ch] text-[clamp(0.98rem,0.35vw+0.87rem,1.05rem)] leading-[1.45] text-[var(--text-muted)]">
            {hero.body}
          </p>
          <div className="hero-text-reveal hero-text-delay-6 mt-[10%] flex flex-wrap gap-3">
            <ButtonLink href={hero.actions[0].href}>{hero.actions[0].label}</ButtonLink>
            <ButtonLink href={hero.actions[1].href} variant="ghost">
              {hero.actions[1].label}
            </ButtonLink>
          </div>
        </div>

        <div
          className="hero-visual-reveal relative z-[1] flex items-center items-end justify-center self-center"
          aria-label="Hero program highlights"
        >
          <div className="relative grid w-full justify-items-center gap-3 sm:min-h-[390px] sm:w-[min(100%,560px)] sm:block sm:justify-self-end min-[980px]:min-h-[440px]">
            <Image
              src="/hero-person.svg"
              alt="Student standing in front of abstract shapes"
              width={531}
              height={582}
              className="relative z-[2] col-span-2 h-auto w-[min(100%,390px)] justify-self-center drop-shadow-[0_22px_30px_rgb(0_0_0_/_0.35)] sm:w-[min(100%,545px)]"
              priority
            />
            {heroInfoBlobs.map((blob, index) => (
              <article
                key={`${blob.title}-${index}`}
                style={{ borderRadius: heroStatBlobRadius[index] ?? heroStatBlobRadius[0] }}
                className={`hero-stat-blob relative z-[3] flex w-full flex-col items-center justify-center border border-[color-mix(in_srgb,var(--primary)_32%,#4e6c73)] bg-[rgb(34_34_34_/_0.88)] px-3 py-2.5 text-center shadow-[0_10px_24px_rgb(0_0_0_/_0.38)] [container-type:inline-size] sm:px-2 sm:py-2 hover:z-[4] ${index >= 3 ? "sm:h-[168px] sm:w-[168px]" : index === 2 ? "sm:h-[156px] sm:w-[156px]" : "sm:h-[138px] sm:w-[138px]"} ${heroStatPositionClasses[index] ?? ""}`}
                aria-label={blob.description ? `${blob.title}: ${blob.description}` : blob.title}
              >
                <p
                  className={`shrink-0 leading-none text-[clamp(0.82rem,10.5cqw,0.98rem)] text-[var(--primary)] ${index <= 2 ? "mb-[0.36rem] sm:text-[clamp(0.84rem,11.4cqw,1.02rem)]" : "mb-0.5 sm:text-[clamp(0.74rem,10.2cqw,0.9rem)]"}`}
                  aria-hidden="true"
                >
                  {(() => {
                    const BlobIcon = heroBlobIcons[index] ?? FaUsers;
                    return <BlobIcon className="inline-block h-[1.5em] w-[1.5em] align-middle" />;
                  })()}
                </p>
                <p className={`sm:max-w-none sm:font-bold sm:leading-[1.3] ${index <= 2 ? "sm:text-[clamp(0.8rem,calc(8.8cqw+0.15rem),1.02rem)]" : "sm:text-[clamp(0.72rem,calc(7.9cqw+0.13rem),0.92rem)]"}`}>
                  {blob.title}
                </p>
                {blob.description ? (
                  <p className="mt-[0.14em] max-w-[min(100%,18ch)] text-balance text-[clamp(0.58rem,calc(5.9cqw+0.22rem),0.74rem)] leading-[1.2] text-[var(--text-muted)] break-words">
                    {blob.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
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
