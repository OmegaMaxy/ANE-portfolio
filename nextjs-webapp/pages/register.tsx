import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Flex, Box, FormControl, FormLabel, Heading, Input, Text, Button } from "@chakra-ui/react";



const Register: NextPageWithLayout = () => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        //const res = await login({email, password})
        console.log(email, password, firstName, lastName)
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
                        <FormLabel>First name</FormLabel>
                        <Input value={firstName} onChange={(ev) => setFirstName(ev.target.value)} name="firstname" type="text" placeholder='John' required />
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Last name</FormLabel>
                        <Input value={lastName} onChange={(ev) => setLastName(ev.target.value)} name="lastname" type="text" placeholder='Doe' />
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