import { ReactNode } from "react";

type SectionCardProps = {
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function SectionCard({ title, children, footer, className }: SectionCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 ${className ?? ""}`}
    >
      <h3 className="mb-4 text-[clamp(1.6rem,2.2vw+1rem,2rem)] leading-tight font-bold">{title}</h3>
      <div className="flex-1 text-[var(--text-muted)]">{children}</div>
      {footer ? <div className="mt-5 pt-1">{footer}</div> : null}
    </article>
  );
}
