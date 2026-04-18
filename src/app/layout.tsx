import type { Metadata } from "next";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Innovation Bootcamp University", template: "%s | Innovation Bootcamp University" },
  description: "Internship-based tech learning with a three-tier model.",
  icons: {
    icon: "/flolabs-logo.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link focus-ring">
          Skip to main content
        </a>
        <SiteNavbar />
        <main id="main-content" className="container-shell py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
