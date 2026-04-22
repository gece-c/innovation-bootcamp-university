import Link from "next/link";
import Image from "next/image";
import { navItems, opportunityPages, resources } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteNavbar() {
  return (
    <header className="navbar-glass-cyan sticky top-0 z-50">
      <div className="container-shell py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="focus-ring flex min-w-0 items-center gap-2.5 rounded-md text-base font-bold sm:gap-3 sm:text-lg">
            <Image src="/flolabs-logo.svg" alt="FloLabs logo" width={36} height={36} priority />
            <span className="truncate">Innovation Bootcamp University</span>
          </Link>
          <nav aria-label="Main navigation" className="hidden md:block">
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
                      <div className="navbar-menu-glass-cyan rounded-xl p-2">
                        {item.href === "/opportunities"
                          ? opportunityPages.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/opportunities/${subItem.slug}`}
                                className="focus-ring block rounded-lg px-3 py-2 text-sm text-[var(--text)]/90 hover:bg-white/10 hover:text-[var(--text)]"
                              >
                                {subItem.title}
                              </Link>
                            ))
                          : resources.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/resources/${subItem.slug}`}
                                className="focus-ring block rounded-lg px-3 py-2 text-sm text-[var(--text)]/90 hover:bg-white/10 hover:text-[var(--text)]"
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
          <div className="md:hidden">
            <details className="group relative">
              <summary className="focus-ring flex cursor-pointer list-none items-center rounded-md border border-white/15 bg-black/25 px-3 py-2 text-sm font-semibold text-[var(--text)] marker:content-none">
                Menu
              </summary>
              <div className="navbar-menu-glass-cyan absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(88vw,20rem)] rounded-xl p-3">
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-1">
                    {navItems.map((item) =>
                      item.href === "/opportunities" ? (
                        <li key={item.href} className="space-y-1 rounded-lg border border-white/15 bg-white/[0.02] p-2">
                          <Link className="focus-ring block rounded-md px-2 py-1.5 text-sm font-semibold" href={item.href}>
                            {item.label}
                          </Link>
                          {opportunityPages.map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/opportunities/${subItem.slug}`}
                              className="focus-ring block rounded-md px-2 py-1.5 text-sm text-[var(--text)]/90 hover:bg-white/10 hover:text-[var(--text)]"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </li>
                      ) : item.href === "/resources" ? (
                        <li key={item.href} className="space-y-1 rounded-lg border border-white/15 bg-white/[0.02] p-2">
                          <Link className="focus-ring block rounded-md px-2 py-1.5 text-sm font-semibold" href={item.href}>
                            {item.label}
                          </Link>
                          {resources.map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/resources/${subItem.slug}`}
                              className="focus-ring block rounded-md px-2 py-1.5 text-sm text-[var(--text)]/90 hover:bg-white/10 hover:text-[var(--text)]"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </li>
                      ) : (
                        <li key={item.href}>
                          <Link className="focus-ring block rounded-md px-2 py-2 text-sm" href={item.href}>
                            {item.label}
                          </Link>
                        </li>
                      )
                    )}
                    <li className="pt-2">
                      <div className="[&_a]:w-full">
                        <ButtonLink href="/opportunities/internships" variant="secondary">
                          Apply Now
                        </ButtonLink>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
