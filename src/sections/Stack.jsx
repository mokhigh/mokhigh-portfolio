import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import ReactIcon from '../assets/icons/ReactIcon.svg';
import NodejsIcon from '../assets/icons/NodejsIcon.svg';
import NextjsIcon from '../assets/icons/NextjsIcon.svg';
import ExpressIcon from '../assets/icons/ExpressIcon.svg';
import SocketioIcon from '../assets/icons/SocketioIcon.svg';
import MongodbIcon from '../assets/icons/MongodbIcon.svg';
import PostgresqlIcon from '../assets/icons/PostgresqlIcon.svg';
import MssqlIcon from '../assets/icons/MssqlServerIcon.svg';
import FirebaseIcon from '../assets/icons/FirebaseIcon.svg';
import SwiftIcon from '../assets/icons/SwiftIcon.svg';
import KotlinIcon from '../assets/icons/KotlinIcon.svg';
import GitIcon from '../assets/icons/GitIcon.svg';
import GithubIcon from '../assets/icons/GithubIcon.svg';
import DockerIcon from '../assets/icons/DockerIcon.svg';
import VercelIcon from '../assets/icons/VercelIcon.svg';
import RailwayIcon from '../assets/icons/RailwayIcon.svg';
import HerokuIcon from '../assets/icons/HerokuIcon.svg';
import MaterialIcon from '../assets/icons/MaterialIcon.svg';
import ViteIcon from '../assets/icons/ViteIcon.svg';
import I18nextIcon from '../assets/icons/i18nextIcon.svg';
import SupabaseIcon from '../assets/icons/SupabaseIcon.svg';
import PythonIcon from '../assets/icons/PythonIcon.svg';

const CARDS = [
  { cat: 'fe', name: 'React', color: 'c-cyan', icon: ReactIcon },
  { cat: 'be', name: 'Node.js', color: 'c-mag', icon: NodejsIcon },
  { cat: 'be', name: 'Express', color: 'c-cyan', icon: ExpressIcon },
  { cat: 'db', name: 'MongoDB', color: 'c-cyan', icon: MongodbIcon },
  { cat: 'mob', name: 'Swift', color: 'c-vio', icon: SwiftIcon },
  { cat: 'mob', name: 'Kotlin', color: 'c-mag', icon: KotlinIcon },
];

const BUBBLES = [
  { t: 'Socket.io', c: 'b-outline-m', icon: SocketioIcon },
  { t: 'PostgreSQL', c: 'b-outline', icon: PostgresqlIcon },
  { t: 'MSSQL', c: 'b-outline-m', icon: MssqlIcon },
  { t: 'Firebase', c: 'b-outline', icon: FirebaseIcon },
  { t: 'Git', c: 'b-outline-m', icon: GitIcon },
  { t: 'GitHub', c: 'b-outline', icon: GithubIcon },
  { t: 'Docker', c: 'b-outline', icon: DockerIcon },
  { t: 'Vercel', c: 'b-outline-m', icon: VercelIcon },
  { t: 'Railway', c: 'b-outline', icon: RailwayIcon },
  { t: 'Heroku', c: 'b-outline-m', icon: HerokuIcon },
  { t: 'MUI', c: 'b-outline', icon: MaterialIcon },
  { t: 'Vite', c: 'b-outline', icon: ViteIcon },
  { t: 'i18next', c: 'b-outline-m', icon: I18nextIcon },
  { t: 'Supabase', c: 'b-outline', icon: SupabaseIcon },
  { t: 'Next.js', c: 'b-outline', icon: NextjsIcon },
  { t: 'Python', c: 'b-outline-m', icon: PythonIcon },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Stack() {
  const { t } = useTranslation();
  const bubblesRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const host = bubblesRef.current;
    if (!host) return undefined;
    const bubbleObjs = [];
    const ring = document.getElementById('cursorRing');

    const layout = () => {
      host.innerHTML = '';
      bubbleObjs.length = 0;
      const zone = host.getBoundingClientRect();
      const W = zone.width; const H = zone.height;
      if (W <= 0 || H <= 0) return;

      BUBBLES.forEach((b) => {
        const el = document.createElement('div');
        el.className = `bubble ${b.c}`;
        const img = document.createElement('img');
        img.src = b.icon;
        img.alt = b.t;
        img.className = 'bubble-icon';
        el.appendChild(img);
        host.appendChild(el);
        const estW = el.offsetWidth;
        const estH = el.offsetHeight;

        let x; let y; let tries = 0; let ok = false;
        while (tries < 30 && !ok) {
          x = Math.random() * (W - estW - 10) + 5;
          y = Math.random() * (H - estH - 10) + 5;
          // eslint-disable-next-line no-loop-func
          ok = bubbleObjs.every((o) => {
            const dx = (o.x + o.w / 2) - (x + estW / 2);
            const dy = (o.y + o.h / 2) - (y + estH / 2);
            const minD = (o.w + estW) / 2 + 8;
            return Math.hypot(dx, dy) > minD;
          });
          tries += 1;
        }
        const obj = {
          el, x, y, w: estW, h: estH,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          dragging: false,
          dragOffX: 0,
          dragOffY: 0,
        };
        bubbleObjs.push(obj);
        el.style.transform = `translate(${x}px,${y}px)`;

        el.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          obj.dragging = true;
          obj.dragOffX = e.clientX - obj.x;
          obj.dragOffY = e.clientY - obj.y;
          try { el.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
          ring?.classList.add('drag');
        });
        el.addEventListener('pointermove', (e) => {
          if (!obj.dragging) return;
          const nx = e.clientX - obj.dragOffX;
          const ny = e.clientY - obj.dragOffY;
          obj.vx = (nx - obj.x) * 0.4;
          obj.vy = (ny - obj.y) * 0.4;
          obj.x = nx; obj.y = ny;
        });
        const end = (e) => {
          if (!obj.dragging) return;
          obj.dragging = false;
          ring?.classList.remove('drag');
          try { el.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ }
        };
        el.addEventListener('pointerup', end);
        el.addEventListener('pointercancel', end);
      });
    };

    const rafLayout = requestAnimationFrame(layout);
    const onResize = () => requestAnimationFrame(layout);
    window.addEventListener('resize', onResize);

    let raf;
    const tick = () => {
      const zone = host.getBoundingClientRect();
      const W = zone.width; const H = zone.height;
      if (W > 0) {
        bubbleObjs.forEach((o) => {
          if (!o.dragging) {
            o.x += o.vx; o.y += o.vy;
            o.vx *= 0.975; o.vy *= 0.975;
            if (Math.abs(o.vx) < 0.02 && Math.abs(o.vy) < 0.02) {
              o.vx += (Math.random() - 0.5) * 0.04;
              o.vy += (Math.random() - 0.5) * 0.04;
            }
            if (o.x < 0) { o.x = 0; o.vx = Math.abs(o.vx) * 0.8; }
            if (o.x > W - o.w) { o.x = W - o.w; o.vx = -Math.abs(o.vx) * 0.8; }
            if (o.y < 0) { o.y = 0; o.vy = Math.abs(o.vy) * 0.8; }
            if (o.y > H - o.h) { o.y = H - o.h; o.vy = -Math.abs(o.vy) * 0.8; }
          }
          for (let j = 0; j < bubbleObjs.length; j += 1) {
            const p = bubbleObjs[j];
            if (p === o) continue; // eslint-disable-line no-continue
            const dx = (p.x + p.w / 2) - (o.x + o.w / 2);
            const dy = (p.y + p.h / 2) - (o.y + o.h / 2);
            const d = Math.hypot(dx, dy);
            const minD = (o.w + p.w) / 2;
            if (d > 0 && d < minD) {
              const push = (minD - d) / 2;
              const nx = dx / d; const ny = dy / d;
              if (!o.dragging) { o.x -= nx * push; o.y -= ny * push; }
              if (!p.dragging) { p.x += nx * push; p.y += ny * push; }
              if (!o.dragging) { o.vx -= nx * 0.3; o.vy -= ny * 0.3; }
              if (!p.dragging) { p.vx += nx * 0.3; p.vy += ny * 0.3; }
            }
          }
          o.el.style.transform = `translate(${o.x}px,${o.y}px)`;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rafLayout);
      window.removeEventListener('resize', onResize);
      host.innerHTML = '';
    };
  }, []);

  return (
    <section id="stack-section">
      <a id="stack" style={{ position: 'absolute', top: 0 }} aria-hidden="true">{' '}</a>

      <div className="stack-header">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>{t('stack.h1')}</span>
          <em>{t('stack.h2')}</em>
        </motion.h2>
        <motion.div
          className="label"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>{t('stack.label')}</span>
        </motion.div>
      </div>

      <div className="stack-track-wrap">
        <div className="stack-track">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.name}
              className={`card ${c.color}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -14, scale: 1.03, transition: { duration: 0.3, ease } }}
            >
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <img src={c.icon} alt="" aria-hidden="true" className="card-icon" />
              <div className="cat">{t(`stack.cat.${c.cat}`)}</div>
              <div className="name">{c.name}</div>
              <div className="dot" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="bubbles-zone"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bz-label">{t('stack.bz')}</div>
        <div className="bz-hint">{t('stack.hint')}</div>
        <div className="bubbles" id="bubbles" ref={bubblesRef} />
      </motion.div>
    </section>
  );
}
