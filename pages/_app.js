import '../styles/globals.css'
import "../styles/component.scss"
// pages/_app.js
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import Layout from '../components/layout'


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
            <Layout>
             <Component {...pageProps}/>
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp