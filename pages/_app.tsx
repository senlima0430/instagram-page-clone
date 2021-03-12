import { AppProps } from 'next/app'
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'

import { theme } from '@/utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
