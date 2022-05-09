import { AspectRatio, Stack } from '@mantine/core'
import Image from 'next/image'
import { type ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next'
import { m as motion } from 'framer-motion'

import { createSSRExchange, createUrqlClient } from '$lib/utils/urql_client'
import {
  GetProjectByIdDocument,
  GetProjectsIdDocument,
  GetProjectsIdQuery,
  useGetProjectByIdQuery,
} from '$graphql/generated'
import { pageFade } from '$lib/animation'

const ProjectDetailsPage: NextPage = () => {
  const router = useRouter()

  const [{ data }] = useGetProjectByIdQuery({
    variables: { id: router.query.id as string },
  })

  return (
    <motion.main
      variants={pageFade}
      layoutId={`project-${data?.project?.id}`}
      // initial="hidden"
      // animate="show"
      // exit="hidden"
    >
      <Stack>
        {data?.project?.images?.map(image => (
          <AspectRatio
            key={image.id}
            ratio={3 / 2}
            sx={{ position: 'relative' }}
          >
            <Image
              key={image?.id}
              src={image?.image?.url!}
              alt={image?.label!}
              layout="fill"
              objectFit="cover"
            />
          </AspectRatio>
        ))}
      </Stack>
    </motion.main>
  )
}

ProjectDetailsPage.displayName = 'MyProjectDetailsPage'

interface ProjectByIdPath extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<
  ProjectByIdPath
> = async context => {
  const client = createUrqlClient()

  const { data, error } = await client
    .query<GetProjectsIdQuery>(GetProjectsIdDocument)
    .toPromise()

  const paths =
    data?.projects?.map(project => ({ params: { id: project.id } })) ?? []

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string

  const ssrCache = createSSRExchange()
  const client = createUrqlClient(ssrCache)

  await client.query(GetProjectByIdDocument, { id }).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 600,
  }
}

export default ProjectDetailsPage
