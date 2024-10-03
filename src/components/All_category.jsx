import React, { useContext, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { LiaTimesSolid } from 'react-icons/lia';
import { RiMenu5Line } from 'react-icons/ri';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { CiShoppingTag } from 'react-icons/ci';

export default function All_category() {
    const [open, setOpen] = useState(false);
    console.log(open)
    
    const handleOpen = () => {
        setOpen(true);
        // if (!open) {
        // }
    }
    const handleClose = () => {
        setOpen(false);
        // if (!open) {
        // }
    }
    
  return (
    <div className="">
        <div onClick={handleOpen} className="flex items-center flex-col md:flex-row cursor-pointer md:hover:text-black hover:text-pink-600">
            <RiMenu5Line className='text-lg'/>
            <h2 className="text-[10px] md:text-[1rem] font-medium">Browse All</h2>
        </div>
        <div className={`${open ? 'md:w-[100%] w-[100%] p-3' : 'w-[0%]'} text-black text-sm duration-200 overflow-y-auto fixed md:top-[20vh] left-0 bg-gray-100 md:h-[500px] h-[550px]`}>
            <div className=''>
                <Box>
                    <Box  className=' flex justify-between items-center text-white'>
                        <div onClick={handleClose} className={`bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer`}>
                            <LiaTimesSolid className='text-black text-2xl'/>
                        </div>
                        <Link to={'/'} className='md:hidden block'>
                            <Box className="flex items-center justify-center mx-auto bg-pink-200 py-1 px-2 rounded-2xl w-[140px]">
                                <MdOutlineShoppingCart className='md:text-xl animate text-pink-600'/>
                                <h1 className='md:text-xl font-medium uppercase text-black'>Ade<span className="text-pink-600">X</span>ify</h1>
                            </Box>
                        </Link>
                        <div className="f">
                            <div className="md:hidden block text-xl relative">
                                <MdOutlineShoppingCart className='text-black'/>
                                <div className="absolute -top-3 right-0 text-black text-sm">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box display={{md: 'none', base: 'block'}}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mt={5}>
                            <Flex justifyContent={'center'} alignItems={'center'} textTransform={'uppercase'} fontWeight={500} width={'47%'} py={2} rounded={'md'} color={'black'} borderWidth={1} borderColor={'pink.300'}>
                                <Link to={'/signin'}>Signin</Link>
                            </Flex>
                            <Flex justifyContent={'center'} alignItems={'center'} textTransform={'uppercase'} fontWeight={500} width={'47%'} py={2} rounded={'md'} color={'black'} borderWidth={1} borderColor={'pink.300'}>
                                <Link to={'/signup'}>Signup</Link>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box display={{md: 'none', base: 'block'}} mt={5}>
                        <Box className='grid grid-cols-2 grid-rows-2'>
                            <div className="flex items-center gap-3 border-[1px] py-1 border-r-0 border-l-0 px-3 border-slate-300">
                                <div className="w-9 h-9 bg-pink-200 rounded-full flex justify-center items-center text-pink-600 ">
                                    <IoLocationOutline className='text-xl'/>
                                </div>
                                <div className="text-black">
                                    <Text className='text-sm'>Track Orders</Text>
                                    <Text className='text-[10px] text-gray-400'>View Order Status</Text>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border-[1px] py-1 border-r-0 border-l-0 px-3 border-slate-300">
                                <div className="w-9 h-9 bg-pink-200 rounded-full flex justify-center items-center text-pink-600 ">
                                    <FaRegStar className='text-xl'/>
                                </div>
                                <div className="text-black">
                                    <Text className='text-sm'>Pending</Text>
                                    <Text className='text-[10px] text-gray-400'>View Pending Items</Text>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border-[1px] py-1 border-t-0 border-r-0 border-l-0 px-3 border-slate-300">
                                <div className="w-9 h-9 bg-pink-200 rounded-full flex justify-center items-center text-pink-600 ">
                                    <CiShoppingTag className='text-xl'/>
                                </div>
                                <div className="text-black">
                                    <Text className='text-sm'>All Deals</Text>
                                    <Text className='text-[10px] text-gray-400'>View All Deals</Text>
                                </div>
                            </div>
                            {/* <div className="flex items-center gap-3 border-[1px] py-1 border-t-0 border-r-0 border-l-0 px-3 border-slate-300">
                                <div className="w-9 h-9 bg-pink-200 rounded-full flex justify-center items-center text-pink-600 ">
                                </div>
                                <div className="text-black">
                                    <Text className='text-sm'>Track Orders</Text>
                                    <Text className='text-[10px] text-gray-400'>View Order Status</Text>
                                </div>
                            </div> */}
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Flex gap={3} pt={10}>
                        <Box width={{md:'300px', base: '100%'}} rounded={'lg'} p={3} bg={'white'}>
                            <Text mb={{md: 0, base: 5}} display={{md: 'none', base: 'block'}} fontWeight={'500'} fontSize={20}>Categories</Text>
                            <div className="flex justify-start flex-col items-start gap-1 font-">
                                <Box className='border-[1px] py-3 border-t-1 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Men's Wear</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Men's Bags</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Men's Shoes</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Women's Wear</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Women's Bags</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Women's Men's Shoes</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Jwelleries</Link>
                                </Box>
                                <Box className='border-[1px] py-3 border-t-0 border-r-0 border-l-0 px-3 hover:translate-x-3 duration-200 border-pink-200 w-full'>
                                    <Link to={'/'} className='text-md hover:text-pink-500 duration-200'>Sandals</Link>
                                </Box>
                            </div>
                        </Box>
                        <Box flex={1} p={3} height={'100%'} bg={'white'} display={{md: 'block', base: 'none'}}>

                        </Box>
                    </Flex>
                    <Box my={4} py={3} bg={'white'} px={3} rounded={'md'}>
                        <Link to={'/contact'} className='flex items-center gap-2 text-sm'><IoCallOutline/> Contact Us</Link>
                    </Box>
                </Box>
            </div>
        </div>
    </div>
  )
}
