// import path from 'path'
import type { PluginDefinition } from 'apollo-server-core'
import { ApolloServer, ServerRegistration } from 'apollo-server-express'

import resolvers from '$graphql/resolvers'
import ProjectAPI from '$graphql/datasource/project'
import ImageAPI from '$graphql/datasource/image'
import { connection } from './connection'
import typeDefs from '$graphql/main.graphql'

export async function startServer(config: ServerRegistration) {
  const project = new ProjectAPI()
  const image = new ImageAPI()

  const apolloServer = new ApolloServer<ApolloContext>({
    typeDefs,
    resolvers,
    dataSources() {
      return { project, image }
    },
    cache: await cache(),
    plugins: await plugins(),
  })

  await Promise.all([apolloServer.start(), connection])

  apolloServer.applyMiddleware(config)
}

async function plugins() {
  const pluginsArr: PluginDefinition[] = []

  if (process.env.NODE_ENV !== 'production') {
    const { ApolloServerPluginLandingPageGraphQLPlayground } = await import(
      'apollo-server-core'
    )
    pluginsArr.push(ApolloServerPluginLandingPageGraphQLPlayground())
  }

  return pluginsArr
}

async function cache() {
  if (__DEV__) {
    const { InMemoryLRUCache } = await import('apollo-server-caching')

    return new InMemoryLRUCache()
  } else {
    const { BaseRedisCache } = await import('apollo-server-cache-redis')
    const { default: Redis } = await import('ioredis')

    return new BaseRedisCache({
      client: new Redis({
        host: 'localhost',
        port: 6379,
        lazyConnect: true,
      }),
    })
  }
}
