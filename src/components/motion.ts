import { Variants } from 'framer-motion';

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
type ReducedMotionPreference = boolean | null | undefined;

export const fadeUp = (reducedMotion?: ReducedMotionPreference): Variants => {
  const prefersReducedMotion = reducedMotion ?? false;

  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: easing,
      },
    },
  };
};

export const fadeIn = (reducedMotion?: ReducedMotionPreference): Variants => {
  const prefersReducedMotion = reducedMotion ?? false;

  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: easing,
      },
    },
  };
};

export const staggerContainer = (reducedMotion?: ReducedMotionPreference): Variants => {
  const prefersReducedMotion = reducedMotion ?? false;

  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };
};

export const hoverLift = (reducedMotion?: ReducedMotionPreference): Variants => {
  const prefersReducedMotion = reducedMotion ?? false;

  return {
    rest: {
      y: 0,
      boxShadow: '0 14px 30px -24px rgba(15, 23, 42, 0.45)',
    },
    hover: {
      y: prefersReducedMotion ? 0 : -6,
      boxShadow: prefersReducedMotion
        ? '0 14px 30px -24px rgba(15, 23, 42, 0.45)'
        : '0 24px 50px -32px rgba(37, 99, 235, 0.45)',
      transition: {
        ...(prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 20 }),
      },
    },
  };
};
