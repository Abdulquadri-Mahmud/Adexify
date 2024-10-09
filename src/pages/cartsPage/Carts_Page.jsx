import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';
import { PiGreaterThan } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { changeQuantity, deleteProduct } from '../../store/cart/cartsReucer';
import { CgMathMinus } from 'react-icons/cg';
import { RiAddFill } from 'react-icons/ri';
import { FaNairaSign } from 'react-icons/fa6';

export default function Carts_Page() {
  const { items } = useSelector((state) => state.cart);
  const [emptyCart, setEmptyCart] = useState(false);

  let total = 0;

  let dispatch = useDispatch();

  const increaseQuantity = (id) => {
    items.map((item) => {
      if (id === item.productID) {
        dispatch(changeQuantity({
          productID : item.productID,
          quantity : item.quantity + 1
        }));
      }
    });
  }

  let navigate = useNavigate();

  const decreaseQuantity = (id) => {
    items.map((item) => {
      if (id === item.productID) {
        dispatch(changeQuantity({
          productID : item.productID,
          quantity : item.quantity - 1 < 1 ? 1
           : item.quantity - 1
        }));
      }
    });
  }

  const handleRemoveItem = (id) => {
    dispatch(deleteProduct({
      productID: id,
    }));
    if (items.length === 0) {
      setEmptyCart(true);
      return;
    }
  }
  useEffect(() => {
    if (items.length === 0) {
      setEmptyCart(true);
      return;
    }
  })

  return (
    <Box pb={10} className='bg-zinc-100'>

      <Box mt={3} className=''>
        <Box bg={'white'}>
          <Box className="p-2 max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
            <Box className="flex gap-1 items-center">
              <Link to={'/'} className='text-[13px]'>Home</Link>
              <PiGreaterThan className='text-[13px] pt-1 text-gray-400'/>
              <Link to={'/view-carts'} className='text-[13px] text-pink-600'>Shopping Cart</Link>
            </Box>
            <Box className="mt-2" my={5}>
                <Heading fontSize={{md:30, base: 25}} fontWeight={500} color={'black'}>Shopping Cart</Heading>
            </Box>
          </Box>
        </Box>
        <Box mt={4} className=' max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto'>
          <Box width={'200px'} py={1} rounded={'md'} className='border border-pink-600' >
            <Link to={'/'} fontWeight={500} className='text-pink-600 flex items-center justify-center gap-2'><BiLeftArrowAlt/> Continue Shopping</Link>
          </Box>
        </Box>
        <Box className='max-w-[95vw] xl:max-w-[1240px] w-full mx-auto'>

          <Flex justifyContent={'space-between'} flexWrap={'wrap'} gap={{md: 5, base: 2}} mt={6}>
            <Box flex={1} bg={'white'} rounded={'md'}>
              <div className="w-full overflow-y-auto">
                <table className='w-[100%] table-auto rounded-md'>
                  <thead className='w-[100%] bg-pink-300'>
                    <tr>
                      <th className='font-medium p-[10px] text-center'>Image</th>
                      <th className='font-medium p-[10px] text-center'>Name</th>
                      <th className='font-medium p-[10px] text-center'>Quantity</th>
                      <th className='font-medium p-[10px] text-center'>Items Price</th>
                      <th className='font-medium p-[10px] text-center'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='w-full'>
                    {
                      items.length > 0 && items.map((item) => {
                        total += item.productPrice * item.quantity;
                        return (
                          <tr className='m-3'>
                            <td className='p-2'>
                              <Link to={`/product-details/${item.productID}`}>
                                <img src={item.productImage} alt="" className='rounded-md max-w-[80px] max-h-[80px]'/>
                              </Link>
                            </td>
                            <td className='p-2 font-medium text-[14px] w-[20%]'>
                              {item.productName.slice(0, 40)}...
                            </td>
                            <td className='p-2 font-medium'>
                              <div className="flex justify-center items-center h-full gap-2">
                                <button type='button' className='rounded-md bg-zinc-200 w-7 h-7 flex justify-center items-center' onClick={() => decreaseQuantity(item.productID)}><CgMathMinus className='text-sm text-black'/></button>
                                <span className="" >{item.quantity}</span>
                                <button type='button' className='rounded-md bg-zinc-200 w-7 h-7 flex justify-center items-center' onClick={() => increaseQuantity(item.productID)}><RiAddFill className='text-sm text-black'/></button>
                              </div>
                            </td>
                            <td className='p-2 font-medium w-[20%]'>
                              <Text fontWeight={500} textAlign={'center'} className='flex items-center justify-center'><FaNairaSign/>{(item.productPrice * item.quantity).toLocaleString()}.00</Text>
                            </td>
                            <td className='p-2 font-medium'>
                              <div className="flex justify-center items-center">
                                <button className='text-red-500 text-[14px] font-medium text-center' onClick={() => handleRemoveItem(item.productID)}>Remove Item</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                {
                  emptyCart && (
                    <Flex mt={{md:20, base: 15}} justifyContent={'center'} height={'70%'} alignItems={'center'}>
                      <Text fontWeight={500} fontSize={20}>Your Cart Is Empty!</Text>
                    </Flex>
                  )
                }
              </div>
            </Box>
            <Box width={{md:'300px', base: '100%'}} height={'350px'} p={{md:3, base:2}} bg={'white'} rounded={'md'}>
              <Flex justifyContent={'space-between'} alignItems={'center'} pb={3} borderBottomWidth={1} borderBottomColor={'gray.100'}>
                <Heading fontSize={16} fontWeight={500}>Order Summary</Heading>
                <Text fontWeight={500} fontSize={15}>Subtotal ({items.length} Item)</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} py={5} borderBottomWidth={1} borderBottomColor={'gray.100'}>
                <Text fontSize={14} fontWeight={500}>Delivery Changes:</Text>
                <Text fontWeight={500} fontSize={'11px'} textAlign={'end'} className='text-gray-400'>Add your Delivery address at checkout to see delivery charges</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} py={4} borderBottomWidth={1} borderBottomColor={'gray.100'}>
                <Heading fontSize={16} fontWeight={500}>Subtotal</Heading>
                <Box>
                  <Text fontWeight={500} className='flex items-center'><FaNairaSign/>{total.toLocaleString()}.00</Text>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} py={4} borderBottomWidth={1} borderBottomColor={'gray.100'}>
                <Heading fontSize={16} fontWeight={500}>Total</Heading>
                <Text fontWeight={500} className='flex items-center'><FaNairaSign/>{total.toLocaleString()}.00</Text>
              </Flex>
              <Text className='text-[12px] text-yellow-600 text-end py-2'>Excluding delivery charges</Text>
              <Box borderBottomWidth={1} borderBottomColor={'gray.100'}>
                <button className='bg-pink-600 text-white w-full my-3 rounded-md py-2 font-medium'>Continue to Checkout</button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
