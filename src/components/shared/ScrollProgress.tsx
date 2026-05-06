import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'var(--tomato-red)',
        boxShadow: '0 0 12px rgba(200, 36, 42, 0.65)',
        transformOrigin: '0%',
        zIndex: 200,
      }}
    />
  );
};

export default ScrollProgress;
