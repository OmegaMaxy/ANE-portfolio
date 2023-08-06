import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layouts/page";
import { Box, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../components/core/Link";
import Navbar from "../../components/Navbar";



const Page: NextPageWithLayout = () => {

    const [user, setUser] = useState({fullName: '', profilePic: ''})
    const [bioText, setBioText] = useState('')
    const [subscribeEmailInput, setSubscribeEmailInput] = useState('')

    async function subscribeWithEmail() {

    }

    async function saveBioText() {
        console.log(bioText)
    }

    useEffect(() => {
        async function getAccount() {
            console.log("Getting account details")
            setUser({
                fullName: 'Emma Lawler',
                profilePic: 'https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg'
            })
        }
        getAccount()
    }, [])

    return (
        <Box bg="white">
            <Image boxSize="max-content" objectFit="cover" height="9rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner"/>
            <Box bg="white" w="container.sm" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                <Flex justify="space-between">
                    <Avatar position="relative" mt="-75" size="2xl" loading="lazy" showBorder={true} border="4px solid white" src={user.profilePic} name={user.fullName} />
                    <ChakraLink href="/posts" alignSelf="center" color="pink.500" fontWeight="medium">Recent posts →</ChakraLink>
                </Flex>
                <Heading color="blackAlpha.800" mt="5">{user.fullName}</Heading>
                <Textarea value={bioText} onChange={(ev) => setBioText(ev.target.value)} my="10" color="blackAlpha.800" _placeholder={{ color: 'blackAlpha.500' }} border="2px solid #63b3ed" _hover={{ border: "2px solid #63b3ed" }} placeholder="I'm an entrepreneur with a background in product & design. You can connect with me on LinkedIn and Twitter 👋"></Textarea>
                <Button onClick={saveBioText} colorScheme="cyan">Save</Button>
            </Box>
            <Flex bg="whitesmoke" flexDir="column" justify="center" align="center" py="10">
                <Card w="container.sm" size="lg" bg="white">
                    <CardHeader>
                        <Tag size="md" bg="gray.100" color="blackAlpha.800">New</Tag>
                        <Heading my="3" color="blackAlpha.800" size="md">Velvet early access</Heading>
                        <Text fontSize="sm" color="gray.400">April 13, 2023</Text>
                    </CardHeader>
                    <CardBody py="0">
                        <Text color="blackAlpha.800" fontWeight="medium">Thanks for following my startup journey. We’re launching Velvet Early Access on Product Hunt today, and I would love your support! Support Velvet on Product Hunt →</Text>
                    </CardBody>
                    <CardFooter><ChakraLink href="/posts/1" color="pink.500" fontWeight="medium">Read more →</ChakraLink></CardFooter>
                </Card>
                <Box w="container.sm" mt="12">
                    <Text color="blackAlpha.800" fontWeight="medium" mb="3">Subscribe to my updates</Text>
                    <Flex gap="3">
                        <Input value={subscribeEmailInput} onChange={(ev) => setSubscribeEmailInput(ev.target.value)} name="email" type="email" placeholder="john.doe@acme.com" borderColor="gray.300" color="blackAlpha.800" bg="white" _placeholder={{ color: "gray.400" }} _hover={{ borderColor:'gray.400' }} _focusVisible={{ borderColor: 'pink.500', borderWidth: "2px" }}/>
                        <Button onClick={subscribeWithEmail} bg="pink.500" color="white" _hover={{ bg: "pink.600", color: "white" }}>Subscribe</Button>
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