export default function CompanyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="page-title">About</h1>
        <p className="mx-auto max-w-3xl text-[var(--text-muted)]">
          Innovation Bootcamp University pioneers a unique cooperative education model that combines intensive learning
          with real-world experience. Our mission is to make high-quality tech education accessible while supporting
          internship-based progression.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Our Core Values</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Cooperative Learning Model</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Start with foundational learning, then progress through internship-based practice while developing
              advanced skills.
            </p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Practice-Driven</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Our curriculum is shaped by practical outcomes, student progress, and real implementation work.
            </p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Community Focus</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Build lasting connections with peers, mentors, and the IBU learning community.
            </p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Internship Pathways</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Progress through internship-based learning aligned to your growth and readiness.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Representative Internship Types</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Build full-stack applications with modern frameworks and deployment workflows.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Completion Requirement: 500 hours</p>
            <p className="text-xs text-[var(--text-muted)]">Focus: Full-Stack Engineering</p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">AI &amp; Machine Learning</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Develop and evaluate intelligent systems for real-world AI product use cases.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Completion Requirement: 500 hours</p>
            <p className="text-xs text-[var(--text-muted)]">Focus: Applied AI Delivery</p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Robotics Engineering</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Design and test robotics systems that combine software, hardware, and controls.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Completion Requirement: 500 hours</p>
            <p className="text-xs text-[var(--text-muted)]">Focus: Intelligent Physical Systems</p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl bg-[var(--surface)] p-8 text-center">
        <h2 className="text-3xl font-semibold">Ready to Start Your Journey?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--text-muted)]">
          Pre-register now for our cooperative education program and take the first step towards a rewarding career in
          technology.
        </p>
      </section>
    </div>
  );
}
