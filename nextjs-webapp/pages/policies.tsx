import type { ReactElement } from 'react'
import { Box, Button, Heading, Text, Image, Flex, Avatar, Badge, useColorModeValue } from "@chakra-ui/react";
import { NextPageWithLayout } from "./_app";

import Layout from '../components/layouts/main';
import ButtonLink from '../components/core/ButtonLink';
import ChakraLink from '../components/core/Link';
import Navbar from '../components/Navbar';

const Policies: NextPageWithLayout = () => {

    return (
        <Box>
            <Navbar />
        </Box>
    )
}



Policies.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Policies