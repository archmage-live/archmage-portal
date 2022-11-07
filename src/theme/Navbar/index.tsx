import type { WrapperProps } from '@docusaurus/types'
import Navbar from '@theme-original/Navbar'
import type NavbarType from '@theme/Navbar'
import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.scss'

type Props = WrapperProps<typeof NavbarType>

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <>
      <div className={clsx('margin-vert--sm', styles.phishingWarning)}>
        Beware of phishing attacks, Archmage will never ask for your recovery
        phrase or private key. Never share them.
      </div>
      <Navbar {...props} />
    </>
  )
}
