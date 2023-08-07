
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
                    color: 'white',
                    bg: "main.500",
                    _hover: { bg: "main.600" },
                    borderRadius: '4px'
                }
            }
        }
    }
    //initialColorMode: 
}





export default config