import Link from "next/link";
import { getAllInternships, Internship } from "@/lib/strapi";

const statusPriority: Record<string, number> = {
  Open: 0,
  "Closing Soon": 1,
  Pending: 2,
  Closed: 3,
  Filled: 3,
};

function sortInternships(list: Internship[]) {
  return [...list].sort((a, b) => {
    const aPriority = statusPriority[a.status] ?? 99;
    const bPriority = statusPriority[b.status] ?? 99;

    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }

    return a.title.localeCompare(b.title);
  });
}

function internshipStatusBadgeClass(status: string) {
  if (status === "Open") {
    return "internship-status-badge internship-status-open";
  }
  if (status === "Closed" || status === "Filled") {
    return "internship-status-badge internship-status-closed";
  }
  return "internship-status-badge internship-status-pending";
}

export default async function InternshipsPage() {
  const internships = await getAllInternships();
  const sorted = sortInternships(internships);
  const openCount = sorted.filter((i) => i.status === "Open").length;

  return (
    <div className="space-y-10">
      <section
        aria-labelledby="internships-hero-title"
        className="internships-hero-surface relative overflow-hidden rounded-2xl px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14"
        style={{
          backgroundImage:
            "radial-gradient(circle at 88% 12%, color-mix(in srgb, var(--secondary) 20%, transparent), transparent 38%), radial-gradient(circle at 12% 88%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 42%)"
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(120deg, transparent 0%, color-mix(in srgb, var(--text) 4%, transparent) 45%, transparent 70%)"
          }}
          aria-hidden
        />

        <div className="relative z-[1] mx-auto max-w-3xl">
          <h1 id="internships-hero-title" className="page-title">
            <span className="block text-[clamp(2.05rem,5.2vw+0.7rem,3.25rem)] leading-[1.08] text-[var(--text)]">Internship</span>
            <span className='block text-[clamp(2.3rem,6vw+0.8rem,3.9rem)] leading-[1.05] font-["Playfair_Display",Georgia,"Times_New_Roman",serif] font-bold text-[var(--primary)]'>
              Positions
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Browse open roles from industry partners, compare what fits your skills, and apply to roles that <b>accelerate
            your tech career.</b>
          </p>

          {sorted.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {openCount > 0 ? (
                <p className="internships-stat-chip inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-[var(--text)] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] backdrop-blur-[2px]">
                  <span
                    className="relative flex h-2 w-2 shrink-0 rounded-full bg-green-400"
                    aria-hidden
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-40" />
                  </span>
                  <span>
                    <span className="font-semibold text-[var(--primary)]">{openCount}</span>
                    {openCount === 1 ? " role" : " roles"} open now
                    {openCount < sorted.length ? (
                      <span className="text-[var(--text-muted)]">
                        {" "}
                        · {sorted.length} listing{sorted.length === 1 ? "" : "s"}
                      </span>
                    ) : null}
                  </span>
                </p>
              ) : (
                <p className="internships-stat-chip inline-flex items-center rounded-full px-4 py-2 text-sm text-[var(--text-muted)]">
                  {sorted.length} active listing{sorted.length === 1 ? "" : "s"}
                </p>
              )}
            </div>
          ) : null}
        </div>
      </section>

      {sorted.length === 0 ? (
        <section
          className="internships-empty-surface rounded-2xl p-10 text-center"
          aria-live="polite"
        >
          <p className="text-[var(--text-muted)]">No internships available at the moment.</p>
        </section>
      ) : (
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Internship listings">
          {sorted.map((internship) => (
            <article key={internship.id} className="h-full min-h-0">
              <Link
                href={`/opportunities/internships/${internship.slug}`}
                className="internships-card-surface focus-ring group flex h-full min-h-[12rem] flex-col rounded-xl p-5 transition-[border-color,box-shadow] hover:border-[var(--primary)]/40 hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary)_28%,transparent),0_12px_40px_-16px_rgba(0,0,0,0.55)]"
                aria-labelledby={`internship-card-${internship.id}`}
              >
                <h2
                  id={`internship-card-${internship.id}`}
                  className="text-xl font-semibold leading-tight transition-colors group-hover:text-[var(--primary)]"
                >
                  {internship.title}
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span
                    className={`inline-flex shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${internshipStatusBadgeClass(internship.status)}`}
                  >
                    {internship.status}
                  </span>
                  {internship.location ? (
                    <>
                      <span
                        className="size-1 shrink-0 rounded-full bg-[var(--primary)]/35 ring-1 ring-[var(--text-muted)]/15"
                        aria-hidden
                      />
                      <span className="min-w-0 truncate text-xs font-normal text-[var(--text-muted)] opacity-60">
                        {internship.location}
                      </span>
                    </>
                  ) : null}
                </div>

                <span className="mt-auto block w-full pt-6">
                  <span className="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--primary)]/50 bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] px-4 py-3 text-sm font-semibold text-[var(--primary)] transition-[color,background-color,border-color,gap] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--button-primary-text)] group-hover:gap-3">
                    View role
                    <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
