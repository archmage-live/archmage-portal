import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme
} from '@chakra-ui/react'

export const theme: Record<string, any> = extendTheme(
  {
    config: {
      cssVarPrefix: 'ck',
      initialColorMode: 'dark',
      useSystemColorMode: false
    } as ThemeConfig,
    styles: {
      global: (props) => ({
        html: {},
        body: {}
      })
    }
  },
  withDefaultColorScheme({
    colorScheme: 'blue'
  })
)
