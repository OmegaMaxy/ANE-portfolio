import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/main";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { login } from "../services/users";



const Page: NextPageWithLayout = () => {

    const [email, setEmail] = useState('')

    async function handleForm() {
        console.log(email)
    }

    return (
        <Flex alignSelf="center" justify="center" flexDir="column" gap="10" maxW="lg">
            <Flex justify="center" flexDir="column">
                <Heading size="2xl">Forgot your password?</Heading>
                <Text pt={5}>No problem, reset it here!</Text>
            </Flex>
            <Box>
                <form>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required />
                    </FormControl>
                    <Flex justifyContent="space-between" alignItems="center" mt="10">
                        <Button colorScheme="teal" onClick={handleForm}>Send me a mail</Button>
                        <Link href="/login" as={NextLink} color="teal">Login anyways</Link>
                    </Flex>
                </form>
            </Box>
        </Flex>
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