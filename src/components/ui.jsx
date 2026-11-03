import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </M>
  );
}

// Each line slides up from behind a mask.
export function Lines({ lines, className = "", delay = 0, as = "h2", play = true }) {
  const Tag = as;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = play && inView;
  return (
    <Tag className={`lines ${className}`} ref={ref}>
      {lines.map((l, i) => (
        <span className="line" key={i}>
          <motion.span
            className="line-in"
            initial={{ y: "108%" }}
            animate={show ? { y: "0%" } : { y: "108%" }}
            transition={{ duration: 1.15, delay: delay + i * 0.09, ease }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Label({ n, children }) {
  return (
    <p className="label">
      <span className="label-n">({n})</span> {children}
    </p>
  );
}

export function CountUp({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? to : 0);
  useEffect(() => {
    if (!inView || reduced) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduced]);
  return <span ref={ref} className="tabular">{prefix}{n}{suffix}</span>;
}

// Pulls toward the pointer on fine-pointer devices.
export function Magnetic({ children, strength = 0.28, className = "" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const onMove = (e) => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.span ref={ref} className={`magnetic ${className}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  );
}

export function Arrow({ dir = "ne" }) {
  const rot = { ne: 0, e: 45, s: 135, n: -45 }[dir];
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function useLagosTime() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" }).format(new Date());
  const [t, setT] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 20_000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function StoreLinks({ play, apple, inverted = false }) {
  return (
    <div className={`store-links ${inverted ? "inv" : ""}`}>
      <a href={apple} target="_blank" rel="noreferrer">
        <span>App Store</span> <Arrow />
      </a>
      <a href={play} target="_blank" rel="noreferrer">
        <span>Google Play</span> <Arrow />
      </a>
    </div>
  );
}
