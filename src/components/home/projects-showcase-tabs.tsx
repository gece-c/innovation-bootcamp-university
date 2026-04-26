"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";

export type ProjectShowcaseItem = {
  slug: string;
  title: string;
  description: string;
  badges?: string[];
  imageAlt: string;
  imageSrc?: string;
  imageSrcLight?: string;
  tabIconSrc?: string;
};

type ProjectsShowcaseTabsProps = {
  items: ProjectShowcaseItem[];
};

const placeholderImage = "/project-placeholder.svg";

function getNextIndex(current: number, total: number, direction: "left" | "right") {
  if (direction === "left") {
    return current === 0 ? total - 1 : current - 1;
  }
  return current === total - 1 ? 0 : current + 1;
}

export function ProjectsShowcaseTabs({ items }: ProjectsShowcaseTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const safeItems = useMemo(() => items.slice(0, 12), [items]);
  const activeItem = safeItems[activeIndex];

  if (!safeItems.length || !activeItem) {
    return null;
  }

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex(getNextIndex(index, safeItems.length, "right"));
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex(getNextIndex(index, safeItems.length, "left"));
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(safeItems.length - 1);
    }
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotionMedia.matches) {
      setSectionInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setSectionInView(true);
        observer.disconnect();
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      setIsLightTheme(root.getAttribute("data-theme") === "light");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const activeImageSrc = isLightTheme ? activeItem.imageSrcLight ?? activeItem.imageSrc : activeItem.imageSrc;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="project-showcase-title"
      className="glass-panel glass-panel-muted rounded-2xl p-6 md:p-8"
    >
      <p
        className={`theme-badge mb-3 inline-block rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-[0.01em] backdrop-blur-sm projects-container-reveal projects-container-delay-1 ${
          sectionInView ? "projects-container-reveal-visible" : ""
        }`}
      >
        Case studies
      </p>
      <h2
        id="project-showcase-title"
        className={`page-title projects-container-reveal projects-container-delay-1 ${
          sectionInView ? "projects-container-reveal-visible" : ""
        }`}
      >
        <span className="font-bold">You&apos;ll</span> <span className="text-[var(--primary)] font-bold">be part of...</span>
      </h2>

      <div
        className={`mt-6 overflow-x-auto px-3 py-3 projects-container-reveal projects-container-delay-2 ${
          sectionInView ? "projects-container-reveal-visible" : ""
        }`}
      >
        <div role="tablist" aria-label="Project navigation" className="flex min-w-[640px] w-full items-center justify-around gap-3">
          {safeItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.slug}
                style={{ animationDelay: `${index * 55}ms` }}
                className={`project-tab-attention ${sectionInView ? "project-tab-attention-visible" : ""}`}
              >
                <button
                  id={`project-tab-${item.slug}`}
                  type="button"
                  role="tab"
                  aria-label={item.title}
                  aria-selected={isActive}
                  aria-controls={`project-panel-${item.slug}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`project-tab-icon-button focus-ring relative flex h-[72px] w-[72px] shrink-0 cursor-pointer items-center justify-center rounded-full transition-transform transition-colors duration-200 motion-reduce:transition-none ${
                    isActive
                      ? "project-tab-icon-button--active scale-110 text-[var(--text)]"
                      : "project-tab-icon-button--inactive scale-[0.85] text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-[42px] w-[42px] items-center justify-center text-[11px] font-semibold tracking-wide ${
                      isActive ? "text-[var(--text)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {item.tabIconSrc ? (
                      <Image
                        src={item.tabIconSrc}
                        alt=""
                        width={39}
                        height={39}
                        className={`object-contain transition-transform duration-200 motion-reduce:transition-none ${
                          isActive ? "scale-105" : "scale-100"
                        }`}
                      />
                    ) : null}
                  </span>
                  <span className="sr-only">{item.title}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <article
        key={activeItem.slug}
        id={`project-panel-${activeItem.slug}`}
        role="tabpanel"
        aria-labelledby={`project-tab-${activeItem.slug}`}
        className={`glass-card-muted mt-4 grid overflow-hidden rounded-2xl md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] projects-container-reveal projects-container-delay-3 ${
          sectionInView ? "projects-container-reveal-visible" : ""
        }`}
      >
        <div className="p-[2rem] md:p-[2.6rem]">
          <h3 className="project-panel-enter project-panel-enter-delay-1 text-[clamp(2.34rem,1.82vw+1.56rem,3.05rem)] leading-[1.15] font-semibold">
            {activeItem.title}
          </h3>
          <p className="project-panel-enter project-panel-enter-delay-2 mt-4 mb-8 max-w-[52ch] text-[clamp(1.36rem,0.58vw+1.24rem,1.66rem)] leading-[1.6] text-[var(--text-muted)]">
            {activeItem.description}
          </p>
          {activeItem.badges?.length ? (
            <ul className="project-panel-enter project-panel-enter-delay-3 project-badges-list" aria-label={`${activeItem.title} project domains`}>
              {activeItem.badges.map((badge) => (
                <li key={badge} className="project-badge-pill">
                  {badge}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="project-panel-enter project-panel-enter-delay-3 relative min-h-[312px] md:min-h-[390px]">
          <Image
            src={activeImageSrc ?? placeholderImage}
            alt={activeItem.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain p-6 md:p-8"
          />
        </div>
      </article>
    </section>
  );
}
