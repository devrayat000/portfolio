import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, useElementScroll, m } from 'framer-motion'
import {
  Affix,
  AppShell,
  Button,
  createStyles,
  ScrollArea,
} from '@mantine/core'
import { ArrowUp as ArrowUpIcon } from 'tabler-icons-react'

import MyNavbar from '$lib/components/common/nav/navbar'
import MyAside from '$lib/components/common/aside/aside'
import { slideY } from '$lib/animation'
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
      </Affix>
    </AppShell>
  )
}

export default MyAppShell
