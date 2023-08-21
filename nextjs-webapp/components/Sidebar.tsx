import { Box, HStack, VStack, Heading, Button, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";

import ChakraLink from "../components/core/Link";
import { signOut, useSession, } from 'next-auth/react'


export default function Sidebar({ ...props }) {
    
    return (
        <Box h="100%" p="10" {...props}>
            <ChakraLink href="/portfolio" _hover={{ textDecoration: "none" }}>
                <Heading mb="10">Portfolio</Heading>
            </ChakraLink>
            <VStack align="flex-start" h="90%">
                <ChakraLink href="/account">Account</ChakraLink>
                <ChakraLink href="/portfolio/analytics">Analytics</ChakraLink>
                <ChakraLink href="/portfolio/posts">Posts</ChakraLink>
            </VStack>
            <Button onClick={() => signOut()} colorScheme="red" position="fixed" bottom="3vh">Logout</Button>
        </Box>
    )
}