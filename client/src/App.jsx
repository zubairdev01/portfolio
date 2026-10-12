import { useState } from 'react';
import useTheme from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function App() {
  const [theme, toggle] = useTheme();
  const [lb, setLb] = useState(null); // { items, i }
  const open = (items, i) => setLb({ items, i });
  return (
    <>
      <Header theme={theme} toggle={toggle} />
      <main id="top">
        <div className="wrap">
          <Hero /><About /><Skills />
          <Projects open={open} /><Learning open={open} /><Contact />
        </div>
      </main>
      <Footer />
      {lb && <Lightbox items={lb.items} index={lb.i} onChange={(i) => setLb({ ...lb, i })} onClose={() => setLb(null)} />}
    </>
  );
}
