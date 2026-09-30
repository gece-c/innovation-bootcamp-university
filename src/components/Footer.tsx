"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, type ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRedditAlien, FaTiktok, FaYoutube } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

type FooterNavLink = { label: string; href: string; external?: boolean };

const navigationLinks: FooterNavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/company" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Internships", href: "/internships" },
  { label: "Contact", href: "/company/contact" }
];

const footerCompanyLinks: FooterNavLink[] = [
  { label: "Careers", href: "/internships" },
  { label: "Contact Us", href: "/company/contact" },
  { label: "Merch", href: "https://flolabsrd.notion.site/merch-background", external: true }
];

const projectLinks: FooterNavLink[] = [
  {
    label: "Athletic Performance Intelligence",
    href: "https://www.athleticperformanceintelligence.com/",
    external: true
  },
  { label: "CAIPO", href: "https://www.caipo.ai/", external: true },
  {
    label: "Connecting the Dots",
    href: "https://www.youtube.com/@flolabsinnovation",
    external: true
  },
  { label: "Cosmos Intelligence", href: "http://cosmosintelligence.org/", external: true },
  { label: "Flo Travel", href: "https://www.flomadtravel.com/", external: true },
  { label: "FloBrain", href: "https://www.flobrain.ai/", external: true },
  { label: "FloLabs Innovations Group", href: "https://www.flolabsinnovations.com/", external: true },
  { label: "FloLabs International", href: "https://www.flolabs.international/", external: true },
  { label: "FloStudios", href: "https://www.flostudios.ai/", external: true },
  { label: "Hephaestus International", href: "https://hephaestus.international/", external: true },
  { label: "Innovation Bootcamp University", href: "https://www.bootcampuniversity.org/", external: true },
  { label: "MoodChanger", href: "https://www.moodchanger.ai/", external: true },
  { label: "MoodChanger for Pets", href: "https://www.moodchanger.ai/", external: true },
  {
    label: "Legal & Ethics Ventures Institute",
    href: "https://www.legalethicsventuresinstitute.com/",
    external: true
  },
  { label: "RoboCollective", href: "https://www.robocollective.ai/", external: true },
  {
    label: "Space Ventures Institute",
    href: "https://www.spaceventuresinstitute.com/",
    external: true
  },
  { label: "TARRL", href: "https://tarrl.org/", external: true }
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@flolabsinnovation",
    icon: FaYoutube
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flolabs-innovation/",
    icon: FaLinkedinIn
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Flo-Labs-RD/61572285432918/",
    icon: FaFacebookF,
    className: "site-footer-social--facebook"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/flolabsinnovations/",
    icon: FaInstagram
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@flomadlabs",
    icon: FaTiktok
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/FloLabs_Innovations/",
    icon: FaRedditAlien
  }
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="site-footer-heading text-[15px] font-bold uppercase tracking-[0.28em]">{children}</h3>
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
    "site-footer-link focus-ring inline-block rounded text-[13px] font-medium leading-relaxed";

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

function FooterLinkList({ links }: { links: readonly FooterNavLink[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
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
    <footer className="site-footer mt-16 w-full py-14 lg:py-16">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,1.3fr)_0.65fr_1fr_0.65fr] lg:gap-x-14 xl:gap-x-20">
          {/* Left brand column */}
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center gap-2.5">
              <Image
                src="/flolabs-logo.svg"
                alt=""
                width={34}
                height={34}
                className="site-footer-logo h-8 w-8 shrink-0"
                aria-hidden
              />
              <span className="site-footer-brand text-[18px] font-bold leading-tight tracking-tight sm:text-[20px]">
                Innovation Bootcamp University
              </span>
              <span className="site-footer-muted text-[12px]">
                | by FloLabs Innovations Group
              </span>
            </div>
            <p className="site-footer-muted mt-5 max-w-[360px] text-[13px] leading-relaxed">
              A remote-first learning community where students build career-ready skills through
              real internships, interdisciplinary projects, and a path from learning to earning.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div>
                <FooterHeading>Newsletter</FooterHeading>
                <p className="site-footer-muted mt-3 text-[13px] leading-relaxed">
                  Receive the newest updates at:
                </p>
              </div>
              <form
                className="site-footer-form relative w-full max-w-[345px] border"
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
                  className="site-footer-input focus-ring min-h-10 w-full border-0 bg-transparent py-2.5 pl-3 pr-11 text-[13px] outline-none"
                />
                <button
                  type="submit"
                  className="site-footer-submit focus-ring absolute right-0 top-0 flex h-10 w-10 items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <HiOutlinePaperAirplane className="h-4 w-4 stroke-[1.5]" aria-hidden />
                </button>
              </form>
            </div>

            <div className="mt-10">
              <FooterHeading>Social media</FooterHeading>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon, className }) => (
                  <a
                    key={label}
                    href={href}
                    className={`site-footer-social focus-ring rounded${className ? ` ${className}` : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <FooterHeading>Navigation</FooterHeading>
            <FooterLinkList links={navigationLinks} />
          </div>

          <div>
            <FooterHeading>Projects</FooterHeading>
            <FooterLinkList links={projectLinks} />
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <FooterLinkList links={footerCompanyLinks} />
          </div>
        </div>

        <div
          className="site-footer-divider mt-14 border-t pt-7 lg:mt-16"
          role="presentation"
        >
          <p className="site-footer-muted text-center text-[12px] tracking-[0.08em]">
            Live Long and Prosper.
          </p>
        </div>
      </div>
    </footer>
  );
}
