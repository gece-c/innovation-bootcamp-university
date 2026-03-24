import Link from "next/link";

const reasons = [
  {
    title: "Collaborative Culture",
    body: "Work with passionate educators and tech innovators in a supportive environment."
  },
  {
    title: "Learning & Development",
    body: "Access to continuous learning opportunities and professional development resources."
  },
  {
    title: "Comprehensive Benefits",
    body: "Competitive salary, health insurance, 401(k), and generous PTO."
  },
  {
    title: "Innovation Focus",
    body: "Be at the forefront of educational technology and shape the future of learning."
  }
];

const openings = [
  {
    role: "Senior Curriculum Developer",
    meta: "Education · San Francisco · Remote · Full-time",
    body: "Design and develop cutting-edge curriculum for our web development and AI programs."
  },
  {
    role: "Student Success Coach",
    meta: "Student Services · San Francisco · Full-time",
    body: "Guide and support students throughout their learning journey."
  },
  {
    role: "Technical Instructor - AI/ML",
    meta: "Education · Remote · Full-time",
    body: "Lead live sessions and mentor students in our AI/ML program."
  },
  {
    role: "Partnership Manager",
    meta: "Business Development · San Francisco · Remote · Full-time",
    body: "Build and maintain relationships with industry partners and employers."
  }
];

export default function CareersAtIbPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="page-title">Join Our Team</h1>
        <p className="mx-auto max-w-3xl text-[var(--text-muted)]">
          Help us transform tech education and empower the next generation of innovators. We&apos;re looking for
          passionate individuals who share our vision.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Why Work With Us</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Current Openings</h2>
        <div className="space-y-4">
          {openings.map((item) => (
            <article
              key={item.role}
              className="flex flex-col gap-2 rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 md:flex-row md:items-start md:justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{item.meta}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
              </div>
              <button type="button" className="text-sm font-medium">
                View Details
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
        <h2 className="text-3xl font-semibold">Don&apos;t See the Right Position?</h2>
        <p className="mx-auto mt-3 max-w-3xl text-[var(--text-muted)]">
          We&apos;re always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep
          you in mind for future opportunities.
        </p>
        <Link href="/company/contact" className="mt-5 inline-block rounded-md border border-[#4a4a4a] px-5 py-2 text-sm font-medium">
          Get In Touch
        </Link>
      </section>

      <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <p className="mx-auto mt-3 max-w-3xl text-[var(--text-muted)]">
          We believe in fostering a diverse, inclusive, and collaborative environment where everyone can thrive and
          make a meaningful impact.
        </p>
        <Link href="/company" className="mt-5 inline-block rounded-md border border-[#4a4a4a] px-5 py-2 text-sm font-medium">
          Learn About Us
        </Link>
      </section>

    </div>
  );
}
