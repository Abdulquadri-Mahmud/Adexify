import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { createContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaSmileBeam } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdCall } from 'react-icons/io';
import { FcLike } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import { PiGreaterThan } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQuantity } from '../../store/cart/cartsReucer';
import { CgMathMinus } from 'react-icons/cg';
import { RiAddFill } from 'react-icons/ri';
import { FaNairaSign } from 'react-icons/fa6';
import { addWishlist } from '../../store/wishlists/Wishlists';
import { useToast } from '@chakra-ui/react'
import { IoHeart } from 'react-icons/io5';

export const quantityContext = createContext();

export default function Details() {
    const { proId } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const { items } = useSelector((state) => state.cart);
    const toast = useToast({
      position: 'top',
      bg: 'pink.600',
    });
    const logQuantity = useRef(null);
    
    const [product, setProduct] = useState([]);

    let displayImage = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        const res =  await fetch(`https://adexify-api.vercel.app/api/products/single-products/${proId}`);

        const data = await res.json();

        setProduct(data);
      };

      fetchData();
    }, []);

    const {_id, name, category, image, price, trackingId, description, oldprice} = product;

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

    const getWishlist = {
      productID: _id,
      productName: name,
      productImage : image,
      productPrice: price,
      userId : currentUser._id,
      quantity: 1
    }

    const handleWishlistItem = () => {
      dispatch(addWishlist(getWishlist));
      toast({
        description: "Your item has been saved.",
        duration: 5000,
        isClosable: true,
        bgColor: 'pink.600',
      });
    }

    const increaseQuantity = () => {
      items.map((item) => {
        if (_id === item.productID) {
          dispatch(changeQuantity({
            productID : item.productID,
            quantity : item.quantity + 1
          }));
        }
      });
    }

    let navigate = useNavigate();

    const decreaseQuantity = () => {
      items.map((item) => {
        if (_id === item.productID) {
          dispatch(changeQuantity({
            productID : item.productID,
            quantity : item.quantity - 1 < 1 ? navigate('/')
             : item.quantity - 1
          }));
        }
      });
    }

    const handleClick = (img) => {
      displayImage.current.src = img;
    }

  return (
    <div className='bg-slate-200 md:mb-0 mb-16'>
      <div className="bg-white p-2">
        <div className="flex gap-1 items-center">
          <Link to={'/'} className='text-[13px]'>Home</Link>
          <PiGreaterThan className='text-[13px] pt-1'/>
          <Text className='text-[13px]'>category</Text>
          <PiGreaterThan className='text-[13px] pt-1'/>
          <Link to={`/${category}`} className='text-[13px]'>{category}</Link>
        </div>
        {/* <div className="">
        </div> */}
        {/* <Heading fontSize={{md:30, base: 25}} fontWeight={500} color={'black'}>{category}</Heading> */}
      </div>
      <div className="2xl:max-w-[75%] md:max-w-[95%] w-full mx-auto md:p-4 p-2 flex justify-center gap-2 flex-wrap">
        <div className="flex-1 relative bg-white md:p-4 p-2 rounded-md">
          <div className="flex gap-2 flex-wrap">
            <div className="2xl:w-[350px] w-[300px]">
              <div className="w-[300px] flex md:justify-start justify-center">
                <img src={image} alt="" ref={displayImage} className='max-w-full object-fill'/>
              </div>
              <div className="py-2">
                {
                  image !== undefined ? (
                    <div className='flex items-center gap-2'>
                      {
                        image.length > 0 && image.map((img) => {
                          return (
                            <div className="">
                              <img src={img} onClick={() => handleClick(img)} className='max-w-14' alt="" />
                            </div>
                          )
                        })
                      }
                    </div>
                  ) : ''
                }
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-4 pl-3">
              <div className="flex items-center gap-1 bg-pink-200 py-1 px-2 rounded-r-xl w-[140px]">
                <FaSmileBeam className='text-sm text-pink-600'/>
                <Heading fontSize={13} fontFamily={'revert'} className='font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify <span className="black">Now</span></Heading>
              </div>
              <div className=" mt-4 border-b-[1px] border-b-gray-300 pb-2">
                <Heading fontSize={{md:23, base: 16}} fontWeight={500} color={'gray.800'}>{name}</Heading>
                <div className="mt-3">
                  <p className='text-sm text-gray-500 my-1'>Product Code: <span className='text-gray-600 text-[13px]'>{trackingId}</span></p>
                  <div className="flex items-center gap-2">
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <p className='text-sm text-gray-500'>11 Reviews</p>
                  </div>
                  <p className='text-sm text-gray-500 pt-2'>Brand: <span className='text-gray-600 text-[13px]'></span></p>
                </div>
                <div className="py-3">
                  <div className="flex items-center">
                    {
                      price !== undefined ? (
                        <>
                          <FaNairaSign className='text-xl'/>
                          <Heading fontSize={{md:30, base: 25}}>{price.toLocaleString()}.00</Heading>
                          {
                            oldprice && (
                              <p className="text-[16px] text-gray-400 font-medium pt-1 line-through flex items-center pl-3"><FaNairaSign className='text-[16px]'/>{oldprice}</p>
                            )
                          }
                        </>
                      ): ''
                    }
                    {/* old price */}
                  </div>
                  {
                    oldprice && (
                      <p className="text-[13px] text-pink-400 font-medium pt-3">You save up to {oldprice - price}</p>
                    )
                  }
                </div>
                <Box>
                  <Text className='uppercase font-medium mb-4'>Variation Avalaible</Text>
                  <Flex alignItems={'center'} flexWrap={'wrap'} gap={2}>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-3 border border-zinc-300'>S</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-3 border border-zinc-300'>M</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-4 border border-zinc-300'>L</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-2 border border-zinc-300'>XL</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-2 border border-zinc-300'>XXL</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-2 border border-zinc-300'>XXXL</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-2 border border-zinc-300'>XXXL</button>
                    <button className='rounded-md hover:bg-pink-300 active:bg-pink-300 focus:bg-pink-300 p-1 px-2 border border-zinc-300'>XS</button>
                  </Flex>
                </Box>
              </div>
              <div className="border-b-[1px] border-b-gray-300 py-3">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <Box className="flex items-center gap-2">
                    <Text className='text-sm'>Quantity: </Text>
                    <Box className="flex gap-2 items-center">
                      <button type='button' className='bg-zinc-300 w-7 h-7 rounded-md flex justify-center items-center' onClick={decreaseQuantity}><CgMathMinus className='text-sm'/></button>
                      <span className="" ref={logQuantity}>
                        {
                          items.map((item) => (
                            <>
                              {
                                _id === item.productID && (
                                  <>
                                    {item.quantity}
                                  </>
                                )
                              }
                            </>
                          ))
                        }
                      </span>
                      <button type='button' className='bg-zinc-300 w-7 h-7 rounded-md flex justify-center items-center' onClick={increaseQuantity}><RiAddFill className='text-sm'/></button>
                    </Box>
                  </Box>
                  
                  <div className="bg-pink-200 px-2 rounded-md mt-5">
                    <p className='text-sm font-medium text-center'>Call us for Bulk Purchase</p>
                    <div className="flex justify-center items-center text-pink-600 font-medium">
                      <IoMdCall/>
                      <Link to={'tell:07047594667'} className='text-center'>07047594667</Link>
                    </div>
                  </div>
                </div>
                <div className=" mt-5 flex justify-between items-center">
                  <button className="bg-pink-600 text-white px-5 py-2 rounded-md w-[100%] font-medium" onClick={handleCart}>Add To Cart</button>
                </div>
                <button onClick={handleWishlistItem} className=" text-white cursor-pointer hover:text-pink-600 active:text-pink-600 focus:text-pink-600 absolute top-3 right-3 w-[30px] h-[30px] bg-gray-300 flex justify-center items-center rounded-full">
                  <IoHeart className='text-xl'/>
                </button>
              </div>
            </div>
          </div>
          <div className="my-6">
            <div className="mb-2">
              <h2 className='font-medium text-xl'>Description:</h2>
            </div>
            <p className="">{description}</p>
          </div>
        </div>
        <div className="md:w-[350px] w-full bg-white rounded-md">
          <div className="py-2 border-b-[1px] border-b-gray-300 p-3">
            <Text className='text-[16px] font-medium'>Delivery & Retrurn</Text>
          </div>
          <div className="py-3 flex gap-2 justify-start p-3">
            <div className="">
              <TbTruckDelivery className='text-pink-600 text-xl'/>
            </div>
            <div className="">
              <Text className='text-[15] font-medium'>Delivery</Text>
              <p className=''>Estimated delivery time 1-9 business days</p>
              <p className="text-[13px] pb-3">Express Delivery Available</p>
              <p className="text-[13px] pb-3"><span className="font-medium">For Same-Day-Delivery:</span> Please place your order before 11AM</p>
              <p className="text-[13px] pb-3"><span className="font-medium">Next-Day-Delivery:</span> Orders placed after 11AM will be delievered the next day</p>
              <p className="text-[13px] pb-3"><span className="text-[13px] font-medium">Note: </span>Availability may vary by location</p>
            </div>
          </div>
          <div className="text-[13px] py-3 flex gap-2 justify-start p-3">
            <div className="">
              <MdOutlinePolicy className='text-pink-600 text-xl'/>
            </div>
            <div className="">
              <p className="text-[15px] pb-3">Return Policy</p>
              <p className="text-[13px] pb-3 font-medium">Guaranteed 7-Day Return Policy</p>
              <p className="text-[13px] pb-3">For details about return shipping options, please visit - <Link to={'/'} className='text-pink-600'>ADEXIFY Return Policy</Link></p>
            </div>
          </div>
          <div className="py-3 flex gap-2 justify-start p-3">
            <div className="text-[13px]">

            </div>
            <div className="text-[13px]">
              <p className="text-[16] pb-3">Waranty</p>
              <p className="">Warranty information unavailable for this item.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3">

      </div>
    </div>
  )
}
