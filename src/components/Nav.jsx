import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, profile } from "../data.js";
import { ease, useLagosTime, Magnetic } from "./ui.jsx";
import { lockScroll, unlockScroll } from "../scroll.js";
import { useTheme, toggleTheme } from "../theme.js";

function ThemeToggle() {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <Magnetic strength={0.35}>
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${next} mode`} title={`Switch to ${next} mode`}>
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.2 14.6A8.5 8.5 0 0 1 9.4 3.8a8.5 8.5 0 1 0 10.8 10.8z" />
        </svg>
      )}
    </button>
    </Magnetic>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const time = useLagosTime();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 320 && y > last + 2);
      if (y < last - 2) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { unlockScroll(); window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <header className={`nav ${solid && !open ? "solid" : ""} ${hidden && !open ? "hide" : ""} ${open ? "menu-open" : ""}`}>
        <a href="#top" className="wordmark" aria-label="Ayodeji Olu-Ewulo, back to top">
          Ayodeji <em>Olu-Ewulo</em>
        </a>
        <p className="nav-meta" aria-label={`Local time in Lagos ${time}`}>
          <i className="live" /> Lagos {time} · Open to remote roles
        </p>
        <div className="nav-end">
          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? "on" : ""}>
                {n.label}
              </a>
            ))}
            <Magnetic strength={0.3}><a href={profile.cv} download className="nav-cv">CV ↓</a></Magnetic>
          </nav>
          <ThemeToggle />
          <button className="menu-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <nav aria-label="Mobile">
              {nav.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease }}
                >
                  <span>{n.n}</span>{n.label}
                </motion.a>
              ))}
            </nav>
            <div className="menu-foot">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.cv} download>Download CV</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
