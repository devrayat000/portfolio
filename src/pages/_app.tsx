import { Provider } from 'urql'
import type { NextPage } from 'next'
import type { AppProps as IAppProps } from 'next/app'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$utils/urql_client'
import '../styles/globals.css'
import { useMemo } from 'react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const ssrCache = useMemo(createSSRExchange, [])
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])

  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }
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
