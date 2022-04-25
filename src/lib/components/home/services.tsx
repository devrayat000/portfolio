import { Box, Title, Text } from '@mantine/core'

type Props = {}

const Services = (props: Props) => {
  return (
    <Box>
      <Title order={2} align="center">
        My Services
      </Title>
      <Text
        component="p"
        align="center"
        sx={theme => ({
          maxWidth: '65ch',
          marginLeft: 'auto',
          marginRight: 'auto',
        })}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Text>
    </Box>
  )
}

export default Services
