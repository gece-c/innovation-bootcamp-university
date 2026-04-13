const latestNews = [
  {
    date: "March 15, 2024",
    title: "Innovation Bootcamp University Launches New AI & Machine Learning Program",
    body:
      "Responding to industry demand, Innovation Bootcamp University introduces a comprehensive program focused on artificial intelligence and machine learning."
  },
  {
    date: "February 1, 2024",
    title: "Program Update: Internship-Based Learning Pathway",
    body:
      "Innovation Bootcamp University publishes updates to its internal internship-based learning structure and student progression model."
  },
  {
    date: "January 10, 2024",
    title: "2023 Student Success Report",
    body:
      "95% of Innovation Bootcamp University graduates secured technical roles within 6 months of program completion."
  }
];

const mediaCoverage = [
  {
    outlet: "TechCrunch",
    title: "Innovation Bootcamp University Revolutionizes Tech Education",
    date: "March 2024"
  },
  {
    outlet: "Forbes",
    title: "The Future of Tech Education: Innovation Bootcamp University&apos;s Approach",
    date: "February 2024"
  },
  {
    outlet: "EdTech Magazine",
    title: "How Innovation Bootcamp University is Bridging the Tech Skills Gap",
    date: "January 2024"
  }
];

const mediaResources = [
  {
    title: "Brand Guidelines",
    body: "Logos, color palette, and usage guidelines."
  },
  {
    title: "Press Kit",
    body: "Company information, facts, and high-resolution images."
  },
  {
    title: "Media Assets",
    body: "Photos of our campus, students, and events."
  }
];

export default function PressPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="page-title">Press &amp; Media</h1>
        <p className="mx-auto max-w-3xl text-[var(--text-muted)]">
          Get the latest news and updates about Innovation Bootcamp University. For press inquiries, please contact our
          media relations team.
        </p>
        <p className="mt-4 text-sm font-medium">Contact Press Team</p>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Latest News</h2>
        <div className="space-y-4">
          {latestNews.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
              <p className="text-xs text-[var(--text-muted)]">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
              <button type="button" className="mt-3 text-sm font-medium">
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Media Coverage</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {mediaCoverage.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
              <p className="text-xs text-[var(--text-muted)]">{item.outlet}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Media Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {mediaResources.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
              <button type="button" className="mt-3 text-sm font-medium">
                Download
              </button>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
