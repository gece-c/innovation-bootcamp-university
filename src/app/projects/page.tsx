import { ProjectsShowcaseGrid } from "@/components/projects/projects-showcase-grid";
import { projects, projectsPage } from "@/content/site-content";

export default function ProjectsPage() {
  const projectImageBySlug: Record<string, string> = {
    moodchanger: "/projects/Moodchanger.png",
    caipo: "/projects/CAIPO_Wearable.webp",
    "flo-studios": "/projects/Flostudios.png",
    "humanoid-robots": "/projects/Humanoid.png",
    "hephaestus-international": "/projects/Hepheastus.png",
    tarrl: "/projects/TARRL.png",
    "flolabs-innovations-group": "/projects/FloLabs_white_logo.svg",
    "flolabs-international": "/projects/Flolabs_international.png",
    "moodchanger-for-pets": "/projects/MoodchangerPETS.png",
    "connecting-the-dots": "/projects/Connecting_the_dots.png",
    "flo-travel": "/projects/Flomad-Travel.png",
    "flo-brain": "/projects/Flo_brainn.png",
    "legal-ethics-ventures-institute": "/projects/icons/FloLabs_logo Legal.svg",
    "space-ventures-institute": "/projects/SpaceVenturesInstitute.png"
  };

  const projectIconBySlug: Record<string, string> = {
    moodchanger: "/projects/icons/FloLabs_logo MoodChanger.svg",
    caipo: "/projects/icons/FloLabs_logo CAIPO.svg",
    "flo-studios": "/projects/icons/FloLabs_logo FloStudios.svg",
    "humanoid-robots": "/projects/icons/FloLabs_logo RoboCollective.svg",
    "hephaestus-international": "/projects/icons/FloLabs_logo Hephaestus.svg",
    tarrl: "/projects/icons/FloLabs_logo TARRL.svg",
    "flolabs-innovations-group": "/projects/icons/FloLabs_logo black circle background.svg",
    "flolabs-international": "/projects/icons/FloLabs_logo FloLabs International.svg",
    "moodchanger-for-pets": "/projects/icons/FloLabs_logo MoodChanger for Pets.svg",
    "connecting-the-dots": "/projects/icons/FloLabs_logo Connecting The Dots.svg",
    "flo-travel": "/projects/icons/FloLabs_logo Flomad Travel.svg",
    "flo-brain": "/projects/icons/FloLabs_logo FloBrain.svg",
    "legal-ethics-ventures-institute": "/projects/icons/FloLabs_logo Legal.svg",
    "space-ventures-institute": "/projects/icons/FloLabs_logo Space.svg"
  };

  const containImageSlugs = new Set([
    "humanoid-robots",
    "tarrl",
    "flo-brain",
    "flolabs-international",
    "flolabs-innovations-group",
    "legal-ethics-ventures-institute"
  ]);

  const showcaseItems = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.currentWork ?? project.summary,
    focus: project.focus,
    badges: project.badges,
    imageSrc: projectImageBySlug[project.slug] ?? "/project-placeholder.svg",
    imageAlt: `${project.title} project preview`,
    imageContain: containImageSlugs.has(project.slug),
    iconSrc: projectIconBySlug[project.slug] ?? "/projects/icons/FloLabs_logo Space.svg",
    href: project.externalUrl
  }));

  return (
    <div className="space-y-10">
      <section className="projects-page-enter projects-page-delay-1 mx-auto max-w-3xl text-center">
        <h1 className="page-title font-bold">{projectsPage.title}</h1>
        <p className="mx-auto max-w-2xl text-[var(--text-muted)]">{projectsPage.subtitle}</p>
      </section>

      <div className="projects-page-enter projects-page-delay-2">
        <ProjectsShowcaseGrid items={showcaseItems} />
      </div>
    </div>
  );
}
