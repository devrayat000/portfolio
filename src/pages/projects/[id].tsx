import { LoadingOverlay } from '@mantine/core'
import { useRouter } from 'next/router'
import { m as motion } from 'framer-motion'
import { type ParsedUrlQuery } from 'querystring'
import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { createSSRExchange, createUrqlClient } from '$lib/utils/urql_client'
import {
  GetProjectByIdDocument,
  GetProjectsIdDocument,
  GetProjectsIdQuery,
  useGetProjectByIdQuery,
} from '$graphql/generated'
import { pageFade } from '$lib/animation'
import ProjectDetails from '$lib/components/projects/project-details'
import { mapDocumentToString } from '$lib/utils/document-parser'

const ProjectDetailsPage: NextPage = () => {
  const router = useRouter()

  const [{ data }] = useGetProjectByIdQuery({
    variables: { id: router.query.id as string },
  })

  if (router.isFallback) {
    return <LoadingOverlay visible />
  }

  return (
    <>
      <NextSeo
        title={data?.project?.title!}
        description={mapDocumentToString(data?.project?.description?.document)}
        openGraph={{
          title: data?.project?.title!,
          description: mapDocumentToString(
            data?.project?.description?.document
          ),
          url: `https://devrayat.me/projects/${data?.project?.id}`,
          images: data?.project?.images?.map(image => ({
            url: image.image?.publicUrl!,
            alt: image.label!,
          })),
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: data?.project?.tags?.map(t => t.name)?.join(',')!,
          },
        ]}
      />
      <motion.main
        variants={pageFade}
        layoutId={`project-${data?.project?.id}`}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
        style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}
      >
        <ProjectDetails project={data?.project} />
      </motion.main>
    </>
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

  try {
    await client.query(GetProjectByIdDocument, { id }).toPromise()

    return {
      props: {
        urqlState: ssrCache.extractData(),
      },
      revalidate: 60 * 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default ProjectDetailsPage
