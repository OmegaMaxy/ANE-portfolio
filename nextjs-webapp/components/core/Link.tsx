import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function ChakraLink({ href, children, ...props }) {
    return (
        <Link href={href} as={NextLink} {...props}>
            {children}
        </Link>
    )
}