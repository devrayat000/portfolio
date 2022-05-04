import { CustomValueType, type Variants } from 'framer-motion'

type Val = string | number | CustomValueType

export const slideX = (x: Val | Val[]): Variants => ({
  hidden: { opacity: 0, x: x },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', when: 'beforeChildren' },
  },
})

export const slideY = (y: Val | Val[]): Variants => ({
  hidden: { opacity: 0, y: y },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', when: 'beforeChildren' },
  },
})
