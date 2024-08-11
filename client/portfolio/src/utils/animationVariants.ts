import type { Variants } from 'framer-motion';

export const greetingVariants: Variants = {
  container: {
    height: 0,
    opacity: 0,
    transition: { delay: 2 },
    transitionEnd: { display: 'none' },
  },
  item: (idx) => ({
    opacity: [0, 1],
    transition: {
      duration: 0.25,
      staggerChildren: 0.25,
    },
    transitionEnd: { opacity: idx < 5 ? 0 : 1 },
  }),
};

export const heroVariants: Variants = {
  title: {
    left: ['-100%', 0],
    transition: {
      duration: 0.5,
      delayChildren: 2.2,
      staggerChildren: 0.5,
    },
  },
  desc: {
    top: ['-100%', 0],
    transition: {
      duration: 0.5,
      delay: 3,
    },
  },
};

export const shortIntroVariants: Variants = {
  name: {
    width: [0, '100%'],
    transition: { delay: 4 },
  },
  skills: {
    left: ['-100%', 0],
    transition: { duration: 1, delay: 4.2 },
  },
};
