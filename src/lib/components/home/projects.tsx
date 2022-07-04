import { Box, Tabs } from '@mantine/core'
import {} from '@mantine/hooks'
// import { ErrorBoundary } from 'react-error-boundary'

import { AllProjectsList, TaggedProjectsList } from './projects-list'
import Label from './label'
import { useGetTagsQuery } from '$graphql/generated'
import { useState } from 'react'

type Props = {}

interface TabState {
  index: number
  key?: string
}

const Projects = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0)
  const [{ data }] = useGetTagsQuery()

  return (
    <Box id="projects">
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
    </Box>
  )
}

export default Projects
