"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/lib/store";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const setTheme = useThemeStore((s) => s.setTheme);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setTheme(isDark);
  }, [setTheme]);

  return <>{children}</>;
}
