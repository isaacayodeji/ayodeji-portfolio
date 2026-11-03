import { useEffect, useRef, useState } from "react";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Shape,
  ExtrudeGeometry,
  MeshPhysicalMaterial,
  Mesh,
  CanvasTexture,
  SRGBColorSpace,
  PMREMGenerator,
  DirectionalLight,
  PointLight,
  AmbientLight,
  Group,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  PointsMaterial,
  ACESFilmicToneMapping,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const W = 3.4;
const H = 2.14;

function roundedRect(w, h, r) {
  const s = new Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

// The card face: part payment card, part event ticket.
function drawFace() {
  const c = document.createElement("canvas");
  c.width = 1360;
  c.height = 856;
  const g = c.getContext("2d");
  const { width: w, height: h } = c;

  g.fillStyle = "#171513";
  g.fillRect(0, 0, w, h);

  // Guilloche security pattern.
  g.lineWidth = 1.2;
  for (let k = 0; k < 26; k++) {
    g.strokeStyle = `rgba(242, 238, 230, ${0.025 + (k % 5) * 0.006})`;
    g.beginPath();
    for (let x = 0; x <= w; x += 6) {
      const y = h * 0.52 + Math.sin(x / 70 + k * 0.42) * (60 + k * 5) + Math.cos(x / 190 - k) * 26;
      x === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
    }
    g.stroke();
  }

  // Ticket stub.
  const stubX = w * 0.76;
  g.fillStyle = "#ff5a1f";
  g.fillRect(stubX, 0, w - stubX, h);
  g.strokeStyle = "#171513";
  g.setLineDash([14, 12]);
  g.lineWidth = 5;
  g.beginPath();
  g.moveTo(stubX, 30);
  g.lineTo(stubX, h - 30);
  g.stroke();
  g.setLineDash([]);
  g.fillStyle = "#171513";
  [0, h].forEach((cy) => { g.beginPath(); g.arc(stubX, cy, 34, 0, Math.PI * 2); g.fill(); });

  g.save();
  g.translate(stubX + (w - stubX) / 2, h / 2);
  g.rotate(-Math.PI / 2);
  g.fillStyle = "#171513";
  g.textAlign = "center";
  g.font = "600 30px 'Geist Mono', monospace";
  g.fillText("ADMIT ONE  ·  HIRE ME", 0, -24);
  g.font = "italic 400 88px Fraunces, Georgia, serif";
  g.fillText("No. 001", 0, 66);
  g.restore();

  // Chip.
  const cx = 96, cy = 300, cw = 150, ch = 116;
  const grad = g.createLinearGradient(cx, cy, cx + cw, cy + ch);
  grad.addColorStop(0, "#e3c98f");
  grad.addColorStop(1, "#9c7d43");
  g.fillStyle = grad;
  g.beginPath();
  g.roundRect(cx, cy, cw, ch, 18);
  g.fill();
  g.strokeStyle = "rgba(23, 21, 19, 0.45)";
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(cx, cy + ch / 2); g.lineTo(cx + cw, cy + ch / 2);
  g.moveTo(cx + cw / 3, cy); g.lineTo(cx + cw / 3, cy + ch);
  g.moveTo(cx + (cw * 2) / 3, cy); g.lineTo(cx + (cw * 2) / 3, cy + ch);
  g.stroke();

  g.fillStyle = "#f2eee6";
  g.textAlign = "left";
  g.font = "italic 400 104px Fraunces, Georgia, serif";
  g.fillText("Ayodeji", 96, 176);
  g.font = "500 28px 'Geist Mono', monospace";
  g.fillStyle = "rgba(242, 238, 230, 0.6)";
  g.fillText("FRONTEND · MOBILE · PAYMENTS", 100, 232);

  g.fillStyle = "#f2eee6";
  g.font = "500 54px 'Geist Mono', monospace";
  g.fillText("97%  −40%  −25%  4+", 96, 560);
  g.font = "500 24px 'Geist Mono', monospace";
  g.fillStyle = "rgba(242, 238, 230, 0.55)";
  g.fillText("SUCCESS   LOAD      INFRA     YEARS", 100, 604);

  g.fillStyle = "#f2eee6";
  g.font = "500 34px 'Geist Mono', monospace";
  g.fillText("OLU-EWULO", 96, 748);
  g.fillStyle = "rgba(242, 238, 230, 0.55)";
  g.font = "500 24px 'Geist Mono', monospace";
  g.fillText("LAGOS · REMOTE", 100, 792);
  return c;
}

async function fontsReady() {
  if (!document.fonts) return;
  const loads = ["italic 400 40px Fraunces", "500 20px 'Geist Mono'"].map((f) => document.fonts.load(f));
  await Promise.race([Promise.all(loads), new Promise((r) => setTimeout(r, 1500))]);
}

export default function CardScene({ reduced }) {
  const host = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      await fontsReady();
      if (disposed) return;

      let renderer;
      try {
        renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        setFailed(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.outputColorSpace = SRGBColorSpace;
      renderer.toneMapping = ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      el.appendChild(renderer.domElement);

      const scene = new Scene();
      const pmrem = new PMREMGenerator(renderer);
      const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = env;

      const camera = new PerspectiveCamera(30, 1, 0.1, 100);
      camera.position.set(0, 0, 9);

      const tex = new CanvasTexture(drawFace());
      tex.colorSpace = SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      tex.repeat.set(1 / W, 1 / H);
      tex.offset.set(0.5, 0.5);

      const geo = new ExtrudeGeometry(roundedRect(W, H, 0.17), {
        depth: 0.035,
        bevelEnabled: true,
        bevelThickness: 0.018,
        bevelSize: 0.018,
        bevelSegments: 5,
        curveSegments: 28,
      });
      geo.translate(0, 0, -0.0175);
      const face = new MeshPhysicalMaterial({ map: tex, roughness: 0.42, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.22 });
      const edge = new MeshPhysicalMaterial({ color: "#ff5a1f", roughness: 0.35, metalness: 0.45 });
      const card = new Mesh(geo, [face, edge]);

      // A loose orbit of "transactions".
      const count = 520;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 2.5 + Math.random() * 0.9;
        pos[i * 3] = Math.cos(a) * r;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 0.18;
        pos[i * 3 + 2] = Math.sin(a) * r;
      }
      const pgeo = new BufferGeometry();
      pgeo.setAttribute("position", new Float32BufferAttribute(pos, 3));
      const pmat = new PointsMaterial({ color: "#14120f", size: 0.022, transparent: true, opacity: 0.5, depthWrite: false });
      const orbit = new Points(pgeo, pmat);
      orbit.rotation.x = 0.42;
      orbit.rotation.z = -0.18;

      const rig = new Group();
      rig.add(card, orbit);
      scene.add(rig);

      scene.add(new AmbientLight("#fff4e6", 0.35));
      const key = new DirectionalLight("#ffffff", 1.4);
      key.position.set(3, 4, 6);
      scene.add(key);
      const rim = new PointLight("#ff5a1f", 7, 9);
      rim.position.set(-4.5, -2.5, 1.2);
      scene.add(rim);

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        camera.aspect = w / h;
        camera.position.z = w / h < 0.9 ? 11.5 : 9;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      const base = { rx: 0.16, ry: -0.42 };
      card.rotation.set(base.rx, base.ry, 0.04);

      const render = () => renderer.render(scene, camera);
      let raf = 0;
      let running = false;
      const target = { x: 0, y: 0 };

      const onPointer = (e) => {
        target.x = (e.clientX / window.innerWidth) * 2 - 1;
        target.y = (e.clientY / window.innerHeight) * 2 - 1;
      };

      const start = performance.now();
      const tick = () => {
        raf = requestAnimationFrame(tick);
        const t = (performance.now() - start) / 1000;
        const scroll = Math.min(window.scrollY / window.innerHeight, 1.2);
        const rx = base.rx + target.y * 0.22 + scroll * 0.35;
        const ry = base.ry + target.x * 0.5 + scroll * 1.1;
        card.rotation.x += (rx - card.rotation.x) * 0.06;
        card.rotation.y += (ry - card.rotation.y) * 0.06;
        card.position.y = Math.sin(t * 0.9) * 0.07;
        orbit.rotation.y = t * 0.06;
        rig.position.y = -scroll * 0.6;
        render();
      };

      const play = () => { if (!running && !reduced) { running = true; tick(); } };
      const pause = () => { running = false; cancelAnimationFrame(raf); };

      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visible && !document.hidden ? play() : pause();
      });
      io.observe(el);
      const onVis = () => (document.hidden || !visible ? pause() : play());
      document.addEventListener("visibilitychange", onVis);

      if (reduced) {
        render();
      } else {
        window.addEventListener("pointermove", onPointer, { passive: true });
        play();
      }
      el.dataset.ready = "true";

      cleanup = () => {
        pause();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("pointermove", onPointer);
        geo.dispose(); pgeo.dispose(); face.dispose(); edge.dispose(); pmat.dispose(); tex.dispose(); env.dispose(); pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => { disposed = true; cleanup(); };
  }, [reduced]);

  return (
    <div className="card-scene" ref={host} aria-hidden="true">
      {failed && <div className="card-fallback"><span>Ayodeji</span><i>No. 001</i></div>}
    </div>
  );
}
