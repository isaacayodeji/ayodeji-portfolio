import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/*
 * A soft ring that trails the native pointer (which stays visible for accessibility) and grows into a
 * label over anything marked with data-cursor="Label". mix-blend-mode: difference keeps it legible on
 * both the light page and the dark bands. Fine pointers only; disabled for reduced motion.
 */
export default function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 520, damping: 40, mass: 0.5 });
  const y = useSpring(my, { stiffness: 520, damping: 40, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches && !reduced);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      mx.set(e.clientX); my.set(e.clientY); setVisible(true);
      const t = e.target.closest?.("[data-cursor]");
      setLabel(t ? t.getAttribute("data-cursor") : "");
    };
    const leave = () => setVisible(false);
    const press = () => setDown(true);
    const release = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
    };
  }, [enabled, mx, my]);

  if (!enabled) return null;
  const size = label ? 84 : 28;
  return (
    <motion.div className="cursor" style={{ x, y }} aria-hidden="true">
      <motion.div
        className={`cursor-ring ${label ? "has-label" : ""}`}
        animate={{ width: size, height: size, opacity: visible ? 1 : 0, scale: down ? 0.82 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        {label && <span>{label}</span>}
      </motion.div>
    </motion.div>
  );
}
