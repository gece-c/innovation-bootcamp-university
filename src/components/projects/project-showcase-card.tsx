import Image from "next/image";

type ProjectShowcaseCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageContain?: boolean;
  href?: string;
  iconSrc?: string;
  focus?: string[];
  badges?: string[];
  imageFirst?: boolean;
};

export function ProjectShowcaseCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageContain = false,
  href,
  iconSrc,
  focus,
  imageFirst = false
}: ProjectShowcaseCardProps) {
  const highlights = focus?.length ? focus : undefined;
  const wrapperClassName = `group glass-card-muted projects-showcase-item rounded-2xl ${imageFirst ? "projects-showcase-item--image-first" : ""}`;
  const content = (
    <>
      <div className="projects-showcase-item-copy p-5 md:p-6">
        {iconSrc ? (
          <Image src={iconSrc} alt="" width={32} height={32} className="mb-3 h-8 w-8 object-contain opacity-95" />
        ) : null}
        <h2 className="text-xl font-semibold leading-tight md:text-2xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-[var(--text-muted)] md:text-[0.95rem]">{description}</p>

        {highlights?.length ? (
          <>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Focus</p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--text-muted)]">
              {highlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {href ? (
          <p className="mt-5 inline-flex origin-left items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none">
            <span>Visit site</span>
            <span aria-hidden="true" className="text-base leading-none">
              ↗
            </span>
          </p>
        ) : null}
      </div>

      <div className="projects-showcase-item-image relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 30vw"
          className={imageContain ? "object-contain p-4" : "object-cover"}
        />
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${wrapperClassName} focus-ring block`} aria-label={`Visit ${title} website`}>
        {content}
      </a>
    );
  }

  return (
    <article className={wrapperClassName}>
      {content}
    </article>
  );
}
