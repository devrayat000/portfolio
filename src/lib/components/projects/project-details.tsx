import {
  Title,
  TypographyStylesProvider,
  Breadcrumbs,
  Text,
  SimpleGrid,
} from '@mantine/core'
import Carousel from 'framer-motion-carousel'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import {
  AdvancedImage,
  placeholder,
  lazyload,
  responsive,
} from '@cloudinary/react'

import { Project } from '$graphql/generated'
import { cld } from '$lib/services/cloudinary'

type Props = {
  project?: Project | null
  isModal?: boolean
}

function ProjectDetails({ project, isModal }: Props) {
  return (
    <SimpleGrid
      cols={1}
      spacing="md"
      breakpoints={[
        {
          minWidth: 'md',
          cols: 2,
          spacing: 80,
        },
      ]}
      {...(!isModal ? { py: 'xl', my: 'xl', px: 'lg' } : {})}
      style={{ placeItems: 'center' }}
    >
      <section>
        <Carousel autoPlay interval={4000} loop>
          {project?.images?.map(image => (
            <AdvancedImage
              key={image.id}
              width="100%"
              height="360rem"
              cldImg={cld.image('Portfolio/' + image?.image?.id)}
              plugins={[placeholder(), lazyload(), responsive()]}
            />
          ))}
        </Carousel>
      </section>
      <section>
        <Title order={1} mb="xl">
          {project?.title}
        </Title>
        <Text mb="xs">Tags:</Text>
        <Breadcrumbs separator="•" mb="md">
          {project?.tags &&
            project?.tags?.map(tag => (
              <Text
                key={tag.id}
                sx={theme => ({ color: theme.primaryColor })}
                component="p"
              >
                {tag.name}
              </Text>
            ))}
        </Breadcrumbs>
        <TypographyStylesProvider>
          <DocumentRenderer document={project?.description?.document} />
        </TypographyStylesProvider>
      </section>
    </SimpleGrid>
  )
}

ProjectDetails.defaultProps = {
  isModal: false,
}

export default ProjectDetails
