import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import '../styles/styles.css'
const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
