import type { IconType } from "react-icons";
import { FaCheckCircle, FaRegClock, FaStream } from "react-icons/fa";
import { ScrollReveal } from "@/components/editorial/scroll-reveal";

type DailyWorkflowTimelineProps = {
  title: string;
  items: string[];
};

type WorkflowNode = {
  title: string;
  description: string;
  icon: IconType;
};

function parseWorkflowItem(item: string): { title: string; description: string } {
  const [rawTitle, ...rest] = item.split(":");
  const title = rawTitle.trim();
  const description = rest.join(":").trim();

  if (!description) {
    return { title, description: item.trim() };
  }

  return { title, description };
}

function getWorkflowIcon(index: number, title: string): IconType {
  const normalized = title.toLowerCase();

  if (normalized.includes("timer")) return FaRegClock;
  if (normalized.includes("asynchronous")) return FaStream;
  if (normalized.includes("done")) return FaCheckCircle;

  const fallbackIcons: IconType[] = [FaRegClock, FaStream, FaCheckCircle];
  return fallbackIcons[index % fallbackIcons.length];
}

export function DailyWorkflowTimeline({ title, items }: DailyWorkflowTimelineProps) {
  const nodes: WorkflowNode[] = items.map((item, index) => {
    const parsed = parseWorkflowItem(item);

    return {
      ...parsed,
      icon: getWorkflowIcon(index, parsed.title)
    };
  });

  return (
    <section aria-labelledby="daily-workflow-title" className="space-y-8">
      <ScrollReveal>
        <div className="text-center">
          <h2 id="daily-workflow-title" className="page-title text-[clamp(1.6rem,1.3vw+1.2rem,2.6rem)]">
            {title}
          </h2>
        </div>
      </ScrollReveal>

      <ol className="relative space-y-6 md:space-y-8">
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-5 w-px bg-[color:color-mix(in_srgb,var(--text-muted)_28%,transparent)] md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />

        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isEven = index % 2 === 0;

          return (
            <li key={`${node.title}-${index}`} className="relative">
              <ScrollReveal delayMs={index * 80} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
              <div className={`hidden md:block ${isEven ? "" : "md:order-2"}`}>
                <article className="glass-card-soft rounded-2xl border border-[color:color-mix(in_srgb,var(--text-muted)_26%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_72%,transparent)] p-6 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-[var(--primary)]">{node.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{node.description}</p>
                </article>
              </div>

              <div className={`md:hidden pl-20`}>
                <article className="glass-card-soft rounded-2xl border border-[color:color-mix(in_srgb,var(--text-muted)_26%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_72%,transparent)] p-5 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-[var(--primary)]">{node.title}</h3>
                  <p className="mt-2 leading-relaxed text-[var(--text-muted)]">{node.description}</p>
                </article>
              </div>

              <div
                className={`hidden md:block ${isEven ? "md:order-2" : ""}`}
                aria-hidden="true"
              />

              <span
                className="absolute top-5 left-5 z-[2] inline-flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--primary)_55%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_90%,transparent)] text-[var(--primary)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary)_22%,transparent),0_10px_24px_color-mix(in_srgb,var(--primary)_18%,transparent)] md:left-1/2"
                aria-hidden="true"
              >
                <Icon className="text-sm" />
              </span>

              <span
                className="absolute top-[2.1rem] left-5 z-[1] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--primary)] md:left-1/2"
                aria-hidden="true"
              />
              </ScrollReveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
