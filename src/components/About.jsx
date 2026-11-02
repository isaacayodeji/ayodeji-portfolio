import { about } from "../data.js";
import { Reveal, SectionHead } from "./ui.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead eyebrow="About" title={about.lead} />
        <div className="about-grid">
          <Reveal className="about-text">
            {about.body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <div className="about-cards">
            {about.highlights.map((h, i) => (
              <Reveal key={h.k} delay={i * 0.07}>
                <div className="glass card">
                  <h3>{h.k}</h3>
                  <p>{h.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
