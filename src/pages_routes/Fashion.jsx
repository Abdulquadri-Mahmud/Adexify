import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer/Footer'
import { PiGreaterThan } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import Home_banner1 from '../components/banners/Home_banner1'
import TopDeals from '../components/Top_Deals/TopDeals'
import FashionXtra from '../components/FashionXtra/FashionXtra'
import Banner1 from '../components/FashionXtra/Banner1'
import Banner2 from '../components/FashionXtra/banner2'
import Unisex from '../components/genders/Unisex'
import Top_sneakers from '../components/top_sneakers/Top_sneakers'
import Bags from '../Bags/Bags'

export default function Fashion() {
  return (
    <Box>
        <Header/>
        <Box className='bg-zinc-200'>
            <Box className="p-2">
                <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
                    <div className="flex gap-1 items-center">
                        <Link to={'/'} className='text-[13px] text-gray-500'>Home</Link>
                        <PiGreaterThan className='text-[13px] text-gray-500 pt-1'/>
                        <Link to={'/fashion'} className='text-[13px] text-gray-500'>Fashion</Link>
                    </div>
                </Box>
            </Box>
            <Box rounded={'md'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} bg={'white'} py={2} mt={3} mb={5}>
                <Heading fontWeight={500} fontSize={20} textAlign={'center'}>Fashion</Heading>
            </Box>
            <Box rounded={'md'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} py={2} mt={3} mb={5} className='bg-pink-600'>
                <Heading color={'white'} fontWeight={500} fontSize={20} textAlign={'center'} className='flex items-center gap-1 justify-center'>CALL TO ORDER 
                    <Link to={'tel:07047594667'}>07047594667</Link>
                </Heading>
            </Box>
            <Home_banner1/>
            <Box mt={6}>
                <FashionXtra/>
            </Box>
            <TopDeals/>
            <Banner1/>
            <Unisex/>
            <Banner2/>
            <Bags/>
            <Top_sneakers/>
            <Box mt={6} rounded={'md'} p={3} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} bg={'white'}>
            </Box>
        </Box>
        <Footer/>
    </Box>
  )
}
