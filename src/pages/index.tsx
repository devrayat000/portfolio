import { Stack } from '@mantine/core'
import { m as motion } from 'framer-motion'
import { type GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
// import Image from 'next/image'

import {
  GetDemoProjectsDocument,
  GetMyEducationDocument,
  GetTagsDocument,
} from '$graphql/generated'
import { createSSRExchange, createUrqlClient } from '$lib/utils/urql_client'
import Intro from '$lib/components/home/intro'
import Services from '$lib/components/home/services'
import Projects from '$lib/components/home/projects'
import { pageFade } from '$lib/animation/fade'
import Education from '$lib/components/home/education'
import Contact from '$lib/components/home/contact'

function Home() {
  return (
    <>
      <NextSeo
        title="I Am - Zul Ikram Musaddik Rayat"
        description="Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation"
        openGraph={{
          title: 'I Am - Zul Ikram Musaddik Rayat',
          description:
            'Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation',
          type: 'https://devrayat.me/',
          images: [
            {
              url: '/images/rayat.jpg',
              alt: 'Zul Ikram Musaddik Rayat',
            },
          ],
        }}
      />
      <motion.main
        variants={pageFade}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Stack align="stretch" spacing={80} mb={80}>
          <Intro />
          <Services />
          <Education />
          <Projects />
          <Contact />
        </Stack>
      </motion.main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const ssrCache = createSSRExchange()
  const client = createUrqlClient(ssrCache)

  await Promise.all([
    client.query(GetDemoProjectsDocument).toPromise(),
    client.query(GetMyEducationDocument).toPromise(),
    client.query(GetTagsDocument).toPromise(),
  ])

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 60 * 2,
  }
}

export default Home

// export default withUrqlClient(
//   ssr => getClientOptions(ssr),
//   { ssr: false, neverSuspend: true } // Important so we don't wrap our component in getInitialProps
// )(Home)
