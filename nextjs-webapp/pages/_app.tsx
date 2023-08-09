import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '../public/main.css'

import theme from '../lib/theme'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}


function App({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <ChakraProvider theme={theme}>
            <Component {...pageProps}/>
        </ChakraProvider>
    )
}

export default App