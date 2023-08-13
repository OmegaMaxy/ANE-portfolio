import { Box, HStack } from '@chakra-ui/react'
import ChakraLink from './core/Link'

export default function SettingsBar() {
    
    return (
        <Box bg = "gray.600" >
            <HStack p="5">
                <ChakraLink href="/portfolio" color="white" textDecoration="underline">Main</ChakraLink>
                <ChakraLink href="/portfolio/posts" color="white" textDecoration="underline">posts</ChakraLink>
            </HStack>
        </Box>
    )
}