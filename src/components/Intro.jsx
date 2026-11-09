import { useEffect, useState } from "react";
import { animate } from "framer-motion";

// The counter is decoration. The overlay's exit is pure CSS (see .intro in styles.css) and the
// hand-off to the page runs on a plain timer, so the site can never get stuck behind the intro.
const COUNT_MS = 1100;
const EXIT_MS = 900;

export default function Intro({ onDone }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const c = animate(0, 100, {
      duration: COUNT_MS / 1000,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    const t = setTimeout(onDone, COUNT_MS + EXIT_MS);
    return () => { c.stop(); clearTimeout(t); };
  }, [onDone]);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-row">
        <span>Ayodeji Olu-Ewulo</span>
        <span>Portfolio · {new Date().getFullYear()}</span>
      </div>
      <p className="intro-count tabular">{String(n).padStart(3, "0")}</p>
      <div className="intro-bar"><i style={{ transform: `scaleX(${n / 100})` }} /></div>
    </div>
  );
}
