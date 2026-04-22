"use client";

import Image from "next/image";
import { useMemo, useState, type KeyboardEvent } from "react";

export type ProjectShowcaseItem = {
  slug: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc?: string;
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

function getIconMonogram(title: string) {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "PR";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
}

export function ProjectsShowcaseTabs({ items }: ProjectsShowcaseTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeItems = useMemo(() => items.slice(0, 10), [items]);
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

  return (
    <section
      aria-labelledby="project-showcase-title"
      className="glass-panel glass-panel-muted rounded-2xl p-6 md:p-8"
    >
      <p className="mb-3 inline-block rounded-full bg-black/35 px-3.5 py-1.5 text-sm font-semibold tracking-[0.01em] text-white backdrop-blur-sm">
        Case studies
      </p>
      <h2 id="project-showcase-title" className="page-title">
        You&apos;ll <span className="text-[var(--primary)]">be part of</span>
      </h2>

      <div className="glass-card-soft mt-6 overflow-x-auto rounded-xl">
        <div role="tablist" aria-label="Project navigation" className="flex min-w-[640px] w-full items-stretch">
          {safeItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.slug}
                id={`project-tab-${item.slug}`}
                type="button"
                role="tab"
                aria-label={item.title}
                aria-selected={isActive}
                aria-controls={`project-panel-${item.slug}`}
                tabIndex={isActive ? 0 : -1}
                className={`focus-ring flex h-14 flex-1 cursor-pointer items-center justify-center border-r border-white/10 px-2 py-2 transition-colors last:border-r-0 ${
                  isActive
                    ? "bg-white/9 text-[var(--text)]"
                    : "bg-transparent text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text)]"
                }`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 items-center justify-center text-[11px] font-semibold tracking-wide ${
                    isActive ? "text-[var(--text)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  {item.tabIconSrc ? (
                    <Image
                      src={item.tabIconSrc}
                      alt=""
                      width={30}
                      height={30}
                      className="h-[30px] w-[30px] object-contain"
                    />
                  ) : (
                    getIconMonogram(item.title)
                  )}
                </span>
                <span className="sr-only">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <article
        key={activeItem.slug}
        id={`project-panel-${activeItem.slug}`}
        role="tabpanel"
        aria-labelledby={`project-tab-${activeItem.slug}`}
        className="glass-card-muted mt-4 grid overflow-hidden rounded-2xl md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        <div className="p-[2rem] md:p-[2.6rem]">
          <h3 className="project-panel-enter project-panel-enter-delay-1 text-[clamp(2.34rem,1.82vw+1.56rem,3.05rem)] leading-[1.15] font-semibold">
            {activeItem.title}
          </h3>
          <p className="project-panel-enter project-panel-enter-delay-2 mt-6 max-w-[52ch] text-[clamp(1.36rem,0.58vw+1.24rem,1.66rem)] leading-[1.6] text-[var(--text-muted)]">
            {activeItem.description}
          </p>
        </div>
        <div className="project-panel-enter project-panel-enter-delay-3 relative min-h-[312px] md:min-h-[390px]">
          <Image
            src={activeItem.imageSrc ?? placeholderImage}
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
