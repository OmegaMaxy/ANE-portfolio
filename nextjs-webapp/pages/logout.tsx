import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import type { GetServerSidePropsContext } from "next";

export default function Page() {
    const router = useRouter()
    //signOut()

    useEffect(() => {
        async function a() {
            const data = await signOut({ redirect: false, callbackUrl: "/" })
            router.push(data.url)
        } 
        a()

    }, [])
    
    //router.push('/')

    return (
        <Box>
            Signing out...
        </Box>
    )
}