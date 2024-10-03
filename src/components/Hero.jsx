import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <Box bgGradient='linear(to-l, red.500, gray.800)'
        className={className}
        style={{ ...style, display: "none",
          paddingTop: '5.5px', paddingLeft: '5.5px',
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box bgGradient='linear(to-l, red.500, gray.800)'
        className={className}
        style={{ ...style, display: "none", 
          paddingTop: '5.5px', paddingLeft: '5.5px',
        }}
        onClick={onClick}
      />
    );
}

export default function Hero() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        waitForAnimate: true,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    
  return (
    <>
      <Slider {...settings}>
        <Box height={'70vh'} bgPos={'top'} bgImage={'/bg.png'} className='pt-10 px-2 md:px-0 bgImage bg-slate-400'>
          <Flex justifyContent={{md:'center', base: 'center'}} alignItems={'center'} gap={3} className='flex-wrap' p={{md:0, base: 0}} maxW={{md: '100%', base: '100%'}} mx={'auto'} height={'100%'}>
            <Flex gap={3} flexDir={'column'} color={'black'} className='p-3 md:py-7 rounded-md '>
              <div className="flex items-center">
                <Heading fontWeight={500} fontSize={{md: 50, base:35}} color={'white'} textAlign={'center'}>Inside Adexify: <br /> A Sneak Peek Into Our Amazing Shop</Heading>
              </div>
              <div className="">
                <Text fontFamily={''} className='text-center font-medium py-2 text-white'>Shop What You Desire On ADEXIFY</Text>
                <Text fontFamily={''} className='text-center font-medium text-white'>We are here to save your time and money</Text>
              </div>
              <Flex justifyContent={{md:'center', base: 'center'}}>
                <Button bg={'white'} color={'black'} border={'none'} outline={'none'} _hover={{bg:'pink.600', color: 'white'}} transitionDuration={'0.3s'} className='uppercase bg-pink-600 text-white font-medium px-6 py-2 rounded-md'>Start Shopping</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box height={'70vh'} bgPos={'top'} bgImage={'/Mens.jpg'} className='pt-10 px-2 md:px-0 bgImage bg-slate-400'>
          <Flex justifyContent={{md:'center', base: 'center'}} alignItems={'center'} gap={3} className='flex-wrap' p={{md:0, base: 0}} maxW={{md: '90%', base: '100%'}} mx={'auto'} height={'100%'}>
            <Flex gap={3} flexDir={'column'} color={'black'} className='p-3 md:py-7 rounded-md '>
              <div className="flex items-center">
                <Heading fontWeight={500} fontSize={{md: 50, base:35}} color={'white'} textAlign={'center'}>Inside Adexify: <br /> A Sneak Peek Into Our Amazing Shop</Heading>
              </div>
              <div className="">
                <Text fontFamily={''} className='text-center font-medium py-2 text-white'>Shop What You Desire On ADEXIFY</Text>
                <Text fontFamily={''} className='text-center font-medium text-white'>We are here to save your time and money</Text>
              </div>
              <Flex justifyContent={{md:'center', base: 'center'}}>
                <Button bg={'white'} color={'black'} border={'none'} outline={'none'} _hover={{bg:'pink.600', color: 'white'}} transitionDuration={'0.3s'} className='uppercase bg-pink-600 text-white font-medium px-6 py-2 rounded-md'>Start Shopping</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box height={'70vh'} bgPos={'top'} bgImage={'/bg3.jpg'} className='pt-10 px-2 md:px-0 bgImage bg-slate-400'>
          <Flex justifyContent={{md:'center', base: 'center'}} alignItems={'center'} gap={3} className='flex-wrap' p={{md:0, base: 0}} maxW={{md: '90%', base: '100%'}} mx={'auto'} height={'100%'}>
            <Flex gap={3} flexDir={'column'} color={'black'} className='p-3 md:py-7 rounded-md '>
              <div className="flex items-center">
                <Heading fontWeight={500} fontSize={{md: 50, base:35}} color={'white'} textAlign={'center'}>Inside Adexify: <br /> A Sneak Peek Into Our Amazing Shop</Heading>
              </div>
              <div className="">
                <Text fontFamily={''} className='text-center font-medium py-2 text-white'>Shop What You Desire On ADEXIFY</Text>
                <Text fontFamily={''} className='text-center font-medium text-white'>We are here to save your time and money</Text>
              </div>
              <Flex justifyContent={{md:'center', base: 'center'}}>
                <Button bg={'white'} color={'black'} border={'none'} outline={'none'} _hover={{bg:'pink.600', color: 'white'}} transitionDuration={'0.3s'} className='uppercase bg-pink-600 text-white font-medium px-6 py-2 rounded-md'>Start Shopping</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Slider>
    </>
  )
}

{/* <Box bgImage={side_banner3} bgRepeat={'no-repeat'} bgSize={'cover'} bgPos={'center'} className="flex md:h-[410px] h-[250px] justify-center items-center w-full bg_img bg-slate-300">
  <Flex justifyContent={'center'} alignItems={'center'} height={{md: '410px', base: '250px'}} className="text-white">
    <Box textAlign={'center'}>
      <Heading fontWeight={500} fontSize={30} fontFamily={'cursive'}>WELCOME TO MAAQSIFY</Heading>
      <p className=''>We are here to save you time and money</p>
    </Box>
  </Flex>
</Box> */}
