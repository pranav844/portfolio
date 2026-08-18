import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Journey from './sections/Journey/Journey.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Backend from './sections/Backend/Backend.jsx';
import Education from './sections/Education/Education.jsx';
import Contact from './sections/Contact/Contact.jsx';
import { useLenis } from './hooks/useLenis.js';

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  // Prevent scroll during loader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />

      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Journey />
            <Projects />
            <Backend />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
