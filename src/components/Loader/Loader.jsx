import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=name, 1=title, 2=progress, 3=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => onComplete(), 2400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader__grid" />
          <div className="loader__content">
            <motion.div
              className="loader__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              PRANAV SAXENA
            </motion.div>

            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  className="loader__title"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  FULL STACK DEVELOPER
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  className="loader__bar-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="loader__bar"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* corner accents */}
          <span className="loader__corner loader__corner--tl" />
          <span className="loader__corner loader__corner--tr" />
          <span className="loader__corner loader__corner--bl" />
          <span className="loader__corner loader__corner--br" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
