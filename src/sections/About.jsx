import { useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import memojiSrc from '../assets/HomeMemoji.M4V';

function wrapWords(container) {
  if (!container) return;
  const process = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = node.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach((p) => {
        if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p));
        else if (p.length) {
          const s = document.createElement('span');
          s.className = 'word';
          s.textContent = p;
          frag.appendChild(s);
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('word')) {
      Array.from(node.childNodes).forEach(process);
    }
  };
  Array.from(container.childNodes).forEach(process);
}

const vp = { once: true, amount: 0.2 };
const ease = [0.2, 0.8, 0.2, 1];

const STATS = [
  { n: '4+', key: 'about.s1', color: 'var(--blue)' },
  { n: '25+', key: 'about.s2', color: 'var(--wine-mid)' },
  { n: '2', key: 'about.s3', color: 'var(--blue-pale)' },
];

export default function About() {
  const { t, i18n } = useTranslation();
  const h2Ref = useRef(null);

  useEffect(() => {
    const h2 = h2Ref.current;
    if (!h2) return undefined;
    wrapWords(h2);
    const wio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const words = e.target.querySelectorAll('.word');
            words.forEach((w, i) => setTimeout(() => w.classList.add('in'), i * 40));
            wio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    wio.observe(h2);

    const r = h2.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.85) {
      h2.querySelectorAll('.word').forEach((w, i) => setTimeout(() => w.classList.add('in'), i * 30));
    }
    return () => wio.disconnect();
  }, [i18n.language]);

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-portrait"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease }}
            viewport={vp}
          >
            <video
              className="portrait-video"
              src={memojiSrc}
              autoPlay
              loop
              muted
              playsInline
            />
            <motion.div
              className="portrait-sticker"
              initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 8, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              viewport={vp}
            >
              {t('about.sticker')}
            </motion.div>
            <div className="portrait-tag">MOKHIGH_v26.M4V</div>
          </motion.div>

          <div className="about-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              viewport={vp}
            >
              <span>{t('about.label')}</span>
            </motion.div>

            <h2 key={i18n.language} ref={h2Ref} className="word-reveal">
              <Trans
                i18nKey="about.h2"
                components={{
                  hl: <span className="hl" />,
                  hl2: <span className="hl2" />,
                }}
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              viewport={vp}
            >
              <Trans
                i18nKey="about.p1"
                components={{ b: <b style={{ color: 'var(--cyan)' }} /> }}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              viewport={vp}
            >
              {t('about.p2')}
            </motion.p>

            <div className="about-stats">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.key}
                  className="stat"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease }}
                  viewport={vp}
                >
                  <div className="stat-n" style={{ color: s.color }}>{s.n}</div>
                  <div className="stat-l">{t(s.key)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
