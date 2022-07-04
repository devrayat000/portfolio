import React from 'react'
import { useRouter } from 'next/router'
import { Modal, Center, Loader } from '@mantine/core'

import { useGetProjectByIdQuery } from '$graphql/generated'
import ProjectDetails from './project-details'

type Props = {
  id: string
}

function ProjectModal() {
  const router = useRouter()
  const id = router.query.project as string

  return (
    <Modal
      opened={!!id}
      onClose={() => void router.replace('/')}
      //   title={data?.project?.title}
      centered
      closeOnEscape
      closeOnClickOutside
      size={960}
      withCloseButton={false}
    >
      <Project id={id} />
    </Modal>
  )
}

function Project({ id }: Props) {
  const [{ data, fetching }] = useGetProjectByIdQuery({
    variables: { id },
  })

  if (fetching)
    return (
      <Center>
        <Loader />
      </Center>
    )

  return <ProjectDetails project={data?.project} />
}

export default ProjectModal
