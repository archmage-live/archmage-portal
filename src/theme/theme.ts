import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme
} from '@chakra-ui/react'
import {
  StyleFunctionProps,
  mode,
  transparentize
} from '@chakra-ui/theme-tools'

export const theme: Record<string, any> = extendTheme(
  {
    config: {
      cssVarPrefix: 'ck',
      initialColorMode: 'dark',
      useSystemColorMode: false
    } as ThemeConfig,
    styles: {
      global: (props) => ({
        html: {
          bg: mode('white', 'gray.800')(props)
        },
        body: {
          bg: mode('white', 'gray.800')(props)
        }
      })
    }
  },
  withDefaultColorScheme({
    colorScheme: 'purple'
  })
)
