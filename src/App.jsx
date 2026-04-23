import './i18n/i18n';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Stack from './sections/Stack';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Contact />
    </>
  );
}
