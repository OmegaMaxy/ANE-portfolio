import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layouts/sidebarlayout";
import { Box, HStack, VStack, Heading, Button, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../components/core/Link";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { signOut, useSession, } from 'next-auth/react'
import { useRouter } from "next/router";
import ButtonLink from "../../components/core/ButtonLink";


const Page: NextPageWithLayout = () => {

    const { data: session, status, update } = useSession()
    const router = useRouter()

    if (status === 'unauthenticated') {
        router.push('/login')
    }

    /*useEffect(() => {
        //update()
    }, [])*/

    return (
        <Box>
            <Box mb="10">
                <Heading>You made it!</Heading>
                <ChakraLink href="/portfolio/preview" color="gray.600" textDecoration="underline">View your portfolio as customer →</ChakraLink>
            </Box>
            <ButtonLink href="/portfolio/edit" variant="main">Start editing →</ButtonLink>
        </Box>
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