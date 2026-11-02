import { featured, projects, gallery, profile } from "../data.js";
import { Reveal, SectionHead, StoreButtons } from "./ui.jsx";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead eyebrow="Selected work" title="Products in production" sub="Real systems, real users, measurable results." />

        <Reveal>
          <div className="spotlight glass">
            <div className="spot-copy">
              <span className="eyebrow">Featured · Live on both stores</span>
              <h3>{featured.title}</h3>
              <p className="spot-tag">{featured.tag}</p>
              <p>{featured.text}</p>
              <StoreButtons play={profile.playStore} apple={profile.appStore} />
            </div>
            <div className="spot-art" aria-hidden="true">
              <div className="phone">
                <div className="notch" />
                <div className="screen">
                  <b>Eventflutter</b>
                  <span>Discover · Book · Attend</span>
                  <i /><i /><i />
                </div>
              </div>
              <div className="orb" />
            </div>
          </div>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <article className={`glass proj ${p.accent}`}>
                <div className="proj-top">
                  <span className="tagline">{p.tag}</span>
                  <span className="date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="sub-title">Websites &amp; interfaces</h3>
        </Reveal>
        <div className="shots">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <figure className="shot glass">
                <img src={g.img} alt={g.title} loading="lazy" />
                <figcaption>{g.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
