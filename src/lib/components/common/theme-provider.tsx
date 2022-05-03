import {
  type ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useToggle, useColorScheme, useHotkeys } from '@mantine/hooks'
import { useCallback } from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const preferedColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useToggle<ColorScheme>(
    preferedColorScheme,
    ['light', 'dark']
  )
  useHotkeys([['mod+J', () => toggleColorScheme()]])

  const toggleColorScheme = useCallback(
    (scheme?: ColorScheme) => {
      setColorScheme(scheme ?? (prev => (prev === 'dark' ? 'light' : 'dark')))
    },
    [setColorScheme]
  )

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "'Inter', sans-serif",
          colors: {
            brand: [
              '#fff7e5',
              '#fff0cc',
              '#ffe099',
              '#ffd166',
              '#ffc233',
              '#ffb300',
              '#e6a100',
              '#b37d00',
              '#805900',
              '#664700',
            ],
          },
          primaryColor: 'yellow',
          colorScheme,
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default ThemeProvider
