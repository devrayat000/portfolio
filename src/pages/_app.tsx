import { useMemo } from 'react'
import { type NextPage } from 'next'
import { Provider } from 'urql'
import { type AppProps as IAppProps } from 'next/app'
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
import { initUrqlClient, withUrqlClient } from 'next-urql'

import {
  createUrqlClient,
  createSSRExchange,
  getClientOptions,
} from '$lib/utils/urql_client'
import ThemeProvider from '$lib/components/common/theme-provider'
import MyNavbar from '$lib/components/home/navbar'
import MyAside from '$lib/components/home/aside'
import { createQueryClient } from '$lib/utils/query_client'
import { slideX } from '$lib/animation/slide'
import { GetHumanLanguageSkillsDocument } from '$graphql/generated'
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
    <motion.div initial="hidden" animate="show" exit="hidden">
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
    </motion.div>
  )
}

const MyApp: NextPage<AppProps, AppProps['pageProps']> = ({
  Component,
  pageProps,
  router,
}) => {
  const ssrCache = useMemo(createSSRExchange, [])
  if (pageProps?.urqlState) {
    ssrCache.restoreData(pageProps?.urqlState)
  }
  const client = useMemo(() => createUrqlClient(ssrCache), [ssrCache])

  return (
    //   <QueryClientProvider client={queryClient}>
    <Provider value={client}>
      <ThemeProvider>
        <MyAppShell>
          <AnimatePresence exitBeforeEnter>
            <Component {...(pageProps as any)} key={router.route} />
          </AnimatePresence>
        </MyAppShell>
      </ThemeProvider>
    </Provider>
    //   </QueryClientProvider>
  )
}

// export default withUrqlClient(
//   ssr => getClientOptions(ssr),
//   { ssr: false, neverSuspend: true } // Important so we don't wrap our component in getInitialProps
// )(MyApp)

export default MyApp

interface AppProps extends IAppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
