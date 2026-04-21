import type { ReactNode } from "react";

type Grid12Props = {
  children: ReactNode;
  className?: string;
};

/** 12-column editorial grid — gap scales 16–32px */
export function Grid12({ children, className = "" }: Grid12Props) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 md:gap-7 lg:gap-8 ${className}`}
    >
      {children}
    </div>
  );
}
