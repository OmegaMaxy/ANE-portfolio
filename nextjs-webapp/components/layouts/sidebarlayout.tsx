import { Box, HStack, Heading } from "@chakra-ui/react"
import Navbar from "../Navbar"
import ChakraLink from "../core/Link"
import ButtonLink from "../core/ButtonLink"
import Sidebar from "../Sidebar"

export default function Layout({ children }) {
    return (
        <HStack bg="#e1e1e1" h="100vh">
            <Sidebar w="15%" />
            <Box w="85%" h="100%" p="10" bg="white">
                {children}
            </Box>
        </HStack>
    )
}