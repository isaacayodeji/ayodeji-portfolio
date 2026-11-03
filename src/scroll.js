import Lenis from "lenis";

let lenis = null;

export function startSmoothScroll() {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.95 });
  let raf = 0;
  const loop = (time) => { lenis?.raf(time); raf = requestAnimationFrame(loop); };
  raf = requestAnimationFrame(loop);
  return () => { cancelAnimationFrame(raf); lenis?.destroy(); lenis = null; };
}

export function scrollToTarget(target, immediate = false) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: target === "#top" ? 0 : -24, duration: 1.4, immediate });
  else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
}

export const lockScroll = () => { lenis?.stop(); document.documentElement.style.overflow = "hidden"; };
export const unlockScroll = () => { document.documentElement.style.overflow = ""; lenis?.start(); };
