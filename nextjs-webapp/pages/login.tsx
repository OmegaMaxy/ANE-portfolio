import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { login } from "../services/users";



const Login: NextPageWithLayout = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginBtnClicked() {
        //const res = await login({email, password})
        console.log(email, password)
    }
    
    return (
        <Flex py="40" textAlign="center" alignItems="center" justify="center" flexDir="column" gap="10">
            <Flex justify="center" flexDir="column" maxW="xl">
                <Heading size="2xl">Sign in to Portfolio</Heading>
                <Text pt={5}>Glad to have you back!</Text>
            </Flex>
            <Box w="xl" maxW="xl">
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required/>
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Password</FormLabel>
                    <Input value={password} onChange={(ev) => setPassword(ev.target.value)} name="password" type="password" placeholder="*********" required />
                </FormControl>
                <Flex justifyContent="flex-end" alignItems="center" mt="5">
                    <Link href="/forgot-password" as={NextLink} color="main.500">Forgot your password?</Link>
                </Flex>
                <Button mt="10" w="100%" variant="main" onClick={loginBtnClicked}>Login →</Button>
            </Box>
        </Flex>
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Login