import Link from "next/link";
import { notFound } from "next/navigation";
import { HubSpotForm } from "@/components/hubspot-form";
import { SectionCard } from "@/components/ui/section-card";
import { getInternship } from "@/lib/strapi";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ParsedInternshipContent = {
  overview: string[];
  responsibilities: string[];
  qualifications: string[];
  whyJoinUs: string[];
};

export const revalidate = 60;

const normalizeText = (value: string) => value.replace(/\r/g, "").replace(/\u00A0/g, " ").trim();

const cleanItem = (value: string) =>
  normalizeText(value)
    .replace(/^[-\u2022\u25CF\u25A0\u25AA\u25E6]+\s*/, "")
    .trim();

const isOverviewHeading = (value: string) => /^overview$/i.test(value);
const isResponsibilitiesHeading = (value: string) => /^key responsibilities$/i.test(value);
const isQualificationsHeading = (value: string) =>
  /^qualifications and skills$/i.test(value) || /^qualifications\s*&\s*skills$/i.test(value);
const isWhyJoinUsHeading = (value: string) => /^why join us\??$/i.test(value);

function parseInternshipContent(raw?: string): ParsedInternshipContent {
  const result: ParsedInternshipContent = {
    overview: [],
    responsibilities: [],
    qualifications: [],
    whyJoinUs: [],
  };

  if (!raw) return result;

  const blocks = raw
    .split(/\n\s*\n+/)
    .map(normalizeText)
    .filter(Boolean);

  let currentSection: keyof ParsedInternshipContent = "overview";

  for (const block of blocks) {
    if (isOverviewHeading(block)) {
      currentSection = "overview";
      continue;
    }

    if (isResponsibilitiesHeading(block)) {
      currentSection = "responsibilities";
      continue;
    }

    if (isQualificationsHeading(block)) {
      currentSection = "qualifications";
      continue;
    }

    if (isWhyJoinUsHeading(block)) {
      currentSection = "whyJoinUs";
      continue;
    }

    result[currentSection].push(cleanItem(block));
  }

  return result;
}

function splitWhyJoinItem(item: string) {
  const cleaned = cleanItem(item);
  const match = cleaned.match(/^([^:]+):\s*(.+)$/);

  if (!match) {
    return {
      title: "",
      description: cleaned,
    };
  }

  return {
    title: `${match[1].trim()}:`,
    description: match[2].trim(),
  };
}

function internshipStatusBadgeClass(status: string) {
  if (status === "Open") {
    return "bg-green-500/15 text-green-300";
  }
  if (status === "Closed" || status === "Filled") {
    return "bg-rose-500/15 text-rose-300";
  }
  return "bg-amber-500/15 text-amber-300";
}

export default async function InternshipPage(props: PageProps) {
  const { slug } = await props.params;

  const internship = await getInternship(slug);

  if (!internship) {
    notFound();
  }

  const parsed = parseInternshipContent(internship.description);

  return (
    <div className="space-y-10">
      <p className="mb-8">
        <Link
          href="/opportunities/internships"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#4a4a4a]/80 bg-[var(--surface-muted)]/30 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] opacity-90 transition-[color,border-color,background-color,opacity] hover:border-[var(--primary)]/45 hover:bg-[var(--surface)] hover:text-[var(--primary)] hover:opacity-100"
        >
          <span aria-hidden className="text-[var(--primary)]/90">
            ←
          </span>
          All internship positions
        </Link>
      </p>

      <section
        aria-labelledby="internship-detail-title"
        className="relative overflow-hidden rounded-2xl border border-[#4a4a4a]/70 bg-[var(--surface)] px-6 py-8 text-left sm:px-10 sm:py-10 md:px-12 md:py-12"
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

        <div className="relative z-[1] max-w-4xl">
          <h1 id="internship-detail-title" className="page-title text-[var(--text)]">
            {internship.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1">
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
        </div>
      </section>

      {parsed.overview.length > 0 ? (
        <SectionCard title="Overview">
          <div className="space-y-4 text-[var(--text-muted)]">
            {parsed.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </SectionCard>
      ) : null}

      {parsed.responsibilities.length > 0 ? (
        <SectionCard title="Key Responsibilities">
          <ul className="list-inside list-disc space-y-2 text-[var(--text-muted)]">
            {parsed.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SectionCard>
      ) : null}

      {parsed.qualifications.length > 0 ? (
        <SectionCard title="Qualifications and Skills">
          <ul className="list-inside list-disc space-y-2 text-[var(--text-muted)]">
            {parsed.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SectionCard>
      ) : null}

      {parsed.whyJoinUs.length > 0 ? (
        <SectionCard title="Why Join Us?">
          <div className="space-y-6 text-[var(--text-muted)]">
            {parsed.whyJoinUs.map((item, index) => {
              const entry = splitWhyJoinItem(item);

              return (
                <div key={index}>
                  {entry.title ? (
                    <>
                      <p className="mb-2 font-semibold text-[var(--text)]">{entry.title}</p>
                      <p>{entry.description}</p>
                    </>
                  ) : (
                    <p>{entry.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </SectionCard>
      ) : null}

      <section
        aria-labelledby="internship-apply-title"
        className="relative overflow-hidden rounded-2xl px-6 py-10 text-center shadow-[0_1px_0_rgba(255,255,255,0.45)_inset] backdrop-blur-[2px] sm:px-10 sm:py-12 className= bg-[radial-gradient(circle_at_18%_16%,color-mix(in_srgb,var(--primary)_9%,transparent),transparent_46%),radial-gradient(circle_at_86%_82%,color-mix(in_srgb,var(--secondary)_7%,transparent),transparent_44%)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.46] bg-white"
          aria-hidden
        />

        <div className="relative z-[1]">
          <h2
            id="internship-apply-title"
            className="text-2xl font-bold text-[var(--primary)] text-shadow-lg md:text-3xl"
          >
            Apply for this position
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-[white] text-shadow-lg sm:text-lg">
            Ready to join the team? Complete the application form below.
          </p>

          <div className="mt-8 rounded-2xl p-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] backdrop-blur-[1px] sm:p-7">
            {internship.hubspotFormId ? (
              <HubSpotForm formId={internship.hubspotFormId} />
            ) : (
              <div className="mx-auto max-w-2xl rounded-xl border border-[#e2e5e9] bg-[#f8f9fb] p-8">
                <p className="text-[#5c6370]">The application form is not available yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
