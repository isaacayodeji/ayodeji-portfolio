import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { profile, metrics, ticker } from "../data.js";
import { Lines, CountUp, Magnetic, Arrow, ease } from "./ui.jsx";

const CardScene = lazy(() => import("./CardScene.jsx"));

export default function Hero({ ready, reduced }) {
  const show = (d = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, delay: d, ease },
  });

  return (
    <section className="hero" id="top">
      <div className="hero-top">
        <motion.p className="label" {...show(0.1)}>
          <span className="label-n">(00)</span> {profile.title}
        </motion.p>
        <motion.p className="hero-index" {...show(0.15)}>
          React · TypeScript · React Native
        </motion.p>
      </div>

      <div className="hero-stage">
        <Lines
          as="h1"
          className="display"
          play={ready}
          delay={0.05}
          lines={[
            <>Reliable</>,
            <>by <em>design,</em></>,
            <>fast by default.</>,
          ]}
        />
        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.25, ease }}
        >
          {ready && (
            <Suspense fallback={null}>
              <CardScene reduced={reduced} />
            </Suspense>
          )}
        </motion.div>
      </div>

      <div className="hero-foot">
        <motion.p className="hero-lead" {...show(0.45)}>
          I'm Ayodeji, a frontend and mobile engineer with 4+ years building payment checkouts, tax-compliant invoicing
          and event-ticketing apps, with AI agent workflows built into how I ship. Right now I'm shipping <a href="#eventflutter" className="ink-link">Eventflutter</a>{" "}
          on the App Store and Google Play.
        </motion.p>
        <motion.div className="hero-cta" {...show(0.55)}>
          <Magnetic>
            <a className="btn-solid" href="#contact">Start a conversation <Arrow /></a>
          </Magnetic>
          <a className="btn-line" href={profile.cv} download>Download CV</a>
        </motion.div>
      </div>

      <motion.dl className="receipt" {...show(0.65)}>
        {metrics.map((m) => (
          <div key={m.label}>
            <dt>{m.label}</dt>
            <dd><CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} /></dd>
          </div>
        ))}
      </motion.dl>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>{t}<i>✳</i></span>
          ))}
        </div>
      </div>
    </section>
  );
}
