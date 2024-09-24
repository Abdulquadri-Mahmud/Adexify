import { Box, Heading } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TodaysDealsProducts from './TodaysDealsProducts'

export const TodaysDealsProductsContext = createContext();

export default function TodaysDeal() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://adeys-shopify-api.vercel.app/api/products/all-products');

            const data = await res.json();

            setProducts(data);

        };
        fetchProducts();
    }, []);

    console.log(products);

  return (
    <Box className='my-10 bg-slate-200'>
      <Box bgGradient='linear(to-l, gray.800, pink.600)' className="bg-white py-3 rounded-t-lg px-5 flex justify-between items-center gap-4">
          <Heading fontWeight={500} fontSize={25} color={'white'} className='text-xl'>Today's Deals</Heading>
          <Link to={'/'} className='text-sm text-white underline font-medium'>See All Items</Link>
      </Box>
      <div className="py-3 px-5">
        <TodaysDealsProductsContext.Provider value={''}>
            <TodaysDealsProducts/>
        </TodaysDealsProductsContext.Provider>
      </div>
    </Box>
  )
}
