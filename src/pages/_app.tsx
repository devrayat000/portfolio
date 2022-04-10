import { Provider } from 'urql'
import type { NextPage } from 'next'
import type { AppProps as IAppProps } from 'next/app'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import { useMemo } from 'react'
import '../styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const ssrCache = useMemo(createSSRExchange, [])
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])

  return (
    <Provider value={client}>
      <Component {...(pageProps as any)} />
    </Provider>
  )
}

export default MyApp

interface AppProps extends IAppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
