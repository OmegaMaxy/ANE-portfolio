import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../../_app";
import Layout from "../../../../components/layouts/page";
import { Box, VStack, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../../components/core/Link";
import Navbar from "../../../../components/Navbar";
import { getPosts } from "../../../../services/users";
import { getSession, useSession } from "next-auth/react";
import moment from 'moment'
import SettingsBar from "../../../../components/SettingsBar";


const Page: NextPageWithLayout = () => {

    const [user, setUser] = useState({ fullname: '', bio_text: '', profile_picture: '', portfolio_banner: '', posts: [], portfolio_design: {} })
    const [posts, setPosts] = useState([])



    useEffect(() => {

        async function getData() {
            const session = await getSession()
            const data = await getPosts({ id: session.user.id })
            setUser(data.user)
            setPosts(data.user.posts)
        }

        getData()
    }, [])

    return (
        <Box bg="white">
            <SettingsBar/>
            <Image boxSize="max-content" objectFit="cover" height="15rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
            <Box bg="white" w="container.md" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                <Flex justify="space-between">
                    <Avatar position="relative" mt="-75" size="2xl" loading="lazy" showBorder={true} border="4px solid white" src={user.profile_picture} name={user.fullname} />
                </Flex>
                {
                    user.portfolio_design.posts_bio_type == 'Latest_Post' ?
                    <Box>
                            <Tag mt="5" size="md" bg="gray.100" color="blackAlpha.800">New</Tag>
                            <Heading mt="2" color="blackAlpha.800">{user.posts[user.posts.length - 1].title}</Heading>
                            <Text fontSize="md" mt="2" mb="5" color="blackAlpha.800">{user.posts[user.posts.length - 1].content.substring(0, 250)}</Text>
                            <ChakraLink href={`/portfolio/preview/posts/${user.posts[user.posts.length - 1].id}`} fontWeight="medium" color={user.portfolio_design.secondary_color}>Read newest post →</ChakraLink>
                        </Box> : <Box>
                            <Heading color="blackAlpha.800" mt="5">{user.fullname}</Heading>
                            <Text fontSize="md" my="2" color="blackAlpha.800">{user.bio_text}</Text>
                        </Box>
                }
            </Box>
            <Flex bg="whitesmoke" flexDir="column" justify="center" align="center" py="10">
                <Box>
                    <Heading mb="5" size="xl" fontWeight="medium">More recent posts</Heading>
                    <VStack gap="50">
                        {posts.map((post: any) => (
                            <Card w="container.md" size="lg" bg="white">
                                <CardHeader>
                                    <LinkOverlay href={`/portfolio/preview/posts/${post.id}`}>
                                        <Heading my="3" color="blackAlpha.800" size="md">{post.title}</Heading>
                                    </LinkOverlay>
                                    <Text fontSize="sm" color="gray.500">{moment(post.publish_date).format('MMMM D, YYYY')}</Text>
                                </CardHeader>
                                <CardBody py="0">
                                    <Text color="blackAlpha.800" fontWeight="medium">{post.content != null ? post.content.substring(0, 50) : ''} →</Text>
                                </CardBody>
                                <CardFooter><ChakraLink href={`/portfolio/preview/posts/${post.id}`} color={user.portfolio_design.secondary_color} fontWeight="medium">Read more →</ChakraLink></CardFooter>
                            </Card>
                        ))}
                    </VStack>
                </Box>
                <Box w="container.md" mt="12">
                    <Text color="blackAlpha.800" fontWeight="medium" mb="3">Subscribe to my updates</Text>
                    <Flex gap="3">
                        <Input name="email" type="email" placeholder="john.doe@acme.com" borderColor="gray.300" color="blackAlpha.800" bg="white" _placeholder={{ color: "gray.400" }} _hover={{ borderColor: 'gray.400' }} _focusVisible={{ borderColor: 'pink.500', borderWidth: "2px" }} />
                        <Button bg="pink.500" color="white" _hover={{ bg: "pink.600", color: "white" }}>Subscribe</Button>
                    </Flex>
                </Box>
            </Flex>
            <Flex justify="center" align="center" p="8" bg="#f1f1f1">
                <Text fontSize="xs" color="gray.600">Made with <ChakraLink href="/" textDecoration="underline">Portfolio</ChakraLink></Text>
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


export default Page