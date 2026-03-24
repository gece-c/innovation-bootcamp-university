export default function CompanyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="page-title">About</h1>
        <p className="mx-auto max-w-3xl text-[var(--text-muted)]">
          Innovation Bootcamp University pioneers a unique cooperative education model that combines intensive learning
          with real-world experience. Our mission is to make high-quality tech education accessible while ensuring our
          students can earn as they learn.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label="About stats">
        <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
          <p className="text-3xl font-semibold text-[var(--primary)]">95%</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Program Success Rate</p>
        </article>
        <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
          <p className="text-3xl font-semibold text-[var(--primary)]">50+</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Industry Partners</p>
        </article>
        <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
          <p className="text-3xl font-semibold text-[var(--primary)]">25+</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Expert Mentors</p>
        </article>
        <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5 text-center">
          <p className="text-3xl font-semibold text-[var(--primary)]">40%</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Average Salary Increase</p>
        </article>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Our Core Values</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Learn &amp; Earn Model</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Start with foundational learning, then progress to earning while developing advanced skills.
            </p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Industry-Driven</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Our curriculum is shaped by real industry needs and current tech trends.
            </p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Community Focus</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Build lasting connections with peers, mentors, and industry professionals.
            </p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Global Opportunities</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Access remote work opportunities with companies worldwide.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Our Programs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Foundation Developer</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Master programming fundamentals and build your first professional projects.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Duration: 3-6 months</p>
            <p className="text-xs text-[var(--text-muted)]">Focus: Core Programming Skills</p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Professional Developer</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Earn more with advanced skills and leadership roles.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Duration: 6-12 months</p>
            <p className="text-xs text-[var(--text-muted)]">Focus: Advanced Development</p>
          </article>
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
            <h3 className="text-lg font-semibold">Specialized Tracks</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Deep dive into specific technologies like AI, Cloud, or Mobile Development.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Duration: Varies</p>
            <p className="text-xs text-[var(--text-muted)]">Focus: Specialized Skills</p>
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
