import Link from "next/link";
import { companyLinks, legalLinks, navItems, opportunityPages, resources } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[#3f3f3f] bg-[var(--surface)]">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-5">
        <section>
          <h2 className="text-lg font-semibold">Innovation Bootcamp University</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            From paying to earning tech skills through cooperative education.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">Programs</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {navItems
              .filter((item) => item.href === "/programs")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded hover:text-[var(--primary)]">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">Resources</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {resources.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/resources/${item.slug}`}
                  className="focus-ring rounded hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">Opportunities</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {opportunityPages.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/opportunities/${item.slug}`}
                  className="focus-ring rounded hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">Company</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-4 font-semibold">Legal</h2>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
