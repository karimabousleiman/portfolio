import { useCallback, useState } from "react";

export type Theme = "light" | "dark";
const KEY = "theme";

/** The theme index.html applied before first paint: a saved choice, else the system setting. */
export const currentTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Ease the swap instead of flashing, then drop the transition so it never slows normal interaction.
    root.classList.add("theme-swap");
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove("theme-swap"), 400);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#101418" : "#e2e2df");
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode: the choice just won't persist */
    }
    setTheme(next);
  }, []);
  return { theme, toggle };
}
