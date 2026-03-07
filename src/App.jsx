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
  const manualTargetIndexRef = useRef(null);

  const items = useMemo(() => [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ], [t]);

  const handleNavClick = (_, index) => {
    manualTargetIndexRef.current = index;
    sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index);
  };

  useEffect(() => {
    const getClosestSectionIndex = (sections, activationLine) => (
      sections.reduce(
        (closest, section, index) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - activationLine);

          if (distance < closest.distance) {
            return { index, distance };
          }

          return closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY }
      ).index
    );

    const sectionElements = sectionRefs
      .map((ref) => ref.current)
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;
      const activationLine = window.innerHeight * 0.35;

      if (manualTargetIndexRef.current !== null) {
        const targetSection = sectionRefs[manualTargetIndexRef.current]?.current;

        if (targetSection) {
          const rect = targetSection.getBoundingClientRect();
          const targetReached =
            rect.top <= activationLine && rect.bottom > activationLine;

          if (!targetReached) {
            setActiveIndex((currentIndex) =>
              currentIndex === manualTargetIndexRef.current
                ? currentIndex
                : manualTargetIndexRef.current
            );
            return;
          }
        }

        manualTargetIndexRef.current = null;
      }

      const visibleIndex = sectionElements.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= activationLine && rect.bottom > activationLine;
      });

      const nextIndex =
        visibleIndex === -1
          ? getClosestSectionIndex(sectionElements, activationLine)
          : visibleIndex;

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex
      );
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [sectionRefs]);

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
