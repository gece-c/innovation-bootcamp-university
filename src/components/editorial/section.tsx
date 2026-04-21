import type { ReactNode } from "react";

type SectionVariant = "default" | "muted" | "inverse";

const variantClass: Record<SectionVariant, string> = {
  default: "bg-[var(--bg)]",
  muted: "bg-[color-mix(in_srgb,var(--surface)_88%,var(--bg))]",
  inverse: "bg-[var(--surface)]"
};

type EditorialSectionProps = {
  id?: string;
  "aria-labelledby"?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
};

/**
 * Vertical rhythm: section padding ~96–160px via responsive py.
 * Wraps major homepage bands for consistent breathing room.
 */
export function EditorialSection({
  id,
  "aria-labelledby": ariaLabelledBy,
  variant = "default",
  className = "",
  children
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] first:border-t-0 ${variantClass[variant]} py-24 md:py-32 lg:py-40 ${className}`}
    >
      <div className="container-shell">{children}</div>
    </section>
  );
}
