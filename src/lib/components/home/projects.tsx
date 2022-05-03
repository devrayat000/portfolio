import { Box, Title, Text, Center, createStyles } from '@mantine/core'
import { motion, type Variants } from 'framer-motion'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'

import { useGetProjectsQuery } from '$graphql/generated'
import ProjectsList from './projects-list'
import Label from './label'

type Props = {}
// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99]

const Projects = (props: Props) => {
  return (
    <Box>
      <Label
        title="Projects"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <ErrorBoundary fallbackRender={props => <h1>{props.error.message}</h1>}>
        {/* <Suspense fallback={<h1>Loading...</h1>}> */}
        <ProjectsList />
        {/* </Suspense> */}
      </ErrorBoundary>
    </Box>
  )
}

export default Projects
