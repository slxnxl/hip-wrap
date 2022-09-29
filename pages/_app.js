import '../styles/globals.css'
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
          <Header></Header>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp