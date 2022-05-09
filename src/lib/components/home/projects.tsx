import { Box } from '@mantine/core'
// import { ErrorBoundary } from 'react-error-boundary'

import ProjectsList from './projects-list'
import Label from './label'

type Props = {}

const Projects = (props: Props) => {
  return (
    <Box>
      <Label
        title="Projects"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      {/* <ErrorBoundary fallbackRender={props => <h1>{props.error.message}</h1>}> */}
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <ProjectsList />
      {/* </Suspense> */}
      {/* </ErrorBoundary> */}
    </Box>
  )
}

export default Projects
