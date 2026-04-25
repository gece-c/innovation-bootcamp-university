"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem("theme", theme);
}

function getPreferredTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function handleToggle() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="theme-toggle-btn focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border text-[var(--text)] transition hover:text-[var(--primary)]"
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M21 12.79A9 9 0 0 1 11.21 3 7.5 7.5 0 1 0 21 12.79Z" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 17.5A5.5 5.5 0 1 1 12 6.5a5.5 5.5 0 0 1 0 11ZM11 1h2v3h-2V1Zm0 19h2v3h-2v-3ZM1 11h3v2H1v-2Zm19 0h3v2h-3v-2ZM4.22 5.64l1.41-1.41 2.12 2.12-1.41 1.41-2.12-2.12Zm12.03 12.03 1.41-1.41 2.12 2.12-1.41 1.41-2.12-2.12ZM16.37 6.34l2.12-2.12 1.41 1.41-2.12 2.12-1.41-1.41ZM4.22 18.36l2.12-2.12 1.41 1.41-2.12 2.12-1.41-1.41Z" />
        </svg>
      )}
    </button>
  );
}
