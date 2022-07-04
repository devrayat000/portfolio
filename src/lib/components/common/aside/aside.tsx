import { Aside, ScrollArea } from '@mantine/core'
import {
  Certificate,
  Home2,
  Message,
  ClipboardCheck,
  ReportMoney,
} from 'tabler-icons-react'
// import { motion } from 'framer-motion'

// import { useStackStyles } from '$lib/styles/stack'
import NavLink from '../nav/nav-link'
import ThemeToggle from '../theme-toggle'
import { stagger } from '$lib/animation/stagger'
import { MotionGroup, MotionStack } from '$lib/animation'

const MyAside = () => {
  // const { classes } = useStackStyles({ spacing: 48 })
  return (
    <ScrollArea type="scroll" style={{ height: '100vh' }}>
      <Aside width={{ base: 80 }} p="xs">
        <MotionGroup
          direction="column"
          align="center"
          spacing={20 * 6}
          my="xl"
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* <Space /> */}
          <ThemeToggle />
          <MotionStack
            spacing={40}
            variants={stagger}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <NavLink href="/" label="Home">
              <Home2 />
            </NavLink>
            {/* <NavLink href="/#pricing" label="Pricing">
              <ReportMoney />
            </NavLink> */}
            <NavLink href="/#education" label="Education">
              <Certificate />
            </NavLink>
            <NavLink href="/#projects" label="My Work">
              <ClipboardCheck />
            </NavLink>
            <NavLink href="/#contact" label="Contact Me">
              <Message />
            </NavLink>
          </MotionStack>
        </MotionGroup>
      </Aside>
    </ScrollArea>
  )
}

export default MyAside
