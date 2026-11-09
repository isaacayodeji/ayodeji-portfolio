import { useSyncExternalStore } from "react";

// Theme source of truth is <html data-theme>. index.html sets it before first paint (no flash),
// from the saved choice or the OS preference. Until the visitor picks a theme explicitly, we keep
// following the OS setting live.

const KEY = "theme";
const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");

const read = () => (root.dataset.theme === "dark" ? "dark" : "light");

const saved = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};

// Mirrors --paper per theme (styles.css). Hard-coded because this runs before the stylesheet loads.
const BAR = { light: "#f2eee6", dark: "#151412" };

function apply(theme) {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", BAR[theme]);
}

// origin: {x, y} in viewport px. The new theme is revealed as a circle growing from that point
// (the toggle button), via the View Transitions API; browsers without it just switch instantly.
export function setTheme(theme, origin) {
  try { localStorage.setItem(KEY, theme); } catch { /* storage unavailable: still switch */ }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) return apply(theme);

  const x = origin?.x ?? innerWidth / 2;
  const y = origin?.y ?? 0;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const vt = document.startViewTransition(() => apply(theme));
  vt.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 750, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  }).catch(() => {});
}

export function toggleTheme(e) {
  const b = e?.currentTarget?.getBoundingClientRect?.();
  setTheme(read() === "dark" ? "light" : "dark", b && { x: b.left + b.width / 2, y: b.top + b.height / 2 });
}

media.addEventListener("change", (e) => { if (!saved()) apply(e.matches ? "dark" : "light"); });
apply(read()); // sync meta theme-color on load

function subscribe(cb) {
  const mo = new MutationObserver(cb);
  mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

export const useTheme = () => useSyncExternalStore(subscribe, read, () => "light");
