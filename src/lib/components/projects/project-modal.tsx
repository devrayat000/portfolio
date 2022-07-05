import React from 'react'
import { useRouter } from 'next/router'
import { Modal, Center, Loader, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { useGetProjectByIdQuery } from '$graphql/generated'
import ProjectDetails from './project-details'
import ErrorHandler from '../common/error-handler'

type Props = {
  id: string
}

function ProjectModal() {
  const router = useRouter()
  const theme = useMantineTheme()
  const isPc = useMediaQuery(theme.fn.largerThan('md'))

  const id = router.query.project as string

  return (
    <Modal
      opened={!!id}
      onClose={() => void router.replace('/')}
      padding={isPc ? undefined : 'xs'}
      //   title={data?.project?.title}
      centered
      closeOnEscape
      closeOnClickOutside
      size={960}
      withCloseButton={!isPc}
      overlayBlur={2}
    >
      <Project id={id} />
    </Modal>
  )
}

function Project({ id }: Props) {
  const [{ data, fetching, error }, retry] = useGetProjectByIdQuery({
    variables: { id },
  })

  if (fetching)
    return (
      <Center>
        <Loader />
      </Center>
    )

  if (error) {
    return <ErrorHandler message={error.message} retry={retry} />
  }

  return <ProjectDetails project={data?.project} isModal />
}

export default ProjectModal
