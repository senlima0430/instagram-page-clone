import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'

import { theme } from '@/utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>Render Image</title>
      </Head>
      <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
