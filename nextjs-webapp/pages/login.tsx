import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text, Alert, AlertIcon, AlertDescription, AlertTitle } from "@chakra-ui/react";
import NextLink from 'next/link'
import { login } from "../services/users";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";


const Login: NextPageWithLayout = (props: any) => {

    const router = useRouter()
    const { error } = router.query

    const [email, setEmail] = useState('')
    const [hasEmailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [hasPasswordError, setPasswordError] = useState(false)

    const { data: session, status, update } = useSession()
    useEffect(() => {
        if (status == 'authenticated') {
            router.push('/portfolio')
        }
    }, [session])
    
    async function loginBtnClicked() {
        /*const res = await login({email, password})
        if (res.data.errors) {
            const errs = res.data.errors
            setEmailError(errs.includes("email.invalid"))
            setPasswordError(errs.includes("password.invalid"))
        }*/
        const res = await signIn("credentials", { email, password, redirect: true, callbackUrl: '/portfolio' })
        /*if (res.ok) {
            router.push('/portfolio')
        }*/
    }


    
    return (
        <Flex py="40" textAlign="center" alignItems="center" justify="center" flexDir="column" gap="10">
            <Flex justify="center" flexDir="column" maxW="xl">
                <Heading size="2xl">Sign in to Portfolio</Heading>
                <Text pt={5}>Glad to have you back!</Text>
            </Flex>
            <Alert maxW="xl" status='error' display={error ? 'flex' : 'none'}>
                <AlertIcon />
                <AlertTitle>Something went wrong!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
            <Box w="xl" maxW="xl">
                <FormControl isInvalid={hasEmailError}>
                    <FormLabel>Email</FormLabel>
                    <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required/>
                    <FormErrorMessage visibility={hasEmailError ? "visible" : "hidden"}>Email is invalid.</FormErrorMessage>
                </FormControl>
                <FormControl mt="5" isInvalid={hasPasswordError}>
                    <FormLabel>Password</FormLabel>
                    <Input value={password} onChange={(ev) => setPassword(ev.target.value)} name="password" type="password" placeholder="*********" required />
                    <FormErrorMessage visibility={hasPasswordError ? "visible" : "hidden"}>Password is invalid.</FormErrorMessage>
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