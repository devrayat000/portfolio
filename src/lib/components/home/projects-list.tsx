import { Center, Loader, LoadingOverlay } from '@mantine/core'

import {
  type Project,
  useGetDemoProjectsQuery,
  useGetProjectsByTagQuery,
} from '$graphql/generated'
import { stagger } from '$lib/animation/stagger'
import ProjectCard from './peoject-card'
import { MotionSimpleGrid } from '$lib/animation'
import ErrorHandler from '../common/error-handler'

type Props = {
  slug: string
}

export const TaggedProjectsList = (props: Props) => {
  const [{ data, fetching, error }, retry] = useGetProjectsByTagQuery({
    variables: { tag: props.slug! },
  })

  if (error) {
    return <ErrorHandler message={error.message} retry={retry} />
  }

  if (fetching)
    return (
      <Center>
        <Loader />
      </Center>
    )

  return Projects(data?.projects)
}

export const AllProjectsList = () => {
  const [{ data, error }, retry] = useGetDemoProjectsQuery()

  if (error) {
    return <ErrorHandler message={error.message} retry={retry} />
  }

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
