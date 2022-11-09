import {
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.scss'

export default function Install() {
  const bg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Layout
      title="Install Archmage"
      description="Install Archmage"
      wrapperClassName={styles.layout}>
      <Stack justify="space-between" flex={1}>
        <Stack align="center" mt={16} mb={8}>
          <Heading as="h2" size="xl" textAlign="center">
            Install Archmage for your browser
          </Heading>
          <Image></Image>
          <Button w="fit-content" size="lg">
            Install Archmage for Chrome
          </Button>
        </Stack>

        <Stack align="center" py={16} spacing={8} bg={bg}>
          <Heading as="h2" size="xl">
            Supported Browsers
          </Heading>
          <div className="container">
            <div className="row">
              {['Chrome', 'Firefox', 'Brave', 'Edge', 'Opera'].map(
                (item, index) => {
                  return (
                    <Stack
                      key={index}
                      className={clsx(
                        'col col--2',
                        index === 0 && 'col--offset-1'
                      )}
                      my={4}
                      align="center">
                      <Image
                        w="50px"
                        h="50px"
                        src={
                          require(`@site/static/img/${item.toLowerCase()}.png`)
                            .default
                        }
                      />
                      <Text>{item}</Text>
                    </Stack>
                  )
                }
              )}
            </div>
          </div>
        </Stack>
      </Stack>
    </Layout>
  )
}
