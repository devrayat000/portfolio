import {
  Text,
  AspectRatio,
  Card,
  Group,
  Button,
  Stack,
  TypographyStylesProvider,
  createStyles,
} from '@mantine/core'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image'

import { useGetProjectsQuery } from '$graphql/generated'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
// import { useGetProjectsQuery } from '$graphql/query-types-hooks'

type Props = {}
// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99]

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.1,
      when: 'beforeChildren',
    },
  },
}

// Custom variant
const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      type: 'spring',
    },
  },
  // hover: { scale: 1.025 },
  // tap: {
  //   scale: 0.975,
  //   transition: {
  //     type: 'spring',
  //   },
  // },
}

const useStyles = createStyles(theme => ({
  projectGrid: {
    display: 'grid',
    gap: theme.spacing.sm,
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
  },
}))

const ProjectsList = () => {
  const [{ data }] = useGetProjectsQuery()

  const { classes } = useStyles()

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={classes.projectGrid}
    >
      {data?.projects?.map(project => {
        const image = project.images?.at(0)
        return (
          <Link
            key={project.id}
            href="/projects/[id]"
            as={`/projects/${project.id}`}
            passHref
          >
            <Card<typeof motion.a>
              shadow="sm"
              p="lg"
              component={motion.a}
              variants={fadeInUp}
              viewport={{ once: true }}
              whileHover={{ scale: 1.025 }}
              whileTap={{
                scale: 0.975,
                transition: {
                  type: 'spring',
                },
              }}
            >
              <Card.Section>
                <AspectRatio ratio={3 / 2} sx={{ position: 'relative' }}>
                  <Image
                    src={image?.image?.url!}
                    alt={image?.label!}
                    layout="fill"
                    objectFit="cover"
                  />
                </AspectRatio>
              </Card.Section>

              <Group
                position="apart"
                sx={theme => ({
                  marginBottom: 5,
                  marginTop: theme.spacing.sm,
                })}
              >
                <Text weight={500}>{project.title}</Text>
              </Group>

              <TypographyStylesProvider
                sx={{
                  '& > *': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    msTextOverflow: 'ellipsis',
                    WebkitLineClamp: 1,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                  },
                }}
              >
                <DocumentRenderer document={project.description?.document} />
              </TypographyStylesProvider>

              <Stack spacing="xs">
                {project.demo ? (
                  <Link href={project.demo} passHref>
                    <Button<'a'>
                      component="a"
                      variant="outline"
                      // color="blue"
                      fullWidth
                      target="_blank"
                      onClickCapture={e => e.preventDefault()}
                    >
                      Watch Demo
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    // color="blue"
                    fullWidth
                    disabled
                  >
                    No Demo
                  </Button>
                )}
                {project.source ? (
                  <Link href={project.source} passHref>
                    <Button<'a'>
                      component="a"
                      variant="light"
                      // color="blue"
                      fullWidth
                      target="_blank"
                    >
                      View Source Code
                    </Button>
                  </Link>
                ) : (
                  <Button
                    // component="a"
                    variant="light"
                    // color="blue"
                    fullWidth
                    disabled
                  >
                    No Source Code
                  </Button>
                )}
              </Stack>
            </Card>
          </Link>
        )
      })}
    </motion.div>
  )
}

export default ProjectsList
