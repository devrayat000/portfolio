import { Variants } from 'framer-motion'

export const expandX = (value: number = 100): Variants => ({
  hidden: {
    width: 0,
    opacity: 0.7,
  },
  show: {
    width: `${value}%`,
    opacity: 1,
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
      ease: 'easeInOut',
    },
  },
})

export const expandY = (value: number = 100): Variants => ({
  hidden: {
    height: 0,
    opacity: 0.7,
  },
  show: {
    height: `${value}%`,
    opacity: 1,
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
      ease: 'easeInOut',
    },
  },
})
