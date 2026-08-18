import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Journey',    href: '#journey' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Backend',    href: '#backend' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 80);
      setScrolled(y > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="navbar__inner">
            <a className="navbar__logo" href="#hero" onClick={e => handleNav(e, '#hero')}>
              PS
            </a>

            {/* Desktop links */}
            <ul className="navbar__links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar__link ${active === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                    onClick={e => handleNav(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="navbar__cta btn btn--primary"
              href="#contact"
              onClick={e => handleNav(e, '#contact')}
            >
              Let's Talk
            </a>

            {/* Mobile hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="navbar__mobile"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={e => handleNav(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
