import { useColorMode as useCkColorMode } from '@chakra-ui/react'
import { useColorMode } from '@docusaurus/theme-common'
import type { WrapperProps } from '@docusaurus/types'
import Layout from '@theme-original/Layout'
import type LayoutType from '@theme/Layout'
import React, { ReactNode } from 'react'
import { useEffect } from 'react'

type Props = WrapperProps<typeof LayoutType>

export default function LayoutWrapper({
  children,
  ...props
}: Props & { children?: ReactNode }): JSX.Element {
  return (
    <>
      <Layout {...props}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </Layout>
    </>
  )
}

const ColorModeProvider = ({ children }: { children?: ReactNode }) => {
  const { colorMode } = useColorMode()
  const { colorMode: ckColorMode, setColorMode: setCkColorMode } =
    useCkColorMode()

  useEffect(() => {
    if (colorMode != ckColorMode) {
      setCkColorMode(colorMode)
    }
  }, [colorMode, ckColorMode])

  return <>{children}</>
}
