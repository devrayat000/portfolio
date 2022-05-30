import { useEffect, useMemo, useRef, useState } from 'react'
import { type NextPage } from 'next'
import { Provider } from 'urql'
import { type AppProps as IAppProps } from 'next/app'
import { AnimatePresence, LazyMotion, useElementScroll, m } from 'framer-motion'
import {
  Affix,
  AppShell,
  Button,
  createStyles,
  ScrollArea,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { ArrowUp as ArrowUpIcon } from 'tabler-icons-react'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import ThemeProvider from '$lib/components/common/theme-provider'
import MyNavbar from '$lib/components/common/nav/navbar'
import MyAside from '$lib/components/common/aside/aside'
import {
  GetHumanLanguageSkillsDocument,
  GetMyInfoDocument,
  GetProgrammingLanguageSkillsDocument,
} from '$graphql/generated'
import '../styles/globals.css'
import { slideY } from '$lib/animation'
import { DefaultSeo } from 'next-seo'

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
  const [isScrollWorthy, setIsScrollWorthy] = useState(false)
  const { classes } = useStyles()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useElementScroll(scrollRef)

  const scrollToTop = () =>
    scrollRef?.current?.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    return scrollY.onChange(position => {
      if (position > 500) {
        setIsScrollWorthy(true)
      } else {
        setIsScrollWorthy(false)
      }
    })
  }, [scrollY])

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
      <ScrollArea
        key="main-scroll"
        type="scroll"
        style={{ height: '100vh' }}
        viewportRef={scrollRef}
      >
        {children}
      </ScrollArea>
      <Affix position={{ bottom: 20, right: 96 }}>
        <AnimatePresence>
          {isScrollWorthy && (
            <Button
              component={m.button}
              leftIcon={<ArrowUpIcon />}
              onClick={scrollToTop}
              variants={slideY(40)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Scroll to top
            </Button>
          )}
        </AnimatePresence>
        {/* <Transition transition="slide-up" mounted={isScrollWorthy}>
          {transitionStyles => (
            <Button
              leftIcon={<ArrowUpIcon />}
              style={transitionStyles}
              onClick={scrollToTop}
            >
              Scroll to top
            </Button>
          )}
        </Transition> */}
      </Affix>
    </AppShell>
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
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'ie=edge',
          },
          {
            httpEquiv: 'content-type',
            content: 'text/html;charset=UTF-8',
          },
        ]}
      />
      <Provider value={client}>
        <ThemeProvider>
          <NotificationsProvider>
            <LazyMotion
              features={() =>
                import('$lib/animation/dom-animation').then(res => res.default)
              }
              strict
            >
              <MyAppShell>
                <AnimatePresence exitBeforeEnter>
                  <Component {...(pageProps as any)} key={router.route} />
                </AnimatePresence>
              </MyAppShell>
            </LazyMotion>
          </NotificationsProvider>
        </ThemeProvider>
      </Provider>
    </>
    //   </QueryClientProvider>
  )
}

// export default withUrqlClient(
//   ssr => getClientOptions(ssr),
//   { ssr: false, neverSuspend: true } // Important so we don't wrap our component in getInitialProps
// )(MyApp)

MyApp.getInitialProps = async context => {
  const ssrCache = createSSRExchange()
  const client = createUrqlClient(ssrCache)

  await Promise.all([
    client.query(GetMyInfoDocument).toPromise(),
    client.query(GetHumanLanguageSkillsDocument).toPromise(),
    client.query(GetProgrammingLanguageSkillsDocument).toPromise(),
  ])

  return {
    urqlState: ssrCache.extractData(),
  }
}

export default MyApp

interface AppProps extends IAppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
