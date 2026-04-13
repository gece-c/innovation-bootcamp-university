import { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function SectionCard({ title, children, footer }: SectionCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
      <h3 className="mb-4 text-[32px] font-bold">{title}</h3>
      <div className="flex-1 text-[var(--text-muted)]">{children}</div>
      {footer ? <div className="mt-5 pt-1">{footer}</div> : null}
    </article>
  );
}
