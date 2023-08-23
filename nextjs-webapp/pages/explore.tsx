import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import { Box, Button, Heading, Text, Image, Flex, Avatar, Badge, useColorModeValue } from "@chakra-ui/react";
import { NextPageWithLayout } from "./_app";

import Layout from '../components/layouts/main';
import ButtonLink from '../components/core/ButtonLink';
import ChakraLink from '../components/core/Link';
import Navbar from '../components/Navbar';
import { getRecentUsers } from '../services/users';

const Explore: NextPageWithLayout = () => {

    const [recentUsers, setRecentUsers] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await getRecentUsers()
            setRecentUsers(data.users)
        }
        getData()
    }, [])

    return (
        <Box>
            <Navbar />
            <Box m="20">
                <Heading size="3xl" fontWeight="bolder">Get to know your fellow Portfolio users</Heading>
                <ButtonLink href="/register" mt="10" variant="main">Make your website →</ButtonLink>
            </Box>

            <Flex my="60" gap="2rem 2rem" justify="center" flexWrap="wrap">
                {recentUsers && recentUsers.length != 0 && recentUsers.map((user: any) => (
                    <Box bg="white" w="40%" borderRadius="4px" key={user.id}>
                        <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src={user.portfolio_banner} alt="Nice banner" />
                        <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                            <Flex justify="space-between">
                                <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src={user.profile_picture} name={user.fullname} />
                                <ChakraLink href={`/portfolio/${user.id}`} alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                            </Flex>
                            <Heading size="md" color="blackAlpha.800" mt="3">{user.fullname}</Heading>
                            <Text fontSize="sm" my="2" color="blackAlpha.800" >
                                {user.bio_text?.substring(0, 150)}{user.bio_text?.length > 150 ? '...' : <br/>}
                            </Text>
                            <ChakraLink href={`/portfolio/${user.id}`} fontSize="xs" color="gray.500">{user.fullname?.toLowerCase().replace(' ', '')}.com</ChakraLink>
                        </Box>
                    </Box>
                ))}
            </Flex>
           
            <Box bg="white" py="120">
                <Flex justify="center">
                    <Box textAlign="center">
                        <Text mb="3" size="lg" color="main.500" fontWeight="medium">JOIN NOW</Text>
                        <Heading mb="5" size="2xl" color="blackAlpha.800">Ready to set up your website?</Heading>
                        <Text color="blackAlpha.800">Have your page published in minutes.</Text>
                        <ButtonLink href="/register" my="5" variant="main" py="8" px="10" fontSize="lg">Get started →</ButtonLink>
                    </Box>
                </Flex>
            </Box>
            <Box p="30" textAlign="center" bg="#ececec" color="black">
                <Heading size="xl" mb="8">Portfolio.co</Heading>
                <Text fontSize="sm" color="gray.500">© 2023 Portfolio Co. LLC. <ChakraLink href="/policies">Privacy and policies</ChakraLink>.</Text>
            </Box>
        </Box>
    )
}



Explore.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Explore