import Image from "next/image";
import Link from "next/link";
import { resources } from "@/content/site-content";

export default function ResourcesPage() {
  const resourceImageBySlug: Record<string, string> = {
    "how-it-works": "/resources/how-it-works.png",
    "community-playbook": "/resources/playbook.png"
  };

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title font-bold">Learning Resources</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[clamp(1.05rem,0.45vw+0.95rem,1.22rem)] leading-relaxed text-[var(--text-muted)]">
          Explore practical guides that support your full journey at Innovation Bootcamp University, from understanding
          the co-op pathway to navigating student expectations and support channels.
        </p>
      </section>

      <section aria-label="Resource categories" className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="focus-ring block rounded-2xl"
            aria-label={`Open ${resource.title}`}
          >
            <article className="relative isolate overflow-hidden rounded-2xl border border-white/20 min-h-[22rem] glass-card-soft">
              <Image
                src={resourceImageBySlug[resource.slug] ?? "/about/research.png"}
                alt={`${resource.title} visual`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/26 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 bg-[linear-gradient(130deg,color-mix(in_srgb,var(--primary)_20%,transparent),transparent_44%)]" aria-hidden="true" />

              <div className="absolute bottom-0 left-0 z-[1] p-6">
                <div className="max-w-[92%]">
                  <h2 className="text-2xl font-bold leading-tight text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.95),0_0_18px_rgba(0,0,0,0.65)]">
                    {resource.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-gray-300 [text-shadow:0_4px_14px_rgba(0,0,0,0.95),0_0_14px_rgba(0,0,0,0.62)]">
                    {resource.summary}
                  </p>
                  <p className="mt-5 inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--primary)_65%,transparent)] bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_color-mix(in_srgb,var(--primary)_35%,transparent)]">
                    Open Page
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
