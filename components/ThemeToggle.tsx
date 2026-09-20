"use client";

import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./SketchSvg";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const qTheme = params.get("theme") as "light" | "dark" | null;
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme =
      qTheme === "dark" || qTheme === "light"
        ? qTheme
        : stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const isDark = mounted ? theme === "dark" : false;
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        {isDark ? (
          <SunIcon className="theme-toggle__icon theme-toggle__icon--sun" />
        ) : (
          <MoonIcon className="theme-toggle__icon theme-toggle__icon--moon" />
        )}
      </span>
    </button>
  );
}
