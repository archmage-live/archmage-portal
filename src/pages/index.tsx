import { Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'

import { Background } from '@site/src/components/Background'
import { DownloadButton } from '@site/src/components/DownloadButton'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

function Header() {
  return (
    <Wrap
      spacing="30px"
      my={16}
      px={8}
      justify="center"
      align="center"
      sx={{
        '@media (max-width: 996px)': {
          textAlign: 'center'
        }
      }}>
      <WrapItem maxW="600px">
        <Stack
          spacing={8}
          sx={{
            '@media (max-width: 996px)': {
              alignItems: 'center'
            }
          }}>
          <Heading as="h2" size="2xl">
            The open source programmable Web3 wallet
          </Heading>
          <Text fontSize="xl">
            Explore the decentralized Web3 world with ease
          </Text>
          <DownloadButton />
        </Stack>
      </WrapItem>
      <WrapItem>
        <Image
          maxW="300px"
          src={require(`@site/static/img/popup-small.png`).default}
        />
      </WrapItem>
    </Wrap>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="The open source programmable Web3 wallet"
      description="The open source programmable Web3 wallet">
      {/*<Background />*/}
      {/*<HomepageHeader />*/}
      <Header />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
