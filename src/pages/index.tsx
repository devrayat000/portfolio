import Head from 'next/head'
import Image from 'next/image'
// import { query } from '.keystone/api'

import { useGetProjectsQuery, GetProjectsDocument } from '$graphql/generated'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { createSSRExchange, createUrqlClient } from '$utils/urql_client'

export default function Home() {
  // const [{ data, error, fetching }, refresh] = useGetProjectsQuery()
  const [{ fetching, error, data }] = useGetProjectsQuery()

  if (fetching) {
    return <h1>loading...</h1>
  }

  if (error) {
    console.log(error)
    return <h2>{error.message}</h2>
  }

  console.log(data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="source-code">Source Code:</label>
            <input type="text" name="source-code" id="source-code" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" id="description" />
          </div>
          <div id="image-wrapper">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple
                required
              />
            </div>
          </div>
          <div>
            <button type="submit">Upload</button>
          </div>
        </form>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const ssrCache = createSSRExchange()
  const client = createUrqlClient(ssrCache)

  // const a = await query.Project.findMany()
  // console.log(a)

  await client.query(GetProjectsDocument).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}