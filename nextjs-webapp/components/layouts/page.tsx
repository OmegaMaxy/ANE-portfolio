import { Box } from "@chakra-ui/react"
import Navbar from "../Navbar"


// layout for portfolio page
export default function Layout({ children }) {
    return (
        <>
            <Box>{children}</Box>
        </>
    )
}