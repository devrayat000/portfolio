import { Aside, Group, ScrollArea, Space, Stack } from '@mantine/core'
import { Certificate, Home2, Message, ClipboardCheck } from 'tabler-icons-react'
import { motion } from 'framer-motion'

import { useStackStyles } from '$lib/styles/stack'
import NavLink from '../common/nav-link'
import ThemeToggle from '../common/theme-toggle'
import { stagger } from '$lib/animation/stagger'

const MyAside = () => {
  const { classes } = useStackStyles({ spacing: 48 })
  return (
    <ScrollArea type="scroll" style={{ height: '100vh' }}>
      <Aside width={{ base: 80 }} p="xs">
        <Group direction="column" align="center" spacing={20 * 6} my="xl">
          {/* <Space /> */}
          <ThemeToggle />
          <motion.div
            className={classes.stack}
            variants={stagger}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <NavLink href="/" label="Home">
              <Home2 />
            </NavLink>
            <NavLink href="/education" label="Education">
              <Certificate />
            </NavLink>
            <NavLink href="/work" label="My Work">
              <ClipboardCheck />
            </NavLink>
            <NavLink href="/contact" label="Contact Me">
              <Message />
            </NavLink>
          </motion.div>
        </Group>
      </Aside>
    </ScrollArea>
  )
}

export default MyAside
