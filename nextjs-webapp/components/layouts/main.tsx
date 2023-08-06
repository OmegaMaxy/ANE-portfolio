import { Box } from "@chakra-ui/react"
import Navbar from "../Navbar"

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <Box p="20">{children}</Box>
        </>
    )
}