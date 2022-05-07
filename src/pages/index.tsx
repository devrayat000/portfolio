import Head from 'next/head'
import { Stack } from '@mantine/core'
import { m as motion } from 'framer-motion'
import { type GetStaticProps } from 'next'
// import Image from 'next/image'

import { GetProjectsDocument } from '$graphql/generated'
import { createSSRExchange, createUrqlClient } from '$lib/utils/urql_client'
import Intro from '$lib/components/home/intro'
import Services from '$lib/components/home/services'
import Projects from '$lib/components/home/projects'
import { pageFade } from '$lib/animation/fade'

function Home() {
  return (
    <motion.main
      variants={pageFade}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Stack align="stretch" spacing="xl">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Intro />
        <Services />
        <Projects />
      </Stack>
    </motion.main>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const ssrCache = createSSRExchange()
  const client = createUrqlClient(ssrCache)

  await client.query(GetProjectsDocument).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 600,
  }
}

export default Home

// export default withUrqlClient(
//   ssr => getClientOptions(ssr),
//   { ssr: false, neverSuspend: true } // Important so we don't wrap our component in getInitialProps
// )(Home)
