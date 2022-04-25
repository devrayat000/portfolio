import { Provider } from 'urql'
import type { NextPage } from 'next'
import type { AppProps as IAppProps } from 'next/app'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import { useMemo } from 'react'
// import '../styles/globals.css'
import { MantineProvider, MANTINE_COLORS } from '@mantine/core'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const ssrCache = useMemo(createSSRExchange, [])
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])

  return (
    <Provider value={client}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "'Inter', sans-serif",
          colors: {
            brand: [
              '#fff7e5',
              '#fff0cc',
              '#ffe099',
              '#ffd166',
              '#ffc233',
              '#ffb300',
              '#e6a100',
              '#b37d00',
              '#805900',
              '#664700',
            ],
          },
          primaryColor: 'brand',
        }}
      >
        <Component {...(pageProps as any)} />
      </MantineProvider>
    </Provider>
  )
}

export default MyApp

interface AppProps extends IAppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
