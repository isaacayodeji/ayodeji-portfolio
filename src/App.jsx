import { useCallback, useEffect, useState } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { startSmoothScroll, scrollToTarget } from "./scroll.js";
import Intro from "./components/Intro.jsx";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Eventflutter from "./components/Eventflutter.jsx";
import Work from "./components/Work.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Contact from "./components/Contact.jsx";

const seenIntro = () => {
  try { return sessionStorage.getItem("intro") === "1"; } catch { return false; }
};

export default function App() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(() => reduced || seenIntro());

  useEffect(() => {
    if (reduced) return;
    return startSmoothScroll();
  }, [reduced]);

  // Route in-page anchors through the smooth scroller.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2 || !document.querySelector(id)) return;
      e.preventDefault();
      scrollToTarget(id, reduced);
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [reduced]);

  // Hard failsafe: never let the intro block the site for more than a few seconds.
  useEffect(() => {
    if (ready) return;
    const t = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(t);
  }, [ready]);

  const done = useCallback(() => {
    try { sessionStorage.setItem("intro", "1"); } catch { /* storage unavailable */ }
    setReady(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      {!ready && <Intro onDone={done} />}
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Nav />
      <main id="main">
        <Hero ready={ready} reduced={reduced} />
        <About />
        <Experience />
        <Eventflutter />
        <Work />
        <Capabilities />
        <Contact />
      </main>
    </MotionConfig>
  );
}
