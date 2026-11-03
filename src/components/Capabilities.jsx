import { capabilities, credentials } from "../data.js";
import { Label, Lines, Reveal } from "./ui.jsx";

export default function Capabilities() {
  return (
    <section className="section caps" id="skills">
      <Label n="04">Capabilities</Label>
      <Lines as="h2" className="section-title" lines={[<>The <em>toolbox.</em></>]} />

      <dl className="spec">
        {capabilities.map((c, i) => (
          <Reveal key={c.group} delay={(i % 2) * 0.06} className="spec-row">
            <dt><span className="tabular">{String(i + 1).padStart(2, "0")}</span>{c.group}</dt>
            <dd>{c.items}</dd>
          </Reveal>
        ))}
      </dl>

      <div className="creds">
        {credentials.map((c, i) => (
          <Reveal key={c.v} delay={i * 0.05} className="cred">
            <span>{c.k}</span>
            <b>{c.v}</b>
            {c.s && <small>{c.s}</small>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
