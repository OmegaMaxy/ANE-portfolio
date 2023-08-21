import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import type { GetServerSidePropsContext } from "next"

export default async function getServerSideSessionPropsLogic(context: GetServerSidePropsContext, props?: {} | null, destination?: string | null) {
    const session = await getServerSession(context.req, context.res, authOptions)
    /*console.log("session")
    console.log(session)*/
    if (!session) {
        return {
            redirect: {
                destination: destination ? destination : '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
            ...props
        },
    }
}