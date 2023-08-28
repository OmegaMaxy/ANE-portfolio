import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layouts/sidebarlayout";
import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Link, Select, Text, Checkbox, HStack, AlertIcon, Alert } from "@chakra-ui/react";
import NextLink from 'next/link'
import ChakraLink from "../../components/core/Link";
import ButtonLink from "../../components/core/ButtonLink";
import { get, saveUserPortfolioDesign } from "../../services/users";
import { useSession } from "next-auth/react";
import { PostsPageBioType } from "@prisma/client";



const Page: NextPageWithLayout = () => {

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [portfolioBanner, setPortfolioBanner] = useState('')
    const [accountUpdateStatus, setAccountUpdateStatus] = useState({ visible: false, status: 'success' as 'success' | 'error', message: '' })

    // Password update
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordUpdateStatus, setPasswordUpdateStatus] = useState({ visible: false, status: 'success' as 'success' | 'error', message: '' })


    const [bgColor, setBgColor] = useState('')
    const [secondaryColor, setSecondaryColor] = useState('')
    const [isSubscribeBoxVisible, setSubscribeBoxVisibility] = useState(false)
    const [isLatestPostVisible, setLatestPostVisibility] = useState(false)
    const [isFooterVisible, setFooterVisibility] = useState(false)
    const [bioBox, setBioBox] = useState('' as PostsPageBioType)
    const [portfolioDesignUpdateStatus, setPortfolioDesignUpdateStatus] = useState({ visible: false, status: 'success' as 'success' | 'error', message: '' })

    async function updateAccount() {
        //const res = await login({email, password})
        console.log(email, fullName, profilePic, portfolioBanner)
        // update session
    }
    async function updatePassword() {
        //const res = await login({email, password})
        console.log(oldPassword, newPassword)
    }

    async function updatePortfolioDesign() {
        //const res = await login({email, password})
        const data = await saveUserPortfolioDesign({ 
            user_id: session.data.user.id,
            posts_bio_type: bioBox,
            bg_color: bgColor,
            secondary_color: secondaryColor,
            show_free_footer: isFooterVisible,
            show_latest_post: isLatestPostVisible,
            show_subscribe_box: isSubscribeBoxVisible,
        })
        
        if (data.user) {
            setPortfolioDesignUpdateStatus({ visible: true, status: 'success', message: 'Settings saved!'})
        } else if (data.error) {
            setPortfolioDesignUpdateStatus({ visible: true, status: 'error', message: data.error})
        } else {
            setPortfolioDesignUpdateStatus({ visible: true, status: 'error', message: 'Something went badly wrong..'})
        }
    }

    const session = useSession()

    useEffect(() => {
        async function getAccount() {
            const data = await get({id: session.data.user.id})

            setEmail(data.user.email)
            setFullName(data.user.fullname)
            setProfilePic(data.user.profile_picture)
            setPortfolioBanner(data.user.portfolio_banner)
        }
        if (session.status === 'authenticated') {
            getAccount()
        }
    }, [session])

    return (
        
        <Box maxW="lg">
            <Heading>Your account</Heading>
            <Divider my="5" />
            <Heading size="lg" mb="5">Account details</Heading>
            <Alert status={accountUpdateStatus.status} display={accountUpdateStatus.visible ? 'flex' : 'none'}>
                <AlertIcon />
                {accountUpdateStatus.message}
            </Alert>
            <Box mt="10">
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
                    <Input value={profilePic} onChange={(ev) => setProfilePic(ev.target.value)} name="profilePic" type="url" placeholder="https://..." />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Portfolio banner</FormLabel>
                    <Input value={portfolioBanner} onChange={(ev) => setProfilePic(ev.target.value)} name="portfolioBanner" type="url" placeholder="https://..." />
                </FormControl>
                <Button variant="main" onClick={updateAccount} mt="10">Save</Button>
            </Box>
            <Divider my="5" />
            <Heading size="lg" mb="5">Portfolio design</Heading>
            <Alert status={portfolioDesignUpdateStatus.status} display={portfolioDesignUpdateStatus.visible ? 'flex' : 'none'}>
                <AlertIcon />
                {portfolioDesignUpdateStatus.message}
            </Alert>
            <Box mt="10">
                <FormControl>
                    <FormLabel>Background color</FormLabel>
                    <Input value={bgColor} onChange={(ev) => setBgColor(ev.target.value)} name="bgColor" type="color" />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Secondary color</FormLabel>
                    <Input value={secondaryColor} onChange={(ev) => setSecondaryColor(ev.target.value)} name="secondaryColor" type="color" />
                </FormControl>
                <FormControl mt="5">
                    <HStack gap="4">
                        <FormLabel m="0">Show subscribe box?</FormLabel>
                        <Checkbox isChecked={isSubscribeBoxVisible} onChange={(ev) => setSubscribeBoxVisibility(ev.target.checked)} name="isSubscribeBoxVisible" size="lg" />
                    </HStack>
                </FormControl>
                <FormControl mt="5">
                    <HStack gap="4">
                        <FormLabel m="0">Show latest post?</FormLabel>
                        <Checkbox isChecked={isLatestPostVisible} onChange={(ev) => setLatestPostVisibility(ev.target.checked)} name="isLatestPostVisible" size="lg" />
                    </HStack>
                </FormControl>
                <FormControl mt="5">
                    <HStack gap="4">
                        <FormLabel m="0">Show footer?</FormLabel>
                        <Checkbox isChecked={isFooterVisible} onChange={(ev) => setFooterVisibility(ev.target.checked)} name="isFooterVisible" size="lg"/>
                    </HStack>
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>Posts page: biography box</FormLabel>
                    <Select value={bioBox} onChange={(ev) => setBioBox(ev.target.value as PostsPageBioType)} name="bioBox">
                        <option value="Latest_Post">Latest post</option>
                        <option value="Short_Text">Bio text</option>
                    </Select>
                </FormControl>
                <Button variant="main" onClick={updatePortfolioDesign} mt="10">Save</Button>
            </Box>
            <Divider my="10"/>
            <Heading size="lg" mb="5">Update your password</Heading>
            <Alert status={passwordUpdateStatus.status} display={passwordUpdateStatus.visible ? 'flex' : 'none'}>
                <AlertIcon />
                {passwordUpdateStatus.message}
            </Alert>
            <Box mt="10">
                <FormControl>
                    <FormLabel>Old password</FormLabel>
                    <Input value={oldPassword} onChange={(ev) => setOldPassword(ev.target.value)} name="oldPassword" type="password" placeholder="*********" required />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel>New password</FormLabel>
                    <Input value={newPassword} onChange={(ev) => setNewPassword(ev.target.value)} name="newPassword" type="password" placeholder="*********" required />
                </FormControl>
                <Button variant="main" onClick={updatePassword} mt="10">Update</Button>
            </Box>
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

Page.auth = {
    unauthenticated: '/'
}

export default Page