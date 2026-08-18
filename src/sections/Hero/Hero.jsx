import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personal } from '../../data/portfolio.js';
import './Hero.css';

export default function Hero() {
  const ref = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;

    const particles = [];
    const PARTICLE_COUNT = 70;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // draw dots
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={ref}>
      {/* Particle BG */}
      <motion.div className="hero__canvas-wrap" style={{ scale: bgScale }}>
        <canvas ref={canvasRef} className="hero__canvas" />
      </motion.div>

      {/* Grid lines */}
      <div className="hero__grid" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      {/* Content */}
      <div className="hero__content">
        <motion.div
          className="hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: subtitleOpacity }}
        >
          <span className="hero__label-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero__name"
          style={{ y: nameY, scale: nameScale, opacity: nameOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {personal.name.split(' ').map((word, i) => (
            <span key={i} className="hero__name-word">{word}</span>
          ))}
        </motion.h1>

        <motion.div
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: subtitleOpacity }}
        >
          {personal.title}
        </motion.div>

        <motion.p
          className="hero__statement"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: subtitleOpacity }}
        >
          {personal.heroStatement}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: subtitleOpacity }}
        >
          <a href="#projects" className="btn btn--primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href={personal.resumeUrl} className="btn btn--outline" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ opacity: subtitleOpacity }}
        >
          <a href={personal.github} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`} className="hero__social-link" aria-label="Email">
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: subtitleOpacity }}
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
        <span>Scroll</span>
      </motion.button>

      {/* Tech pills */}
      <motion.div
        className="hero__pills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ opacity: subtitleOpacity }}
      >
        {['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL', '.NET'].map((tech, i) => (
          <motion.span
            key={tech}
            className="hero__pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.07 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
