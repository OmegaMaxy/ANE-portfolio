import NextLink from 'next/link'
import { Button, ButtonGroup, Flex, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import ButtonLink from './core/ButtonLink'
import SwitchDarkModeButton from './SwitchDarkModeButton'
import { useSession } from 'next-auth/react'

export default function Navbar() {

    const { status } = useSession()

    return (
        <Flex p="10" w="100%" align="center" justifyContent="space-between">
            <Flex>
                <Flex mr="45">
                    <Link href="/" as={NextLink}>
                        <Heading alignSelf="center" fontSize="2xl" color={useColorModeValue('black', 'white')}>Portfolio</Heading>
                    </Link>
                </Flex>
                <Flex alignItems="flex-end" gap="4">
                    <Link href="/#pricing" as={NextLink} color={useColorModeValue('black', 'white')}>Pricing</Link>
                    <Link href="/explore" as={NextLink} color={useColorModeValue('black', 'white')}>Explore</Link>
                </Flex>
            </Flex>
            <Flex alignItems="center">
                <SwitchDarkModeButton mr="15"/>
                {
                    status == 'authenticated' ?
                        <ButtonLink href="/portfolio" variant="main">Portfolio →</ButtonLink>
                    :
                        <ButtonGroup gap="4">
                            <ButtonLink href="/login" size="lg" bg="transparent">Login</ButtonLink>
                            <ButtonLink href="/register" size="lg" variant='main'>Sign up</ButtonLink>
                        </ButtonGroup>
                }
            </Flex>
        </Flex>
    )
}