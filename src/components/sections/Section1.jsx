import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

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

import img1 from '/img2.jpg';
import img2 from '/img3.jpg';
import img3 from '/img4.jpg';
import img4 from '/img5.jpg';
import img5 from '/img6.jpg';

import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Section1() {
    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        waitForAnimate: false,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    };

  return (
    <div className="bg-white py-10">

        <div className=' md:max-w-[90%] max-w-[1000%]  mx-auto text-black font-medium'>
            <Heading pb={6} color={'black'} fontWeight={500} fontSize={{md: 30, base: 20}} textAlign={'center'}>Choose Department</Heading>
            <Slider {...settings}>
                <div className="p-2">
                    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} bgImage={img1} height={'200px'} bgRepeat={'no-repeat'} bgBlendMode={'multiply'} bgPos={'top'} bgSize={'cover'} className="bg-gray-400 uppercase text-xl bbbbbbbbbbbv   rounded-md p-2">
                        <div className="">
                            <h2>Men's Wear</h2>
                        </div>
                    </Flex>
                </div>
                <div className="p-2">
                    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} bgImage={img2} height={'200px'} bgRepeat={'no-repeat'} bgBlendMode={'multiply'} bgPos={'top'} bgSize={'cover'} className="bg-gray-400 uppercase text-xl bbbbbbbbbbbv   rounded-md p-2">
                        <div className="">
                            <h2>Women's Wear</h2>
                        </div>
                    </Flex>
                </div>
                <div className="p-2">
                    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} bgImage={img1} height={'200px'} bgRepeat={'no-repeat'} bgBlendMode={'multiply'} bgPos={'top'} bgSize={'cover'} className="bg-gray-400 uppercase text-xl bbbbbbbbbbbv   rounded-md p-2">
                        <div className="">
                            <h2>Men's Bags</h2>
                        </div>
                    </Flex>
                </div>
                <div className="p-2">
                    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} bgImage={img3} height={'200px'} bgRepeat={'no-repeat'} bgBlendMode={'multiply'} bgPos={'top'} bgSize={'cover'} className="bg-gray-400 uppercase text-xl bbbbbbbbbbbv   rounded-md p-2">
                        <div className="">
                            <h2>Women's Bags</h2>
                        </div>
                    </Flex>
                </div>
                <div className="p-2">
                    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} bgImage={img5} height={'200px'} bgRepeat={'no-repeat'} bgBlendMode={'multiply'} bgPos={'top'} bgSize={'cover'} className="bg-gray-400 uppercase text-xl bbbbbbbbbbbv   rounded-md p-2">
                        <div className="">
                            <h2>Men's Shoes</h2>
                        </div>
                    </Flex>
                </div>
                <div className="p-2">
                    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} bgImage={img4} height={'200px'} bgRepeat={'no-repeat'} bgBlendMode={'multiply'} bgPos={'top'} bgSize={'cover'} className="bg-gray-400 uppercase text-xl bbbbbbbbbbbv   rounded-md p-2">
                        <div className="">
                            <h2>Women's Shoes</h2>
                        </div>
                    </Flex>
                </div>
            </Slider>
        </div>
    </div>
  )
}
