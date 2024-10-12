import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <Box bg={'gray.500'} width={'30px'} height={'30px'} rounded={'full'}
      right={'1vh'}  
      className={className}
        style={{ ...style, display: "block",
          paddingTop: '5.5px', paddingLeft: '5.5px',
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box bg={'gray.500'} width={'30px'} height={'30px'} rounded={'full'}
        left={'1vh'} zIndex={'10'}
        className={className}
        style={{ ...style, display: "block", 
          paddingTop: '5.5px', paddingLeft: '5.5px',
        }}
        onClick={onClick}
      />
    );
}
import Slider from "react-slick";

export default function Home_banner4() {
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
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
          breakpoint: 420,
          settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};
  return (
    <Box bg={'white'} my={5} p={2} rounded={'md'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
        <Box display={{md: 'block', base: 'none'}}>
            <Flex gap={3} justifyContent={'center'}>
                <Link to={'/'}>
                    <Box height={'230px'} width={'200px'}>
                        <Image  rounded={'md'} src="/new-arrival.jpg" alt="" />
                        <Text fontSize={'14px'} mt={2} textAlign={'center'}>New Arrival</Text>
                    </Box>
                </Link>
                <Link to={'/'}>
                    <Box height={'230px'} width={'200px'}>
                        <Image  rounded={'md'} src="/fashion1.gif" alt="" />
                        <Text fontSize={'14px'} mt={2} textAlign={'center'}>Fashion Deals</Text>
                    </Box>
                </Link>
                <Link to={'/'}>
                    <Box height={'230px'} width={'200px'}>
                        <Image height={'200px'} rounded={'md'} src="/fashion2.gif" alt="" />
                        <Text fontSize={'14px'} mt={2} textAlign={'center'}>Fashion Deals</Text>
                    </Box>
                </Link>
                <Link to={'/'}>
                    <Box height={'230px'} width={'200px'}>
                        <Image  rounded={'md'} src="/recommended.gif" alt="" />
                        <Text fontSize={'14px'} mt={2} textAlign={'center'}>Great Deals</Text>
                    </Box>
                </Link>
                <Link to={'/'}>
                    <Box height={'230px'} width={'200px'}>
                        <Image  rounded={'md'} src="/specia-offer.png" alt="" />
                        <Text fontSize={'14px'} mt={2} textAlign={'center'}>Special Offter</Text>
                    </Box>
                </Link>
            </Flex>
        </Box>
        <Box display={{md: 'none', base: 'block'}}>
            <Slider {...settings}>
              <Link to={'/'}>
                <Box height={'230px'} width={'200px'}>
                    <Image  rounded={'md'} src="/new-arrival.jpg" alt="" />
                    <Text fontSize={'14px'} mt={2} textAlign={'center'}>New Arrival</Text>
                </Box>
                </Link>
                <Link to={'/'}>
                  <Box height={'230px'} width={'200px'}>
                      <Image  rounded={'md'} src="/fashion1.gif" alt="" />
                      <Text fontSize={'14px'} mt={2} textAlign={'center'}>Pant</Text>
                  </Box>
                </Link>
                <Link to={'/'}>
                  <Box height={'230px'} width={'200px'}>
                      <Image height={'200px'} rounded={'md'} src="/fashion2.gif" alt="" />
                      <Text fontSize={'14px'} mt={2} textAlign={'center'}>Sportwear</Text>
                  </Box>
                </Link>
                <Link to={'/'}>
                  <Box height={'230px'} width={'200px'}>
                      <Image  rounded={'md'} src="/recommended.gif" alt="" />
                      <Text fontSize={'14px'} mt={2} textAlign={'center'}>Jeans</Text>
                  </Box>
                </Link>
                <Link to={'/'}>
                  <Box height={'230px'} width={'200px'}>
                      <Image  rounded={'md'} src="/specia-offer.png" alt="" />
                      <Text fontSize={'14px'} mt={2} textAlign={'center'}>Underwear</Text>
                  </Box>
                </Link>
            </Slider>
        </Box>
    </Box>
  )
}
