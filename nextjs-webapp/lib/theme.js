import { useColorModeValue } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'

const config = {
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
        },
        main: {
            600: '#0024d9',
            500: '#1e43fc',
            400: '#4362fd',
        }
    },
    components: {
        Button: {
            variants: {
                'main': {
                    //color: useColorModeValue('black', 'white'),
                    color: 'white',
                    bg: "main.500",
                    _hover: { bg: "main.600" },
                    borderRadius: '4px'
                },
                'main.outline': {
                    //color: useColorModeValue('black', 'white'),
                    color: 'white',
                    bg: "transparent",
                    _hover: { bg: "main.500", color: 'white' },
                    border: '2px solid black',
                    borderColor: "main.500",
                    borderRadius: '4px'
                },
            }
        }
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
}


const theme = extendTheme(config)
export default theme