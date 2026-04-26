"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";

export type HeroCarouselItem = {
  id: string;
  kind: "stat" | "highlight";
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
};

type HeroTextCarouselProps = {
  items: HeroCarouselItem[];
  autoPlayMs?: number;
};

type SlideDirection = "next" | "prev";

function getNextIndex(current: number, total: number, direction: "left" | "right") {
  if (direction === "left") {
    return current === 0 ? total - 1 : current - 1;
  }

  return current === total - 1 ? 0 : current + 1;
}

export function HeroTextCarousel({ items, autoPlayMs = 5000 }: HeroTextCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("next");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const safeItems = useMemo(() => items.filter((item) => item.title.trim().length > 0), [items]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setIsReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      { root: null, threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (safeItems.length <= 1 || isReducedMotion || !isVisible || isHovered || isFocusWithin || document.hidden) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSlideDirection("next");
      setActiveIndex((current) => getNextIndex(current, safeItems.length, "right"));
    }, autoPlayMs);

    return () => window.clearInterval(intervalId);
  }, [autoPlayMs, isFocusWithin, isHovered, isReducedMotion, isVisible, safeItems.length]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (!document.hidden) return;
      setActiveIndex((current) => current % Math.max(safeItems.length, 1));
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [safeItems.length]);

  if (!safeItems.length) return null;

  const activeItem = safeItems[activeIndex] ?? safeItems[0];
  const setActiveIndexWithDirection = (nextIndex: number, direction: SlideDirection) => {
    if (nextIndex === activeIndex) return;
    setSlideDirection(direction);
    setActiveIndex(nextIndex);
  };
  const goToNext = () => {
    setSlideDirection("next");
    setActiveIndex((current) => getNextIndex(current, safeItems.length, "right"));
  };
  const goToPrevious = () => {
    setSlideDirection("prev");
    setActiveIndex((current) => getNextIndex(current, safeItems.length, "left"));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (safeItems.length <= 1) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndexWithDirection(0, 0 > activeIndex ? "next" : "prev");
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const endIndex = safeItems.length - 1;
      setActiveIndexWithDirection(endIndex, endIndex > activeIndex ? "next" : "prev");
    }
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Program highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (!event.currentTarget.contains(nextTarget)) {
          setIsFocusWithin(false);
        }
      }}
      className="hero-carousel relative mx-auto w-full max-w-[560px] rounded-2xl p-6 sm:p-8"
    >
      <div className="relative min-h-[340px] sm:min-h-[340px]" aria-live="polite">
        <article
          key={activeItem.id}
          className={`hero-carousel-slide ${slideDirection === "next" ? "hero-carousel-slide-next" : "hero-carousel-slide-prev"} absolute inset-0 z-[100] mx-auto flex w-full flex-col items-center justify-center text-center`}
        >
          <div className="hero-carousel-image-shell absolute inset-0 mx-auto h-full w-full max-w-[100%]">
            <Image
              src={activeItem.imageSrc}
              alt={activeItem.imageAlt}
              fill
              className="object-contain object-center"
              sizes="(min-width: 1280px) 560px, (min-width: 980px) 42vw, 96vw"
              priority={activeIndex === 0}
            />
          </div>
          <h3 className="hero-carousel-text-animate hero-carousel-title-glow relative z-[2] absolute top-[50%] text-[clamp(1.45rem,0.9vw+1.2rem,2rem)] leading-[1.2] font-bold text-white index-100">
            {activeItem.title}
          </h3>
          {activeItem.description ? (
            <p className="hero-carousel-text-animate hero-carousel-description-glow relative z-[2] absolute top-[50%] min-h-[3.2em] text-[clamp(1rem,0.36vw+0.9rem,1.1rem)] font-semibold leading-relaxed text-white">
              {activeItem.description}
            </p>
          ) : null}
        </article>
        {safeItems.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="focus-ring absolute top-1/2 right-[110%] z-[101] -translate-y-1/2 cursor-pointer p-2 text-white transition-none sm:-left-6"
              aria-label="Previous slide"
            >
              <span aria-hidden="true" className="block text-[100px] leading-none opacity-45">
                &#x2039;
              </span>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="focus-ring absolute top-1/2 left-[110%] z-[101] -translate-y-1/2 cursor-pointer p-2 text-white transition-none sm:-right-6"
              aria-label="Next slide"
            >
              <span aria-hidden="true" className="block text-[100px] leading-none opacity-45">
                &#x203A;
              </span>
            </button>
          </>
        ) : null}
      </div>

      {safeItems.length > 1 ? (
        <div className="absolute inset-x-0 bottom-[-55px] z-[100] mt-8 flex items-center justify-center">
          <div className="hero-carousel-dots" role="group" aria-label="Choose highlight slide">
            {safeItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  className="hero-carousel-dot-button focus-ring"
                  onClick={() => setActiveIndexWithDirection(index, index > activeIndex ? "next" : "prev")}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={`hero-carousel-dot${isActive ? " hero-carousel-dot-active" : ""}`} />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
