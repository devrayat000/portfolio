import { Box, Title, Text, SimpleGrid, Paper, Center } from '@mantine/core'
import { motion } from 'framer-motion'

import Label from './label'

type Props = {}

const Services = (props: Props) => {
  return (
    <Box>
      <Label
        title="My Services"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ type: 'spring' }}
        viewport={{ once: true }}
      >
        <SimpleGrid cols={3}>
          <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
          <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
          <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
          <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
          <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
          <Paper style={{ aspectRatio: '3/2' }} shadow="xs" />
        </SimpleGrid>
      </motion.div>
    </Box>
  )
}

export default Services
