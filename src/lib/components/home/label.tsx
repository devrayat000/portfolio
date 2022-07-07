import { Center, Text, Title } from '@mantine/core'

import { MotionContainer } from '$lib/animation'
import { grow } from '$lib/animation/grow'

export interface LabelProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ title, subtitle }) => {
  return (
    <MotionContainer
      fluid
      mb="lg"
      // component={m.div}
      variants={grow(0.6)}
      whileInView="show"
      viewport={{ once: true }}
    >
      <Title order={2} align="center">
        {title}
      </Title>
      {subtitle && (
        <Center>
          <Text
            component="p"
            align="center"
            color="dimmed"
            sx={theme => ({
              [theme.fn.largerThan('md')]: {
                maxWidth: '50%',
              },
            })}
          >
            {subtitle}
          </Text>
        </Center>
      )}
    </MotionContainer>
  )
}

Label.displayName = 'MyLabel'

export default Label
