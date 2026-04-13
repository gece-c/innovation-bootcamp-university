import { SectionCard } from "@/components/ui/section-card";
import { tracks } from "@/content/site-content";

export default function ProgramsPage() {
  const internshipTypes = tracks;

  return (
    <div>
      <h1 className="page-title">Internship Types</h1>
      <p className="mb-8 max-w-3xl text-[var(--text-muted)]">
        Choose an internship type and progress through a tiered learning model that combines mentoring, real projects, and career preparation.
      </p>
      <div className="space-y-5">
        {internshipTypes.map((internshipType) => (
          <section key={internshipType.slug} id={internshipType.slug} aria-labelledby={`${internshipType.slug}-title`}>
            <SectionCard title={internshipType.name}>
              <h2 id={`${internshipType.slug}-title`} className="sr-only">
                {internshipType.name}
              </h2>
              <p>{internshipType.summary}</p>
              <p className="mt-2 text-sm">
                {internshipType.capacity} - {internshipType.duration}
              </p>
              <p className="mt-3 font-semibold">Skills</p>
              <ul className="list-inside list-disc">
                {internshipType.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="mt-3 font-semibold">Role Examples</p>
              <ul className="list-inside list-disc">
                {internshipType.careers.map((career) => (
                  <li key={career}>{career}</li>
                ))}
              </ul>
            </SectionCard>
          </section>
        ))}
      </div>
    </div>
  );
}
