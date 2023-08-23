import { useColorModeValue, IconButton, Box, HStack, Button, Image, Tag, Flex, Avatar, FormControl, FormLabel, Heading, Input, Link, Text, Textarea, Card, CardHeader, CardBody, CardFooter, LinkBox, LinkOverlay, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/users";
import ButtonLink from "../core/ButtonLink";


export default function Filter({ setPosts, ...props }) {

    const [currentPostType, setCurrentPostType] = useState('all' as 'all' | 'published' | 'draft')
    const [currentPostOrder, setCurrentPostOrder] = useState('newest' as 'newest' | 'oldest' | 'recent')

    function StyledMenuItem({ children, ...props}) {
        return (
            <MenuItem bg="#1a202c" _hover={{ bg: "#2d3748" }} transitionDuration="0.1s" {...props}>{children}</MenuItem>
        )
    }

    function currentPostTypeToText() {

        switch (currentPostType) {
            case 'all':
                return 'All posts'
            case 'published':
                return 'Published posts'
            case 'draft':
                return 'Draft posts'
            default:
                return 'All posts'
        }
        
        
    }
    function currentPostOrderToText() {

        switch (currentPostOrder) {
            case 'newest':
                return 'Newest first'
            case 'oldest':
                return 'Oldest first'
            case 'recent':
                return 'Recently updated'
            default:
                return 'Newest first'
        }
        
        
    }

    async function handleSetFilter(filter: 'type' | 'order', by) {
        if (filter === 'type') {
            setCurrentPostType(by)
        }
        if (filter === 'order') {
            setCurrentPostOrder(by)
        }
        
    }

    useEffect(() => {
        async function getData() {
            const data = await getPosts({ user_id: props.user_id, filter: { type: currentPostType, order: currentPostOrder } })
            setPosts(data.posts)
        }
        getData()
    }, [currentPostOrder, currentPostType])

    return (
        <HStack justify="flex-end">
            <Menu>
                <MenuButton variant="ghost" as={Button} rightIcon={<ChevronDownIcon />}>
                    {currentPostTypeToText()}
                </MenuButton>
                <MenuList border="none" bg="#1a202c" fontSize="sm">
                    <StyledMenuItem onClick={() => handleSetFilter('type', "all")}>All posts</StyledMenuItem>
                    <StyledMenuItem onClick={() => handleSetFilter('type', "published")}>Published posts</StyledMenuItem>
                    <StyledMenuItem onClick={() => handleSetFilter('type', "draft")}>Draft posts</StyledMenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton variant="ghost" as={Button} rightIcon={<ChevronDownIcon />}>
                    {currentPostOrderToText()}
                </MenuButton>
                <MenuList border="none" bg="#1a202c" fontSize="sm">
                    <StyledMenuItem onClick={() => handleSetFilter('order', "newest")}>Newest first</StyledMenuItem>
                    <StyledMenuItem onClick={() => handleSetFilter('order', "oldest")}>Oldest first</StyledMenuItem>
                    <StyledMenuItem onClick={() => handleSetFilter('order', "recent")}>Recently updated</StyledMenuItem>
                </MenuList>
            </Menu>
            <ButtonLink variant="main" href="/portfolio/posts/create">New post</ButtonLink>
        </HStack>
    )
}