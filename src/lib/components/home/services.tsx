import { Box, Title, Text, SimpleGrid, Paper, Center } from '@mantine/core'

type Props = {}

const Services = (props: Props) => {
  return (
    <Box>
      <Title order={2} align="center">
        My Services
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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </Center>
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
