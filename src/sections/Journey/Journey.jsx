import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { journey } from '../../data/portfolio.js';
import './Journey.css';

const typeColors = {
  education: '#00d4ff',
  experience: '#10b981',
  project: '#7c3aed',
};

const typeLabels = {
  education: 'Education',
  experience: 'Experience',
  project: 'Project',
};

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="journey" className="journey section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Development Journey
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          From <span className="gradient-text">Civil to Code</span>
        </motion.h2>

        <div className="journey__timeline">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              className={`journey__item ${item.highlight ? 'journey__item--highlight' : ''}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Timeline dot */}
              <div
                className="journey__dot"
                style={{ '--dot-color': typeColors[item.type] }}
              >
                <div className="journey__dot-inner" />
              </div>

              {/* Card */}
              <div className="journey__card glass-card">
                <div className="journey__card-top">
                  <span
                    className="journey__type"
                    style={{ color: typeColors[item.type] }}
                  >
                    {typeLabels[item.type]}
                  </span>
                  <span className="journey__year">{item.year}</span>
                </div>

                <h3 className="journey__title">{item.title}</h3>
                <div className="journey__company">{item.company}</div>
                <p className="journey__desc">{item.description}</p>

                {item.highlight && (
                  <div className="journey__highlight-badge">Featured</div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Final node */}
          <motion.div
            className="journey__final"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="journey__final-dot" />
            <div className="journey__final-label">Professional Software Engineering</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
