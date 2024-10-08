import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CgMathMinus } from 'react-icons/cg';
import { RiAddFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../store/cart/cartsReucer';
import { quantityContext } from '../../pages/product_details/Details';

export default function Quantity() {
  let dispatch = useDispatch();
  const item = useContext(quantityContext);

  const { productID, quantity } = item;

  
  
  return (
    <Box gap={2}>
      <Box className="flex items-center gap-2">
        <Text className='text-sm'>Quantity: </Text>
        <Box className="flex gap-2 items-center">
          <Button type='button' bg={'gray.300'} px={1} py={1} className='rounded-md' onClick={decreaseQuantity}><CgMathMinus className='text-xl'/></Button>
          <span className="">{}</span>
          <Button type='button' bg={'gray.300'} px={1} py={1} className='rounded-md' onClick={increaseQuantity}><RiAddFill className='text-xl'/></Button>
        </Box>
      </Box>
    </Box>
  )
}
