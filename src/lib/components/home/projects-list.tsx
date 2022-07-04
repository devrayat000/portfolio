import { Center, Loader, LoadingOverlay } from '@mantine/core'

import {
  type Project,
  useGetDemoProjectsQuery,
  useGetProjectsByTagQuery,
} from '$graphql/generated'
import { stagger } from '$lib/animation/stagger'
import ProjectCard from './peoject-card'
import { MotionSimpleGrid } from '$lib/animation'

type Props = {
  slug: string
}

export const TaggedProjectsList = (props: Props) => {
  const [{ data, fetching }] = useGetProjectsByTagQuery({
    variables: { tag: props.slug! },
  })

  if (fetching)
    return (
      <Center>
        <Loader />
      </Center>
    )

  return Projects(data?.projects)
}

export const AllProjectsList = () => {
  const [{ data }] = useGetDemoProjectsQuery()

  return Projects(data?.projects)
}

function Projects(projects?: Project[] | null) {
  return (
    <MotionSimpleGrid
      cols={1}
      breakpoints={[
        {
          minWidth: 'md',
          cols: 2,
        },
        {
          minWidth: 'lg',
          cols: 3,
        },
      ]}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {projects?.map(project => {
        return <ProjectCard key={project.id} project={project} />
      })}
    </MotionSimpleGrid>
  )
}
