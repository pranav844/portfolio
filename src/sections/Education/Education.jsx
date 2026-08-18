import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, experience, certifications } from '../../data/portfolio.js';
import './Education.css';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" className="edu section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          Education & Experience
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Where I've <span className="gradient-text">learned</span>
        </motion.h2>

        <div className="edu__grid">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 className="edu__section-heading">Education</h3>
            <div className="edu__cards">
              {education.map((ed, i) => (
                <div key={i} className={`edu__card glass-card ${ed.highlight ? 'edu__card--highlight' : ''}`}>
                  <div className="edu__card-year">{ed.year}</div>
                  <div className="edu__card-degree">{ed.degree}</div>
                  <div className="edu__card-institution">{ed.institution}</div>
                  <div className="edu__card-location">{ed.location}</div>
                  <div className="edu__card-focus">{ed.focus}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="edu__section-heading">Experience</h3>
            <div className="edu__cards">
              {experience.map((exp, i) => (
                <div key={i} className="edu__card edu__card--exp glass-card">
                  <div className="edu__card-period">{exp.period}</div>
                  <div className="edu__card-role">{exp.role}</div>
                  <div className="edu__card-company">{exp.company}</div>
                  <div className="edu__card-type-badge">{exp.type}</div>
                  <div className="edu__card-tech">
                    {exp.tech.map(t => (
                      <span key={t} className="edu__tech-tag">{t}</span>
                    ))}
                  </div>
                  <ul className="edu__card-points">
                    {exp.points.map((p, pi) => (
                      <li key={pi}>
                        <span className="edu__bullet">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          className="edu__certs"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="edu__section-heading">Certifications</h3>
          <div className="edu__cert-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="edu__cert glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.08 }}
                style={{ '--cert-color': cert.color }}
              >
                <div className="edu__cert-bar" />
                <div className="edu__cert-name">{cert.name}</div>
                <div className="edu__cert-issuer">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
