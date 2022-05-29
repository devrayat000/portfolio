import { useRouter } from 'next/router'
import { m } from 'framer-motion'
import type { GetServerSideProps, NextPage } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { Title } from '@mantine/core'

import {
  GetProjectsByTagDocument,
  Project,
  useGetProjectsByTagQuery,
} from '$graphql/generated'
import type { PageProps } from '$lib/types/urql-page-props'
import { createSSRExchange, createUrqlClient } from '$lib/utils/urql_client'
import { MotionSimpleGrid, pageFade, stagger } from '$lib/animation'
import ProjectCard from '$lib/components/home/peoject-card'

interface TagPageProps {}

interface TagPageQuery extends ParsedUrlQuery {
  slug: string
}

const TagsPage: NextPage<TagPageProps> = () => {
  const router = useRouter()

  const [{ data }] = useGetProjectsByTagQuery({
    variables: { tag: router.query.slug as string },
  })

  return (
    <m.div variants={pageFade}>
      <Title>Tag:</Title>
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
    </m.div>
  )
}

export default TagsPage

export const getServerSideProps: GetServerSideProps<
  PageProps,
  TagPageQuery
> = async context => {
  const tag = context.query.slug

  console.log(tag)

  if (!tag) {
    return {
      notFound: true,
    }
  }

  const ssrCache = createSSRExchange()
  const client = createUrqlClient(ssrCache)

  await client.query(GetProjectsByTagDocument, { tag }).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    // revalidate: 600,
  }
}
