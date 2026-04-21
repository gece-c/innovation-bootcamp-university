import type { ReactNode } from "react";

type ImageBlockProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Data-visual frame: grid overlay + gradient, high contrast, slight desaturation on inner img via class.
 */
export function ImageBlock({ children, className = "" }: ImageBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      data-image-block
    >
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(135deg,rgb(0_0_0_/_0.55)_0%,transparent_45%,rgb(0_0_0_/_0.35)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            color-mix(in srgb, var(--primary) 35%, transparent) 0 1px,
            transparent 1px 18px
          ),
          repeating-linear-gradient(
            0deg,
            color-mix(in srgb, var(--secondary) 25%, transparent) 0 1px,
            transparent 1px 18px
          )`
        }}
        aria-hidden
      />
      <div className="relative z-[1] [&_img]:h-auto [&_img]:w-full [&_img]:max-w-none [&_img]:object-cover [&_img]:saturate-[0.78] [&_img]:contrast-[1.12]">
        {children}
      </div>
    </div>
  );
}
