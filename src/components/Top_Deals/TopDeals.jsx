import { Box, Heading } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react';
import TopDealsProducts from './TopDealsProducts';
import { Link } from 'react-router-dom';

export const TopDealsProductsContext = createContext();

export default function TopDeals() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
          const res = await fetch('https://adexify-api.vercel.app/api/products/all-products');

          const data = await res.json();

          setProducts(data);

      };
      fetchProducts();
    }, []);

  return (
    <Box className='mt-10 md:mb-0 mb-20 bg-white rounded-t-lg'>
      <Box className='bg-zinc-200 py-3 rounded-t-lg px-3 border-b-2 border-gray-200'>
        <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} className="flex justify-between items-center">
            <Heading fontWeight={500} fontSize={{md:20, base: 18}} className='text-xl text-black'>Top Deals</Heading>
            <Link to={'/'} className='text-[13px] text-black font-medium'>See All Items</Link>
        </Box>
      </Box>
      <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
        <div className="py-3 px-2 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
          {
              products.map((product) => (
                product.deal === 'Great' || product.deal === 'great' ? (
                  <TopDealsProductsContext.Provider value={product}>
                      <TopDealsProducts product={product}/>
                  </TopDealsProductsContext.Provider>
                ) : ''
              ))
          }
        </div>
      </Box>
    </Box>
  )
}
