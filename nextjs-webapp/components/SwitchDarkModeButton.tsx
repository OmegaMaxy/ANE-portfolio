import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function SwitchDarkModeButton({ ...props}) {

    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button {...props} size="sm" onClick={toggleColorMode} color={useColorModeValue('white', 'white')} bg={useColorModeValue('purple.600', 'yellow.600')} _hover={{ bg: useColorModeValue('purple.700', 'yellow.700') }}>
            {useColorModeValue(<SunIcon />, <MoonIcon />)}
        </Button>
    )
}