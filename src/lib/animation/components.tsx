import {
  Group,
  Stack,
  Container,
  SimpleGrid,
  Progress,
  Anchor,
  type AnchorProps,
} from '@mantine/core'
import { m } from 'framer-motion'

export const MotionGroup = m(Group)
export const MotionStack = m(Stack)
export const MotionContainer = m(Container)
export const MotionSimpleGrid = m(SimpleGrid)

export const MotionProgress = m(Progress)

export const MotionAnchor = (props: AnchorProps<typeof m.a>) => (
  <Anchor<typeof m.a> {...props} />
)
