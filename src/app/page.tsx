import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectsShowcaseTabs, type ProjectShowcaseItem } from "@/components/home/projects-showcase-tabs";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGlobeAmericas, FaLaptopCode, FaPuzzlePiece, FaUnlockAlt, FaUsers } from "react-icons/fa";
import {
  careerOpportunitiesSection,
  faqAccordionItems,
  hero,
  homeWhyItMatters,
  projects,
  whyChoose
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "Innovation Bootcamp University"
};

export default function HomePage() {
  /** Organic blobs (8-value border-radius) to echo hero illustration shapes */
  const heroHighlightPhrase = "Real Internships";
  const heroBodyHighlightPhrase = "Innovation Bootcamp University";
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
  const projectShowcaseDescriptions: Record<string, string> = {
    moodchanger:
      "AI platform for emotional well-being that analyzes user input and provides personalized advice to improve mood and reduce stress.",
    caipo:
      "Wearable AI assistant that records and analyzes audio/video to generate summaries, insights, and boost productivity.",
    "flo-studios":
      "Creative agency focused on UX/UI, multimedia, and AI-driven projects, including films and experimental digital productions.",
    "humanoid-robots":
      "Initiative to develop and distribute customizable robots through a marketplace connecting manufacturers and users.",
    "hephaestus-international":
      "Experiential learning institute focused on innovation, education, and advanced technology development.",
    tarrl: "Research lab portal dedicated to advanced robotics development and experimentation.",
    "flolabs-innovations-group":
      "Platform showcasing AI projects, partnerships, and innovation initiatives across the organization.",
    "flolabs-international":
      "Global hub highlighting FloLabs' mission, projects, and collaboration opportunities.",
    "moodchanger-for-pets":
      "Extension of MoodChanger using AI + wearable data to monitor and improve pets' health and behavior.",
    "flo-travel":
      "AI-powered travel planning platform that organizes trips, including flights, hotels, and activities in one place."
  };
  const projectImageBySlug: Record<string, string> = {
    caipo: "/projects/CAIPO_Wearable.webp",
    "humanoid-robots": "/projects/humanoid.png"
  };
  const projectTabIconBySlug: Record<string, string> = {
    moodchanger: "/projects/icons/Moodchanger.png",
    caipo: "/projects/icons/CAIPO.png",
    "flo-studios": "/projects/icons/FloStudios.png",
    "humanoid-robots": "/projects/icons/Humanoids.png",
    "hephaestus-international": "/projects/icons/Hepheastus.png",
    tarrl: "/projects/icons/TARRL.png",
    "flolabs-innovations-group": "/projects/icons/Flolabs-Innovation.png",
    "flolabs-international": "/projects/icons/Flolabs-International.png",
    "moodchanger-for-pets": "/projects/icons/Moodchanger-PETS.png",
    "flo-travel": "/projects/icons/Flomad-Travel.png"
  };
  const projectShowcaseItems: ProjectShowcaseItem[] = projects.slice(0, 10).map((project) => {
    const sourceText = project.currentWork ?? project.summary;
    const normalizedText = sourceText.replace(/\s+/g, " ").trim();
    const shortDescription =
      normalizedText.length > 190 ? `${normalizedText.slice(0, 187).trimEnd()}...` : normalizedText;

    return {
      slug: project.slug,
      title: project.title,
      description: projectShowcaseDescriptions[project.slug] ?? shortDescription,
      imageAlt: `${project.title} project preview`,
      imageSrc: projectImageBySlug[project.slug],
      tabIconSrc: projectTabIconBySlug[project.slug]
    };
  });

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
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-[2] flex min-h-0 flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 xl:px-24 min-[980px]:min-h-[calc(100dvh-5rem)]">
          {hero.badge ? (
            <p className="hero-text-reveal hero-text-delay-1 mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
              {hero.badge}
            </p>
          ) : null}
          <h1
            id="home-title"
            className='hero-text-reveal hero-text-delay-2 mb-3 max-w-[18ch] text-[clamp(2rem,5vw+0.9rem,5.25rem)] leading-[1.08] font-["Playfair_Display",Georgia,"Times_New_Roman",serif] font-bold tracking-[-0.015em]'
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
          <p className="hero-text-reveal hero-text-delay-3 mt-1 mb-4 w-fit rounded-full border border-white/90 px-4 py-2 sm:px-5 text-left text-[clamp(1rem,0.6vw+0.85rem,1.35rem)] leading-[1.35] text-white shadow-[0_0_0.8rem_rgb(255_255_255_/_0.45),0_0_1.4rem_rgb(255_255_255_/_0.25)]">
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
          <p className="hero-text-reveal hero-text-delay-4 mt-1 max-w-[58ch] text-[clamp(1rem,0.35vw+0.92rem,1.14rem)] leading-[1.55] text-[var(--text-muted)]">
            {hero.body.includes(heroBodyHighlightPhrase) ? (
              <>
                {hero.body.split(heroBodyHighlightPhrase)[0]}
                <span className="font-semibold text-cyan-300">{heroBodyHighlightPhrase}</span>
                {hero.body.split(heroBodyHighlightPhrase)[1]}
              </>
            ) : (
              hero.body
            )}
          </p>
          <div className="hero-text-reveal hero-text-delay-6 mt-8 flex flex-wrap gap-3 lg:mt-10">
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

      <ProjectsShowcaseTabs items={projectShowcaseItems} />

      <section
        aria-labelledby="why-choose-title"
        className="glass-panel glass-panel-muted rounded-2xl p-8"
      >
        <p className="mb-3 inline-block rounded-full bg-black/35 px-3.5 py-1.5 text-sm font-semibold tracking-[0.01em] text-white backdrop-blur-sm">
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
              className="glass-card glass-card-muted rounded-xl p-5"
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

      <section
        aria-labelledby="career-opportunities-title"
        className="glass-panel glass-panel-horizontal glass-panel-muted rounded-2xl p-8"
      >
        <h2 id="career-opportunities-title" className="mb-4 text-3xl font-semibold">
          {careerOpportunitiesSection.title.split(" ")[0]}{" "}
          <span className="text-[var(--primary)]">
            {careerOpportunitiesSection.title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{careerOpportunitiesSection.body}</p>

        <div className="glass-card glass-card-muted mt-8 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold">{careerOpportunitiesSection.pathsTitle}</h3>
          <p className="mt-3 text-[var(--text-muted)]">{careerOpportunitiesSection.pathsIntro}</p>
          <p className="mt-2 text-[var(--text-muted)]">{careerOpportunitiesSection.pathsBody}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6">
          {careerOpportunitiesSection.tracks.map((track) => (
            <article
              key={track.title}
              className="glass-card glass-card-muted [container-type:inline-size] rounded-xl p-6"
            >
              <header className="mb-2 flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="min-w-0 flex-1 text-2xl font-semibold">{track.title}</h3>
                <span className="career-card-emoji shrink-0 select-none leading-none" aria-hidden="true">
                  {track.icon}
                </span>
              </header>
              <p className="mt-2 text-[var(--text-muted)]">{track.intro}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
                {track.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm italic text-[var(--text-muted)]">{track.fit}</p>
            </article>
          ))}
        </div>

        <article className="glass-card glass-card-muted mt-8 rounded-2xl p-6">
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
            <details key={item.question} className="glass-card-soft rounded-xl p-4">
              <summary className="focus-ring cursor-pointer rounded font-semibold">{item.question}</summary>
              <p className="mt-3 whitespace-pre-line text-[var(--text-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}