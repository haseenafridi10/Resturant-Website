"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleTheme()}
      className="px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition text-sm"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀"}
    </button>
  );
}
