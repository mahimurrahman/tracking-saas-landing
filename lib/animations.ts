import type { Transition, Variants, ViewportOptions } from "framer-motion";

const ease: Transition["ease"] = [0.16, 1, 0.3, 1];

export const viewportOnce: ViewportOptions = {
  once: true,
  amount: 0.2
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease
    }
  }
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease
    }
  }
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const accordionContent: Variants = {
  closed: {
    height: 0,
    opacity: 0
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.25,
      ease
    }
  }
};

export const cardHover = {
  y: -6,
  scale: 1.01,
  transition: {
    duration: 0.2,
    ease
  }
};
