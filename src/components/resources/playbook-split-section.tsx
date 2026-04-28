import type { IconType } from "react-icons";
import { FaBookOpen, FaCertificate, FaComments, FaFileSignature, FaLightbulb, FaUsers } from "react-icons/fa";
import { ScrollReveal } from "@/components/editorial/scroll-reveal";

type PlaybookSplitSectionProps = {
  title: string;
  items: string[];
  sectionId: string;
  titleSide?: "left" | "right";
};

type SplitItem = {
  title: string;
  description: string;
  icon: IconType;
};

function parseItem(item: string): { title: string; description: string } {
  const [rawTitle, ...rest] = item.split(":");
  const title = rawTitle.trim();
  const description = rest.join(":").trim();

  if (!description) {
    return { title, description: item.trim() };
  }

  return { title, description };
}

function getItemIcon(index: number, title: string): IconType {
  const normalized = title.toLowerCase();

  if (normalized.includes("confidentiality") || normalized.includes("nda")) return FaFileSignature;
  if (normalized.includes("masterclass") || normalized.includes("learning")) return FaBookOpen;
  if (normalized.includes("mentorship") || normalized.includes("community")) return FaUsers;
  if (normalized.includes("feedback") || normalized.includes("peer")) return FaComments;
  if (normalized.includes("certification") || normalized.includes("verification")) return FaCertificate;
  if (normalized.includes("brainwriting") || normalized.includes("guidance")) return FaLightbulb;

  const fallbackIcons: IconType[] = [FaBookOpen, FaUsers, FaLightbulb];
  return fallbackIcons[index % fallbackIcons.length];
}

export function PlaybookSplitSection({ title, items, sectionId, titleSide = "left" }: PlaybookSplitSectionProps) {
  const parsedItems: SplitItem[] = items.map((item, index) => {
    const parsed = parseItem(item);
    return {
      ...parsed,
      icon: getItemIcon(index, parsed.title)
    };
  });

  const isTitleLeft = titleSide === "left";
  const desktopGridColumnsClass = isTitleLeft
    ? "lg:grid-cols-[minmax(190px,0.8fr)_minmax(0,2fr)]"
    : "lg:grid-cols-[minmax(0,2fr)_minmax(190px,0.8fr)]";

  return (
    <section aria-labelledby={sectionId} className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className={`grid grid-cols-1 gap-8 lg:items-stretch lg:gap-10 ${desktopGridColumnsClass}`}>
        <ScrollReveal className={`flex items-center justify-center lg:min-h-full ${isTitleLeft ? "" : "lg:order-2"}`}>
          <h2
            id={sectionId}
            className='text-center font-["Inter",Segoe_UI,Roboto,Arial,sans-serif] text-[clamp(1.8rem,2vw+1rem,3rem)] leading-tight font-bold text-[var(--text)]'
          >
            {title}
          </h2>
        </ScrollReveal>

        <div className={`${isTitleLeft ? "" : "lg:order-1"} grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}>
          {parsedItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={`${item.title}-${index}`} delayMs={index * 80} className="h-full">
                <article className="glass-card-soft h-full rounded-2xl border border-[color:color-mix(in_srgb,var(--text-muted)_26%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_72%,transparent)] p-5 backdrop-blur-xl">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[color:color-mix(in_srgb,var(--primary)_45%,transparent)] bg-[color:color-mix(in_srgb,var(--primary)_18%,transparent)] text-[var(--primary)]"
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-[1.08rem] font-bold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
