import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../../data/portfolio.js';
import './About.css';

const traits = [
  { label: 'Backend Architecture', icon: '⚙' },
  { label: 'Clean Code', icon: '◈' },
  { label: 'Problem Solving', icon: '⬡' },
  { label: 'Adaptability', icon: '↯' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about__inner"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Left */}
          <div className="about__left">
            <motion.span className="section-label" variants={item}>About Me</motion.span>

            <motion.h2 className="about__heading" variants={item}>
              Engineer by training.<br />
              <span className="gradient-text">Developer by choice.</span>
            </motion.h2>

            <motion.p className="about__bio" variants={item}>
              {personal.bio}
            </motion.p>

            {/* Traits */}
            <motion.div className="about__traits" variants={item}>
              {traits.map(t => (
                <div key={t.label} className="about__trait">
                  <span className="about__trait-icon">{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="about__actions" variants={item}>
              <a href={personal.resumeUrl} className="btn btn--primary" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a href={`mailto:${personal.email}`} className="btn btn--ghost">
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right — profile card */}
          <motion.div className="about__right" variants={item}>
            <div className="about__card glass-card">
              <div className="about__photo-wrap">
                <img
                  src="/profile.jpeg"
                  alt="Pranav Saxena"
                  className="about__photo"
                  loading="lazy"
                />
                <div className="about__photo-glow" />
              </div>

              <div className="about__card-info">
                <div className="about__card-name">Pranav Saxena</div>
                <div className="about__card-title">Full Stack Developer</div>

                <div className="about__card-tags">
                  <span className="about__tag">Java</span>
                  <span className="about__tag">Spring Boot</span>
                  <span className="about__tag">React.js</span>
                  <span className="about__tag">MySQL</span>
                  <span className="about__tag">.NET</span>
                  <span className="about__tag">Microservices</span>
                </div>
              </div>

              {/* Transition card */}
              <div className="about__transition-card">
                <span className="about__tc-label">Career Pivot</span>
                <div className="about__tc-flow">
                  <span>Civil Engineering</span>
                  <span className="about__tc-arrow">→</span>
                  <span className="about__tc-highlight">Software Development</span>
                </div>
                <p className="about__tc-desc">
                  Proof that determination &gt; degree
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          className="about__manifesto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about__manifesto-line" />
          <p>"I didn't take the traditional path — I chose software development because I love building things that work."</p>
          <div className="about__manifesto-line" />
        </motion.div>
      </div>
    </section>
  );
}
