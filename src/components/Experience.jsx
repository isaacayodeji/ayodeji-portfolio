import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "../data.js";
import { Label, Lines, Reveal, ease } from "./ui.jsx";

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section experience" id="experience">
      <Label n="02">Experience</Label>
      <Lines as="h2" className="section-title" lines={[<>Where I've <em>shipped.</em></>]} />

      <div className="ledger">
        <div className="ledger-head" aria-hidden="true">
          <span>Period</span><span>Company</span><span>Role</span><span />
        </div>
        {experience.map((e, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={e.company} delay={i * 0.06} className={`ledger-row ${isOpen ? "open" : ""}`}>
              <div>
                <button
                  className="ledger-btn"
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="l-period tabular">{e.period}</span>
                  <span className="l-company">{e.company}</span>
                  <span className="l-role">{e.role} <small>· {e.type}</small></span>
                  <span className="l-toggle" aria-hidden="true"><i /><i /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`job-${i}`}
                      className="ledger-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                    >
                      <div className="ledger-inner">
                        <p className="l-summary">{e.summary}</p>
                        <ul>
                          {e.points.map((p) => <li key={p}>{p}</li>)}
                        </ul>
                        <p className="l-stack">{e.stack.join(" / ")}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
