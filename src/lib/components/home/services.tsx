import { Box, Paper } from '@mantine/core'

import { MotionSimpleGrid, slideX } from '$lib/animation'
import Label from './label'

type Props = {}

const Services = (props: Props) => {
  return (
    <Box>
      <Label
        title="My Services"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <MotionSimpleGrid
        variants={slideX(-40)}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        cols={3}
      >
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
      </MotionSimpleGrid>
    </Box>
  )
}

export default Services
