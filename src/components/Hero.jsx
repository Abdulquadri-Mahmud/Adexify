import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// import side_banner2 from '/img1.png';
// import side_banner3 from '/img2.png';
// import side_banner4 from '/img4.png';
// import side_banner5 from '/side_banner1.png';
// import side_banner6 from '/img3.png';

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
        autoplaySpeed: 2500,
        waitForAnimate: false,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    
  return (
    <section className='pt-10 px-2 md:px-0 bgImage bg-slate-1200'>
      <Flex justifyContent={{md:'start', base: 'center'}} alignItems={'center'} gap={3} className='flex-wrap' p={{md:0, base: 0}} maxW={{md: '90%'}} mx={'auto'} height={'100%'}>
        <Flex gap={3} flexDir={'column'} color={'black'} className='glass p-3 md:py-7 rounded-md'>
          <Heading textAlign={{md:'start', base: 'center'}} fontWeight={500} fontSize={{md:40, base:30}} className='uppercase'>Welcome To</Heading>
          <div className="flex items-center">
            <MdOutlineShoppingCart className='text-center md:text-start md:text-5xl text-4xl animate text-pink-600'/>
            <h1 className='text-center md:text-start md:text-7xl text-4xl font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify Store</h1>
          </div>
          <div className="">
            <p className='text-center md:text-start font-medium'>Shop What You Desire On ADEXIFY</p>
          </div>
          <Flex justifyContent={{md:'start', base: 'center'}}>
            <Button bgGradient='linear(to-l, gray.800, pink.800)' color={'white'} border={'none'} outline={'none'} _hover={{bgGradient:'linear(to-r, gray.800, pink.800)'}} transitionDuration={'0.3s'} className='uppercase bg-pink-600 text-white font-medium px-6 py-2 rounded-md'>shop now</Button>
          </Flex>
        </Flex>
        {/* <div className="xl:w-[60%] bg-white w-full rounded-lg">
          <Slider {...settings}>
            <div className="flex justify-center items-center w-full bg-white  rounded-lg">
              <img src={side_banner5} alt="" className='md:h-[350px] h-[250px] max-w-full drop-shadow-[0_35px_35px_#0007]  rounded-lg' />
            </div>
            <div className="w-full bg-white rounded-lg p-3">
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <div className="">
                  <img src={side_banner2} alt="" className='md:h-[350px] h-[200px] max-w-full drop-shadow-[0_35px_35px_#0007]  rounded-lg' />
                </div>
                <div className="">
                  <img src={side_banner3} alt="" className='md:h-[350px] h-[200px] max-w-full drop-shadow-[0_35px_35px_#0007]  rounded-lg' />
                </div>
              </Flex>
            </div>
            <div className="w-full bg-white rounded-lg p-3">
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <div className="">
                  <img src={side_banner4} alt="" className='md:h-[350px] h-[200px] max-w-full drop-shadow-[0_35px_35px_#0007]  rounded-lg' />
                </div>
                <div className="">
                  <img src={side_banner6} alt="" className='md:h-[350px] h-[200px] max-w-full drop-shadow-[0_35px_35px_#0007]  rounded-lg' />
                </div>
              </Flex>
            </div>
          </Slider>
        </div> */}
      </Flex>
    </section>
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
