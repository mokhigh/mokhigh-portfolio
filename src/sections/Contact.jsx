import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import GithubIcon from '../assets/icons/GithubIcon.svg';
import LinkedinIcon from '../assets/icons/LinkedinIcon.svg';

const ease = [0.2, 0.8, 0.2, 1];
const vp = { once: true, amount: 0.2 };

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.07 1a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const GRID = [
  { key: 'phone', label: 'contact.phone', val: '+52 667 470 0645', href: 'tel:+526674700645', icon: 'phone' },
  { key: 'loc', label: 'contact.loc', valKey: 'contact.location', href: null, icon: 'location' },
  { key: 'gh', label: 'GitHub', val: '@mokhigh', href: 'https://github.com/mokhigh', ext: true, icon: 'github' },
  { key: 'li', label: 'LinkedIn', val: 'daniel-elorreaga', href: 'https://www.linkedin.com/in/daniel-elorreaga-mokay', ext: true, icon: 'linkedin' },
];

function ItemIcon({ type }) {
  if (type === 'github') return <img src={GithubIcon} alt="" className="c-icon" />;
  if (type === 'linkedin') return <img src={LinkedinIcon} alt="" className="c-icon" />;
  if (type === 'phone') return <PhoneIcon />;
  if (type === 'location') return <LocationIcon />;
  return null;
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container contact-inner">
        <motion.div
          className="contact-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={vp}
        >
          {t('contact.label')}
        </motion.div>

        <motion.a
          href="mailto:mokhigh@hotmail.com"
          className="contact-mail"
          initial={{ opacity: 0, y: 80, skewX: -3 }}
          whileInView={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{ duration: 1.2, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          viewport={vp}
          whileHover={{ skewX: -2, x: 6, transition: { duration: 0.25 } }}
        >
          mokhigh@hotmail.com
        </motion.a>

        <div className="contact-grid">
          {GRID.map((item, i) => (
            <motion.div
              key={item.key}
              className="c-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              viewport={vp}
            >
              <div className="c-k">
                <ItemIcon type={item.icon} />
                {t(item.label)}
              </div>
              <div className="c-v">
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.val}
                  </a>
                ) : (
                  t(item.valKey)
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="footer-meta">
        <span>© 2026 · Daniel Elorreaga Mokay</span>
        <span>{t('footer.tag')}</span>
        <span>v.2.0 · mokhigh.dev</span>
      </div>
    </section>
  );
}
