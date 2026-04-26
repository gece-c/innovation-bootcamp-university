import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`(() => {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (_) {}
})();`}</Script>
      </head>
      {/* Extensions may inject attrs on <body> before hydrate (e.g. cz-shortcut-listen). */}
      <body className="min-w-0 overflow-x-hidden" suppressHydrationWarning>
        <a href="#main-content" className="skip-link focus-ring">
          Skip to main content
        </a>
        <SiteNavbar />
        <main id="main-content" className="container-shell min-w-0 py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
