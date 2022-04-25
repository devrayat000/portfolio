import { Button, Paper, Title, Text } from '@mantine/core'
import { ArrowRight } from 'tabler-icons-react'

interface IntroProps {}

const Intro: React.FC<IntroProps> = props => {
  return (
    <Paper p={12 * 4} shadow="md" radius="sm" mb="xl">
      <Title order={1}>
        I’m Zul Ikram Musaddik Rayat
        <br />
        <Text color="yellow" size="lg" component="span">
          Full-stack
        </Text>{' '}
        Developer
      </Title>
      <Text variant="text" component="p" sx={{ maxWidth: '50%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </Text>
      <Button type="button" size="md" rightIcon={<ArrowRight size={16} />}>
        Hire Me
      </Button>
    </Paper>
  )
}

export default Intro
