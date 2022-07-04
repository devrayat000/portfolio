import {
  Text,
  AspectRatio,
  Image as MImage,
  Overlay,
  Box,
  Transition,
  Center,
} from '@mantine/core'
import Link from 'next/link'
import { m } from 'framer-motion'
import {
  AdvancedImage,
  placeholder,
  lazyload,
  responsive,
} from '@cloudinary/react'
import { useHover } from '@mantine/hooks'

import { slideY } from '$lib/animation/slide'
import { Project } from '$graphql/generated'
import { cld } from '$lib/services/cloudinary'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const { hovered, ref } = useHover<HTMLAnchorElement>()

  const images = project.images

  return (
    <Link href="/p/[id]" as={`/p/${project.id}`} passHref>
      <Box
        component={m.a}
        sx={{ position: 'relative' }}
        ref={ref}
        variants={slideY(20)}
        viewport={{ once: true }}
      >
        <Transition
          mounted={hovered}
          transition="fade"
          duration={400}
          timingFunction="ease"
        >
          {styles => (
            <Box
              style={styles}
              sx={{ position: 'absolute', inset: 0, h: 0, w: 0, zIndex: 5 }}
              p="sm"
            >
              <Center
                sx={{ zIndex: 7, position: 'absolute', inset: 0, h: 0, w: 0 }}
              >
                <Text weight="bold" size="xl" color="orange">
                  {project.title}
                </Text>
              </Center>
              <Overlay opacity={0.7} color="#000" blur={1} zIndex={6} />
            </Box>
          )}
        </Transition>
        <AspectRatio ratio={3 / 2} sx={{ position: 'relative' }}>
          {images && images.length > 0 ? (
            <AdvancedImage
              cldImg={cld.image('Portfolio/' + images[0]?.image?.id!)}
              plugins={[placeholder(), lazyload(), responsive()]}
            />
          ) : (
            <MImage withPlaceholder />
          )}
        </AspectRatio>
      </Box>
    </Link>
  )
}

ProjectCard.displayName = 'MyProjectCard'

export default ProjectCard
