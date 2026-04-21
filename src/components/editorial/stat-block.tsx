import type { ReactNode } from "react";

type StatBlockProps = {
  value: ReactNode;
  label?: ReactNode;
  icon?: ReactNode;
  className?: string;
  "aria-label"?: string;
};

/** Rectangular stat cell — replaces organic “blob” treatments */
export function StatBlock({
  value,
  label,
  icon,
  className = "",
  "aria-label": ariaLabel
}: StatBlockProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`flex min-h-[5.5rem] flex-col justify-center border border-[color-mix(in_srgb,var(--primary)_28%,#4e6c73)] bg-[rgb(34_34_34_/_0.92)] px-4 py-3 text-center ${className}`}
    >
      {icon ? (
        <p className="mb-1 text-sm text-[var(--primary)]" aria-hidden="true">
          {icon}
        </p>
      ) : null}
      <p className="text-balance text-sm font-semibold leading-snug text-[var(--text)] md:text-[0.95rem]">
        {value}
      </p>
      {label ? (
        <p className="mt-1 text-balance text-xs leading-tight text-[var(--text-muted)]">{label}</p>
      ) : null}
    </div>
  );
}
