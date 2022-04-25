import { useMemo } from 'react'
import type { NextPage } from 'next'
import { Provider } from 'urql'
import type { AppProps as IAppProps } from 'next/app'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import ThemeProvider from '$lib/components/common/theme-provider'
import '../styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const ssrCache = useMemo(createSSRExchange, [])
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])

  return (
    <Provider value={client}>
      <ThemeProvider>
        <Component {...(pageProps as any)} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp

interface AppProps extends IAppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
