import NextLink from 'next/link'
import { Button, ButtonGroup, Flex, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import ButtonLink from './core/ButtonLink'

export default function Navbar() {
    return (
        <Flex p="10" w="100%" align="center" justifyContent="space-between">
            <Flex>
                <Flex mr="45">
                    <Link href="/" as={NextLink}>
                        <Heading alignSelf="center" fontSize="2xl" color={useColorModeValue('black', 'white')}>Portfolio</Heading>
                    </Link>
                </Flex>
                <Flex alignItems="flex-end">
                    <Link href="/#pricing" as={NextLink} color={useColorModeValue('black', 'white')}>Pricing</Link>
                </Flex>
            </Flex>
            <Flex>
                <ButtonGroup gap="4">
                    <ButtonLink href="/login" size="lg" bg="transparent">Login</ButtonLink>
                    <ButtonLink href="/register" size="lg" variant='main'>Sign up</ButtonLink>
                </ButtonGroup>
            </Flex>
        </Flex>
    )
}