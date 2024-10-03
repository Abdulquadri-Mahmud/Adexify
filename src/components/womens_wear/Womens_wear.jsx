import { Box, Heading } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Womens_wear_products from './Womens_wear_products';

export const WomensProductsContext = createContext();

export default function Womens_wear() {
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
    <Box className='my-10 bg-white'>
      <Box bg={'white'} className="bg-white sticky top-0 py-3 rounded-t-lg px-3 flex justify-between items-center gap-4">
          <Heading fontWeight={500} fontSize={{md:25, base: 20}} color={'black'} className='text-xl uppercase'>Women's Wear</Heading>
          <Link to={'/'} className='text-sm text-black font-medium uppercase'>See All</Link>
      </Box>
      <div className="py-3 px-2 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {
            products.map((product) => (
                product.category === "women's wear" ? (
                    <>
                        <WomensProductsContext.Provider value={product}>
                            <Womens_wear_products product={product}/>
                        </WomensProductsContext.Provider>
                    </>
                ) : ''
              ))
        }
      </div>
    </Box>
  )
}
