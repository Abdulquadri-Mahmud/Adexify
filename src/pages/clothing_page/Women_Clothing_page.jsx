import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import React, { createContext, Suspense, useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { PiGreaterThan } from 'react-icons/pi';

export const Women_ClothingContext = createContext();
export const Hoodie_Sweater2_Context = createContext();
export const Female_Context = createContext();

const Women_Clothing = React.lazy(() => import('../../components/clothing/Women_Clothing.jsx'));
const Hoodie_Sweater2 = React.lazy(() => import('../../hoodies&sweater/Hoodie_Sweater2.jsx'));
const Females = React.lazy(() => import('../../components/genders/Females.jsx'));

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <Box bg={'gray.300'} width={'30px'} height={'30px'} rounded={'full'}
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
      <Box bg={'gray.300'} width={'30px'} height={'30px'} rounded={'full'}
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
import { FaNairaSign } from 'react-icons/fa6';
import Home_banner4 from '../../components/banners/Home_banner4.jsx';
import Header from '../../components/Header.jsx';
// import Females from '';

export default function Women_Clothing_page() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://adexify-api.vercel.app/api/products/all-products');

            const data = await res.json();

            setProducts(data);
        };
        fetchProducts();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 6,
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
                slidesToShow: 5,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
              breakpoint: 420,
              settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

  return (
    <Box>
      <Header/>

        <Box pb={10} className='bg-zinc-100 rounded-t-lg'>
            <Box bg={''} py={2}>
                <Box maxW={{'2xl' : '80%', xl : '90%', lg : '97%', base: '97%'}} mx={'auto'}>
                    <Box bg={''} className="flex gap-1 items-center">
                        <Link to={'/'} className='text-[13px]'>Back to home page</Link>
                        <PiGreaterThan className='text-[13px] pt-1 text-gray-400'/>
                        <Link to={'/clothing'} className='text-[13px]'>Clothing</Link>
                        <PiGreaterThan className='text-[13px] pt-1 text-gray-400'/>
                        <Link to={'/womenswear'} className='text-[13px]'>Women's Fashion</Link>
                        <PiGreaterThan className='text-[13px] pt-1 text-gray-400'/>
                        <Link to={'/womenswear'} className='text-[13px]'>Men's Fashion</Link>
                    </Box>
                </Box>
            </Box>
            <Box  maxW={{'2xl' : '70%', xl : '70%', lg : '100%', base: '97%'}} mx={'auto'}>
                <Flex justifyContent={'center'} height={{md: '260px'}} mt={5} bg={'white'} rounded={'md'}>
                    <img src="/banner.jpg" className='max-h-full w-full rounded' alt="" />
                </Flex>
            </Box>
            <Box mt={5} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} className=''>
                <Flex justifyContent={'space-between'} alignItems={'center'} className='bg-white py-3 rounded-t-lg px-3'>
                    <Heading fontWeight={500} fontSize={20}>Top Picks</Heading>
                    <Link className='text-pink-600 font-medium uppercase text-sm flex items-center'>See All <FaAngleRight className='text-[20px]'/></Link>
                </Flex>            
            </Box>
            <Box bg={'white'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
                <Box className="py-3 px-2">
                    <Slider {...settings}>
                        {
                            products.map((product) => (
                                product.category === 'womenswear' && product.price >= 4000 ? (
                                <Women_ClothingContext.Provider value={product}>
                                    <Suspense fallback={'Loading...'}>
                                        <Women_Clothing product={product}/>
                                    </Suspense>
                                </Women_ClothingContext.Provider>
                            ) : ''
                        ))
                        }
                    </Slider>
                </Box>
            </Box>
            <Box bg={'white'} my={5} p={2} rounded={'md'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
                <Box display={{md: 'block', base: 'none'}}>
                    <Flex>
                        <Link to={'/'}>
                            <Box width={'200px'}>
                                <Image  rounded={'md'} src="/shirt.jpg" alt="" />
                                <Text textAlign={'center'}>Shirt</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box width={'200px'}>
                                <Image  rounded={'md'} src="/pants.jpg" alt="" />
                                <Text textAlign={'center'}>Pant</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box width={'200px'}>
                                <Image  rounded={'md'} src="/sportsweat.jpg" alt="" />
                                <Text textAlign={'center'}>Sportwear</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box width={'200px'}>
                                <Image  rounded={'md'} src="/Jean.jpg" alt="" />
                                <Text textAlign={'center'}>Jeans</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box width={'200px'}>
                                <Image  rounded={'md'} src="/UNDERWEAR.jpg" alt="" />
                                <Text textAlign={'center'}>Underwear</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box width={'200px'}>
                                <Image  rounded={'md'} src="/sweatshirt.jpg" alt="" />
                                <Text textAlign={'center'}>Hoodies & Sweatshirt</Text>
                            </Box>
                        </Link>
                    </Flex>
                </Box>
                <Box display={{md: 'none', base: 'block'}}>
                    <Slider {...settings}>
                        <Link to={'/'}>
                            <Box>
                                <Image  rounded={'md'} src="/shirt.jpg" alt="" />
                                <Text textAlign={'center'}>Shirt</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box>
                                <Image  rounded={'md'} src="/pants.jpg" alt="" />
                                <Text textAlign={'center'}>Pant</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box>
                                <Image  rounded={'md'} src="/sportsweat.jpg" alt="" />
                                <Text textAlign={'center'}>Sportwear</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box>
                                <Image  rounded={'md'} src="/Jean.jpg" alt="" />
                                <Text textAlign={'center'}>Jeans</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box>
                                <Image  rounded={'md'} src="/UNDERWEAR.jpg" alt="" />
                                <Text textAlign={'center'}>Underwear</Text>
                            </Box>
                        </Link>
                        <Link to={'/'}>
                            <Box>
                                <Image  rounded={'md'} src="/sweatshirt.jpg" alt="" />
                                <Text textAlign={'center'}>Hoodies & Sweatshirt</Text>
                            </Box>
                        </Link>
                    </Slider>
                </Box>
            </Box>
            <Box bg={'white'} rounded={'md'} mb={5} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
                <Box p={2}>
                    <Image  rounded={'md'} src="/Banner-2.jpg" width={'100%'} height={{md: '100%', base: '150px'}} alt="" />
                </Box>
            </Box>
            <Box mb={'10'}>
                <Box mt={5} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} className=''>
                    <Flex justifyContent={'space-between'} alignItems={'center'} className='bg-white py-3 rounded-t-lg px-3'>
                        <Heading fontWeight={500} fontSize={20}>Hoodies & Sweatshirts</Heading>
                        <Link className='text-pink-600 font-medium uppercase text-sm flex items-center'>See All <FaAngleRight className='text-[20px]'/></Link>
                    </Flex>            
                </Box>
                <Box bg={'white'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} rounded={'md'}>
                    <Box className="py-3 px-2 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                        {
                            products.map((product) => (
                                product.category === 'hoodies' ? (
                                <Hoodie_Sweater2_Context.Provider value={product}>
                                    <Suspense fallback={'Loading...'}>
                                        <Hoodie_Sweater2 product={product}/>
                                    </Suspense>
                                </Hoodie_Sweater2_Context.Provider>
                            ) : ''
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Home_banner4/>
            <Box mb={10} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
                <Flex gap={5}>
                    <Box width={'300px'} bg={'white'} rounded={'md'}>
                        <Box p={2}>
                            <Heading fontWeight={500} mb={0} fontSize={18}>Category</Heading>
                        </Box>
                        <Link className='text-sm'>
                            <Box py={2} px={3} className='hover:bg-zinc-200 duration-150'>
                                <Text>Men's Fashion</Text>
                            </Box>
                        </Link>
                        <Box pt={2}>
                            <Box  px={3}>
                                <Heading fontWeight={500} mb={2} fontSize={15}>Clothing</Heading>
                            </Box>
                            <Box>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Men's Sportswear</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Fashion Hoodies & Sweatshirts</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Jeans</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Pants</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Shirts</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Underwear</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Shoes</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Sandals</Text>
                                    </Box>
                                </Link>
                                <Link className='text-sm'>
                                    <Box py={2} px={8} className='hover:bg-zinc-200 duration-150'>
                                        <Text>Socks</Text>
                                    </Box>
                                </Link>
                                <Box borderWidth={1} borderTopColor={'gray.200'} borderBottomColor={'gray.200'} borderRight={0} borderLeft={0} py={3} px={3} mt={5}>
                                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                                        <Text className='flex items-center text-[16px] font-medium'>PRICE (<FaNairaSign className='text-[16px]'/>)</Text>
                                        <Box px={3} py={1} rounded={'md'} className='flex justify-center items-center bg-pink-300 hover:bg-pink-600 duration-200 hover:text-white text-black font-medium'>
                                            <Text>APPLY</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex={1} bg={'white'} rounded={'md'} p={2}>
                        <Box className="py-3 px-2 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                            {
                                products.map((product) => (
                                    product.gender === 'female' ? (
                                    <Female_Context.Provider value={product}>
                                        <Suspense fallback={'Loading...'}>
                                            <Females product={product}/>
                                        </Suspense>
                                    </Female_Context.Provider>
                                ) : ''
                                ))
                            }
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} bg={'white'} p={2} rounded={'md'}>
                <Box>
                    <Heading fontWeight={500} fontSize={20}>Shop Men's Clothing at Affordable Prices on Adexify</Heading>
                    <Text fontSize={12} mt={2}>Discover a wide range of cost-effective men's clothing options at Adexify. From fashionable shirts and t-shirts to comfortable sweaters, hoodies jeans and pants, we offer a diverse selection that caters to different styles and budgets. With our unbeatable prices and extensive range of clothing types, you can effortlessly update your wardrobe. Whether you're in search of formal attire, casual wear, or trendy fashion pieces, Adexify has everything you need. Start browsing our online store today and find the perfect clothing items to enhance your personal style.</Text>
                </Box>
                <Box my={4}>
                    <Heading fontWeight={500} fontSize={20}>Explore Trendy Shirts and T-shirts for Men</Heading>
                    <Text fontSize={12} mt={2}>Express your individual style with our collection of trendy shirts and t-shirts for men, available on Adexify. Whether you prefer casual t-shirts, timeless button-down shirts, or fashionable polo shirts, we have a wide variety to suit various occasions. Our affordable shirts and t-shirts are available in different colors, patterns, and sizes, ensuring a perfect fit and style that complements your unique taste. Start shopping now and discover the ideal tops to elevate your fashion game.</Text>
                </Box>
                <Box>
                    <Heading fontWeight={500} fontSize={20}>Stay Cool and Stylish this Summer with Men's Clothing from Adexify</Heading>
                    <Text fontSize={12} mt={2}>Upgrade your summer wardrobe with Adexify collection of men's clothing designed to keep you looking sharp and feeling comfortable in the heat. From lightweight t-shirts and stylish shorts to trendy swimwear and breezy shirts, we have everything you need to beat the summer heat in style. Explore our diverse range of colors, patterns, and designs that embrace the spirit of the season. Whether you're heading to the beach, attending a backyard barbecue, or simply enjoying outdoor activities, our men's clothing ensures you're dressed for the occasion. Shop now and elevate your summer fashion game with Adexify.</Text>
                </Box>
                <Heading fontSize={20} mt={6} mb={6}>Frequently Asked Questions (FAQs)</Heading>
                <Box mb={5}>
                    <Heading fontWeight={500} fontSize={18}>What Payment Options are Available on Adexify?</Heading>
                    <Text fontSize={12} mt={2}>You can either pay online or pay on delivery when you shop from us. You can conveniently pay online or on delivery with your cards (MasterCard, Visa and Verve), bank transfers and USSD.</Text>
                </Box>
                <Box mb={5}>
                    <Heading fontWeight={500} fontSize={18}>Can I Return the Items I Bought From Adexify?</Heading>
                    <Text fontSize={12} mt={2}>Yes, you can return items you bought for free and get refunded as soon as possible! We have a refund policy that grants you 7 days to return ALL eligible items bought from the official store on Adexify.</Text>
                </Box>
                <Box mb={5}>
                    <Heading fontWeight={500} fontSize={18}>What Is the Jumia Customer Care Line?</Heading>
                    <Text fontSize={12} mt={2}>We have a dedicated team that is always available to make sure your shopping experience on Adeixy is effortless. Simply dial 07047594667 to reach out to us for complaints and other inquiries. If you would like to place an order, please call us at 070-4759-4667. Whatever you do, we are always available to help.</Text>
                </Box>
                <Box mb={5}>
                    <Heading fontWeight={500} fontSize={18}>How Can I Become a Seller on Adexify?</Heading>
                    <Text fontSize={12} mt={2}>No, Adexify is just an online shopping where women and men can buy there fashion needs, and this is only meant for Adexify.</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
