import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { SessionProvider, useSession } from 'next-auth/react'
import '../public/main.css'

import theme from '../lib/theme'
import { Session } from 'next-auth'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{ session: Session }> & {
    Component: NextPageWithLayout
}


function App({ Component, router, pageProps: { session, ...pageProps} }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page)
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                {getLayout(
                    Component.auth ? (
                        <Auth auth={Component.auth} router={router}>
                            <Component {...pageProps} key={router.route} />
                        </Auth>
                    ) : (
                        <Component {...pageProps} key={router.route} />
                    )
                )}
            </ChakraProvider>
        </SessionProvider>
    )
}

function Auth({ children, auth, router }: any) {
    const { status, data } = useSession({
        required: true, onUnauthenticated() {
            router.push(auth.unauthenticated ? auth.unauthenticated : '/not-logged-in')
        }
    })
    if (status === 'loading') {
        return (auth.loading) ? auth.loading : <Spinner />
    }

    if (!data || !data.user) return null // unauthenticated

    /*if (data?.user.role != auth.role) {
        router.push(auth.unauthorized)
    }*/
    return children
}

export default App