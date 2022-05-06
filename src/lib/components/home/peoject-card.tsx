import {
  Text,
  AspectRatio,
  Card,
  Group,
  Button,
  Stack,
  TypographyStylesProvider,
} from '@mantine/core'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { slideY } from '$lib/animation/slide'
import { Project } from '$graphql/generated'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const image = project.images?.at(0)
  return (
    <Link href="/projects/[id]" as={`/projects/${project.id}`} passHref>
      <Card<typeof motion.a>
        shadow="sm"
        p="lg"
        component={motion.a}
        variants={slideY(60)}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.025,
          transition: {
            type: 'spring',
          },
        }}
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
                onClick={e => e.stopPropagation()}
                onClickCapture={e => e.stopPropagation()}
              >
                Watch Demo
              </Button>
            </Link>
          ) : (
            <NoDemo />
          )}
          {project.source ? (
            <Link href={project.source} passHref>
              <Button<'a'>
                component="a"
                variant="light"
                // color="blue"
                fullWidth
                target="_blank"
                onClick={e => e.stopPropagation()}
                onClickCapture={e => e.stopPropagation()}
              >
                View Source Code
              </Button>
            </Link>
          ) : (
            <NoSourceCode />
          )}
        </Stack>
      </Card>
    </Link>
  )
}

ProjectCard.displayName = 'MyProjectCard'

export default ProjectCard

const NoDemo = () => (
  <Button
    variant="outline"
    // color="blue"
    fullWidth
    disabled
  >
    No Demo
  </Button>
)

const NoSourceCode = () => (
  <Button
    // component="a"
    variant="light"
    // color="blue"
    fullWidth
    disabled
  >
    No Source Code
  </Button>
)
