import { grow } from '$lib/animation/grow'
import { Center, Text, Title } from '@mantine/core'
import { m } from 'framer-motion'

export interface LabelProps {
  title: React.ReactNode
  subtitle: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ title, subtitle }) => {
  return (
    <m.div variants={grow(0.6)} whileInView="show" viewport={{ once: true }}>
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
