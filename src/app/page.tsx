import { ButtonLink } from "@/components/ui/button-link";
import { IndustryFeedbackCarousel } from "@/components/industry-feedback-carousel";
import Image from "next/image";
import {
  faqAccordionItems,
  hero,
  industryFeedbackSection,
  whyChoose
} from "@/content/site-content";

export default function HomePage() {
  const heroStatPositionClasses = [
    "sm:absolute sm:left-[-2%] sm:top-[10%] min-[980px]:left-[-5%] min-[980px]:top-[8%]",
    "sm:absolute sm:left-[-6%] sm:top-[43%] min-[980px]:left-[-10%] min-[980px]:top-[38%]",
    "sm:absolute sm:left-[10%] sm:bottom-[4%] min-[980px]:left-[5%] min-[980px]:bottom-[12%]",
    "sm:absolute sm:left-[50%] sm:bottom-[-%] min-[980px]:left-[36%] min-[980px]:bottom-[-2%]"
  ];

  return (
    <div className="space-y-14">
      <section
        aria-labelledby="home-title"
        className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-[var(--surface)] p-6 max-[979px]:p-6 min-[980px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[980px]:p-8"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, color-mix(in srgb, var(--secondary) 22%, transparent), transparent 36%), radial-gradient(circle at 65% 58%, color-mix(in srgb, var(--primary) 20%, transparent), transparent 38%)"
        }}
      >
        <div className="relative z-[2]">
          <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
            {hero.badge}
          </p>
          <h1 id="home-title" className="page-title">
            Applications Open for 2026
            <br />
            <span className='font-["Playfair_Display",Georgia,"Times_New_Roman",serif] font-bold'>
              Launch Your Tech Career
            </span>
          </h1>
          <p className="max-w-2xl text-[var(--text-muted)]">{hero.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={hero.actions[0].href}>{hero.actions[0].label}</ButtonLink>
            <ButtonLink href={hero.actions[1].href} variant="ghost">
              {hero.actions[1].label}
            </ButtonLink>
          </div>
        </div>

        <div
          className="relative z-[1] grid w-full justify-self-center gap-3 sm:min-h-[390px] sm:w-[min(100%,520px)] sm:block sm:justify-self-center min-[980px]:min-h-[420px] min-[980px]:justify-self-end"
          aria-label="Hero program highlights"
        >
          <Image
            src="/hero-person.svg"
            alt="Student standing in front of abstract shapes"
            width={531}
            height={582}
            className="relative z-[2] col-span-2 h-auto w-[min(100%,360px)] justify-self-center drop-shadow-[0_22px_30px_rgb(0_0_0_/_0.35)] sm:w-full"
            priority
          />
          {hero.stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`z-[3] flex w-full flex-col items-center justify-center rounded-[50rem] border border-[#4a4a4a] bg-[rgb(34_34_34_/_0.88)] px-[0.65rem] py-[0.6rem] text-center shadow-[0_10px_20px_rgb(0_0_0_/_0.35)] ${index === 2 ? "sm:h-[136px] sm:w-[136px]" : "sm:h-[120px] sm:w-[120px]"} ${heroStatPositionClasses[index] ?? ""}`}
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <p className="mb-[0.18rem] text-[1rem] leading-[1.1] font-bold text-[var(--primary)]" aria-hidden="true">
                {index === 0 ? "◌◌" : index === 1 ? "$" : index === 2 ? "○" : "</>"}
              </p>
              <p className="max-w-[8ch] text-balance text-[clamp(1.05rem,1vw+0.5rem,1.65rem)] leading-[1.05] font-bold break-words">
                {stat.value}
              </p>
              <p className="mt-[0.15rem] max-w-[10ch] text-balance text-[clamp(0.56rem,0.35vw+0.42rem,0.66rem)] leading-[1.25] text-[var(--text-muted)] break-words">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-choose-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
          {whyChoose.badge}
        </p>
        <h2 id="why-choose-title" className="page-title max-w-3xl">
          {whyChoose.title}
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{whyChoose.body}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChoose.points.map((point) => (
            <article
              key={point.title}
              className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/45 p-5"
            >
              <div className="mb-4 text-2xl leading-none" aria-hidden="true">
                {point.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{point.title}</h3>
              <p className="text-[var(--text-muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="career-opportunities-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <h2 id="career-opportunities-title" className="mb-4 text-3xl font-semibold">
          Career <span className="text-[var(--primary)]">Opportunities</span>
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">
          Our curriculum prepares you for roles across a wide range of tech sectors. Here are the
          industries where our graduates can build successful careers.
        </p>

        <div className="mt-8 rounded-2xl border border-[#4a4a4a] bg-[var(--bg)]/30 p-6">
          <h3 className="text-2xl font-semibold">Explore 40+ Internship Paths Across Industries</h3>
          <p className="mt-3 text-[var(--text-muted)]">
            Not everyone wants the same career and that is exactly the{" "}
            point.
          </p>
          <p className="mt-2 text-[var(--text-muted)]">
            Whether you&apos;re into AI, business, science, or creativity, you can{" "}
            <strong>start working in your field from day one</strong>.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <h3 className="text-2xl font-semibold">Technology &amp; AI (Build the Future)</h3>
            <p className="mt-2 text-[var(--text-muted)]">Work on cutting-edge systems shaping tomorrow:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>AI/AGI Intern</li>
              <li>Machine Learning Engineering Intern</li>
              <li>Computer Vision Engineering Intern</li>
              <li>Prompt Engineer Intern</li>
              <li>Software Development Intern</li>
              <li>Front-end Developer Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              Perfect for builders, coders, and problem-solvers
            </p>
          </article>

          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <h3 className="text-2xl font-semibold">Robotics &amp; Engineering (Hands-On Innovation)</h3>
            <p className="mt-2 text-[var(--text-muted)]">Design, build, and integrate real-world systems:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Robotics Engineering Intern</li>
              <li>Mechatronics Engineering Intern</li>
              <li>Embedded Systems Intern</li>
              <li>Sensor Integration Intern</li>
              <li>Control Systems Engineering Intern</li>
              <li>Human-Robot Interaction Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For those who want to create physical + intelligent systems
            </p>
          </article>

          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <h3 className="text-2xl font-semibold">Science, Research &amp; Advanced Fields</h3>
            <p className="mt-2 text-[var(--text-muted)]">Explore deep tech and scientific innovation:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Biomedical Engineering Intern</li>
              <li>Neuroscience Intern</li>
              <li>Quantum Engineer Intern</li>
              <li>Space Science Intern</li>
              <li>Research Associate Intern (Open-Source Projects)</li>
              <li>Animal Science and Veterinary Research Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              Ideal for analytical thinkers and future researchers
            </p>
          </article>

          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <h3 className="text-2xl font-semibold">Business, Marketing &amp; Growth</h3>
            <p className="mt-2 text-[var(--text-muted)]">Work directly on company growth and strategy:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Business Development and Sales Intern</li>
              <li>Business Development (AI &amp; Robotics) Intern</li>
              <li>Marketing Intern</li>
              <li>Digital Marketing Intern</li>
              <li>SEO Specialist Intern</li>
              <li>Social Media Intern</li>
              <li>GTM Engineer Intern</li>
              <li>GTM Influencer Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For communicators, strategists, and growth-driven minds
            </p>
          </article>

          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <h3 className="text-2xl font-semibold">Operations, Product &amp; Management</h3>
            <p className="mt-2 text-[var(--text-muted)]">Help build and run real companies:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Operations Intern</li>
              <li>Project Management Intern</li>
              <li>Product Development Intern (AI &amp; Robotics)</li>
              <li>Quality Assurance Intern</li>
              <li>Finance Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For leaders, organizers, and decision-makers
            </p>
          </article>

          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6">
            <h3 className="text-2xl font-semibold">Creative, Media &amp; Communication</h3>
            <p className="mt-2 text-[var(--text-muted)]">Create content that reaches the world:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>Content Marketing Intern</li>
              <li>Journalism &amp; PR Intern</li>
              <li>Podcast Production Intern</li>
              <li>Technical Writing Intern</li>
              <li>UI/UX Design Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For storytellers, designers, and creatives
            </p>
          </article>

          <article className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-6 md:col-span-2">
            <h3 className="text-2xl font-semibold">Emerging &amp; Interdisciplinary Fields</h3>
            <p className="mt-2 text-[var(--text-muted)]">Where tech meets new industries:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              <li>EdTech and Innovation Intern</li>
              <li>Ethical and Legal Research Intern</li>
              <li>Hospitality and Tourism Intern</li>
              <li>Sport Science Intern</li>
            </ul>
            <p className="mt-3 text-sm italic text-[var(--text-muted)]">
              For explorers who want something different
            </p>
          </article>
        </div>

        <article className="mt-8 rounded-2xl border border-[#4a4a4a] bg-[var(--bg)]/30 p-6">
          <h3 className="text-2xl font-semibold">Why This Matters</h3>
          <p className="mt-3 text-[var(--text-muted)]">Most platforms offer a few generic roles.</p>
          <p className="mt-2 text-[var(--text-muted)]">
            Here, you choose from <strong>a wide ecosystem of real internships</strong>, across industries
            and all connected to your learning journey.
          </p>
          <p className="mt-4 font-semibold">
            Find your path. Start your internship. Build your career now.
          </p>
        </article>
      </section>

      <section aria-labelledby="industry-feedback-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
          {industryFeedbackSection.badge}
        </p>
        <h2 id="industry-feedback-title" className="page-title max-w-3xl">
          {industryFeedbackSection.title}
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{industryFeedbackSection.body}</p>

        <IndustryFeedbackCarousel testimonials={industryFeedbackSection.testimonials} />
      </section>

      <section aria-labelledby="faq-title">
        <h2 id="faq-title" className="mb-6 text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqAccordionItems.map((item) => (
            <details key={item.question} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-4">
              <summary className="focus-ring cursor-pointer rounded font-semibold">{item.question}</summary>
              <p className="mt-3 text-[var(--text-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
