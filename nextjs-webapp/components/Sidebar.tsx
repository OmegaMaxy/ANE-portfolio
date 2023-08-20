import { Box, HStack, VStack, Heading, Button, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";

import ChakraLink from "../components/core/Link";
import { signOut, useSession, } from 'next-auth/react'


export default function Sidebar({ ...props }) {
    
    return (
        <Box h="100%" p="10" bg="#e1e1e1" {...props}>
            <Heading mb="10">Portfolio</Heading>
            <VStack align="flex-start">
                <ChakraLink href="/account">Account</ChakraLink>
                <ChakraLink href="/portfolio/analytics">Analytics</ChakraLink>
                <ChakraLink href="/portfolio/posts">Posts</ChakraLink>
                <Button onClick={() => signOut()} colorScheme="red">Logout</Button>
            </VStack>
        </Box>
    )
}