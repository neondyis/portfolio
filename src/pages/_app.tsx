import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import {Box, defineStyle, defineStyleConfig, extendTheme, Flex} from "@chakra-ui/react";
import Layout from '@/components/Layout';



// TODO move and set styles in separate files
const intro = defineStyle({
    backgroundColor: '#f4f1ee'
})

export const buttonTheme = defineStyleConfig({
    variants: { intro },
})

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "#fffdfc",
            },
        }),
    },
    components: {
        Button: buttonTheme
    }
});


export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
  )
}
