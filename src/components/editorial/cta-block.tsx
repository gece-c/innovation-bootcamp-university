import type { ReactNode } from "react";

type CtaBlockProps = {
  children: ReactNode;
  className?: string;
};

/** Solid CTA cluster with generous whitespace — no visual clutter */
export function CtaBlock({ children, className = "" }: CtaBlockProps) {
  return (
    <div
      className={`rounded-lg border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--surface)] px-8 py-16 text-center md:px-16 md:py-20 lg:px-24 lg:py-24 ${className}`}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8">{children}</div>
    </div>
  );
}
