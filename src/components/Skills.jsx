import { skills, education } from "../data.js";
import { Reveal, SectionHead } from "./ui.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead eyebrow="Toolbox" title="Skills & credentials" />
        <div className="skill-grid">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.06}>
              <div className="glass card">
                <h3>{s.group}</h3>
                <div className="tags">
                  {s.items.map((it) => <span key={it}>{it}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass edu">
            <div>
              <span className="eyebrow">Education</span>
              <h3>{education.degree} · {education.school}</h3>
              <p>{education.place}</p>
            </div>
            <div>
              <span className="eyebrow">Certifications</span>
              {education.certs.map((c) => <p key={c}>{c}</p>)}
            </div>
            <div>
              <span className="eyebrow">Languages</span>
              <p>{education.languages}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
