import { Box, Title, Text, SimpleGrid, Paper, Center } from '@mantine/core'
import Label from './label'

type Props = {}

const Services = (props: Props) => {
  return (
    <Box>
      <Label
        title="My Services"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />

      <SimpleGrid cols={3}>
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
      </SimpleGrid>
    </Box>
  )
}

export default Services
