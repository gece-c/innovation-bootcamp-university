"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, type ReactNode } from "react";
import {
  careerOpportunitiesSection,
  companyLinks,
  navItems,
  opportunityPages,
  resources,
  whyChoose
} from "@/content/site-content";
import { FaYoutube } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const MUTED = "#8A8A8A";

type FooterNavLink = { label: string; href: string; external?: boolean };

const navigationLinks: FooterNavLink[] = [
  { label: "Home", href: "/" },
  { label: whyChoose.title, href: "/#why-choose-title" },
  { label: "Project Showcase", href: "/#project-showcase-title" },
  { label: careerOpportunitiesSection.title, href: "/#career-opportunities-title" },
  { label: "FAQ", href: "/#faq-title" },
  ...navItems.map((item) => ({ label: item.label, href: item.href })),
  { label: "Opportunities", href: "/opportunities" },
  ...opportunityPages.map((page) => ({
    label: page.title,
    href: `/opportunities/${page.slug}`
  })),
  { label: "Internship Listings", href: "/opportunities/internships-data" },
  ...resources.map((resource) => ({
    label: resource.title,
    href: `/resources/${resource.slug}`
  }))
];

const footerCompanyLinks: FooterNavLink[] = [
  ...companyLinks.filter((item) => item.href !== "/company"),
  {
    label: "Careers",
    href: "https://hephaestus.international/internships",
    external: true
  },
  {
    label: "Merch",
    href: "https://flolabsrd.notion.site/merch-background",
    external: true
  }
];

const checkMoreColumns: FooterNavLink[][] = [
  [
    { label: "CAIPO", href: "https://www.caipo.ai/", external: true },
    { label: "MoodChanger", href: "https://moodchanger.ai/", external: true },
    // TODO: set URL when RoboCollective destination is confirmed
    { label: "RoboCollective", href: "#" },
    {
      label: "Athletic Performance",
      href: "https://www.athleticperformanceintelligence.com/#cta",
      external: true
    }
  ],
  [
    { label: "FloBrain", href: "https://flobrain.vercel.app/", external: true },
    { label: "FloTravel", href: "https://www.flomadtravel.com/", external: true },
    {
      label: "Space Ventures Institute",
      href: "https://www.spaceventuresinstitute.com/",
      external: true
    },
    {
      label: "Connecting the dots",
      href: "https://www.youtube.com/playlist?list=PLwvFs7_Vcdwvn4eiECTY8tAB-M6cB5_B9",
      external: true
    }
  ],
  [
    { label: "Hephaestus International", href: "https://hephaestus.international/", external: true },
    { label: "FloStudio", href: "https://www.flostudios.ai/", external: true }
  ]
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white">{children}</h3>
  );
}

function FooterLink({
  href,
  children,
  external
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "focus-ring inline-block text-[15px] text-white underline underline-offset-2 transition-colors hover:text-[#1B9FD8]";

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function FooterLinkList({
  links
}: {
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <ul className="mt-4 flex flex-col gap-3.5">
      {links.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <FooterLink href={item.href} external={item.external}>
            {item.label}
          </FooterLink>
        </li>
      ))}
    </ul>
  );
}

function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export function Footer() {
  return (
    <footer className="mt-16 w-full bg-[#0B0B0B] py-16 text-white lg:py-20">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-x-16 xl:gap-x-20">
          {/* Left brand column */}
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <Image
                src="/flolabs-logo.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(749%) hue-rotate(163deg) brightness(93%) contrast(92%)"
                }}
                aria-hidden
              />
              <span className="text-base font-bold leading-tight tracking-tight sm:text-lg">
                Innovation Bootcamp University
              </span>
              <span className="text-[13px]" style={{ color: MUTED }}>
                | a FloLabs Project
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div>
                <FooterHeading>Newsletter</FooterHeading>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  Receive the newest Innovation Bootcamp University updates at:
                </p>
              </div>
              <form
                className="relative w-full max-w-[340px] border border-white/20"
                onSubmit={handleNewsletterSubmit}
                action="#"
                noValidate
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email..."
                  className="focus-ring min-h-11 w-full border-0 bg-transparent py-3 pl-4 pr-12 text-[15px] text-white outline-none placeholder:text-[#8A8A8A]"
                />
                <button
                  type="submit"
                  className="focus-ring absolute right-0 top-0 flex h-11 w-11 items-center justify-center bg-[#1A1A1A] text-white transition-colors hover:text-[#1B9FD8]"
                  aria-label="Subscribe to newsletter"
                >
                  <HiOutlinePaperAirplane className="h-5 w-5 stroke-[1.5]" aria-hidden />
                </button>
              </form>
            </div>

            <div className="mt-10">
              <FooterHeading>Social media</FooterHeading>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@FloLabsInnovation"
                  className="focus-ring rounded text-white transition-colors hover:text-[#1B9FD8]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-6 w-6" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          {/* Right link area */}
          <div className="flex min-w-0 flex-col gap-10 lg:gap-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
              <div>
                <FooterHeading>Navigation</FooterHeading>
                <FooterLinkList links={navigationLinks} />
              </div>
              <div>
                <FooterHeading>Company</FooterHeading>
                <FooterLinkList links={footerCompanyLinks} />
              </div>
            </div>

            <div>
              <FooterHeading>Check more</FooterHeading>
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {checkMoreColumns.map((column, columnIndex) => (
                  <ul key={columnIndex} className="flex flex-col gap-3.5">
                    {column.map((item) => (
                      <li key={item.label}>
                        <FooterLink href={item.href} external={item.external}>
                          {item.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 border-t border-white/[0.12] pt-8 lg:mt-16"
          role="presentation"
        >
          <p
            className="text-center text-[13px] tracking-[0.15em]"
            style={{ color: MUTED }}
          >
            Live long and prosper.
          </p>
        </div>
      </div>
    </footer>
  );
}
