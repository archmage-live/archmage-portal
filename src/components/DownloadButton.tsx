import { Button, Image } from '@chakra-ui/react'
import React from 'react'

import browserDetection from '@site/src/lib/browserDetection'

export const DownloadButton = () => {
  const browser = detectBrowser()

  return (
    <Button
      w="fit-content"
      size="lg"
      onClick={() => window.open(getArchmageXLink(browser), '_blank')}
      leftIcon={
        <Image
          w="30px"
          h="30px"
          src={require(`@site/static/img/${browser.toLowerCase()}.png`).default}
        />
      }>
      Download for {browser}
    </Button>
  )
}

function detectBrowser() {
  if (browserDetection.isChrome) {
    return 'Chrome'
  } else if (browserDetection.isFirefox) {
    return 'Firefox'
  } else if (browserDetection.isBrave) {
    return 'Brave'
  } else if (browserDetection.isEdgeChromium) {
    return 'Edge'
  } else if (browserDetection.isOpera) {
    return 'Opera'
  } else {
    return 'Chrome'
  }
}

function getArchmageXLink(browser: string) {
  switch (browser) {
    case 'Chrome':
    default:
      return 'https://chrome.google.com/webstore/detail/archmage/oojdhiaejgngbkeebafncbnaakcnnpcb'
  }
}
