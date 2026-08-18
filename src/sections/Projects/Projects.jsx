import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../../data/portfolio.js';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          What I've <span className="gradient-text">built</span>
        </motion.h2>

        <div className="projects__list">
          {projects.map((project, pi) => (
            <motion.div
              key={project.id}
              className={`project-card glass-card ${expanded === project.id ? 'project-card--expanded' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + pi * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--project-color': project.color }}
            >
              {/* Header */}
              <div className="project-card__header">
                <div className="project-card__meta">
                  <span className="project-card__year">{project.year}</span>
                  <span className="project-card__status">{project.status}</span>
                </div>

                <div className="project-card__top">
                  <div>
                    <h3 className="project-card__name">{project.name}</h3>
                    <p className="project-card__tagline">{project.tagline}</p>
                  </div>

                  <div className="project-card__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link" aria-label="GitHub">
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="project-card__link" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="project-card__tech">
                  {project.tech.map(t => (
                    <span key={t} className="project-card__tech-item">{t}</span>
                  ))}
                </div>

                {/* Problem/Solution preview */}
                <div className="project-card__preview">
                  <div className="project-card__preview-block">
                    <span className="project-card__preview-label">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-card__preview-block">
                    <span className="project-card__preview-label">Solution</span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <button
                  className="project-card__toggle"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  aria-expanded={expanded === project.id}
                >
                  {expanded === project.id ? (
                    <><ChevronUp size={16} /> Collapse Case Study</>
                  ) : (
                    <><ChevronDown size={16} /> View Full Case Study</>
                  )}
                </button>
              </div>

              {/* Expanded case study */}
              <AnimatePresence>
                {expanded === project.id && (
                  <motion.div
                    className="project-card__detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="project-detail">
                      {/* My Role */}
                      <div className="project-detail__block">
                        <h4 className="project-detail__heading">My Role</h4>
                        <p>{project.role}</p>
                      </div>

                      {/* Architecture */}
                      {project.architecture && (
                        <div className="project-detail__block">
                          <h4 className="project-detail__heading">System Architecture</h4>
                          <div className="project-arch">
                            {project.architecture.layers.map((layer, li) => (
                              <motion.div
                                key={layer.name}
                                className="project-arch__layer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: li * 0.07, duration: 0.5 }}
                                style={{ '--layer-color': layer.color }}
                              >
                                <div className="project-arch__layer-dot" />
                                <div className="project-arch__layer-content">
                                  <span className="project-arch__layer-name">{layer.name}</span>
                                  <span className="project-arch__layer-desc">{layer.desc}</span>
                                </div>
                                {li < project.architecture.layers.length - 1 && (
                                  <div className="project-arch__connector" />
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      <div className="project-detail__block">
                        <h4 className="project-detail__heading">Key Features</h4>
                        <ul className="project-detail__features">
                          {project.features.map(f => (
                            <li key={f}>
                              <span className="project-detail__bullet">▹</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenge */}
                      <div className="project-detail__block project-detail__challenge">
                        <div className="project-detail__challenge-header">
                          <span className="project-detail__challenge-label">Engineering Challenge</span>
                          <h4 className="project-detail__challenge-title">{project.challenge.title}</h4>
                        </div>
                        <p>{project.challenge.description}</p>
                      </div>

                      {/* CTA */}
                      <div className="project-detail__cta">
                        {project.github && (
                          <a href={project.github} className="btn btn--outline" target="_blank" rel="noreferrer">
                            <Github size={16} /> View on GitHub
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} className="btn btn--primary" target="_blank" rel="noreferrer">
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
