import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../components/layouts/page";
import { Box, HStack, VStack, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../components/core/Link";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import { getPosts, saveUserBio } from '../../../services/users'
import { getSession, useSession } from "next-auth/react";
import SettingsBar from "../../../components/SettingsBar";
import moment from 'moment'

const Page: NextPageWithLayout = () => {

    const [user, setUser] = useState(null as any)
    const [posts, setPosts] = useState([] as any)

    

    useEffect(() => {
        async function fetchPosts() {

            const session = await getSession()
            const data = await getPosts({ id: session.user.id })
            
            setPosts(data.user.posts)
            setUser(data.user)
        }
        fetchPosts()
    }, [])

    return (
        <HStack bg="white">
            <Sidebar w="15%" />
            <Box w="75%" p="5">
                <Heading>Posts</Heading>
                <VStack>
                    {posts.length != 0 ? posts.map((post: any) => (
                        <LinkBox display={post ? 'initial' : 'none'}>
                            <Flex flexDir="column" justify="center" align="center" py="5">
                                <Card w="container.sm" size="lg" bg="gray.100">
                                    <CardHeader>
                                        <Tag size="md" bg="gray.100" color={post.published ? user.portfolio_design.secondary_color : "blackAlpha.800"}>{post.published ? 'Published' : 'Pending'}</Tag>
                                        <LinkOverlay href={`/posts/${post.id}`}>
                                            <Heading my="3" color="blackAlpha.800" size="md">{post.title}</Heading>
                                        </LinkOverlay>
                                        <Text fontSize="sm" color="gray.400">Updated {moment(post.updated_at).fromNow()}</Text>
                                    </CardHeader>
                                    <CardBody py="0">
                                        <Text color="blackAlpha.800" fontWeight="medium">{post.content != null ? post.content.substring(0, 50) : 'No content yet...'}</Text>
                                    </CardBody>
                                    <CardFooter><ChakraLink href={`/portfolio/posts/${post.id}`} color={user.portfolio_design.secondary_color} fontWeight="medium">View →</ChakraLink></CardFooter>
                                </Card>
                            </Flex>
                        </LinkBox>
                    )) : <Text>Create your first post <ChakraLink href="/portfolio/posts/create" color="main.500">here</ChakraLink>.</Text>}
                </VStack>
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