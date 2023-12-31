import { Box, HStack, Heading } from "@chakra-ui/react"
import Navbar from "../Navbar"
import ChakraLink from "../core/Link"
import ButtonLink from "../core/ButtonLink"
import Sidebar from "../Sidebar"
import { useColorModeValue } from "@chakra-ui/react"

export default function Layout({ children }) {
    return (
        <HStack bg={useColorModeValue("#e1e1e1", "chakra-body-bg")} h="100vh">
            <Sidebar w="15%" />
            <Box ml="15%" w="85%" h="100%" p="10" bg={useColorModeValue("white", "chakra-body-bg")}>
                {children}
            </Box>
        </HStack>
    )
}