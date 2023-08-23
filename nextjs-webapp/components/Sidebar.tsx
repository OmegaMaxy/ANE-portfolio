import { Box, HStack, VStack, Heading, Button, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay, Flex } from "@chakra-ui/react";

import ChakraLink from "../components/core/Link";
import { signOut, useSession, } from 'next-auth/react'
import { EditIcon, TimeIcon, SettingsIcon } from '@chakra-ui/icons'



export default function Sidebar({ ...props }) {

    function Link({ href, icon, children, ...props }: { href: string, icon?: any , children: any }) {
        return (
            <ChakraLink href={href} mb="2" {...props}>
                <HStack gap="4">
                    {icon && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px">
                        {icon}
                    </svg>}
                    <Text fontWeight="thin">
                        {children}
                    </Text>
                </HStack>
            </ChakraLink>
        )
    }

    return (
        <Box h="100%" p="10" {...props} position="fixed" top="0" left="0" borderRight="1px solid #303030">
            <ChakraLink href="/portfolio" _hover={{ textDecoration: "none" }}>
                <Heading mb="10">Portfolio</Heading>
            </ChakraLink>
            <VStack align="flex-start" h="88%" width="100%">
                <VStack align="flex-start" mb="10" width="100%">
                    <Link href="/portfolio" icon={<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />}>
                        Dashboard
                    </Link>
                    <Link href="/portfolio/preview" icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />}>
                        View site
                    </Link>
                </VStack>
                <VStack align="flex-start" mb="10" width="100%">
                    <Flex justify="space-between" flexDir="row" width="100%">
                        <Link href="/portfolio/posts" icon={<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />}>
                            Posts
                        </Link>
                        <ChakraLink href="/portfolio/posts/create">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </ChakraLink>
                    </Flex>
                    <VStack ml="18%" align="flex-start" width="100%">
                        <Link href="/portfolio/posts?type=drafts">
                            Draft
                        </Link>
                        <Link href="/portfolio/posts?type=published">
                            Published
                        </Link>
                    F</VStack>
                </VStack>
                <VStack align="flex-start" mb="10" width="100%">
                    <Link href="/account" icon={<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />}>
                        Account
                    </Link>
                    <Link href="/portfolio/analytics" icon={<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />}>
                        Analytics
                    </Link>
                </VStack>
            </VStack>
            <Button onClick={async () => await signOut({ redirect: true, callbackUrl: "/" })} colorScheme="red" position="absolute" bottom="4vh" right="4vh">Logout</Button>
        </Box>
    )
}