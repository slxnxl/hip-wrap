import '../styles/globals.css'
// pages/_app.js
import {ChakraProvider, Heading} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Header from "../components/header"


const theme = extendTheme({
    fonts: {
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    },
    initialColorMode: 'light',
    useSystemColorMode: false
})

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
          <Header></Header>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp