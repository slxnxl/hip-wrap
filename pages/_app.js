import '../styles/globals.css'
import "../styles/component.scss"
// pages/_app.js
import {Box, ChakraProvider, Heading} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Header from "../components/header"
import ContactUSBtn from "../components/contactUsBtn";


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
         <ContactUSBtn></ContactUSBtn>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp