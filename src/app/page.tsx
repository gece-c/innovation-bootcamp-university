import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectsShowcaseTabs, type ProjectShowcaseItem } from "@/components/home/projects-showcase-tabs";
import { HeroTextCarousel, type HeroCarouselItem } from "@/components/home/hero-text-carousel";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { CareerOpportunitiesRail } from "@/components/home/career-opportunities-rail";
import {
  type CareerOpportunityIcon,
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
  const heroHighlightPhrase = "Real Internships";
  const heroBodyHighlightPhrase = "Innovation Bootcamp University";
  const heroLeadBoldPhrase = "all at one place.";
  const heroCarouselBaseItems: Omit<HeroCarouselItem, "imageSrc" | "imageAlt">[] = [
    ...hero.stats.map((stat, index) => ({
      id: `stat-${index}`,
      kind: "stat" as const,
      title: stat.value,
      description: stat.label
    })),
    ...hero.highlights.map((highlight, index) => ({
      id: `highlight-${index}`,
      kind: "highlight" as const,
      title: highlight.title,
      description: highlight.description
    }))
  ];
  const heroCarouselImageSources = ["/carousel/carousel_img_1.png", "/carousel/carousel_img_2.png", "/carousel/carousel_img_3.png", "/carousel/carousel_img_4.png", "/carousel/carousel_img_5.png"] as const;
  const fallbackHeroItem = {
    id: "hero-slide-fallback",
    kind: "highlight" as const,
    title: hero.title,
    description: hero.lead
  };
  const heroCarouselItems: HeroCarouselItem[] = heroCarouselImageSources.map((imageSrc, index) => {
    const sourceItem =
      heroCarouselBaseItems[index] ?? heroCarouselBaseItems[heroCarouselBaseItems.length - 1] ?? fallbackHeroItem;
    return {
      ...sourceItem,
      id: `${sourceItem.id}-slide-${index + 1}`,
      imageSrc,
      imageAlt: `${hero.title} highlight ${index + 1}`
    };
  });
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
    "humanoid-robots": "/projects/humanoid.png",
    "moodchanger-for-pets": "/projects/MoodchangerPETS.png",
    "moodchanger": "/projects/Moodchanger.png",
    "flo-studios": "/projects/FloStudios.png",
    "hephaestus-international": "/projects/Hepheastus.png",
    "flolabs-international": "/projects/Flolabs_international.png",
    "flolabs-innovations-group": "/projects/Flolabs_white_logo.svg",
    tarrl: "/projects/TARRL.png",
    "flo-travel": "/projects/Flomad-Travel.png"
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
      badges: project.badges,
      imageAlt: `${project.title} project preview`,
      imageSrc: projectImageBySlug[project.slug],
      tabIconSrc: projectTabIconBySlug[project.slug]
    };
  });
  const careerOpportunityItems = careerOpportunitiesSection.tracks
    .flatMap((track) =>
      track.roles.map((role) => ({
        id: `${track.title}-${role}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        role: role.trim(),
        trackTitle: track.title,
        intro: track.intro,
        icon: track.icon as CareerOpportunityIcon
      }))
    )
    .filter((item, index, list) => list.findIndex((current) => current.role === item.role) === index);

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
        <div className="relative z-[2] flex min-h-0 flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 xl:px-24 min-[980px]:ml-[10%] min-[980px]:min-h-[calc(100dvh-5rem)]">
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
          className="hero-visual-reveal relative z-[1] flex items-center items-end justify-center self-center mb-16"
          aria-label="Hero program highlights"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          >
            <Image
              src="/carousel-background.png"
              alt=""
              fill
              className="object-contain object-center opacity-90"
              style={{ transform: "scale(1.55)" }}
              sizes="(min-width: 1280px) 560px, (min-width: 980px) 45vw, 90vw"
              priority
            />
          </div>
          <div className="relative z-[1] w-full max-w-[560px] justify-self-end px-6 py-6 sm:px-8 min-[980px]:mr-[10%]">
            <HeroTextCarousel items={heroCarouselItems} autoPlayMs={3000} />
          </div>
        </div>
      </section>

      <ProjectsShowcaseTabs items={projectShowcaseItems} />

      <WhyChooseSection data={whyChoose} />

      <CareerOpportunitiesRail
        title={careerOpportunitiesSection.title}
        body={careerOpportunitiesSection.body}
        items={careerOpportunityItems}
        ctaLabel="Join us!"
        ctaHref="/opportunities/internships"
      />

      <section
        aria-label="Internship paths and impact highlights"
        className="internship-highlights-section relative ml-[calc(50%-50vw)] w-screen max-w-[100vw] px-4 pt-8 pb-6 sm:px-8 sm:pb-8 lg:px-12"
      >
        <div className="internship-highlights-grid mx-auto grid w-full max-w-[1080px] grid-cols-1 gap-[1.8rem] md:grid-cols-2 md:gap-[5rem]">
          <div className="flex flex-col">
            <article className="internship-highlight-card internship-highlight-card--image relative rounded-2xl p-4 sm:p-5">
              <Image
                src="/39-internships.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 350px, 100vw"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/22 to-transparent" aria-hidden="true" />
              <h3 className="relative mt-16 text-[clamp(1.5rem,1vw+1.25rem,2rem)] leading-[1.02] font-semibold text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.999)] sm:mt-20">
                {careerOpportunitiesSection.pathsTitle}
              </h3>
            </article>
            <div className="relative z-[1] mt-3 space-y-2">
              <p className="text-[var(--text-muted)]">{careerOpportunitiesSection.pathsIntro}</p>
              <p className="text-[var(--text-muted)]">{careerOpportunitiesSection.pathsBody}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <article className="internship-highlight-card internship-highlight-card--image internship-highlight-card--image-secondary relative rounded-2xl p-4 sm:p-5">
              <Image
                src="/why-it-matters.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 350px, 100vw"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/20 to-transparent" aria-hidden="true" />
              <h3 className="relative mt-16 text-[clamp(1.5rem,1vw+1.25rem,2rem)] leading-[1.02] font-semibold text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.99)] sm:mt-20">
                {homeWhyItMatters.title}
              </h3>
            </article>
            <div className="relative z-[1] mt-3 space-y-2">
              <p className="text-lg font-semibold text-[var(--text)]">{homeWhyItMatters.headline}</p>
              <p className="text-[var(--text-muted)]">{homeWhyItMatters.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="faq-modern-section rounded-2xl px-4 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="faq-modern-title-wrap">
            <h2 id="faq-title" className="faq-modern-title">
              FAQ
            </h2>
          </div>
          <div>
            {faqAccordionItems.map((item) => (
              <details key={item.question} className="faq-modern-item group">
                <summary className="faq-modern-summary focus-ring">
                  <span>{item.question}</span>
                  <span className="faq-modern-chevron" aria-hidden="true">
                    &#9662;
                  </span>
                </summary>
                <p className="faq-modern-answer whitespace-pre-line">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}