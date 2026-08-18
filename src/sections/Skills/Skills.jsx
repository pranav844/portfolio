import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolio.js';
import './Skills.css';

const categoryColors = {
  'Languages':        '#00d4ff',
  'Backend':          '#7c3aed',
  'Frontend':         '#06b6d4',
  'Database':         '#10b981',
  'Testing & Tools':  '#f59e0b',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState(null);

  const displayed = activeCategory
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          The <span className="gradient-text">stack</span> I work with
        </motion.h2>

        {/* Category filters */}
        <motion.div
          className="skills__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            className={`skills__filter-btn ${!activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {skills.map(s => (
            <button
              key={s.category}
              className={`skills__filter-btn ${activeCategory === s.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === s.category ? null : s.category)}
              style={{ '--cat-color': categoryColors[s.category] }}
            >
              {s.category}
            </button>
          ))}
        </motion.div>

        {/* Skill groups */}
        <div className="skills__grid">
          {displayed.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__group glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + gi * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--group-color': group.color }}
            >
              <div className="skills__group-header">
                <span className="skills__group-icon">{group.icon}</span>
                <span className="skills__group-name">{group.category}</span>
              </div>

              <div className="skills__group-bar" />

              <div className="skills__items">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="skills__item"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + gi * 0.08 + ii * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom ecosystem visual */}
        <motion.div
          className="skills__ecosystem"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="skills__eco-label">Core Architecture Pattern</div>
          <div className="skills__eco-flow">
            {['Client', 'React.js', 'REST API', 'Spring Boot', 'Service Layer', 'Hibernate', 'MySQL'].map((node, i, arr) => (
              <div key={node} className="skills__eco-row">
                <div className="skills__eco-node">{node}</div>
                {i < arr.length - 1 && (
                  <motion.div
                    className="skills__eco-arrow"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  >
                    ↓
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
