import type { Variants } from "framer-motion";

export const homeVariants: Variants = {
  initial: {
    opacity: 0,
    y: 120,
    scale: 1.05,
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -80,
    transition: { duration: 0.7 },
  },
};

export const aboutVariants: Variants = {
  initial: {
    opacity: 0,
    x: -60,
    filter: "blur(6px)",
  },

  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 1, 0.5, 1],
    },
  },

  exit: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.6 },
  },
};

export const blogVariants: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },

  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },

  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const contactVariants: Variants = {
  initial: {
    opacity: 0,
    y: 120,
    scale: 0.97,
    rotateX: 8,
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.1,
      ease: [0.33, 1, 0.68, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -80,
    scale: 1.02,
    rotateX: -6,
    transition: {
      duration: 0.7,
    },
  },
};

export const cosmeticsVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.97,
    y: 60,
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },

  exit: {
    opacity: 0,
    scale: 1.03,
    y: -40,
    transition: { duration: 0.6 },
  },
};
