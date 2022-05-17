import {
  AspectRatio,
  Stack,
  Box,
  Title,
  TypographyStylesProvider,
  Breadcrumbs,
  Anchor,
  Text,
} from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { m as motion } from 'framer-motion'
import Carousel from 'framer-motion-carousel'
import { type ParsedUrlQuery } from 'querystring'
import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next'
import {
  AdvancedImage,
  placeholder,
  lazyload,
  responsive,
} from '@cloudinary/react'

import { createSSRExchange, createUrqlClient } from '$lib/utils/urql_client'
import {
  GetProjectByIdDocument,
  GetProjectsIdDocument,
  GetProjectsIdQuery,
  useGetProjectByIdQuery,
} from '$graphql/generated'
import { pageFade } from '$lib/animation'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Link from 'next/link'
import { cld } from '$lib/services/cloudinary'

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
      <Title order={1}>{data?.project?.title}</Title>
      <Text>Tags:</Text>
      <Breadcrumbs separator="•">
        {data?.project?.tags?.map(tag => (
          <Link
            key={tag.id}
            passHref
            href={{
              pathname: '/tags/[slug]',
              query: {
                slug: tag.slug,
                tag: tag.id,
              },
            }}
            as={`/tags/${tag.slug}`}
          >
            <Anchor>{tag.name}</Anchor>
          </Link>
        ))}
      </Breadcrumbs>
      <Carousel autoPlay interval={4000} loop>
        {data?.project?.images?.map(image => (
          <AdvancedImage
            key={image.id}
            width="100%"
            cldImg={cld.image('Portfolio/' + image?.image?.id)}
            plugins={[placeholder(), lazyload(), responsive()]}
          />
        ))}
      </Carousel>
      <TypographyStylesProvider>
        <DocumentRenderer document={data?.project?.description?.document} />
      </TypographyStylesProvider>
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
