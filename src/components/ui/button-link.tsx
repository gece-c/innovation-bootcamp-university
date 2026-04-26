import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--button-primary-text)] hover:bg-[#39c7e8] active:bg-[#0d8fae] border-[var(--primary)]",
  secondary:
    "bg-[var(--primary)] text-[var(--button-primary-text)] hover:bg-[#39c7e8] active:bg-[#0d8fae] border-[var(--primary)]",
  ghost:
    "bg-transparent text-[var(--text)] hover:bg-[var(--surface-muted)] active:bg-[var(--surface)] border-[var(--text-muted)]"
};

export function ButtonLink({ href, children, variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`focus-ring inline-flex min-h-13 items-center justify-center rounded-lg border px-10 py-2 font-semibold transition-colors ${variantStyles[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
