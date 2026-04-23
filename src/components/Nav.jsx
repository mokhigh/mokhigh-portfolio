import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const FlagEN = () => (
  <svg viewBox="0 0 60 42" width="20" height="14" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="42" fill="#B22234" />
    <rect y="3.23" width="60" height="3.23" fill="#fff" />
    <rect y="9.69" width="60" height="3.23" fill="#fff" />
    <rect y="16.15" width="60" height="3.23" fill="#fff" />
    <rect y="22.62" width="60" height="3.23" fill="#fff" />
    <rect y="29.08" width="60" height="3.23" fill="#fff" />
    <rect y="35.54" width="60" height="3.23" fill="#fff" />
    <rect width="24" height="22.62" fill="#3C3B6E" />
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 60 42" width="20" height="14" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="42" fill="#006847" />
    <rect x="20" width="20" height="42" fill="#fff" />
    <rect x="40" width="20" height="42" fill="#CE1126" />
    <circle cx="30" cy="21" r="4.5" fill="none" stroke="#8B4513" strokeWidth="1" />
    <ellipse cx="30" cy="21" rx="3" ry="1.8" fill="#8B4513" />
  </svg>
);

export default function Nav() {
  const { t, i18n } = useTranslation();
  const current = i18n.language?.startsWith('es') ? 'es' : 'en';

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
    try { localStorage.setItem('mokhigh.lang', lang); } catch (e) { /* ignore */ }
  };

  return (
    <motion.nav
      className="topnav"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="logo"><b>m</b><span>OKHIGH</span><span style={{color: 'var(--blue-pale)'}}>.</span>dev</div>
      <div className="nav-right">
        <a href="#about" className="nav-link">{t('nav.about')}</a>
        <a href="#stack" className="nav-link">{t('nav.stack')}</a>
        <a href="#contact" className="nav-link">{t('nav.contact')}</a>
        <div className="lang">
          <button
            type="button"
            aria-label="English"
            className={current === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            <span className="flag"><FlagEN /></span>
            EN
          </button>
          <button
            type="button"
            aria-label="Español"
            className={current === 'es' ? 'active' : ''}
            onClick={() => setLang('es')}
          >
            <span className="flag"><FlagES /></span>
            ES
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
