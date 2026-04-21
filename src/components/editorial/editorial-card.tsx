import type { ReactNode } from "react";

type EditorialCardProps = {
  children: ReactNode;
  className?: string;
  /** Column span on md+ (12-col grid parent) */
  span?: "full" | "3" | "4" | "5" | "6" | "7" | "8" | "12";
};

const spanClass: Record<NonNullable<EditorialCardProps["span"]>, string> = {
  full: "md:col-span-12",
  "3": "md:col-span-12 lg:col-span-3",
  "4": "md:col-span-12 lg:col-span-4",
  "5": "md:col-span-12 lg:col-span-5",
  "6": "md:col-span-12 lg:col-span-6",
  "7": "md:col-span-12 lg:col-span-7",
  "8": "md:col-span-12 lg:col-span-8",
  "12": "md:col-span-12"
};

/** Rigid container: minimal radius, hover lift — UI reads as data, not decoration */
export function EditorialCard({ children, className = "", span = "full" }: EditorialCardProps) {
  return (
    <div
      className={`flex flex-col rounded-lg bg-[var(--surface)] p-6 shadow-none transition duration-200 ease-out md:p-8 lg:p-10 ${spanClass[span]} hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0_0_0_/_0.35)] ${className}`}
    >
      {children}
    </div>
  );
}
