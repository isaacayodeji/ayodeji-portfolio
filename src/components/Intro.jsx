import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { ease } from "./ui.jsx";

export default function Intro({ onDone }) {
  const [n, setN] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const c = animate(0, 100, {
      duration: 1.1,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setLeaving(true),
    });
    return () => c.stop();
  }, []);

  return (
    <motion.div
      className="intro"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={leaving ? { clipPath: "inset(0 0 100% 0)" } : {}}
      transition={{ duration: 0.9, ease }}
      onAnimationComplete={() => leaving && onDone()}
    >
      <div className="intro-row">
        <span>Ayodeji Olu-Ewulo</span>
        <span>Portfolio · {new Date().getFullYear()}</span>
      </div>
      <p className="intro-count tabular">{String(n).padStart(3, "0")}</p>
      <div className="intro-bar"><i style={{ transform: `scaleX(${n / 100})` }} /></div>
    </motion.div>
  );
}
