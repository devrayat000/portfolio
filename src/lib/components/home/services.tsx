import Image from 'next/image'
import { Paper, Title, Text, createStyles, Container } from '@mantine/core'

import { MotionSimpleGrid, slideX } from '$lib/animation'
import Label from './label'

type Props = {}

interface Service {
  title: string
  subtitle: string
  imageUrl: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    subtitle: 'blog, e-commerce',
    imageUrl: '/images/coding.svg',
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Mobile app, website design',
    imageUrl: '/images/illustration.svg',
  },
  {
    title: 'Mobile Development',
    subtitle: 'Mobile app, Flutter',
    imageUrl: '/images/mobile.svg',
  },
]

const useStyles = createStyles(theme => ({
  service: {
    aspectRatio: '3/2',
    padding: theme.spacing.xl,
  },
}))

const Services = (props: Props) => {
  const { classes } = useStyles()

  return (
    <Container fluid mx={0}>
      <Label
        title="My Services"
        subtitle="Services I provide as a full-stack developer."
      />
      <MotionSimpleGrid
        variants={slideX(-40)}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        cols={1}
        breakpoints={[
          {
            minWidth: 'sm',
            cols: 2,
          },
          {
            minWidth: 'md',
            cols: 3,
          },
        ]}
      >
        {services.map(service => (
          <Paper key={service.title} className={classes.service} shadow="xs">
            <div style={{ position: 'relative', height: '45%' }}>
              <Image
                src={service.imageUrl}
                alt="Coding"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <br />
            <Title order={4} align="center">
              {service.title}
            </Title>
            <Text align="center" color="gray" component="p" my="xs">
              {service.subtitle}
            </Text>
          </Paper>
        ))}
      </MotionSimpleGrid>
    </Container>
  )
}

export default Services
