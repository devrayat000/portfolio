import {
  Text,
  AspectRatio,
  Card,
  Group,
  Button,
  Stack,
  TypographyStylesProvider,
  Image as MImage,
} from '@mantine/core'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { m as motion } from 'framer-motion'
import {
  AdvancedImage,
  placeholder,
  lazyload,
  responsive,
} from '@cloudinary/react'

import { slideY } from '$lib/animation/slide'
import { Project } from '$graphql/generated'
import { cld } from '$lib/services/cloudinary'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const images = project.images

  return (
    <Link href="/projects/[id]" as={`/projects/${project.id}`} passHref>
      <Card<typeof motion.div>
        shadow="sm"
        p="lg"
        component={motion.div}
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
        sx={{
          cursor: 'pointer',
        }}
      >
        <Card.Section
          component={motion.section}
          layoutId={`project-${project.id}`}
        >
          <AspectRatio ratio={3 / 2} sx={{ position: 'relative' }}>
            {images && images.length > 0 ? (
              // <Image
              //   key={images[0]?.id}
              //   src={images[0]?.image?.publicUrl!}
              //   alt={images[0]?.label!}
              //   layout="fill"
              //   objectFit="cover"
              // />
              <AdvancedImage
                cldImg={cld.image('Portfolio/' + images[0]?.image?.id!)}
                plugins={[placeholder(), lazyload(), responsive()]}
              />
            ) : (
              <MImage withPlaceholder />
            )}
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
            <Button<'a'>
              component="a"
              variant="outline"
              href={project.demo}
              fullWidth
              target="_blank"
              onClick={e => e.stopPropagation()}
              onClickCapture={e => e.stopPropagation()}
            >
              Watch Demo
            </Button>
          ) : (
            <NoDemo />
          )}
          {project.source ? (
            <Button<'a'>
              variant="light"
              component="a"
              href={project.source}
              fullWidth
              target="_blank"
              onClick={e => e.stopPropagation()}
              onClickCapture={e => e.stopPropagation()}
            >
              View Source Code
            </Button>
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
