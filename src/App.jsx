import { useRef, useState, useEffect, useMemo } from 'react';
import { Container, Box } from '@mui/material';
import GooeyNav from './components/Navbar/GooeyNav';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export default function App() {
  const { t } = useTranslation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = useMemo(
    () => [homeRef, aboutRef, projectsRef, contactRef],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const isManualScroll = useRef(false);

  const items = useMemo(() => [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ], [t]);

  const handleNavClick = (_, index) => {
    isManualScroll.current = true;
    sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index);

    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      if (isManualScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1 && index !== activeIndex) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeIndex, sectionRefs]);

  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={activeIndex}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          onClick={handleNavClick}
          activeIndex={activeIndex}
        />
        <Box sx={{ position: 'absolute', top: 0, right: 0, padding: '1.5em' }}>
          <LanguageSwitcher />
        </Box>
      </Box>
      <section ref={sectionRefs[0]} id="home"><Home /></section>
      <section ref={sectionRefs[1]} id="about"><About /></section>
      <section ref={sectionRefs[2]} id="projects"><Projects /></section>
      <section ref={sectionRefs[3]} id="contact"><Contact /></section>
    </Container>
  );
}
