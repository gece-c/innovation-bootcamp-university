"use client";

import type { CareerOpportunityIcon } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBrain,
  FaBriefcase,
  FaFlask,
  FaLaptopCode,
  FaPaintBrush,
  FaProjectDiagram,
  FaTasks
} from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

type CareerOpportunityCard = {
  id: string;
  role: string;
  trackTitle: string;
  intro: string;
  icon: CareerOpportunityIcon;
};

type CareerOpportunitiesRailProps = {
  title: string;
  body: string;
  items: CareerOpportunityCard[];
  ctaLabel: string;
  ctaHref: string;
};

const tintCycle = ["primary", "secondary", "amber", "green"] as const;
const careerOpportunityIconByKey: Record<CareerOpportunityIcon, IconType> = {
  technologyAi: FaLaptopCode,
  roboticsEngineering: FaBrain,
  scienceResearch: FaFlask,
  businessGrowth: FaBriefcase,
  operationsManagement: FaTasks,
  creativeMedia: FaPaintBrush,
  interdisciplinary: FaProjectDiagram
};

export function CareerOpportunitiesRail({ title, body, items, ctaLabel, ctaHref }: CareerOpportunitiesRailProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const hasUserInteractedRef = useRef(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [firstWord, ...otherWords] = title.split(" ");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isSectionVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isSectionVisible]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (hasUserInteractedRef.current) return;

    const pixelsPerTick = 1;
    const intervalMs = 16;
    const intervalId = window.setInterval(() => {
      if (hasUserInteractedRef.current) return;
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      if (maxScrollLeft > 0) {
        rail.scrollLeft += pixelsPerTick;
        if (rail.scrollLeft >= maxScrollLeft) {
          rail.scrollLeft = 0;
        }
      }
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [items]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const stopAutoScroll = () => {
      hasUserInteractedRef.current = true;
    };

    const handlePointerDown = (event: PointerEvent) => {
      const scrollbarActivationHeight = 18;
      const clickedScrollbarZone = event.offsetY >= rail.clientHeight - scrollbarActivationHeight;
      if (clickedScrollbarZone) {
        stopAutoScroll();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const isHorizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY) || (event.shiftKey && event.deltaY !== 0);
      if (isHorizontalIntent) {
        stopAutoScroll();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End") {
        stopAutoScroll();
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const isHorizontalIntent = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 8;
      if (isHorizontalIntent) {
        stopAutoScroll();
      }
    };

    rail.addEventListener("pointerdown", handlePointerDown, { passive: true });
    rail.addEventListener("wheel", handleWheel, { passive: true });
    rail.addEventListener("keydown", handleKeyDown);
    rail.addEventListener("touchstart", handleTouchStart, { passive: true });
    rail.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      rail.removeEventListener("pointerdown", handlePointerDown);
      rail.removeEventListener("wheel", handleWheel);
      rail.removeEventListener("keydown", handleKeyDown);
      rail.removeEventListener("touchstart", handleTouchStart);
      rail.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="career-opportunities-title"
      className={`career-opportunities-section glass-panel glass-panel-horizontal glass-panel-muted overflow-hidden rounded-2xl p-8${isSectionVisible ? " career-opportunities-section-visible" : ""}`}
    >
      <h2
        id="career-opportunities-title"
        className="career-slideup-target mb-4 text-[clamp(2rem,1.2vw+1.7rem,3rem)] leading-tight font-bold"
      >
        {firstWord} <span className="text-[var(--primary)]">{otherWords.join(" ")}</span>
      </h2>
      <p className="career-slideup-target max-w-5xl text-[clamp(1.08rem,0.42vw+0.96rem,1.35rem)] leading-relaxed text-[var(--text-muted)]">
        {body}
      </p>

      <div className="career-slideup-target career-opportunities-rail-frame mt-8">
        <div
          ref={railRef}
          className="career-opportunities-rail overflow-x-auto pb-3"
          role="list"
          aria-label="Career opportunities"
          tabIndex={0}
        >
          <div className="career-opportunities-rail-track flex min-w-max gap-4 sm:gap-6">
            {items.map((item, index) => {
              const tint = tintCycle[index % tintCycle.length];
              const Icon = careerOpportunityIconByKey[item.icon] ?? FiCircle;
              return (
                <article
                  key={item.id}
                  role="listitem"
                  className={`career-slideup-target career-opportunity-card glass-card glass-card-muted snap-start rounded-xl career-opportunity-card--${tint}`}
                >
                  <div className="career-opportunity-card-content p-5">
                    <p className="career-opportunity-track text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      {item.trackTitle}
                    </p>
                    <h3 className="mt-2 text-xl leading-tight font-semibold">{item.role}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.intro}</p>
                  </div>
                  <div className="career-opportunity-card-visual flex items-end justify-end px-5 py-4" aria-hidden="true">
                    <span className="career-opportunity-card-icon leading-none">
                      <Icon aria-hidden="true" focusable="false" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="career-slideup-target mt-8 -mx-8 -mb-8">
        <ButtonLink href={ctaHref} className="min-h-16 w-full rounded-none rounded-b-2xl border-x-0 border-b-0 text-base">
          <span className="inline-flex items-center gap-2">
            <span>{ctaLabel}</span>
            <FaArrowRight aria-hidden="true" />
          </span>
        </ButtonLink>
      </div>
    </section>
  );
}
