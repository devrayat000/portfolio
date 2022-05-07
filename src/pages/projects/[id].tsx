import { type ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next'
import { m as motion, domAnimation, LazyMotion } from 'framer-motion'

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
    <LazyMotion features={domAnimation}>
      <motion.main
        variants={pageFade}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
      >
        Enter
      </motion.main>
    </LazyMotion>
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
