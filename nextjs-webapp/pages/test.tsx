import { ReactElement } from "react";
import Layout from "../components/layouts/main";
import { NextPageWithLayout } from "./_app";
import { Box, Button, Code, Flex, Heading, Input, Link, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

type Task = {
    userId: number,
    id: number
    title: string
    completed: boolean
}
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    
    return { props: { data }}
}

const Test: NextPageWithLayout = (props: any) => {

    return (
        <Box>
            <Heading>Test</Heading>
            <Text>User ID: {props.data.userId}</Text>
            <Text>ID: {props.data.id}</Text>
            <Text>Title: {props.data.title}</Text>
            <Text>Completed: {props.data.completed ? 'Yes' : 'No'}</Text>
        </Box>
    )
}

Test.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Test