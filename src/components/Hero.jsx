import { motion } from "framer-motion";
import { profile, roles, metrics } from "../data.js";
import { CountUp, Typewriter, StoreButtons } from "./ui.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
            <i className="dot" /> Open to remote roles · Lagos, Nigeria
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}>
            Hi, I'm <span className="grad">Ayodeji</span>.<br />
            I build fast, reliable products people trust with their money.
          </motion.h1>

          <motion.p className="role-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <Typewriter words={roles} />
          </motion.p>

          <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }}>
            4+ years shipping React, TypeScript and React Native for payments, tax-tech and events. Currently building the
            Eventflutter app, live on the App Store and Google Play.
          </motion.p>

          <motion.div className="cta-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}>
            <a className="btn primary" href="#contact">Hire me</a>
            <a className="btn ghost" href={profile.cv} download>Download CV</a>
            <a className="btn ghost" href="#work">See my work</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
            <p className="mini-label">My app is live</p>
            <StoreButtons play={profile.playStore} apple={profile.appStore} />
          </motion.div>
        </div>

        <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}>
          <div className="photo-wrap">
            <img src="./assets/ayodeji.jpg" alt="Ayodeji Olu-Ewulo" width="420" height="520" />
            <div className="chip c1"><b>97%</b> payment success</div>
            <div className="chip c2"><b>7</b> apps · 1 monorepo</div>
            <div className="chip c3"><b>2</b> app stores</div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="metrics">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <b><CountUp to={m.value} suffix={m.suffix} /></b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
