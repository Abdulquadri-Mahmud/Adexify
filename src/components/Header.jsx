import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaSmileBeam, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { FaUser } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import Settings from './settings/Settings';
import { GiClothes } from "react-icons/gi";
import { GrUserFemale } from "react-icons/gr";
import { IoManOutline } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiConverseShoe } from "react-icons/gi";
import All_category from './All_category';
import { useSelector } from 'react-redux';
import { SiPhpmyadmin } from 'react-icons/si';

export const OpenMenuCOntext = createContext();

export default function Header() {
    const [cartLength, setCartLength] = useState(0)
    const { currentUser } = useSelector((state) => state.user);
    const { currentAdmin } = useSelector((state) => state.admin);
    
    const { items } = useSelector((state) => state.cart);
    
    useEffect(() => {

        if (items.length >= 1) {
            setCartLength(items.length);
            return;
        }else{
            setCartLength(0);
        }
    })
    
  return (
    <div className="sticky top-0 z-20 bg-white">
        <Box className='bg-pink-600'>
            <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}  className="relative flex justify-between items-center px-2 md:px-6 text-white">
                <div className="flex items-center">
                    <IoMdCall/>
                    <Link to='tel:+2347047594667' className='text-[12px]'>+234-704-7594-667</Link>
                </div>
                <div className="md:max-w-[40%] max-w-[30%] mx-auto " >
                    <marquee behavior="sliding" direction="" className={'text-[12px] capitalize'}>Welcome To ADEXIFY, We Give The Best.</marquee>
                </div>
                <div className=" flex gap-x-2">
                    <Link to='#'><FaFacebookF className="text-[12px] duration-200 hover:-translate-y-1"/></Link>
                    <Link to='#'><FaInstagram className="text-[12px] duration-200 hover:-translate-y-1"/></Link>
                    <Link to='#'><FaTwitter className="text-[12px] duration-200 hover:-translate-y-1"/></Link>
                    <Link to='#'><IoLogoYoutube className="text-[12px] duration-200 hover:-translate-y-1"/></Link>
                </div>
            </Box>
        </Box>
        <Box top={0} position={'sticky'} className='bg-white text-white'>
            <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}  className='flex justify-between items-center py-3 md:px-6 px-2'>
                <Link to={'/'}>
                    <div className="flex items-center text-black">
                        <FaSmileBeam className='md:text-2xl text-2xl animate text-pink-600'/>
                        <h1 className='md:text-3xl text-2xl font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify</h1>
                    </div>
                </Link>
                <div className="w-[30%] rounded hidden md:block">
                    <form className='w-[100%] relative'>
                        <form className="">
                            <input type="text" placeholder='Search for products'  className=' text-black font-semibold rounded-sm border-none outline-none p-[8px] bg-zinc-100 w-[100%]'/>
                            <Box className="bg-pink-600 absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-sm cursor-pointer ">
                                <Icon as={MdSearch} color={useColorModeValue('white', 'black')} fontSize={23}/>
                            </Box>
                        </form>
                    </form>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:block">
                        <Link to={'/view-carts'}>
                            <div className="bg-white text-black flex justify-between gap-2 p-1 px-3 rounded-md">
                                <Box className='flex items-center gap-2 font-medium'>
                                    <Icon as={BsCart4} color={'black'}/>
                                    <p>My Cart</p>
                                </Box>
                                <div className="bg-white px-2 font-medium text-black rounded-full">
                                    <p className='bg-pink-600 px-2 rounded-full text-white'>{cartLength}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:hidden block text-xl relative">
                        <Link to={'/view-carts'}>
                            <MdOutlineShoppingCart className='text-xl text-black'/>
                            <div className="absolute -top-3 right-0 text-pink-600 ">
                                <p className='text-sm'>{cartLength}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center md:gap-2 text-black">
                        {
                            currentUser ? (
                                <Settings/>
                            ) : (
                                <Flex gap={2} ml={2}>
                                    <Link to={'/signin'} className='text-[14px]'>Signin</Link>
                                    <span>/</span>
                                    <Link to={'/signup'} className='text-[14px]'>Signup</Link>
                                </Flex>
                            )
                        }
                        {
                            currentAdmin && (
                                <Link to={'/admin-dashboard'} className='text-[14px]'><SiPhpmyadmin className='text-xl'/></Link>
                            )
                        }
                    </div>
                </div>
            </Box>
        </Box>
        <div className="hidde md:block text-black ">
            <Box maxW={{'2xl' : '50%', xl : '50%', lg : '100%', base: '97%'}} mx={'auto'} roundedTop={'0px'} className="flex md:justify-center justify-between px-2 items-center gap-4 sm:gap-5 py-3 xl:max-w-[50%] md:bg-pink-00 md:text-black">
                <div className="">
                    <All_category/>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col hover:text-pink-600 duration-200">
                        <GrUserFemale className='text-lg'/>
                        <Link to={'/womens-clothing'} className='text-[10px]'>Women's Fashion</Link>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col hover:text-pink-600 duration-200">
                        <IoManOutline className='text-lg'/>
                        <Link to={'/mens-clothing'} className='text-[10px]'>Men's Fashion</Link>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col hover:text-pink-600 duration-200">
                        <BiSolidShoppingBags className='text-lg'/>
                        <Link to={'/'} className='text-[10px]'>Bags</Link>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col hover:text-pink-600 duration-200">
                        <GiConverseShoe className='text-lg'/>
                        <Link to={'/'} className='text-[10px]'>Shoes</Link>
                    </div>
                </div>
                {/* <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col">
                        <GoTag className='text-lg'/>
                        <p className='text-[10px]'>All Deal</p>
                    </div>
                </div> */}
                <div className="hidden md:block">
                    <div className="flex justify-center items-center gap-5 font-">
                        <Link to={'/'} className='text-[14px]'>Home</Link>
                        <Link to={'/fashion'} className='text-[14px]'>Fashions</Link>
                        <Link to={'/womens-clothing'} className='text-[14px]'>Women's Fashion</Link>
                        <Link to={'/mens-clothing'} className='text-[14px]'>Men's Fashion</Link>
                        <Link to={'/'} className='text-[14px] hidden md:block'>Bags</Link>
                        <Link to={'/'} className='text-[14px]'>Shoes</Link>
                        <Link to={'/'} className='text-[14px]'>Jewelleries</Link>
                    </div>
                </div>
            </Box>
        </div>
    </div>
  )
}
