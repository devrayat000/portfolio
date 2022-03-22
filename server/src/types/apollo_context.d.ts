import ProjectDataSource from '$graphql/datasource/project'
import ImageDataSource from '$graphql/datasource/image'
import type { ExpressContext } from 'apollo-server-express'
declare global {
  export interface ApolloContext extends ExpressContext {
    dataSources: ApolloDataSource
  }

  export interface ApolloDataSource {
    project: ProjectDataSource<ApolloContext>
    image: ImageDataSource<ApolloContext>
  }

  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV?: 'production' | 'development'
      readonly PORT?: number
    }
  }

  declare const __DEV__: boolean
}
