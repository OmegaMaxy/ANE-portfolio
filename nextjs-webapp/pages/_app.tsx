import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import '../public/main.css'

import theme from '../lib/theme'
import { Session } from 'next-auth'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{ session: Session }> & {
    Component: NextPageWithLayout
}


function App({ Component, pageProps: { session, ...pageProps} }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page)
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                {getLayout(
                <Component {...pageProps}/>
                )}
            </ChakraProvider>
        </SessionProvider>
    )
}

export default App