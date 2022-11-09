import { useColorMode } from '@docusaurus/theme-common'
import type { WrapperProps } from '@docusaurus/types'
import Layout from '@theme-original/Footer/Layout'
import type LayoutType from '@theme/Footer/Layout'
import React from 'react'

type Props = WrapperProps<typeof LayoutType>

export default function LayoutWrapper(props: Props): JSX.Element {
  const { colorMode } = useColorMode()

  return (
    <>
      <Layout {...props} style={colorMode} />
    </>
  )
}
