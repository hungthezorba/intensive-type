import {Box, Text, Icon, Flex, useBreakpointValue} from '@chakra-ui/react';
import NavItem from './NavItem';
import { MdSettings } from 'react-icons/md';
import { FaHashtag } from 'react-icons/fa';
import {RiUserLine, RiBookmarkLine, RiMessageLine, RiNotificationLine, RiHome7Fill} from 'react-icons/ri';
import {GoListUnordered} from 'react-icons/go';
import {SiTwitter} from 'react-icons/si';
import { Colors } from '../../constants';
import TwitterButton from '../shared/TwitterButton';
import {RiQuillPenFill} from 'react-icons/ri';

const navItems = [
    {
        name: 'Home',
        icon:RiHome7Fill,
    },
    {
        name: 'Explore',
        icon: FaHashtag
    },
    {
        name: 'Notifications',
        icon: RiNotificationLine
    },
    {
        name: 'Messages',
        icon: RiMessageLine
    },
    {
        name: 'Bookmarks',
        icon: RiBookmarkLine
    },
    {
        name: 'Lists',
        icon: GoListUnordered
    },
    {
        name: 'Profile',
        icon: RiUserLine
    },
]

function Nav() {
    
    const showText = useBreakpointValue({sm: false, md: true})
    
    return (
        <Flex alignItems={showText? "flex-start" : "center"}  flexDirection="column" w={["auto", "auto", "275px"]} paddingX={["20px"]} paddingY={["16px"]}>
            <Box>
                <Icon w={"2em"} h={"2em"} color={Colors.BLUE_DEFAULT} as={SiTwitter}/>
            </Box>  
            {navItems.map(item => (
                <Box marginY={["12px"]}>
                    <NavItem key={item.name} name={item.name} icon={<Icon w={["20px"]} h={["20px"]} as={item.icon}/>} />
                </Box>   
            ))}
            <Flex w={["100%"]} alignItems="center">
                <TwitterButton
                    borderColor={"rgba(0, 0, 0, 0)"}
                    backgroundColor={Colors.BLUE_DEFAULT}
                    lineHeight="20px"
                    w={["auto", "auto", "100%"]}
                    paddingY={["24px"]}
                >
                    {showText?
                        <Text
                            color={Colors.WHITE_DEFAULT}
                            fontSize="15px" fontWeight={700} lineHeight="20px">Tweet</Text>
                        :
                        <Icon color="#fff" as={RiQuillPenFill}/>
                    }
                </TwitterButton>
            </Flex>
        </Flex>
    )
}

export default Nav;