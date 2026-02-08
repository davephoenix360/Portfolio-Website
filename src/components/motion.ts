import { Variants } from 'framer-motion';

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = (reducedMotion = false): Variants => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      ease: easing,
    },
  },
});

export const fadeIn = (reducedMotion = false): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.5,
      ease: easing,
    },
  },
});

export const staggerContainer = (reducedMotion = false): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.12,
      delayChildren: reducedMotion ? 0 : 0.05,
    },
  },
});

export const hoverLift = (reducedMotion = false): Variants => ({
  rest: {
    y: 0,
    boxShadow: '0 14px 30px -24px rgba(15, 23, 42, 0.45)',
  },
  hover: {
    y: reducedMotion ? 0 : -6,
    boxShadow: reducedMotion
      ? '0 14px 30px -24px rgba(15, 23, 42, 0.45)'
      : '0 24px 50px -32px rgba(37, 99, 235, 0.45)',
    transition: {
      ...(reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 20 }),
    },
  },
});
