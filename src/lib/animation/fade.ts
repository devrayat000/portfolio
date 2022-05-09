import { Variants } from 'framer-motion'

export const pageFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: 'beforeChildren' } },
}
