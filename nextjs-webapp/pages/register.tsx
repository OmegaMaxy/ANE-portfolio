import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Flex, Box, FormControl, FormLabel, FormErrorMessage, Heading, Input, Text, Button } from "@chakra-ui/react";
import ChakraLink from "../components/core/Link";
import { register } from "../services/users";
import { encryptPassword } from "../util/encryption";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";



const Register: NextPageWithLayout = () => {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [fullname, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [hasFullnameError, setFullnameError] = useState(false)
    const [hasEmailError, setEmailError] = useState(false)
    const [hasPasswordError, setPasswordError] = useState(false)

    async function handleRegister() {

        const res = await register({ email, fullname, password })
        if (res.data.errors) {
            const errs = res.data.errors
            setEmailError(errs.includes("email.invalid"))
            setFullnameError(errs.includes("fullname.invalid"))
            setPasswordError(errs.includes("password.invalid"))
        } else {
            // create session
            signIn("credentials", { email, password })
            // redirect to /portfolio-editor
            router.push('/portfolio')
        }
    }

    return (
        <Box py="40">
            <Flex justify="center" flexDir="column" textAlign="center">

                <Heading size="2xl">First, create an account</Heading>
                <Text pt={5}>
                    We'll use this info to customize your website.
                    <br/>
                    Already have an account? <ChakraLink href="/login" color="main.500">Sign in</ChakraLink>.
                </Text>
            </Flex>
            <Flex justify="center" pt="10" textAlign="center">
                <form>
                    <FormControl mt="5" isInvalid={hasFullnameError}>
                        <FormLabel>Your full name</FormLabel>
                        <Input value={fullname} onChange={(ev) => setFullName(ev.target.value)} name="fullname" type="text" placeholder='John Doe' required />
                        <FormErrorMessage visibility={hasFullnameError ? "visible" : "hidden"}>Fullname is invalid.</FormErrorMessage>
                    </FormControl>
                    <FormControl mt="5" isInvalid={hasEmailError}>
                        <FormLabel>Email</FormLabel>
                        <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required />
                        <FormErrorMessage visibility={hasEmailError ? "visible" : "hidden"}>Email is invalid.</FormErrorMessage>
                    </FormControl>
                    <FormControl mt="5" isInvalid={hasPasswordError}>
                        <FormLabel>Password</FormLabel>
                        <Input value={password} onChange={(ev) => setPassword(ev.target.value)} name="password" type="password" placeholder="*********" required />
                        <FormErrorMessage visibility={hasPasswordError ? "visible" : "hidden"}>Password is invalid.</FormErrorMessage>
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