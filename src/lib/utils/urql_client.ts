import {
  dedupExchange,
  cacheExchange,
  // fetchExchange,
  ssrExchange,
} from '@urql/core'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'
import { createClient } from 'urql'
import type { SSRData, SSRExchange } from '@urql/core/dist/types/exchanges/ssr'

export function createUrqlClient(ssr: SSRExchange) {
  return createClient({
    url: process.env.NEXT_PUBLIC_API_URL + '/api/graphql',
    exchanges: [dedupExchange, cacheExchange, ssr, multipartFetchExchange],
    fetchOptions: {
      // @ts-ignore next-line
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      },
      credentials: 'include',
      mode: 'cors',
    },
  })
}

export function createSSRExchange() {
  return ssrExchange({
    isClient: typeof window !== 'undefined',
  })
}

// docker run -p 10000:10000  -v c:/azurite:/data mcr.microsoft.com/azure-storage/azurite mcr.microsoft.com/azure-storage/azurite azurite-blob --blobHost 0.0.0.0
// docker run -p 10000:10000 -p 10001:10001 -v c:/azurite:/data mcr.microsoft.com/azure-storage/azurite
