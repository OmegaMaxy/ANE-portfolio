import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../components/layouts/page";
import { Box, HStack, VStack, Heading, Button, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../components/core/Link";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import { signOut, useSession, } from 'next-auth/react'
import { useRouter } from "next/router";
import ButtonLink from "../../../components/core/ButtonLink";


const Page: NextPageWithLayout = () => {

    const { data: session, status, update } = useSession()
    const router = useRouter()

    if (status === 'unauthenticated') {
        router.push('/login')
    }

    return (
        <HStack bg="#e1e1e1" h="100vh">
            <Sidebar w="15%" h="100%" />
            <Box w="85%" h="100%" p="10" bg="white">
                <Heading>Analytics</Heading>
                <Heading size="md" fontWeight="medium" textDecor="underline" mt="2">Coming soon.</Heading>
            </Box>
        </HStack>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Page