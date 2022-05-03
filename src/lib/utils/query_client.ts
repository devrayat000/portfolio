import { QueryCache, QueryClient, QueryClientConfig } from 'react-query'

export const queryCache = new QueryCache()

export function createQueryClient(
  config?: QueryClientConfig,
  cache = queryCache
) {
  return new QueryClient({
    queryCache: cache,
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })
}
