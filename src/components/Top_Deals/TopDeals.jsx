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
    <div className='mt-10 md:mb-0 mb-20 bg-slate-200 rounded-t-lg'>
      <Box bgGradient='linear(to-l, gray.800, pink.600)' className="py-3 rounded-t-lg px-3 flex justify-between items-center">
          <Heading fontWeight={500} fontSize={{md:25, base: 20}} className='text-xl text-white uppercase'>Top Deals</Heading>
          <Link to={'/'} className='text-sm text-white font-medium uppercase'>See All</Link>
      </Box>
      <div className="py-3 px-2 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {
            products.map((product) => (
              product.deal === 'Great' ? (
                <TopDealsProductsContext.Provider value={product}>
                    <TopDealsProducts product={product}/>
                </TopDealsProductsContext.Provider>
              ) : ''
            ))
        }
      </div>
    </div>
  )
}
