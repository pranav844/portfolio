import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { backendConcepts, apiFlow } from '../../data/portfolio.js';
import './Backend.css';

export default function Backend() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="backend" className="backend section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          Backend Engineering
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          How I think about <span className="gradient-text">backend systems</span>
        </motion.h2>

        <div className="backend__grid">
          {/* Left — Request flow */}
          <motion.div
            className="backend__panel glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="backend__panel-title">MVC Layered Architecture</h3>
            <p className="backend__panel-sub">Every request travels through clearly separated layers</p>

            <div className="backend__flow">
              {backendConcepts.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="backend__step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="backend__step-number">{step.step}</div>
                  <div className="backend__step-content">
                    <div className="backend__step-label">{step.label}</div>
                    <div className="backend__step-desc">{step.desc}</div>
                  </div>
                  {i < backendConcepts.length - 1 && (
                    <div className="backend__step-arrow">↓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — API / Auth flow */}
          <div className="backend__right">
            <motion.div
              className="backend__panel glass-card"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="backend__panel-title">JWT Authentication Flow</h3>
              <p className="backend__panel-sub">POST /auth/login → protected resource</p>

              <div className="api-flow">
                {apiFlow.map((node, i) => (
                  <motion.div
                    key={node.label}
                    className={`api-flow__node api-flow__node--${node.type}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.45 }}
                  >
                    <span className="api-flow__label">{node.label}</span>
                    <span className="api-flow__desc">{node.desc}</span>
                    {i < apiFlow.length - 1 && (
                      <motion.div
                        className="api-flow__connector"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Engineering principles */}
            <motion.div
              className="backend__principles glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <h3 className="backend__panel-title">Engineering Mindset</h3>
              <div className="backend__mindset">
                {[
                  { icon: '◈', text: 'Understand the system before writing code' },
                  { icon: '⚙', text: 'Separation of concerns — controllers, services, repositories' },
                  { icon: '⬡', text: 'Design API contracts and data flow first' },
                  { icon: '◉', text: 'Validate behavior through testing' },
                  { icon: '↯', text: 'Debug systematically, not by guessing' },
                  { icon: '→', text: 'Optimize only when you can measure' },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="backend__principle"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.55 + i * 0.07 }}
                  >
                    <span className="backend__principle-icon">{p.icon}</span>
                    <span>{p.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Build → Test → Measure → Improve */}
        <motion.div
          className="backend__cycle"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {['Build', 'Test', 'Measure', 'Improve'].map((step, i, arr) => (
            <div key={step} className="backend__cycle-row">
              <div className="backend__cycle-step">
                <span className="backend__cycle-num">0{i + 1}</span>
                <span className="backend__cycle-label">{step}</span>
              </div>
              {i < arr.length - 1 && <span className="backend__cycle-arrow">→</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
