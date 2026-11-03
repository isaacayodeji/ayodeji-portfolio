import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { eventflutter, profile } from "../data.js";
import { Lines, Reveal, StoreLinks } from "./ui.jsx";

export default function Eventflutter() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });

  const onMove = (e) => {
    if (reduced) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  };

  return (
    <section className="ef" id="eventflutter" ref={ref} onPointerMove={onMove} onPointerLeave={() => { rx.set(0); ry.set(0); }}>
      <div className="ef-copy">
        <p className="label inv"><span className="label-n">(Now)</span> Shipping on both stores</p>
        <Lines as="h2" className="ef-title" lines={[<>Event<em>flutter</em></>]} />
        <Reveal as="p" className="ef-lead">
          A platform for everything events: discovering, booking, organising and attending. I build its React Native (Expo)
          app, and work across the web monorepo, admin console and design system behind it.
        </Reveal>
        <Reveal><StoreLinks play={profile.playStore} apple={profile.appStore} inverted /></Reveal>
        <dl className="ef-facts">
          {eventflutter.facts.map((f, i) => (
            <Reveal key={f.l} delay={i * 0.06}>
              <dt>{f.l}</dt>
              <dd>{f.v}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <motion.div className="ef-device" style={{ y: lift, rotateX: rx, rotateY: ry }} aria-hidden="true">
        <div className="device">
          <div className="device-screen">
            <div className="ds-top"><span>Discover</span><span className="ds-dot" /></div>
            <p className="ds-h">This weekend<br /><em>in Lagos</em></p>
            <div className="ds-card a"><span>Live · Sat</span><b>Afrobeats Night</b><i>Admit one</i></div>
            <div className="ds-card b"><span>Sun · 4pm</span><b>Design Meetup</b><i>RSVP</i></div>
            <div className="ds-tab"><span /><span /><span /><span /></div>
          </div>
        </div>
        <div className="ticket-float">
          <span>No. 001</span>
          <b>Admit one</b>
        </div>
      </motion.div>
    </section>
  );
}
