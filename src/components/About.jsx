import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about } from "../data.js";
import { Label, Lines, Reveal } from "./ui.jsx";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="section about" id="about">
      <Label n="01">About</Label>
      <div className="about-grid">
        <figure className="portrait" ref={ref}>
          <div className="portrait-frame">
            <motion.img style={{ y, scale: 1.16 }} src="./assets/ayodeji.jpg" alt="Portrait of Ayodeji Olu-Ewulo" loading="lazy" width="575" height="699" />
          </div>
          <figcaption><span>Ayodeji Olu-Ewulo</span><span>Lagos, NG</span></figcaption>
        </figure>

        <div className="about-copy">
          <Lines as="h2" className="statement" lines={[
            <>I build the screens</>,
            <><em>money</em> moves through,</>,
            <>and the apps people</>,
            <>buy tickets on.</>,
          ]} />
          <div className="about-body">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08} as="p">{p}</Reveal>
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
