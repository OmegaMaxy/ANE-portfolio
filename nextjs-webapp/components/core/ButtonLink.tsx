import NextLink from 'next/link'
import { Button, ButtonGroup, Flex, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'

export default function ButtonLink({ href, children, ...props }) {
    return (
        <Link href={href} as={NextLink} _hover={{ textDecoration: "none" }}>
            <Button {...props}>{children}</Button>
        </Link>
    )
}