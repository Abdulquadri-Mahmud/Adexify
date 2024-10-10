import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';
import { PiGreaterThan } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { changeQuantity, deleteProduct } from '../../store/cart/cartsReucer';
import { CgMathMinus } from 'react-icons/cg';
import { RiAddFill } from 'react-icons/ri';
import { FaCartShopping, FaNairaSign } from 'react-icons/fa6';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { deleteWishlist } from '../../store/wishlists/Wishlists';
import { MdDelete } from 'react-icons/md';

export default function Wishlist_Page() {
    const { wishlists } = useSelector((state) => state.wishlist);
    const { currentUser } = useSelector((state) => state.user);
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
          const res =  await fetch(`https://adexify-api.vercel.app/api/products/single-products/${proId}`);
  
          const data = await res.json();
  
          setProduct(data);
        };
  
        fetchData();
    }, []);

    const handleRemoveItem = (id) => {
        dispatch(deleteWishlist({
          productID: id,
        }));
    }

    const {_id, name, image, price,} = product;

    const getCarts = {
        productID: _id,
        productName: name,
        productImage : image,
        productPrice: price,
        userId : currentUser._id,
        quantity: 1
    }

    const handleCart = () => {
      dispatch(addToCart(getCarts));
    }

  return (
    <Box pb={10} className='bg-zinc-100'>
        <Box bg={'white'}>
          <Box maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'} className="p-2 ">
                <Box className="flex gap-1 items-center">
                    <Link to={'/'} className='text-[13px]'>Home</Link>
                    <PiGreaterThan className='text-[13px] pt-1 text-gray-400'/>
                    <Link to={'/view-carts'} className='text-[13px] text-pink-600'>Wishlist</Link>
                </Box>
                <Box className="mt-2" my={5}>
                    <Heading fontSize={{md:30, base: 25}} fontWeight={500} color={'black'}>My Wishlists</Heading>
                </Box>
            </Box>
        </Box>
        <Box mt={{md: 10, base: 6}}>
            <Box height={'400px'} overflowY={'auto'} bg={'white'} rounded={'md'} maxW={{'2xl' : '80%', xl : '90%', lg : '100%', base: '97%'}} mx={'auto'}>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>
                            <Text className='text-pink-600 font-medium text-sm'>Shop What You Desire On Adexify Now</Text>
                        </TableCaption>
                        <Thead roundedTop={'md'}>
                            <Tr className='bg-pink-300'>
                                <Th fontWeight={500} fontSize={14}>Image</Th>
                                <Th fontWeight={500} fontSize={14}>Name</Th>
                                <Th fontWeight={500} fontSize={14}>Price</Th>
                                <Th fontWeight={500} fontSize={14}>Delete</Th>
                                <Th fontWeight={500} fontSize={14}>Add To Cart</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                wishlists.length > 0 && wishlists.map((item) => {
                                    return(
                                        <Tr>
                                            <Td>
                                                <Link to={`/product-details/${item.productID}`}>
                                                    <img src={item.productImage} alt="" className='rounded-md max-w-[80px] max-h-[80px]'/>
                                                </Link>
                                            </Td>
                                            <Td>
                                                {item.productName.slice(0, 40)}...
                                            </Td>
                                            <Td>
                                                <Text fontWeight={500} textAlign={'center'} className='flex items-center justify-center'><FaNairaSign/>{(item.productPrice * item.quantity).toLocaleString()}.00</Text>
                                            </Td>
                                            <Td >
                                                <div className="flex justify-center items-center">
                                                    <button className='text-red-500 text-[14px] font-medium text-center' onClick={() => handleRemoveItem(item.productID)}><MdDelete className='text-2xl'/></button>
                                                </div>
                                            </Td>
                                            <Td>
                                                <button className="flex justify-center items-center hover:bg-pink-500 duration-200 bg-pink-600 text-white px-2 py-2 rounded-full font-medium" onClick={handleCart}><FaCartShopping /></button>
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    </Box>
  )
}
