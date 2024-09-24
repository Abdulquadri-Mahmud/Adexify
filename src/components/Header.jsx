import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
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

export default function Header() {
  return (
    <div className="sticky top-0 z-10">
        <div className="relative flex justify-between items-center px-2 md:px-6 bg-pink-600 text-white">
            <div className="flex items-center">
                <IoMdCall/>
                <Link to='tel:+2347047594667' className='text-sm font-medium'>+234-704-7594-667</Link>
            </div>
            <div className="pt-2 md:max-w-[40%] max-w-[30%] mx-auto " >
                <marquee behavior="sliding" direction="" className={'text-sm font-medium capitalize'}>Welcome To ADEXIFY, We Give The Best.</marquee>
            </div>
            <div className=" flex gap-x-2">
                <Link to='#'><FaFacebookF className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                <Link to='#'><FaInstagram className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                <Link to='#'><FaTwitter className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                <Link to='#'><IoLogoYoutube className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
            </div>
        </div>
        <Box top={0} position={'sticky'} zIndex={100} className=' flex justify-between items-center py-3 md:px-6 px-4 bg-gray-800 text-white'>
            <div className="flex items-center">
                <MdOutlineShoppingCart className='md:text-3xl text-2xl animate text-pink-600'/>
                <h1 className='md:text-3xl text-2xl font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify</h1>
            </div>
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
                <div className="bg-pink-600 text-white flex justify-between gap-2 p-1 px-3 rounded-md">
                    <Box className='flex items-center gap-2'>
                        <Icon as={BsCart4} color={useColorModeValue('white', 'white')}/>
                        <p>My Cart</p>
                    </Box>
                    <div className="bg-white px-2 text-black rounded-full">
                        <p>0</p>
                    </div>
                </div>
                <div className="">
                    <Settings/>
                </div>
            </div>
        </Box>
        <div className="hidde md:block bg-gray-800 text-white">
            <Box className="flex justify-center items-center gap-5 font-medium py-3 md:max-w-[50%] w-full rounded-tr-2xl rounded-tl-2xl mx-auto md:bg-pink-600">
                <div className="">
                    <div className="flex items-center flex-col md:flex-row cursor-pointer">
                        <RiMenu5Line className='text-lg'/>
                        <h2 className="text-[10px] md:text-sm">Browse All</h2>
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col">
                        <GrUserFemale className='text-lg'/>
                        <p className='text-[10px]'>Women's Wear</p>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col">
                        <IoManOutline className='text-lg'/>
                        <p className='text-[10px]'>Men's Wear</p>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col">
                        <BiSolidShoppingBags className='text-lg'/>
                        <p className='text-[10px]'>Bags</p>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col">
                        <GiConverseShoe className='text-lg'/>
                        <p className='text-[10px]'>Shoes</p>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center flex-col">
                        <GoTag className='text-lg'/>
                        <p className='text-[10px]'>All Deal</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex justify-center items-center gap-5 font-medium">
                        <Link to={'/'} className='text-sm'>Home</Link>
                        <Link to={'/'} className='text-sm'>Women's Wear</Link>
                        <Link to={'/'} className='text-sm'>men's Wear</Link>
                        <Link to={'/'} className='text-sm'>Bags</Link>
                        <Link to={'/'} className='text-sm'>Shoes</Link>
                        <Link to={'/'} className='text-sm'>Jwelleries</Link>
                    </div>
                </div>
            </Box>
        </div>
    </div>
  )
}
