import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react"
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter()
    signOut()
    
    //router.push('/')

    return (
        <Box>
            Signing out...
        </Box>
    )
}