import type { IconType } from "react-icons";
import { FaAward, FaBriefcase, FaHandshake, FaPuzzlePiece, FaTools, FaUsers } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

type WhyChoosePoint = {
  title: string;
  description: string;
  icon: "briefcase" | "handshake" | "tools" | "users" | "award" | "puzzle";
};

type WhyChooseSectionData = {
  badge: string;
  title: string;
  body: string;
  points: WhyChoosePoint[];
};

type WhyChooseSectionProps = {
  data: WhyChooseSectionData;
};

const descriptionHighlightByTitle: Record<string, string[]> = {
  "Learn with Real Internship": ["live assignments", "side-by-side collaboration", "projects that actually matter"],
  "Cooperative Education Model": ["learning to earning", "professional standards", "paid contributor"],
  "Hands-on Projects": ["execution over theory", "real-world deliverables", "tangible proof"],
  "Global Community": ["international network", "professional circle", "diverse community"],
  "Industry-Recognized Skills": ["high demand", "tools and workflows", "top companies"],
  "Interdisciplinary Collaboration": ["different fields", "design, tech, and business teams", "complex problems"]
};

const whyChooseIconByKey: Record<WhyChoosePoint["icon"], IconType> = {
  briefcase: FaBriefcase,
  handshake: FaHandshake,
  tools: FaTools,
  users: FaUsers,
  award: FaAward,
  puzzle: FaPuzzlePiece
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderDescriptionWithHighlights(title: string, description: string) {
  const keywords = descriptionHighlightByTitle[title];
  if (!keywords?.length) return description;

  const pattern = new RegExp(`(${keywords.map(escapeRegExp).join("|")})`, "gi");
  const segments = description.split(pattern);

  return segments.map((segment, index) => {
    const isKeyword = keywords.some((keyword) => keyword.toLowerCase() === segment.toLowerCase());
    if (!isKeyword) return <span key={`${title}-text-${index}`}>{segment}</span>;
    return (
      <strong key={`${title}-keyword-${index}`} className="font-semibold text-[var(--text)]">
        {segment}
      </strong>
    );
  });
}

export function WhyChooseSection({ data }: WhyChooseSectionProps) {
  return (
    <section
      aria-labelledby="why-choose-title"
      className="why-choose-section relative isolate my-[10rem] ml-[calc(50%-50vw)] w-screen max-w-[100vw] overflow-hidden"
    >
      <div className="why-choose-bg-pattern pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[88rem]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="why-choose-badge">{data.badge}</p>
          <h2 id="why-choose-title" className="why-choose-title mt-8">
            {data.title}
          </h2>
          <p className="why-choose-subtitle mt-9">{data.body}</p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2 lg:gap-x-16 lg:grid-cols-3">
          {data.points.map((point) => {
            const Icon = whyChooseIconByKey[point.icon] ?? FiCircle;

            return (
              <article key={point.title} className="why-choose-item">
                <div className="why-choose-item-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <h3 className="why-choose-item-title">{point.title}</h3>
                  <p className="why-choose-item-description">
                    {renderDescriptionWithHighlights(point.title, point.description)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
