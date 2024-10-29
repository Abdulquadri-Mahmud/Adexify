import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PiGreaterThan } from 'react-icons/pi'

export default function Shirt() {
  return (
    <Box>
        <Header/>
            <Box bg={''} py={2} className='bg-zinc-200'>
                <Box maxW={{'2xl' : '80%', xl : '90%', lg : '97%', base: '97%'}} mx={'auto'}>
                    <Box bg={''} className="flex gap-1 items-center">
                        <Link to={'/'} className='text-[13px] text-gray-500'>Home</Link>
                        <PiGreaterThan className='text-[13px] text-gray-500 pt-1'/>
                        <Link to={'/fashion'} className='text-[13px] text-gray-500'>Fashion</Link>
                        <PiGreaterThan className='text-[13px] text-gray-500 pt-1'/>
                        <Link to={'/womens-clothing'} className='text-[13px] text-gray-500'>Women's Fashion</Link>
                    </Box>
                </Box>
            </Box>
            <Box py={10}>
                <Heading >Shirts</Heading>
            </Box>
        <Footer/>
    </Box>
  )
}
