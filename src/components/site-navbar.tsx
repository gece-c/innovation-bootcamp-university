import Link from "next/link";
import Image from "next/image";
import { navItems, opportunityPages, resources } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#3f3f3f] bg-[var(--bg)]/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md text-lg font-bold">
          <Image src="/flolabs-logo.svg" alt="FloLabs logo" width={36} height={36} priority />
          <span>Innovation Bootcamp University</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4">
            {navItems.map((item) =>
              item.href === "/opportunities" || item.href === "/resources" ? (
                <li key={item.href} className="group relative">
                  <Link
                    className="focus-ring rounded-md px-2 py-1 text-sm hover:text-[var(--primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                  <div
                    className="pointer-events-none invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
                    role="menu"
                    aria-label={item.href === "/opportunities" ? "Opportunity pages" : "Resource pages"}
                  >
                    <div className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-2 shadow-lg">
                      {item.href === "/opportunities"
                        ? opportunityPages.map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/opportunities/${subItem.slug}`}
                              className="focus-ring block rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]"
                            >
                              {subItem.title}
                            </Link>
                          ))
                        : resources.map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/resources/${subItem.slug}`}
                              className="focus-ring block rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    className="focus-ring rounded-md px-2 py-1 text-sm hover:text-[var(--primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <ButtonLink href="/opportunities/internships" variant="secondary">
                Apply Now
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
