import { Box, Heading } from "@chakra-ui/react"
import Navbar from "../Navbar"

export default function Layout({ children }) {
    return (
        <div>
            
            <Box>{children}</Box>
        </div>
    )
}