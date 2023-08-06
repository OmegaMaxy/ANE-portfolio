import { ReactElement } from "react";
import Layout from "../components/layouts/main";
import { NextPageWithLayout } from "./_app";
import { Box, Card, CardBody, Flex, Heading, Input, Link, Spinner, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState, useEffect } from 'react'

type Task = {
    userId: number,
    id: number
    title: string
    completed: boolean
}


const Test: NextPageWithLayout = (props: any) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            console.log(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return (
        <Flex justify="center" align="center">
            <Spinner color='red.500' />
        </Flex>
    )
    if (!data) return (
        <Flex justify="center" align="center">
            <Text>No data was found.</Text>
        </Flex>
    )

    const tasks = []

    return (
        <Box>
            <Heading>Tasks: {data.length}</Heading>
            <Flex justify="center" flexDir="column" gap="4" my="4">
                {data.slice(0, 10).map((t: Task) => (
                    <Card key={t.id}>
                        <CardBody>
                            <Heading size="md" mb="2">[{t.id}] {t.title}</Heading>
                            <Text>By user{t.userId}</Text>
                            <Text>Completed: {t.completed ? 'Yes' : 'No'}</Text>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
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