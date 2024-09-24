import { Box, Heading } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TodaysDealsProducts from './TodaysDealsProducts'

export const TodaysDealsProductsContext = createContext();

export default function TodaysDeal() {
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
    <Box className='my-10 bg-slate-200'>
      <Box bg={'gray.800'} className="bg-white sticky top-0 py-3 rounded-t-lg px-5 flex justify-between items-center gap-4">
          <Heading fontWeight={500} fontSize={25} color={'white'} className='text-xl'>Today's Deals</Heading>
          <Link to={'/'} className='text-sm text-white underline font-medium'>See All Items</Link>
      </Box>
      <div className="py-3 px-2 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {
            products.map((product) => (
                <TodaysDealsProductsContext.Provider value={product}>
                    <TodaysDealsProducts product={product}/>
                </TodaysDealsProductsContext.Provider>
            ))
        }
      </div>
    </Box>
  )
}
