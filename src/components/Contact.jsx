import { useState } from "react";
import emailjs from "emailjs-com";
import { profile } from "../data.js";
import { Reveal, SectionHead } from "./ui.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | ok | error

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

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead eyebrow="Contact" title="Let's build something people rely on." sub="Open to remote frontend, mobile and design-system roles. I reply fast." />
        <div className="contact-grid">
          <Reveal>
            <div className="glass contact-info">
              <a href={`mailto:${profile.email}`}><small>Email</small>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><small>Phone</small>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><small>LinkedIn</small>ayodeji-olu-ewulo</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><small>GitHub</small>isaacayodeji</a>
              <a className="btn primary" href={profile.cv} download>Download CV (PDF)</a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="glass form" onSubmit={onSubmit}>
              <label>Name<input name="name" value={form.name} onChange={onChange} required placeholder="Jane Doe" /></label>
              <label>Email<input name="email" type="email" value={form.email} onChange={onChange} required placeholder="jane@company.com" /></label>
              <label>Message<textarea name="message" rows="5" value={form.message} onChange={onChange} required placeholder="Tell me about the role or project…" /></label>
              <button className="btn primary" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
              <p className={`form-note ${state}`} role="status">
                {state === "ok" && "Thanks! Your message is in. I'll reply shortly."}
                {state === "error" && `Couldn't send. Please email ${profile.email} directly.`}
              </p>
            </form>
          </Reveal>
        </div>
        <footer className="footer">© {new Date().getFullYear()} {profile.fullName} · Built with React &amp; Framer Motion</footer>
      </div>
    </section>
  );
}
