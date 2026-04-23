import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'motion/react';
import HeroToys from './HeroToys';

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section id="hero" ref={sectionRef}>
      <motion.div className="hero-eyebrow" style={{ y: eyebrowY }}>
        <span></span>
        <span>{t('hero.loc')}</span>
      </motion.div>

      <HeroToys />

      <h1 className="hero-name">
        <motion.span
          className="l1"
          initial={{ opacity: 0, y: 110, skewX: -5 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{ duration: 1.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          Daniel
        </motion.span>
        <motion.span
          className="l2"
          initial={{ opacity: 0, y: 110, skewX: -5 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{ duration: 1.3, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          Mokay<span className="amp">;)</span>
        </motion.span>
      </h1>

      <motion.div className="hero-sub" style={{ y: subY, opacity: subOpacity }}>
        <div className="hero-role">
          {t('hero.role1')} <em>{t('hero.role2')}</em> {t('hero.role3')}
        </div>
        <div className="hero-meta">
          <div>EST. 2022</div>
          <div>/ PORTFOLIO · 26</div>
          <div style={{ color: 'var(--blue)' }}>{t('hero.drag')}</div>
        </div>
      </motion.div>

      <motion.div className="hero-scroll" style={{ opacity: scrollOpacity }}>
        <span>{t('hero.scroll')}</span>
        <div className="line" />
      </motion.div>
    </section>
  );
}
