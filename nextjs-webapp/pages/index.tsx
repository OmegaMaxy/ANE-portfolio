import type { ReactElement } from 'react'
import { Box, Heading } from "@chakra-ui/react";
import { NextPageWithLayout } from "./_app";

import Layout from '../components/layouts/main';

const Home: NextPageWithLayout = () => {

    return (
        <Box>
            <Heading size="2xl">Home</Heading>
        </Box>
    )
}



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home