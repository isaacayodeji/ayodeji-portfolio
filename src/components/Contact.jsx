import { useState } from "react";
import emailjs from "emailjs-com";
import { profile, nav } from "../data.js";
import { Label, Lines, Reveal, Magnetic, Arrow, useLagosTime } from "./ui.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [copied, setCopied] = useState(false);
  const time = useLagosTime();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      await emailjs.send(
        "service_u63fa39",
        "template_1brl8ej",
        {
          from_name: form.name,
          to_name: "Ayodeji Olu Ewulo",
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        "llwIs7b1PhTYdLGwO"
      );
      setState("ok");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setState("error");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard blocked; the mailto link still works */ }
  };

  return (
    <section className="contact" id="contact">
      <div className="section">
        <Label n="05">Contact</Label>
        <Lines as="h2" className="contact-title" lines={[<>Let's build</>, <>something people</>, <><em>rely on.</em></>]} />

        <div className="contact-grid">
          <div className="contact-left">
            <Reveal as="p" className="contact-lead">
              Open to remote frontend, mobile and design-system roles. Tell me about the team and the problem. I reply within a day.
            </Reveal>
            <Reveal className="email-line">
              <Magnetic strength={0.15}>
                <a href={`mailto:${profile.email}`} className="email-big">{profile.email}</a>
              </Magnetic>
              <button className="copy" onClick={copy} aria-live="polite">{copied ? "Copied ✓" : "Copy"}</button>
            </Reveal>
            <Reveal className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              <a href={profile.cv} download>Download CV <Arrow dir="s" /></a>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <form className="form" onSubmit={onSubmit}>
              <label>
                <span>Your name</span>
                <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
              </label>
              <label>
                <span>The role or project</span>
                <textarea name="message" rows="4" value={form.message} onChange={onChange} required />
              </label>
              <div className="form-foot">
                <button className="btn-solid" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : "Send message"} <Arrow />
                </button>
                <p className={`form-note ${state}`} role="status">
                  {state === "ok" && "Thank you. Your message is in, and I'll reply shortly."}
                  {state === "error" && `That didn't send. Please email ${profile.email} directly.`}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-row">
          <nav aria-label="Footer">
            {nav.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
          </nav>
          <p className="tabular">Lagos {time} · © {new Date().getFullYear()} {profile.fullName}</p>
          <a href="#top" className="to-top">Back to top <Arrow dir="n" /></a>
        </div>
        <p className="footer-mark" aria-hidden="true">Olu-Ewulo</p>
      </footer>
    </section>
  );
}
