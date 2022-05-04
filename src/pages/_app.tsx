import { useMemo } from 'react'
import type { NextPage } from 'next'
import { Provider } from 'urql'
import type { AppProps as IAppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Affix,
  AppShell,
  Button,
  createStyles,
  ScrollArea,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ArrowUp as ArrowUpIcon } from 'tabler-icons-react'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import ThemeProvider from '$lib/components/common/theme-provider'
import MyNavbar from '$lib/components/home/navbar'
import MyAside from '$lib/components/home/aside'
import '../styles/globals.css'
import { createQueryClient } from '$lib/utils/query_client'
import { slideX } from '$lib/animation/slide'

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

  const [scroll, scrollTo] = useWindowScroll()

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

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps: { urqlState, ...pageProps },
  router,
}) => {
  const ssrCache = useMemo(createSSRExchange, [])
  if (urqlState) {
    ssrCache.restoreData(urqlState)
  }
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])
  const queryClient = useMemo(() => createQueryClient(), [])

  return (
    // <Provider value={client}>
    //   <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <MyAppShell>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MyAppShell>
    </ThemeProvider>
    //   </QueryClientProvider>
    // </Provider>
  )
}

export default MyApp

interface AppProps extends IAppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
