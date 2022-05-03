import { Center, Text, Title } from '@mantine/core'
import { motion as m, type Variants } from 'framer-motion'

const labelGrow: Variants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}

export interface LabelProps {
  title: React.ReactNode
  subtitle: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ title, subtitle }) => {
  return (
    <m.div
      variants={labelGrow}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Title order={2} align="center">
        {title}
      </Title>
      <Center inline>
        <Text
          component="p"
          align="center"
          color="dimmed"
          sx={{
            maxWidth: '50%',
          }}
        >
          {subtitle}
        </Text>
      </Center>
    </m.div>
  )
}

Label.displayName = 'MyLabel'

export default Label
