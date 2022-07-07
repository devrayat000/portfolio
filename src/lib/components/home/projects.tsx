import { useState } from 'react'
import { Container, Tabs } from '@mantine/core'
// import { ErrorBoundary } from 'react-error-boundary'

import { AllProjectsList, TaggedProjectsList } from './projects-list'
import Label from './label'
import { useGetTagsQuery } from '$graphql/generated'
import ErrorHandler from '../common/error-handler'

type Props = {}

const Projects = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0)
  const [{ data, error }, retry] = useGetTagsQuery()

  if (error) {
    return <ErrorHandler message={error.message} retry={retry} />
  }

  return (
    <Container id="projects" fluid mx={0}>
      <Label
        title="Projects"
        subtitle="Project I have completed so far both for clients and personal pleasure."
      />
      <Tabs active={activeTab} onTabChange={setActiveTab}>
        <Tabs.Tab label="All" tabKey="all">
          <AllProjectsList />
        </Tabs.Tab>

        {data?.tags?.map(tag => (
          <Tabs.Tab key={tag.id} label={tag.name}>
            <TaggedProjectsList slug={tag.id} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </Container>
  )
}

export default Projects
