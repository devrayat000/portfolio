import { Aside, Group, ScrollArea, Space } from '@mantine/core'
import { Certificate, Home2, Message, ClipboardCheck } from 'tabler-icons-react'

import NavLink from '../common/nav-link'
import ThemeToggle from '../common/theme-toggle'

const MyAside = () => {
  return (
    <ScrollArea type="scroll" style={{ height: '100vh' }}>
      <Aside width={{ base: 80 }} p="xs">
        <Group direction="column" align="center" spacing={48}>
          <Space />
          <ThemeToggle />
          <Space h="xs" />
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
        </Group>
      </Aside>
    </ScrollArea>
  )
}

export default MyAside
