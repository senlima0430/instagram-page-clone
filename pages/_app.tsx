import { AppProps } from "next/app";
import { ChakraProvider, localStorageManager } from "@chakra-ui/core";

import "css/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS colorModeManager={localStorageManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
