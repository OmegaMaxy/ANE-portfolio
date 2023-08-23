import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layouts/sidebarlayout";
import { Box, HStack, VStack, Heading, Image, Flex, Avatar, Button, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay, Divider } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../components/core/Link";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { getSession, signOut, useSession, } from 'next-auth/react'
import { useRouter } from "next/router";
import ButtonLink from "../../components/core/ButtonLink";
import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import type { GetServerSidePropsContext } from "next"
import { authOptions } from "../api/auth/[...nextauth]"
import getServerSideSessionPropsLogic from "../../lib/getServerSideSessionPropsLogic";

const Page: NextPageWithLayout = (props) => {


    //const router = useRouter()
    const [lastTenPosts, setLastTenPosts] = useState([])
    //const session = {user: {}}
    const [session, setSession] = useState(null)
    
    async function getUserLastTenPosts() {
        console.log('Not implemented yet.')
    }

    useEffect(() => {
        //console.log(props)
        async function bb() {
            setSession(await getSession())
        }
        bb()
    }, []) 

    return (
        <Box>
            <Box mb="10">
                <HStack alignItems="start" justify="space-between">
                    <Box>
                        <Heading>You made it!</Heading>
                        <ChakraLink href="/portfolio/preview" color="gray.600" textDecoration="underline">View your portfolio as customer →</ChakraLink>
                        <ButtonLink href="/portfolio/edit" variant="main" mt="10" display="block">Start editing →</ButtonLink>
                    </Box>
                    <Box transform="scale(1.0)" w="container.lg" border="8px solid gray" borderColor="gray.600" borderRadius="10px">
                        <Box bg="white">
                            <Image boxSize="max-content" objectFit="cover" height="9rem" w="100%" src={session?.user.portfolio_banner} alt="Nice banner" />
                            <Box bg="white" w="container.sm" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                                <Flex justify="space-between">
                                    <Avatar position="relative" mt="-75" size="2xl" loading="lazy" showBorder={true} border="4px solid white" src={session?.user.profile_picture} name={session?.user.fullname} />
                                    <ChakraLink href="/portfolio/posts" alignSelf="center" color="main.500" fontWeight="medium">Recent posts →</ChakraLink>
                                </Flex>
                                <Heading color="blackAlpha.800" mt="5">{session?.user.fullname}</Heading>
                                <Text my="10" color="blackAlpha.800">
                                    I'm an entrepreneur with a background in product & design. You can connect with me on LinkedIn and Twitter 👋
                                </Text>
                                <Text my="10" color="blackAlpha.800">
                                    I started my career in San Francisco at AKQA and Fitbit where I learned from experienced technologists and caught the entrepreneurial bug. I co-founded Moonlight, a marketplace to discover, hire, and pay experienced software developers. We bootstrapped to profitability, hired a team, raised venture capital, and then sold the platform during the pandemic in 2020. Realizing I'd never had a female boss, I joined theSkimm to re-launch their membership products.
                                </Text>
                                <Text my="10" color="blackAlpha.800">
                                    Now, I'm building Velvet - We make infrastructure for cross-platform app identity.
                                </Text>
                                <Text my="10" color="blackAlpha.800">
                                    Reach out if you want to chat!
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </HStack>
                <Divider my="10" />
                <Heading mb="5">Your posts</Heading>
                <Text>Add your first post <ChakraLink href="/posts/add" color="main.500">here</ChakraLink>.</Text>
                <Divider my="10" />
                <Heading mt="4">Insights</Heading>
                <Text mt="5">Coming soon.</Text>
                <Divider my="10" />
                <Heading>Your account</Heading>
                <ButtonLink href="/account" variant="main" mt="5">Account settings →</ButtonLink>
                <Divider my="10" />
            </Box>
            
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
/*
export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await getServerSideSessionPropsLogic(context, { test: 'a', session: 'b', third: 'c'})
}*/