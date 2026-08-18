import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { personal } from '../../data/portfolio.js';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            Contact
          </motion.span>

          <motion.h2
            className="contact__heading"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's build<br />
            <span className="gradient-text">something useful.</span>
          </motion.h2>

          <motion.p
            className="contact__sub"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I'm actively looking for full-stack and backend roles. If you have an opportunity that aligns with my skills, I'd love to hear from you.
          </motion.p>

          <motion.div
            className="contact__links"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <a href={`mailto:${personal.email}`} className="contact__link-card glass-card">
              <Mail size={24} />
              <div>
                <div className="contact__link-label">Email</div>
                <div className="contact__link-value">{personal.email}</div>
              </div>
            </a>

            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact__link-card glass-card">
              <Linkedin size={24} />
              <div>
                <div className="contact__link-label">LinkedIn</div>
                <div className="contact__link-value">Pranav Saxena</div>
              </div>
            </a>

            <a href={personal.github} target="_blank" rel="noreferrer" className="contact__link-card glass-card">
              <Github size={24} />
              <div>
                <div className="contact__link-label">GitHub</div>
                <div className="contact__link-value">pranav844</div>
              </div>
            </a>
          </motion.div>

          <motion.a
            href={personal.resumeUrl}
            className="btn btn--primary contact__resume-btn"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__name">PRANAV SAXENA</div>
          <div className="footer__tagline">Building. Learning. Improving.</div>
          <div className="footer__copy">© 2026 Pranav Saxena. All rights reserved.</div>
        </div>
      </footer>
    </section>
  );
}
