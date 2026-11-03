import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { projects, archive } from "../data.js";
import { Label, Lines, Reveal, Arrow, ease } from "./ui.jsx";
import { lockScroll, unlockScroll } from "../scroll.js";

export default function Work() {
  const [hover, setHover] = useState(-1);
  const [active, setActive] = useState(null);
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 28, mass: 0.6 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 28, mass: 0.6 });
  const listRef = useRef(null);

  const onMove = (e) => {
    const r = listRef.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <section className="section work" id="work">
      <Label n="03">Selected work</Label>
      <div className="work-head">
        <Lines as="h2" className="section-title" lines={[<>Products in</>, <><em>production.</em></>]} />
        <Reveal as="p" className="work-note">
          Real systems with real users. Select a project for the full story.
        </Reveal>
      </div>

      <div className="index" ref={listRef} onPointerMove={onMove} onPointerLeave={() => setHover(-1)}>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.05}>
            <button
              className={`index-row ${hover !== -1 && hover !== i ? "dim" : ""}`}
              onPointerEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(-1)}
              onClick={() => setActive(i)}
              aria-haspopup="dialog"
            >
              <span className="i-n tabular">{String(i + 1).padStart(2, "0")}</span>
              <span className="i-title">{p.title}</span>
              <span className="i-tag">{p.tag}</span>
              <span className="i-year tabular">{p.year}</span>
              <span className="i-go"><Arrow dir="e" /></span>
            </button>
          </Reveal>
        ))}

        <motion.div className="plate" style={{ x, y }} aria-hidden="true">
          <AnimatePresence>
            {hover !== -1 && (
              <motion.div
                key={hover}
                className="plate-in"
                style={{ background: projects[hover].tone }}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease }}
              >
                <span>{projects[hover].client}</span>
                <b>{projects[hover].metric}</b>
                <small>{projects[hover].metricLabel}</small>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <Archive />

      <AnimatePresence>
        {active !== null && <CaseStudy p={projects[active]} i={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CaseStudy({ p, i, onClose }) {
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    lockScroll();
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const f = panelRef.current.querySelectorAll("button, a[href]");
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { unlockScroll(); window.removeEventListener("keydown", onKey); prev?.focus?.(); };
  }, [onClose]);

  return (
    <motion.div className="case-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="case-scrim" onClick={onClose} />
      <motion.aside
        ref={panelRef}
        className="case"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.8, ease }}
        data-lenis-prevent
      >
        <div className="case-bar">
          <span className="tabular">Project {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          <button ref={closeRef} onClick={onClose} className="case-close">Close <span aria-hidden="true">✕</span></button>
        </div>
        <div className="case-hero" style={{ background: p.tone }}>
          <span>{p.client} · {p.year}</span>
          <b>{p.metric}</b>
          <small>{p.metricLabel}</small>
        </div>
        <p className="label"><span className="label-n">({p.tag})</span></p>
        <h2 id="case-title" className="case-title">{p.title}</h2>
        <p className="case-summary">{p.summary}</p>
        <h3 className="case-h">What I did</h3>
        <ul className="case-list">
          {p.detail.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <h3 className="case-h">Built with</h3>
        <p className="case-stack">{p.stack.join(" / ")}</p>
      </motion.aside>
    </motion.div>
  );
}

function Archive() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const a = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const b = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <div className="archive" ref={ref}>
      <Reveal className="archive-head">
        <h3>Archive</h3>
        <p>Websites and interfaces I've shipped.</p>
      </Reveal>
      <div className="archive-grid">
        {archive.map((s, i) => (
          <motion.figure key={s.title} className={`shot s${i}`} style={{ y: i % 2 ? b : a }}>
            <div className="shot-frame">
              <img src={s.img} alt={`${s.title}, ${s.note}`} loading="lazy" />
            </div>
            <figcaption><span>{s.title}</span><span>{s.note}</span></figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
