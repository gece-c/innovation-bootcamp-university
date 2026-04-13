"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  tag: string;
};

type IndustryFeedbackCarouselProps = {
  testimonials: Testimonial[];
};

export function IndustryFeedbackCarousel({ testimonials }: IndustryFeedbackCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="mt-8">
      <div className="relative rounded-2xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-8">
        <button
          type="button"
          onClick={previous}
          className="focus-ring absolute -left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-[#4a4a4a] bg-[var(--surface)] text-xl text-[var(--text)] transition-colors hover:bg-[var(--surface-muted)]"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          className="focus-ring absolute -right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-[#4a4a4a] bg-[var(--surface)] text-xl text-[var(--text)] transition-colors hover:bg-[var(--surface-muted)]"
          aria-label="Next testimonial"
        >
          ›
        </button>

        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-xl text-white">
          &ldquo;
        </div>

        <div key={testimonials[activeIndex].name} className="testimonial-enter">
          <p className="min-h-[140px] text-xl leading-relaxed text-[var(--text)]">
            &ldquo;{testimonials[activeIndex].quote}&rdquo;
          </p>

          <div className="mt-6">
            <p className="font-semibold">{testimonials[activeIndex].name}</p>
            <p className="text-sm text-[var(--text-muted)]">{testimonials[activeIndex].role}</p>
            <p className="mt-1 text-sm text-[var(--primary)]">{testimonials[activeIndex].tag}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`focus-ring h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex ? "bg-[var(--primary)]" : "bg-[var(--text-muted)]/45 hover:bg-[var(--text-muted)]/70"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
