import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import CSSReset from './css-reset'
import { theme } from './theme'

export default function Root({ children }) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <CSSReset></CSSReset>
      {children}
    </ChakraProvider>
  )
}
