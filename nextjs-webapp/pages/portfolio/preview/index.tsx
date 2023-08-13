import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../components/layouts/page";
import { Box, Button, HStack, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../components/core/Link";
import Navbar from "../../../components/Navbar";
import { get } from "../../../services/users";
import { getSession, useSession } from "next-auth/react";
import SettingsBar from "../../../components/SettingsBar";



const Page: NextPageWithLayout = () => {

    const [user, setUser] = useState({ fullname: '', bio_text: '', profile_picture: '', portfolio_banner: '', posts: [] })
    const [bioText, setBioText] = useState('')
    const [latestPost, setLatestPost] = useState({ id: 0, title: '', date: '', shortDesc: '' })

    

    useEffect(() => {
        let session = null 
        async function main() {
            session = await getSession()
        }

        async function getAccount() {
            await main()
            console.log("Getting account details")
            const data = await get({ id: session.user.id })
            setUser(data.user)
        }
        async function getLatestPost() {
            console.log("Getting latest post")
            setLatestPost(user.posts[0])
            setLatestPost({
                id: 1,
                title: 'Velvet early access',
                date: new Date('April 13, 2023').toLocaleString(),
                shortDesc: 'Thanks for following my startup journey. We’re launching Velvet Early Access on Product Hunt today, and I would love your support! Support Velvet on Product Hunt'
            })
        } 
        
        getAccount()
        getLatestPost()
    }, [])

    return (
        <Box bg="white">
            <SettingsBar/>
            <Image boxSize="max-content" objectFit="cover" height="9rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
            <Box bg="white" w="container.sm" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                <Flex justify="space-between">
                    <Avatar position="relative" mt="-75" size="2xl" loading="lazy" showBorder={true} border="4px solid white" src={user.profile_picture} name={user.fullname} />
                    <ChakraLink href="/portfolio/preview/posts" alignSelf="center" color="pink.500" fontWeight="medium">Recent posts →</ChakraLink>
                </Flex>
                <Heading color="blackAlpha.800" mt="5">{user.fullname}</Heading>
                <Text fontSize="sm" my="2" color="blackAlpha.800">{user.bio_text}</Text>
            </Box>
            <LinkBox display={latestPost ? 'initial' : 'none'}>
                <Flex bg="whitesmoke" flexDir="column" justify="center" align="center" py="10">
                    <Card w="container.sm" size="lg" bg="white">
                        <CardHeader>
                            <Tag size="md" bg="gray.100" color="blackAlpha.800">New</Tag>
                            <LinkOverlay href={`/posts/${latestPost.id}`}>
                                <Heading my="3" color="blackAlpha.800" size="md">{latestPost.title}</Heading>
                            </LinkOverlay>
                            <Text fontSize="sm" color="gray.400">{latestPost.date}</Text>
                        </CardHeader>
                        <CardBody py="0">
                            <Text color="blackAlpha.800" fontWeight="medium">{latestPost.shortDesc} →</Text>
                        </CardBody>
                        <CardFooter><ChakraLink href={`/posts/${latestPost.id}`} color="pink.500" fontWeight="medium">Read more →</ChakraLink></CardFooter>
                    </Card>
                    <Box w="container.sm" mt="12">
                        <Text color="blackAlpha.800" fontWeight="medium" mb="3">Subscribe to my updates</Text>
                        <Flex gap="3">
                            <Input name="email" type="email" placeholder="john.doe@acme.com" borderColor="gray.300" color="blackAlpha.800" bg="white" _placeholder={{ color: "gray.400" }} _hover={{ borderColor: 'gray.400' }} _focusVisible={{ borderColor: 'pink.500', borderWidth: "2px" }} />
                            <Button bg="pink.500" color="white" _hover={{ bg: "pink.600", color: "white" }}>Subscribe</Button>
                        </Flex>
                    </Box>
                </Flex>
            </LinkBox>
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