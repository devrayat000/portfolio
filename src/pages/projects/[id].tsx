import {
  AspectRatio,
  Stack,
  Box,
  Title,
  TypographyStylesProvider,
  Breadcrumbs,
  Anchor,
  Text,
  LoadingOverlay,
  SimpleGrid,
  Grid,
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
import { NextSeo } from 'next-seo'

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
        description={data?.project?.description?.document.toString()}
        openGraph={{
          title: data?.project?.title!,
          description: data?.project?.description?.document.toString(),
          url: `https://devrayat.me/projects/${data?.project?.id}`,
          images: data?.project?.images?.map(image => ({
            url: image.image?.publicUrl!,
            alt: image.label!,
          })),
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: data?.project?.tags?.join(',')!,
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
        <SimpleGrid
          cols={2}
          spacing={80}
          py="xl"
          my="xl"
          px="lg"
          style={{ placeItems: 'center' }}
        >
          <section>
            <Carousel autoPlay interval={4000} loop>
              {data?.project?.images?.map(image => (
                <AdvancedImage
                  key={image.id}
                  width="100%"
                  height="360rem"
                  cldImg={cld.image('Portfolio/' + image?.image?.id)}
                  plugins={[placeholder(), lazyload(), responsive()]}
                />
              ))}
            </Carousel>
          </section>
          <section>
            <Title order={1} mb="xl">
              {data?.project?.title}
            </Title>
            <Text mb="xs">Tags:</Text>
            <Breadcrumbs separator="•" mb="md">
              {data?.project?.tags &&
                data?.project?.tags?.map(tag => (
                  <Link
                    key={tag.id}
                    passHref
                    href="/tags/[slug]"
                    as={`/tags/${tag.id}`}
                  >
                    <Anchor>{tag.name}</Anchor>
                  </Link>
                ))}
            </Breadcrumbs>
            <TypographyStylesProvider>
              <DocumentRenderer
                document={data?.project?.description?.document}
              />
            </TypographyStylesProvider>
          </section>
        </SimpleGrid>
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
