import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Flex, Box, FormControl, FormLabel, Heading, Input, Text, Button } from "@chakra-ui/react";
import ChakraLink from "../components/core/Link";



const Register: NextPageWithLayout = () => {

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        //const res = await login({email, password})
        console.log(email, password, fullName)

        // redirect to portfolio edit page
    }

    return (
        <Box py="40">
            <Flex justify="center" flexDir="column" textAlign="center">

                <Heading size="2xl">First, create an account</Heading>
                <Text pt={5}>
                    We'll use this info to customize your website.
                    <br/>
                    Already have an account? <ChakraLink href="/login" color="main.900">Sign in</ChakraLink>.
                </Text>
            </Flex>
            <Flex justify="center" pt="10" textAlign="center">
                <form>
                    <FormControl mt="5">
                        <FormLabel>Your full name</FormLabel>
                        <Input value={fullName} onChange={(ev) => setFullName(ev.target.value)} name="fullname" type="text" placeholder='John Doe' required />
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Email</FormLabel>
                        <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required />
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Password</FormLabel>
                        <Input value={password} onChange={(ev) => setPassword(ev.target.value)} name="password" type="password" placeholder="*********" required />
                    </FormControl>
                    <Button variant="main" onClick={handleRegister} mt="10">Next: Design your page →</Button>
                    <Text mt="5">By signing up, you agree to the <ChakraLink href="/policies" textDecoration="underline">terms and privacy policy</ChakraLink>.</Text>
                </form>
            </Flex>
        </Box>
    )
}

Register.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Register