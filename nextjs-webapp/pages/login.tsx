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
        <Flex alignSelf="center" justify="center" flexDir="column" gap="10" maxW="lg">
            <Flex justify="center" flexDir="column">
                <Heading size="2xl">Login</Heading>
                <Text pt={5}>Glad to have you back!</Text>
            </Flex>
            <Box>
                <form>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required/>
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Password</FormLabel>
                        <Input value={password} onChange={(ev) => setPassword(ev.target.value)} name="password" type="password" placeholder="*********" required />
                    </FormControl>
                    <Flex justifyContent="space-between" alignItems="center" mt="10">
                        <Button colorScheme="teal" onClick={loginBtnClicked}>Login</Button>
                        <Link href="/forgot-password" as={NextLink} color="teal">Forgot password</Link>
                    </Flex>
                </form>
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