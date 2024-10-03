import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RiUserSettingsLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiHandWavingDuotone } from 'react-icons/pi';
import { FiUser } from 'react-icons/fi';
import { AiTwotoneShopping } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { IoLogOutOutline } from 'react-icons/io5';

export default function Settings() {
    const { currentUser } = useSelector((state) => state.user);

    const {_id} = currentUser;

  return (
    <div className=''>
        <Menu className="bg-white">
            <MenuButton display={{base: 'block', md: 'block'}} bg={'transparent'} height={'30px'} color={'white'}
            _hover={{bg: 'transparent'}} as={Button} _focus={{bg: 'transparent'}} fontWeight={400} className='flex'>
                <Flex alignItems={'center'} gap={1}>
                    <Text>My Account</Text>
                    <MdKeyboardArrowDown/>
                </Flex>
            </MenuButton>
            <MenuList p={2} bg={useColorModeValue('white')}>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 font-medium'>
                    <Flex alignItems={'center'} gap={2}>
                        <Heading fontWeight={500} fontSize={20} className='text-pink-600'>Hi {currentUser.firstname}</Heading>
                        <PiHandWavingDuotone className='text-pink-600'/>
                    </Flex>
                </MenuItem>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 hover:text-pink-600 duration-200'>
                    <Flex alignItems={'center'} gap={2}> 
                        <FiUser/>
                        <Link to={`/profile/${_id}`} className="">My Account</Link>
                    </Flex>
                </MenuItem>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 hover:text-pink-600 duration-200'>
                    <Flex alignItems={'center'} gap={2}> 
                        <AiTwotoneShopping/>
                        <Link to={`/profile/${_id}`} className="">My Order</Link>
                    </Flex>
                </MenuItem>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 hover:text-pink-600 duration-200'>
                    <Flex alignItems={'center'} gap={2}> 
                        <IoMdHeartEmpty/>
                        <Link to={`/profile/${_id}`} className="">My Saved Items</Link>
                    </Flex>
                </MenuItem>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 hover:text-pink-600 duration-200'>
                    <Flex alignItems={'center'} gap={2}> 
                        <CiLocationOn/>
                        <Link to={`/profile/${_id}`} className="">Track My Order</Link>
                    </Flex>
                </MenuItem>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 hover:text-pink-600 duration-200'>
                    <Flex alignItems={'center'} gap={2}> 
                        <IoLogOutOutline/>
                        <Link to={`/profile/${_id}`} className="">Logout</Link>
                    </Flex>
                </MenuItem>
                <MenuItem color={'black'} rounded={5} padding={2.5} mb={1} transitionDuration={200} className='hover:-translate-y-1 hover:text-pink-600 duration-200'>
                    <Link to='/contact' className=''>Contact Us</Link> 
                </MenuItem>
            </MenuList>
        </Menu>
    </div>
  )
}
