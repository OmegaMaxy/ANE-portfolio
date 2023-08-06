import NextLink from 'next/link'
import { Button, ButtonGroup, Flex, Link } from '@chakra-ui/react'
import ButtonLink from './core/ButtonLink'

export default function Navbar() {
    return (
        <Flex align="center" justifyContent="space-between" p="20">
            <Flex>
                <Link href="/" as={NextLink} color='teal.500'>Home</Link>
            </Flex>
            <Flex>
                <ButtonGroup gap="4">
                    <ButtonLink href="/login" size="lg" colorScheme="teal" variant='solid'>Login</ButtonLink>
                    <ButtonLink href="/register" size="lg" colorScheme="teal" variant='outline'>Sign up</ButtonLink>
                </ButtonGroup>
            </Flex>
        </Flex>
    )
}