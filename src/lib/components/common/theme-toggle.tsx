import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Moon, Sun } from 'tabler-icons-react'

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <ActionIcon size="xl" radius="xl" onClick={() => toggleColorScheme()}>
      {colorScheme === 'light' ? <Moon /> : <Sun />}
    </ActionIcon>
  )
}

export default ThemeToggle
