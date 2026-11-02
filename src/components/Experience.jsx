import { experience, profile } from "../data.js";
import { Reveal, SectionHead, StoreButtons } from "./ui.jsx";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead eyebrow="Experience" title="Where I've shipped" sub="Production work across fintech, tax compliance and events." />
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.05}>
              <article className="glass job">
                <span className="node" />
                <header>
                  <div>
                    <h3>{e.role}</h3>
                    <p className="company">
                      {e.company}
                      {e.current && <em className="now">Current</em>}
                    </p>
                    <p className="meta">{e.meta}</p>
                  </div>
                  <span className="period">{e.period}</span>
                </header>
                {e.links && <StoreButtons play={profile.playStore} apple={profile.appStore} size="sm" />}
                <ul>
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="tags">
                  {e.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
