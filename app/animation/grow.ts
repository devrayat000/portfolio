import { type Variants } from "framer-motion";

export const grow = (size: number): Variants => ({
  hidden: { opacity: 0, scale: size, y: "50%" },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
});
