import { Box, Heading } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react';
import TopDealsProducts from './TopDealsProducts';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export const TopDealsProductsContext = createContext();

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
import Top_deals_pag from '../paginations/top_deals_pag/Top_deals_pag';

export default function TopDeals() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

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
      slidesToShow: 5,
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

  const startIndex = currentPage * postPerPage;
  const endIndex = startIndex - postPerPage;

  const currentPost = products.slice(endIndex, startIndex);

  const paginate  = paginate => setCurrentPage(paginate);

  return (
    <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '100%'}} mx={'auto'} className='mt-10 md:mb-0 mb-20 bg-white rounded-lg'>
      <Box className='bg-white py-3 rounded-t-lg px-3 '>
        <Box className="flex justify-between items-center">
            <Heading fontWeight={500} fontSize={{md:20, base: 18}} className='text-xl '>Top Picks</Heading>
            <Link to={'/'} className='text-[13px] font-medium uppercase flex items-center text-pink-600'>See All <FaAngleRight className='text-[13px]'/></Link>
        </Box>
      </Box>
      <Box>
        <Slider {...settings}>
          {
              products.map((product) => (
                product.deal === 'Great' || product.deal === 'great' ? (
                  <TopDealsProductsContext.Provider value={product}>
                      <TopDealsProducts product={product}/>
                  </TopDealsProductsContext.Provider>
                ) : ''
              ))
          }
        </Slider>
      </Box>
      <Box pb={5}>
        <Top_deals_pag postPerPage={postPerPage} totalPost={products.length} paginate={paginate}/>
      </Box>
    </Box>
  )
}
