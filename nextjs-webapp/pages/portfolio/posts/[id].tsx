import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../_app";
import Layout from "../../../components/layouts/page";
import {
    Box, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../components/core/Link";
import Navbar from "../../../components/Navbar";
import { savePost, getPost } from '../../../services/posts'
import { getSession, useSession } from "next-auth/react";
import SettingsBar from "../../../components/SettingsBar";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next/types";


const Page: NextPageWithLayout = ({ id }: {id: number}) => {

    const [user, setUser] = useState({ id: 0, fullname: '', profile_picture: '', portfolio_banner: '', portfolio_design: {} })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function save() {
        setError(false)
        setSuccess(false)
        const data = await savePost({ id, title, content })
        console.log(data)
        if (!data.errors) {
            setSuccess(true)
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        async function getPostData() {
            const data = await getPost({ id })
            setTitle(data.post.title)
            setContent(data.post.content != null ? data.post.content : '')
            setUser(data.post.author)
        }
        //const { data: session } = useSession()
        getPostData()
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

                <Alert status='error' my="5" display={error ? 'flex' : 'none'}>
                    <AlertIcon />
                    <AlertTitle>Something went wrong</AlertTitle>
                    <AlertDescription>Please try again.</AlertDescription>
                </Alert>

                <Alert status='success' my="5" display={success ? 'flex' : 'none'}>
                    <AlertIcon />
                    <AlertTitle>Saved!</AlertTitle>
                    <AlertDescription>
                        <ChakraLink href={`/portfolio/preview/posts/${id}`} target="_blank" color="main.500">View preview here.</ChakraLink>
                    </AlertDescription>
                </Alert>

                <FormControl mt="5">
                    <FormLabel>Title</FormLabel>
                    <Input value={title} onChange={(ev) => setTitle(ev.target.value)} name="title" type="text" placeholder='The story of ...' required />
                </FormControl>
                <FormControl mt="10">
                    <FormLabel>Content</FormLabel>
                    <Textarea value={content} onChange={(ev) => setContent(ev.target.value)} color="blackAlpha.800" _placeholder={{ color: 'blackAlpha.500' }} border="2px solid #63b3ed" _hover={{ border: "2px solid #63b3ed" }} placeholder="I'm an entrepreneur with a background in product & design. You can connect with me on LinkedIn and Twitter 👋"></Textarea>
                </FormControl>

                <Button mt="5" onClick={save} colorScheme="cyan">Save</Button>
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

export async function getServerSideProps(context) {
    return {
        props: { id: context.params.id }, // will be passed to the page component as props
    }
}

