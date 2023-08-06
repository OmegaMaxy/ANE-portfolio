import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Flex, Box, FormControl, FormLabel, Heading, Input, Text, Button } from "@chakra-ui/react";



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
        <Box>
            <Flex justify="center" flexDir="column">

                <Heading size="2xl">Sign up</Heading>
                <Text pt={5}>Glad to have on board!</Text>
            </Flex>
            <Box pt="10">
                <form>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required />
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Full name</FormLabel>
                        <Input value={fullName} onChange={(ev) => setFullName(ev.target.value)} name="fullname" type="text" placeholder='John Doe' required />
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Password</FormLabel>
                        <Input value={password} onChange={(ev) => setPassword(ev.target.value)} name="password" type="password" placeholder="*********" required />
                    </FormControl>
                    <Button colorScheme="teal" onClick={handleRegister} mt="10">Sign up</Button>
                </form>
            </Box>
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