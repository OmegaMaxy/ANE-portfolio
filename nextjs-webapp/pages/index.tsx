import type { ReactElement } from 'react'
import { Box, Button, Heading, Text, Image, Flex, Avatar, Badge } from "@chakra-ui/react";
import { NextPageWithLayout } from "./_app";

import Layout from '../components/layouts/main';
import ButtonLink from '../components/core/ButtonLink';
import ChakraLink from '../components/core/Link';

const Home: NextPageWithLayout = () => {

    return (
        <Box>

            <Box m="20">
                <Text size="lg" color="main.500" fontWeight="medium">PERSONAL WEBSITE + NEWSLETTER</Text>
                <Heading size="3xl" fontWeight="bolder">Stay in touch, with or without social media</Heading>
                <Text mt="8">Publish your site in 5 minutes, no code required. Host on your own domain.</Text>
                <Text mt="3">Write once, share everywhere.</Text>
                <ButtonLink href="/register" mt="10" variant="main">Make your website →</ButtonLink>
            </Box>
            <Box m="20" my="90" border="8px solid gray" borderColor="gray.600" borderRadius="10px">
                <Box bg="white">
                    <Image boxSize="max-content" objectFit="cover" height="9rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" w="container.sm" marginLeft="auto" marginRight="auto" pt="5" pb="10">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="2xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="/posts" alignSelf="center" color="main.500" fontWeight="medium">Recent posts →</ChakraLink>
                        </Flex>
                        <Heading color="blackAlpha.800" mt="5">Emma Lawler</Heading>
                        <Text my="10" color="blackAlpha.800">
                            I'm an entrepreneur with a background in product & design. You can connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <Text my="10" color="blackAlpha.800">
                            I started my career in San Francisco at AKQA and Fitbit where I learned from experienced technologists and caught the entrepreneurial bug. I co-founded Moonlight, a marketplace to discover, hire, and pay experienced software developers. We bootstrapped to profitability, hired a team, raised venture capital, and then sold the platform during the pandemic in 2020. Realizing I'd never had a female boss, I joined theSkimm to re-launch their membership products.
                        </Text>
                        <Text my="10" color="blackAlpha.800">
                            Now, I'm building Velvet - We make infrastructure for cross-platform app identity.
                        </Text>
                        <Text my="10" color="blackAlpha.800">
                            Reach out if you want to chat!
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Flex gap="2rem 2rem" justify="center" flexWrap="wrap">
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text> 
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text> 
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text> 
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text> 
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
            </Flex>
            <Box m="20" my="90" boxShadow="-2px -1px 15px 11px #0a0a0a" border="8px solid gray" borderColor="gray.600" borderRadius="10px">
                <Flex bg="white" color="blackAlpha.800" p="5" gap="5">
                    <Box>
                        <Avatar loading="lazy" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler"></Avatar>
                    </Box>
                    <Box>
                        <ChakraLink href="https://emmalawler.com" fontWeight="bold" display="inline">Emma Lawler</ChakraLink>
                        <Text fontWeight="thin" display="inline"> · August 3, 2023</Text>
                        <Text mb="4">I just published 'What I'm up to - August 2023" on my <br/>website - check it out:</Text>
                        <ChakraLink href="https://emmalawler.com/posts/what-i-m-up-to-august-2023" color="main.500">www.emmalawler.com/posts/what-...</ChakraLink>
                        <Image my="4" borderRadius="10px" border="1px solid gray" borderColor="gray.300" src="https://www.philipithomas.com/posts/what-i-m-up-to-august-2023/og/1691076060"/>
                        <Flex justify="flex-start" gap="8">
                            <Flex gap="2" fontSize="sm">
                                <Box w="6" h="6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>
                                </Box>
                                <Text>
                                    6
                                </Text>
                            </Flex>
                            <Flex gap="2" fontSize="sm">
                                <Box w="6" h="6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                    </svg>
                                </Box>
                                <Text>
                                    8
                                </Text>
                            </Flex>
                            <Flex gap="2" fontSize="sm">
                                <Box w="6" h="6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </Box>
                                <Text>
                                    19
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box m="20">
                <Text size="lg" color="main.500" fontWeight="medium">HOW IT WORKS</Text>
                <Heading color="blackAlpha.800" mt="2">Write once, share everywhere</Heading>
                <Box mt="8" maxW="lg">
                    <Flex gap="4" mb="12">
                        <Box>
                            <Text h="15px" w="15px" m="0" p="0" bg="main.500" borderRadius="50%">1</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" display="inline">Make a site in minutes</Text>
                            <Text color="gray.300" display="inline"> Add your photo and biography, then publish to your own domain.</Text>
                        </Box>
                    </Flex>
                    <Flex gap="4" mb="12">
                        <Box>
                            <Text h="15px" w="15px" m="0" p="0" bg="main.500" borderRadius="50%">2</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" display="inline">Feature it on your social profiles</Text>
                            <Text color="gray.300" display="inline"> Add your homepage as the bio link on your social profiles. It both looks legit and helps people find your site.</Text>
                        </Box>
                    </Flex>
                    <Flex gap="4" mb="12">
                        <Box>
                            <Text h="15px" w="15px" m="0" p="0" bg="main.500" borderRadius="50%">3</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" display="inline">Write on Postcard, then share everywhere</Text>
                            <Text color="gray.300" display="inline"> When you have something to share, post on Postcard. Email subscribers will get it in their inbox. Then, share an enhanced link on sites like Twitter and LinkedIn.</Text>
                        </Box>
                    </Flex>
                    <Flex gap="4" mb="12">
                        <Box>
                            <Text h="15px" w="15px" m="0" p="0" bg="main.500" borderRadius="50%">4</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" display="inline">Grow your mailing list</Text>
                            <Text color="gray.300" display="inline"> As people subscribe to your newsletter, you build a list of contacts you own and can contact directly - no more depending on social networks.</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Flex my="90" gap="2rem 2rem" justify="center" flexWrap="wrap">
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
            </Flex>
            <Box m="20">
                <Text size="lg" color="main.500" fontWeight="medium">FEATURES</Text>
                <Heading color="blackAlpha.800" mt="2" mb="20">All-in-one tool for your personal site</Heading>
                <Flex gap="6rem 3rem" justify="center" flexWrap="wrap">
                    <Flex gap="4" w="47%">
                        <Box bg="main.500" color="white" p="3" w="50px" h="50px" borderRadius="6px">
                            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </Box>
                        <Box>
                            <Heading size="md" fontWeight="normal" mb="3">Customizable, hosted page</Heading>
                            <Text>Set a profile photo, cover image, and color scheme - and update them at any time.</Text>
                        </Box>
                    </Flex>
                    <Flex gap="4" w="47%">
                        <Box bg="main.500" color="white" p="3" w="50px" h="50px" borderRadius="6px">
                            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </Box>
                        <Box>
                            <Heading size="md" fontWeight="normal" mb="3">Collect email signups</Heading>
                            <Text>Build a personal newsletter by embedding a signup on your site, with no extra software needed.</Text>
                        </Box>
                    </Flex>
                    <Flex gap="4" w="47%">
                        <Box bg="main.500" color="white" p="3" w="50px" h="50px" borderRadius="6px">
                            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </Box>
                        <Box>
                            <Heading size="md" fontWeight="normal" mb="3">Send emails to your list</Heading>
                            <Text>Send polished email updates to your subscribers from within Postcard.</Text>
                        </Box>
                    </Flex>
                    <Flex gap="4" w="47%">
                        <Box bg="main.500" color="white" p="3" w="50px" h="50px" borderRadius="6px">
                            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                        </Box>
                        <Box>
                            <Heading size="md" fontWeight="normal" mb="3">Custom domain <Badge colorScheme='green' p="2">Premium</Badge></Heading>
                            <Text>Connect your own domain in minutes for a professional link that you can share across other websites.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Flex my="90" gap="2rem 2rem" justify="center" flexWrap="wrap">
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
                <Box bg="white" w="40%" borderRadius="4px">
                    <Image boxSize="max-content" objectFit="cover" height="4rem" w="100%" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg" alt="Nice banner" />
                    <Box bg="white" p="5" pt="5" pb="5" borderRadius="16px">
                        <Flex justify="space-between">
                            <Avatar position="relative" mt="-75" size="xl" loading="lazy" showBorder={true} border="4px solid white" src="https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f83432694d724cc8c53cef7e98cf21e0bb94ebbe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQXJBQmFRS3dBWHNHT2dsamNtOXdPZzVoZEhSbGJuUnBiMjQ9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--8c0a40a953dbe9e33df59869fedfbecb186eb4e5/emma-lawler.jpg" name="Emma Lawler" />
                            <ChakraLink href="https://emmalawler.com" alignSelf="center" color="main.500" fontWeight="medium">View →</ChakraLink>
                        </Flex>
                        <Heading size="md" color="blackAlpha.800" mt="3">Emma Lawler</Heading>
                        <Text fontSize="sm" my="2" color="blackAlpha.800" >
                            I'm an entrepreneur with a background in product & design. Connect with me on LinkedIn and Twitter 👋
                        </Text>
                        <ChakraLink href="https://emmalawler.com" fontSize="xs" color="gray.500">emmalawler.com</ChakraLink>
                    </Box>
                </Box>
            </Flex>
            <Box m="20" textAlign="center">
                <Text mb="3" size="lg" color="main.500" fontWeight="medium">PRICING</Text>
                <Heading mb="5" size="3xl" color="blackAlpha.800">Free page + newsletter</Heading>
                <Text mb="12" fontSize="lg" color="blackAlpha.800">Affordable premium plan for hosting on a custom domain.</Text>
                <Box mb="6" p="8" w="60%" ml="auto" mr="auto" bg="white" color="blackAlpha.800" textAlign="left" boxShadow="-2px -1px 15px 6px #0a0a0a" borderRadius="8px">
                    <Badge mb="3" variant="outline" color="main.500" px="2" border="1px solid black" borderColor="main.500" boxShadow="none" borderRadius="6px">Basic</Badge>
                    <Heading size="3xl">Free</Heading>
                    <Text mt="4" mb="8">Personal homepage + newsletter</Text>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Personalize your homepage</Text>
                    </Flex>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Collect email signups on your page</Text>
                    </Flex>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Send emails to your subscribers</Text>
                    </Flex>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Host on portfolio.page domain</Text>
                    </Flex>
                    <ButtonLink href="/register" variant="main" w="100%" py="8">Make a free account</ButtonLink>
                </Box>
                <Box mb="3" p="8" w="60%" ml="auto" mr="auto" bg="white" color="blackAlpha.800" textAlign="left" boxShadow="-2px -1px 15px 6px #0a0a0a" borderRadius="8px">
                    <Badge mb="3" variant="solid" color="white" bg="main.500" py="2" px="2" borderRadius="6px">Premium</Badge>
                    <Box>
                        <Heading size="3xl" display="inline">$8</Heading>
                        <Text ml="2" fontSize="2xl" fontWeight="medium" color="gray" display="inline">per month</Text>
                    </Box>
                    <Text mt="4" mb="8">Connect Portfolio on your own domain</Text>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px" color="main.500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Personalize your homepage</Text>
                    </Flex>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px" color="main.500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Add custom code, such as analytics</Text>
                    </Flex>
                    <Flex mb="4" gap="4" alignItems="center">
                        <Box w="20px" h="20px" color="main.500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Box>
                        <Text>Integrations + API <span color="gray">(Coming soon)</span></Text>
                    </Flex>
                    <ButtonLink href="/register" variant="main" w="100%" py="8">Get started</ButtonLink>
                </Box>
            </Box>
            <Box bg="white" py="120">
                <Flex justify="center">
                    <Box textAlign="center">
                        <Text mb="3" size="lg" color="main.500" fontWeight="medium">JOIN NOW</Text>
                        <Heading mb="5" size="2xl" color="blackAlpha.800">Ready to set up your website?</Heading>
                        <Text color="blackAlpha.800">Have your page published in minutes.</Text>
                        <ButtonLink href="/register" my="5" variant="main" py="8" px="10" fontSize="lg">Get started →</ButtonLink>
                    </Box>
                </Flex>
            </Box>
            <Box p="30" textAlign="center" bg="#ececec" color="black">
                <Heading size="xl" mb="8">Portfolio.co</Heading>
                <Text fontSize="sm" color="gray.500">© 2023 Portfolio Co. LLC. <ChakraLink href="/policies">Privacy and policies</ChakraLink>.</Text>
            </Box>
        </Box>
    )
}



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home