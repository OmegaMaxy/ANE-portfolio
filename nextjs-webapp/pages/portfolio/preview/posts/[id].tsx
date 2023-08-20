import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../../../_app";
import Layout from "../../../../components/layouts/page";
import { Box, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../../../components/core/Link";
import Navbar from "../../../../components/Navbar";
import { get } from "../../../../services/users";
import { getSession, useSession } from "next-auth/react";
import { getPost } from "../../../../services/posts";
import moment from 'moment'
import { Post } from "@prisma/client";


const Page: NextPageWithLayout = ({ id }: { id: number }) => {

    const [user, setUser] = useState({ fullname: '', bio_text: '', profile_picture: '', portfolio_banner: '', posts: [] })
    //const [post, setPost] = useState({} as Post)
    const [post, setPost] = useState({ author: { portfolio_design: {} }})

    useEffect(() => {

        async function getPostData() {
            const data = await getPost({ id })
            setPost(data.post)
        }

        getPostData()
    }, [])

    return (
        <Box bg="white">
            <Image boxSize="max-content" objectFit="cover" height="15rem" w="100%" src={post.author.portfolio_banner} alt="Nice banner" />
            <Box bg="white" w="container.md" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                <Flex justify="space-between">
                    <Avatar position="relative" mt="-75" size="3xl" loading="lazy" showBorder={true} border="4px solid white" src={post.author.profile_picture} name={post.author.fullname} />
                    <ChakraLink href="/portfolio/preview/posts" alignSelf="center" color="pink.500" fontWeight="medium">Recent posts →</ChakraLink>
                </Flex>
                <Heading color="blackAlpha.800" mt="5">{post.title}</Heading>
                <Text fontSize="md" mt="5" fontWeight="medium" color={post.author.portfolio_design.secondary_color}>{post.author.fullname}</Text>
                <Text fontSize="sm" color="blackAlpha.800">{moment(post.publish_date).format("MMMM D, YYYY")}</Text>
                <Text mt="10">{post.content}</Text>
            </Box>
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

export async function getServerSideProps(context: any) {
    return {
        props: { id: context.params.id }, // will be passed to the page component as props
    }
}