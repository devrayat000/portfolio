import { useMemo } from 'react'
import type { NextPage } from 'next'
import { Provider } from 'urql'
import type { AppProps as IAppProps } from 'next/app'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import ThemeProvider from '$lib/components/common/theme-provider'
import { AppShell, createStyles, ScrollArea } from '@mantine/core'
import MyNavbar from '$lib/components/home/navbar'
import MyAside from '$lib/components/home/aside'
import '../styles/globals.css'

const useStyles = createStyles(theme => ({
  main: {
    backgroundColor:
      theme.colorScheme == 'light'
        ? theme.colors.gray[1]
        : theme.colors.gray[8],
    paddingTop: 0,
  },
}))

const MyAppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      navbar={<MyNavbar />}
      aside={<MyAside />}
      classNames={{
        main: classes.main,
      }}
    >
      <ScrollArea type="scroll" style={{ height: '100vh' }}>
        {children}
      </ScrollArea>
    </AppShell>
  )
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const ssrCache = useMemo(createSSRExchange, [])
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])

  return (
    <Provider value={client}>
      <ThemeProvider>
        <MyAppShell>
          <Component {...(pageProps as any)} />
        </MyAppShell>
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
