import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
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

export const OpenMenuCOntext = createContext();

export default function Header() {
    const [cartLength, setCartLength] = useState(0)
    const { currentUser } = useSelector((state) => state.user);
    // console.log(currentUser);
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
            <Box className="relative flex justify-between items-center px-2 md:px-6 text-white max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
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
        <Box top={0} position={'sticky'} className='bg-gray-800 text-white'>
            <Box className='flex justify-between items-center py-3 md:px-6 px-2 max-w-[100vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto'>
                <Link to={'/'}>
                    <div className="flex items-center">
                        <MdOutlineShoppingCart className='md:text-3xl text-2xl animate text-pink-600'/>
                        <h1 className='md:text-3xl text-2xl font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify</h1>
                    </div>
                </Link>
                <div className="w-[30%] rounded hidden md:block">
                    <form className='w-[100%] relative'>
                        <form className="">
                            <input type="text" placeholder='Search for products'  className=' text-black font-semibold rounded-sm border-none outline-none p-[6px] w-[100%]'/>
                            <Box bg={'pink.500'} className="absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-sm cursor-pointer ">
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
                                    <p>{cartLength}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:hidden block text-xl relative">
                        <Link to={'/view-carts'}>
                            <MdOutlineShoppingCart className='text-xl text-pink-600'/>
                            <div className="absolute -top-3 -right-1 text-white ">
                                <p className='text-sm'>{cartLength}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {
                            currentUser ? (
                                <Settings/>
                            ) : (
                                <Flex gap={2}>
                                    <Link to={'/signin'} className='text-[14px]'>Signin/</Link>
                                    <Link to={'/signup'} className='text-[14px]'>Signup</Link>
                                </Flex>
                            )
                        }
                    </div>
                </div>
            </Box>
        </Box>
        <div className="hidde md:blocktext-white">
            <Box className="flex md:justify-center justify-between px-2 items-center gap-4 sm:gap-5 py-3 xl:max-w-[50%] md:max-w-[80%] w-full rounded-tr-2xl rounded-tl-2xl mx-auto md:bg-white md:text-black">
                <div className="">
                    <All_category/>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col hover:text-pink-600 duration-200">
                        <GrUserFemale className='text-lg'/>
                        <Link to={'/womens-wear'} className='text-[10px]'>Women's Wear</Link>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col hover:text-pink-600 duration-200">
                        <IoManOutline className='text-lg'/>
                        <Link to={'/mens-wear'} className='text-[10px]'>Men's Wear</Link>
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
                    <div className="flex justify-center items-center gap-5 font-medium">
                        <Link to={'/'} className='text-md'>Home</Link>
                        <Link to={'/womens-wear'} className='text-md'>Women's Wear</Link>
                        <Link to={'/mens-wear'} className='text-md'>Men's Wear</Link>
                        <Link to={'/'} className='text-md'>Bags</Link>
                        <Link to={'/'} className='text-md'>Shoes</Link>
                        <Link to={'/'} className='text-md'>Jwelleries</Link>
                    </div>
                </div>
            </Box>
        </div>
    </div>
  )
}
