import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layouts/sidebarlayout";
import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../components/core/Link";
import ButtonLink from "../../components/core/ButtonLink";



const Page: NextPageWithLayout = () => {

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [portfolioBanner, setPortfolioBanner] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    async function updateAccount() {
        //const res = await login({email, password})
        console.log(email, fullName, profilePic, portfolioBanner)
        // update session
    }
    async function updatePassword() {
        //const res = await login({email, password})
        console.log(oldPassword, newPassword)
    }

    useEffect(() => {
        async function getAccount() {
            console.log("Getting account details")
        }
        getAccount()
    })

    return (
        
        <Box maxW="lg">
            <Heading>Your account</Heading>
            <Divider my="5" />
            <Heading size="lg" mb="10">Account details</Heading>
            <form>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input value={email} onChange={(ev) => setEmail(ev.target.value)} name="email" type="email" placeholder='john.doe@acme.com' required />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Full name</FormLabel>
                    <Input value={fullName} onChange={(ev) => setFullName(ev.target.value)} name="fullname" type="text" placeholder="John Doe" required />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Profile picture</FormLabel>
                    <Input value={profilePic} onChange={(ev) => setProfilePic(ev.target.value)} name="profilePic" type="text" placeholder="https://..." />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Portfolio banner</FormLabel>
                    <Input value={portfolioBanner} onChange={(ev) => setProfilePic(ev.target.value)} name="portfolioBanner" type="text" placeholder="https://..." />
                </FormControl>
                <Button variant="main" onClick={updateAccount} mt="10">Save</Button>
            </form>
            <Divider my="10"/>
            <Heading size="lg" mb="10">Update your password</Heading>
            <form>
                <FormControl>
                    <FormLabel>Old password</FormLabel>
                    <Input value={oldPassword} onChange={(ev) => setOldPassword(ev.target.value)} name="oldPassword" type="password" placeholder="*********" required />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>New password</FormLabel>
                    <Input value={newPassword} onChange={(ev) => setNewPassword(ev.target.value)} name="newPassword" type="password" placeholder="*********" required />
                </FormControl>
                <Button variant="main" onClick={updatePassword} mt="10">Update</Button>
            </form>
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