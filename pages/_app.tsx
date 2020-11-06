import { AppProps } from 'next/app'
import { ChakraProvider, localStorageManager } from '@chakra-ui/core'

import '@/css/global.css'
import { theme } from 'utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      resetCSS
      theme={theme}
      colorModeManager={localStorageManager}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
