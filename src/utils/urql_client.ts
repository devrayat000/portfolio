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
  })
}

export function createSSRExchange() {
  return ssrExchange({
    isClient: typeof window !== 'undefined',
    // initialState: typeof window != 'undefined' ? window.__URQL_DATA__ : undefined,
  })
}

declare global {
  interface Window {
    __URQL_DATA__: SSRData
  }
}
