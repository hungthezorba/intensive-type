import React from 'react';
import {Box, Text, Icon, Flex} from '@chakra-ui/react';
import NavItem from './NavItem';
import { MdSettings } from 'react-icons/md';
import { FaHashtag } from 'react-icons/fa';
import {RiUserLine, RiBookmarkLine, RiMessageLine, RiNotificationLine, RiHome7Fill} from 'react-icons/ri';
import {GoListUnordered} from 'react-icons/go';
import {SiTwitter} from 'react-icons/si';
import { Colors } from '../../constants';
import TwitterButton from '../shared/TwitterButton';
const navItems = [
    {
        name: 'Home',
        icon: <Icon as={RiHome7Fill}/>,
    },
    {
        name: 'Explore',
        icon: <Icon as={FaHashtag}/>
    },
    {
        name: 'Notifications',
        icon: <Icon as={RiNotificationLine}/>
    },
    {
        name: 'Messages',
        icon: <Icon as={RiMessageLine}/>
    },
    {
        name: 'Bookmarks',
        icon: <Icon as={RiBookmarkLine}/>
    },
    {
        name: 'Lists',
        icon: <Icon as={GoListUnordered}/>
    },
    {
        name: 'Profile',
        icon: <Icon as={RiUserLine}/>
    },
]
function Nav() {

    return (
        <Box w={["275px"]} paddingX={["20px"]} paddingY={["16px"]}>
            <Box>
                <Icon w={"2em"} h={"2em"} color={Colors.BLUE_DEFAULT} as={SiTwitter}/>
            </Box>  
            {navItems.map(item => (
                <NavItem key={item.name} name={item.name} icon={item.icon}/>
            ))}
            <Flex alignItems="center">
                <TwitterButton
                    borderColor={"rgba(0, 0, 0, 0)"}
                    backgroundColor={Colors.BLUE_DEFAULT}
                    width={"80%"}
                    paddingX={["32px"]}
                    lineHeight="20px">
                    <Text color={Colors.WHITE_DEFAULT} fontSize="15px" fontWeight={700} lineHeight="20px">Tweet</Text>
                </TwitterButton>
            </Flex>
        </Box>
    )
}

export default Nav;