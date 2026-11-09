import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { about } from "../data.js";
import { Label, Lines, Reveal } from "./ui.jsx";

export default function About() {
  return (
    <section className="section about" id="about">
      <Label n="01">About</Label>
      <div className="about-grid">
        <Portrait />

        <div className="about-copy">
          <Lines
            as="h2"
            className="statement"
            lines={[
              <>I build web and mobile</>,
              <>
                products people <em>trust</em>
              </>,
              <>with their money, time</>,
              <>and customers.</>,
            ]}
          />
          <div className="about-body">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08} as="p">
                {p}
              </Reveal>
            ))}
          </div>
          <ol className="principles">
            {about.principles.map((p, i) => (
              <Reveal as="li" key={p.k} delay={i * 0.06}>
                <span className="p-n tabular">0{i + 1}</span>
                <div>
                  <h3>{p.k}</h3>
                  <p>{p.v}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/*
 * The portrait is a two-sided card. Its 360° turn is driven by scroll position, not time, so it is
 * always in sync (scroll back up and it unwinds). Only transform/opacity are animated, through motion
 * values, so there are no React re-renders and no layout shift: the figure keeps its box the whole time.
 */
function Portrait() {
  const reduced = useReducedMotion();
  const stage = useRef(null);

  // 0 when the portrait's top enters the bottom of the viewport, 1 once its top reaches mid-screen.
  // It must finish well before the portrait's sticky/anchor position (≈110–170px from the top):
  // ending any later left the card stuck edge-on when the visitor arrived via the nav link.
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ["start end", "start 0.5"],
  });
  // A light spring smooths wheel "steps" without letting the card lag noticeably behind the scroll.
  const p = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 32,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const spinY = useTransform(p, [0, 1], [-360, 0]);
  const spinX = useTransform(p, [0, 0.55, 1], [22, -6, 0]);
  const rotateZ = useTransform(p, [0, 1], [-9, 0]);
  const scale = useTransform(p, [0, 0.7, 1], [0.7, 1.03, 1]);
  const y = useTransform(p, [0, 1], ["18%", "0%"]);
  const opacity = useTransform(p, [0, 0.12], [0, 1]);
  // A sheet of light sweeps across the face as it turns, then rests off-card.
  const glareX = useTransform(p, [0, 1], ["-60%", "130%"]);

  // Hover tilt, layered on top of the scroll rotation once the card has landed.
  const tx = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  });
  const ty = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  });
  const rotateY = useTransform([spinY, tx], ([a, b]) => a + b);
  const rotateX = useTransform([spinX, ty], ([a, b]) => a + b);
  const hoverGlare = useTransform(tx, [-10, 10], ["10%", "70%"]);

  const onMove = (e) => {
    if (
      reduced ||
      !window.matchMedia("(pointer: fine)").matches ||
      p.get() < 0.98
    )
      return;
    const r = e.currentTarget.getBoundingClientRect();
    tx.set(((e.clientX - r.left) / r.width - 0.5) * 20);
    ty.set(-((e.clientY - r.top) / r.height - 0.5) * 16);
  };
  const onLeave = () => {
    tx.set(0);
    ty.set(0);
  };

  const motionStyle = reduced
    ? undefined
    : { rotateX, rotateY, rotateZ, scale, y, opacity };

  return (
    <figure
      className="portrait"
      ref={stage}
      data-cursor="Hello"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="portrait-stage">
        <motion.div className="portrait-card" style={motionStyle}>
          <div className="portrait-face portrait-frame">
            {/* Plain, eagerly loaded image with no transform of its own. GPU-composited browsers can
                skip painting a transformed child inside a backface-hidden 3D face, and lazy-loading
                can stall inside a rotating parent; either one left only the brown frame showing. */}
            <img
              src="./assets/dp.jpeg"
              alt="Portrait of Ayodeji Olu-Ewulo"
              decoding="async"
              width="575"
              height="699"
            />
            {!reduced && (
              <motion.span
                className="portrait-glare"
                style={{ x: glareX, left: hoverGlare }}
                aria-hidden="true"
              />
            )}
          </div>
          <div className="portrait-face portrait-back" aria-hidden="true">
            <span className="pb-top">
              <span>Ayodeji</span>
              <span>No. 001</span>
            </span>
            <b className="pb-mark">
              A<em>O</em>
            </b>
            <span className="pb-foot">
              <span>Frontend · Mobile</span>
              <span>Lagos, NG</span>
            </span>
          </div>
        </motion.div>
      </div>
      <figcaption>
        <span>Ayodeji Olu-Ewulo</span>
        <span>Lagos, NG</span>
      </figcaption>
    </figure>
  );
}
