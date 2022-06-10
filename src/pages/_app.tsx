import { useMemo } from 'react'
import { type NextPage } from 'next'
import { Provider } from 'urql'
import { type AppProps as IAppProps } from 'next/app'
import { AnimatePresence, LazyMotion } from 'framer-motion'
import { NotificationsProvider } from '@mantine/notifications'
import { DefaultSeo } from 'next-seo'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import { createUrqlClient, createSSRExchange } from '$lib/utils/urql_client'
import ThemeProvider from '$lib/components/common/theme-provider'
import {
  GetHumanLanguageSkillsDocument,
  GetMyInfoDocument,
  GetProgrammingLanguageSkillsDocument,
} from '$graphql/generated'
import MyAppShell from '$lib/components/common/shell'
import '../styles/globals.css'

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
  )
}

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
