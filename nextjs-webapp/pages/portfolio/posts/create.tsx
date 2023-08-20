import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../components/layouts/page";
import {
    Box, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../components/core/Link";
import Navbar from "../../../components/Navbar";
import { createPost } from '../../../services/posts'
import { getSession, useSession } from "next-auth/react";
import SettingsBar from "../../../components/SettingsBar";
import { useRouter } from "next/router";


const Page: NextPageWithLayout = () => {

    const [user, setUser] = useState({ id: 0, fullname: '', bio_text: '', profile_picture: '', portfolio_banner: '', posts: [] })
    const [content, setContent] = useState('')
    const [error, setError] = useState(false)
    const [title, setTitle] = useState('')

    const router = useRouter()
    
    async function create() {
        const data = await createPost({ user_id: user.id , title, content })
        if (!data.errors) {
            router.push(`/portfolio/posts/${data.post.id}`)
        } else {
            setError(true)
        }
    }
    
    useEffect(() => {
        async function a() {
            const session = await getSession()
            console.log(session)
            setUser(session.user)

        }
        //const { data: session } = useSession()
        a()
    }, [])


    return (
        <Box bg="white">
            <SettingsBar />
            <Image boxSize="max-content" objectFit="cover" height="9rem" w="100%" src={user.portfolio_banner} alt="Nice banner" />
            <Box bg="white" w="container.sm" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                <Flex justify="space-between">
                    <Avatar position="relative" mt="-75" size="2xl" loading="lazy" showBorder={true} border="4px solid white" src={user.profile_picture} name={user.fullname} />
                </Flex>
                <Heading color="blackAlpha.800" mt="5">{user.fullname}</Heading>
                
                <Alert status='error' my="5" display={error ? 'block' : 'none'}>
                    <AlertIcon />
                    <AlertTitle>Something went wrong</AlertTitle>
                    <AlertDescription>Please try again.</AlertDescription>
                </Alert>

                <FormControl mt="5">
                    <FormLabel>Title</FormLabel>
                    <Input value={title} onChange={(ev) => setTitle(ev.target.value)} name="title" type="text" placeholder='The story of ...' required />
                </FormControl>
                <FormControl mt="10">
                    <FormLabel>Content</FormLabel>
                    <Textarea value={content} onChange={(ev) => setContent(ev.target.value)} color="blackAlpha.800" _placeholder={{ color: 'blackAlpha.500' }} border="2px solid #63b3ed" _hover={{ border: "2px solid #63b3ed" }} placeholder="I'm an entrepreneur with a background in product & design. You can connect with me on LinkedIn and Twitter 👋"></Textarea>
                </FormControl>

                <Button mt="5" onClick={create} colorScheme="cyan">Create</Button>
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