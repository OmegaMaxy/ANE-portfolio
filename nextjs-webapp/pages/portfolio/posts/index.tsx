import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../components/layouts/sidebarlayout";
import { useColorModeValue, IconButton, Box, HStack, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import ChakraLink from "../../../components/core/Link";
import { getPosts, saveUserBio } from '../../../services/users'
import { getSession, useSession } from "next-auth/react";
import SettingsBar from "../../../components/SettingsBar";
import moment from 'moment'
import { ChevronDownIcon } from "@chakra-ui/icons";
import Filter from "../../../components/posts/filter";

const Page: NextPageWithLayout = (props: any) => {

    const [user, setUser] = useState(null as any)
    const [posts, setPosts] = useState([] as any)
    const [filter, setFilter] = useState(null)

    const session = useSession()
    

    useEffect(() => {
        async function fetchPosts() {

            const data = await getPosts({ user_id: session.data.user.id, filter: filter })
            
            setPosts(data.posts)
            setUser(session.data.user)
        }
        async function handleType() {
            // needs to use props.type
            setFilter({ type: 'all' })
        }
        
        if (session.status === 'authenticated') {
            handleType()
            fetchPosts()
        }
    }, [session])

    function oldPost(post: any) {
        
        return (
            <LinkBox key={post.id}>
                <Box py="5">
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
                </Box>
            </LinkBox>
        )
    }

    return (
        <Box>
            <HStack justify="space-between" mb="4">
                <Heading>Posts</Heading>
                <Filter user_id={user?.id} setPosts={setPosts}/>
            </HStack>
            <Flex flexDir="column" justifyContent="flex-start">
                {posts && posts.length != 0 ? posts.map((post: any) => (
                    <ChakraLink href={`/portfolio/posts/${post.id}`} textDecoration="none" key={post.id} py="2" px="5" _hover={{ bg: "#212938b0" }} borderTop="2px solid #ffffff0a">
                        <Flex justify="space-between">
                            <Box>
                                <Heading my="3" color={useColorModeValue("blackAlpha.800", 'white')} size="sm">{post.title}</Heading>
                                <Text fontSize="sm" color="gray.400">By {user?.fullname} - {moment(post.updated_at).fromNow()}</Text>
                                {post.published ?
                                    <Text color={useColorModeValue('black', 'main.500')}>Published</Text>
                                    :
                                    <Text color={useColorModeValue('main.500', 'red.500')} fontWeight="bold">Draft</Text>
                                }
                            </Box>
                            <IconButton aria-label='Edit post' border="1px solid #ffffff1f" icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>}
                            />
                        </Flex>
                    </ChakraLink>
                )) : <Text>Create your first post <ChakraLink href="/portfolio/posts/create" color="main.500">here</ChakraLink>.</Text>}
            </Flex>
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
Page.auth = {
    //loading: 'admin',
    unauthenticated: '/',
}

export default Page

export async function getServerSideProps(context: any) {

    return {
        props: {
            type: context.query.type ? context.query.type : ''
        }
    }
} 