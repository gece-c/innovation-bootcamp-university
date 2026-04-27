import { ProjectShowcaseCard } from "@/components/projects/project-showcase-card";

export type ProjectShowcaseItem = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageContain?: boolean;
  href?: string;
  iconSrc?: string;
  focus?: string[];
  badges?: string[];
};

type ProjectsShowcaseGridProps = {
  items: ProjectShowcaseItem[];
};

export function ProjectsShowcaseGrid({ items }: ProjectsShowcaseGridProps) {
  return (
    <section aria-label="Project showcase" className="glass-panel glass-panel-muted rounded-2xl p-4 md:p-6">
      <div className="projects-showcase-grid">
        {items.map((item, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <ProjectShowcaseCard
              key={item.slug}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              imageContain={item.imageContain}
              href={item.href}
              iconSrc={item.iconSrc}
              focus={item.focus}
              badges={item.badges}
              imageFirst={imageFirst}
            />
          );
        })}
      </div>
    </section>
  );
}
