import { type Project, useGetDemoProjectsQuery } from '$graphql/generated'
import { stagger } from '$lib/animation/stagger'
import ProjectCard from './peoject-card'
import { MotionSimpleGrid } from '$lib/animation'
// import { useGetProjectsQuery } from '$graphql/query-types-hooks'

type Props = {}

const ProjectsList = () => {
  const [{ data }] = useGetDemoProjectsQuery()

  // const { classes } = useStyles()

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
      {data?.projects?.map(project => {
        return <ProjectCard key={project.id} project={project as Project} />
      })}
    </MotionSimpleGrid>
  )
}

export default ProjectsList
