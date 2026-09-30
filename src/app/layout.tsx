import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";
import { Footer } from "@/components/Footer";
import { NoOrphanWords } from "@/components/ui/no-orphan-words";

export const metadata: Metadata = {
  title: {
    default: "Innovation Bootcamp University",
    template: "%s | Innovation Bootcamp University",
  },
  description: "Internship-based tech learning with a three-tier model.",
  icons: {
    icon: "/flolabs-logo.svg",
  },

  // Google Search Console verification
  verification: {
    google: "F5DDKTkbYV5m5cCrVvYlq5e-SO-caM64Ttg_Dy-UQns",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PC5FC73J');
          `}
        </Script>
        {/* End Google Tag Manager */}

        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
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
            })();
          `}
        </Script>
      </head>

      <body
        className="min-w-0 overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PC5FC73J"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <a href="#main-content" className="skip-link focus-ring">
          Skip to main content
        </a>

        <SiteNavbar />

        <main id="main-content" className="container-shell min-w-0 py-10">
          {children}
        </main>

        <Footer />
        <NoOrphanWords />
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import Script from "next/script";
// import "./globals.css";
// import { SiteNavbar } from "@/components/site-navbar";
// import { Footer } from "@/components/Footer";
// import { NoOrphanWords } from "@/components/ui/no-orphan-words";

// export const metadata: Metadata = {
//   title: { default: "Innovation Bootcamp University", template: "%s | Innovation Bootcamp University" },
//   description: "Internship-based tech learning with a three-tier model.",
//   icons: {
//     icon: "/flolabs-logo.svg"
//   }
// };

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <Script id="theme-init" strategy="beforeInteractive">{`(() => {
//   try {
//     const stored = localStorage.getItem("theme");
//     const theme =
//       stored === "light" || stored === "dark"
//         ? stored
//         : window.matchMedia("(prefers-color-scheme: light)").matches
//           ? "light"
//           : "dark";
//     document.documentElement.setAttribute("data-theme", theme);
//   } catch (_) {}
// })();`}</Script>
//       </head>
//       {/* Extensions may inject attrs on <body> before hydrate (e.g. cz-shortcut-listen). */}
//       <body className="min-w-0 overflow-x-hidden" suppressHydrationWarning>
//         <a href="#main-content" className="skip-link focus-ring">
//           Skip to main content
//         </a>
//         <SiteNavbar />
//         <main id="main-content" className="container-shell min-w-0 py-10">
//           {children}
//         </main>
//         <Footer />
//         <NoOrphanWords />
//       </body>
//     </html>
//   );
// }
