import { useEffect, useRef } from 'react';
import JsIconUrl from '../assets/icons/JavascriptIcon.svg';
import ReactIconUrl from '../assets/icons/ReactIcon.svg';
import NextIconUrl from '../assets/icons/NextjsIcon.svg';
import MongoDBUrl from '../assets/icons/MongodbIcon.svg';
import ExpressUrl from '../assets/icons/ExpressIcon.svg';
import PostgreSQLUrl from '../assets/icons/PostgreSQLIcon.svg';
import MUIUrl from '../assets/icons/MaterialIcon.svg';
import NodeJsUrl from '../assets/icons/NodejsIcon.svg';
import SocketIOUrl from '../assets/icons/SocketIOIcon.svg';

const TOYS = [
  { cls: 'icon', svg: JsIconUrl },
  { cls: 'icon', svg: MongoDBUrl },
  { cls: 'icon', svg: ExpressUrl },
  { cls: 'tag', text: '//CUL·MX' },
  { cls: 'icon', svg: ReactIconUrl },
  { cls: 'icon', svg: NextIconUrl },
  { cls: 'icon', svg: PostgreSQLUrl },
  { cls: 'icon', svg: MUIUrl },
  { cls: 'icon', svg: NodeJsUrl },
  { cls: 'icon', svg: SocketIOUrl },
];

export default function HeroToys() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const root = rootRef.current;
    if (!root) return undefined;

    const vw = () => window.innerWidth;
    const vh = () => window.innerHeight;
    const toyObjs = [];
    const ring = document.getElementById('cursorRing');

    const spawn = () => {
      const isMobile = vw() <= 900;

      root.innerHTML = '';
      root.classList.toggle('toys-mobile', isMobile);
      toyObjs.length = 0;
      const centerYmin = vh() * 0.32;
      const centerYmax = vh() * 0.7;
      const horizontalPadding = isMobile ? 10 : 20;
      const topPadding = isMobile ? 84 : 100;
      const toyBuffer = isMobile ? 120 : 220;

      TOYS.forEach((t) => {
        const el = document.createElement('div');
        el.className = `toy ${t.cls}`;
        if (t.svg) {
          const img = document.createElement('img');
          img.src = t.svg;
          img.draggable = false;
          el.appendChild(img);
        } else {
          el.textContent = t.text || '';
        }
        if (t.color) el.style.background = t.color;

        let x; let y; let tries = 0;
        do {
          x = Math.random() * (vw() - toyBuffer) + horizontalPadding;
          y = Math.random() * (vh() - toyBuffer) + topPadding;
          tries += 1;
        } while (tries < 15 && (y > centerYmin && y < centerYmax && x > vw() * 0.1 && x < vw() * 0.9));

        const obj = {
          el, x, y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          rot: (Math.random() - 0.5) * 20,
          vr: (Math.random() - 0.5) * 0.3,
          scale: 1,
          targetScale: 1,
          dragging: false,
          dragOffX: 0,
          dragOffY: 0,
        };
        toyObjs.push(obj);
        root.appendChild(el);

        el.addEventListener('pointerenter', () => {
          obj.targetScale = 1.18;
          el.classList.add('hovered');
        });
        el.addEventListener('pointerleave', () => {
          obj.targetScale = 1;
          el.classList.remove('hovered');
        });

        el.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          obj.dragging = true;
          el.classList.add('dragging');
          obj.dragOffX = e.clientX - obj.x;
          obj.dragOffY = e.clientY - obj.y;
          obj.vx = 0; obj.vy = 0;
          try { el.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
          ring?.classList.add('drag');
        });
        el.addEventListener('pointermove', (e) => {
          if (!obj.dragging) return;
          const nx = e.clientX - obj.dragOffX;
          const ny = e.clientY - obj.dragOffY;
          obj.vx = (nx - obj.x) * 0.3;
          obj.vy = (ny - obj.y) * 0.3;
          obj.x = nx; obj.y = ny;
        });
        const endDrag = (e) => {
          if (!obj.dragging) return;
          obj.dragging = false;
          el.classList.remove('dragging');
          ring?.classList.remove('drag');
          try { el.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ }
        };
        el.addEventListener('pointerup', endDrag);
        el.addEventListener('pointercancel', endDrag);
      });
    };

    spawn();
    window.addEventListener('resize', spawn);

    let raf;
    const tick = () => {
      const w = vw(); const h = vh();
      toyObjs.forEach((o) => {
        if (!o.dragging) {
          o.x += o.vx;
          o.y += o.vy;
          o.rot += o.vr;
          o.vx *= 0.985; o.vy *= 0.985; o.vr *= 0.985;
          o.vy += Math.sin(performance.now() * 0.001 + o.x * 0.01) * 0.002;

          const W = o.el.offsetWidth; const H = o.el.offsetHeight;
          if (o.x < 0) { o.x = 0; o.vx = Math.abs(o.vx) * 0.8; o.vr = (Math.random() - 0.5) * 1; }
          if (o.x > w - W) { o.x = w - W; o.vx = -Math.abs(o.vx) * 0.8; o.vr = (Math.random() - 0.5) * 1; }
          if (o.y < 70) { o.y = 70; o.vy = Math.abs(o.vy) * 0.8; }
          if (o.y > h - H - 20) { o.y = h - H - 20; o.vy = -Math.abs(o.vy) * 0.8; }
        }
        o.scale += (o.targetScale - o.scale) * 0.12;
        o.el.style.transform = `translate(${o.x}px, ${o.y}px) rotate(${o.rot}deg) scale(${o.scale})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', spawn);
      root.innerHTML = '';
    };
  }, []);

  return <div ref={rootRef} className="toys" id="toys" />;
}
