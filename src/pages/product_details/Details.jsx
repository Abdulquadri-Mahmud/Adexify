import { Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom'
import { FaSmileBeam } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { FcLike } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import { PiGreaterThan } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQuantity } from '../../store/cart/cartsReucer';

export default function Details() {
    const { proId } = useParams();

    const [product, setProduct] = useState([]);
    const [handleQuantity, setHandleQuantity] = useState(1);

    const increase = () => {
      
    }

    console.log(handleQuantity);
    
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        const res =  await fetch(`https://adexify-api.vercel.app/api/products/single-products/${proId}`);

        const data = await res.json();

        setProduct(data);
      };

      fetchData();
    }, []);

    const {_id, name, category, image, price} = product;

    const { items } = useSelector((state) => state.cart);
    const { currentUser } = useSelector((state) => state.user);

    const {quantity} = items;
    
    const getCarts = {
        productID: _id,
        productName: name,
        productImage : image,
        productPrice: price,
        userId : currentUser._id,
        quantity: 1
    }
    const handleCart = () => {
      dispatch(addToCart(getCarts))
    }

    console.log(items);
    

    const increaseQuantity = () => {
      dispatch(changeQuantity({
        productID : items.productID,
        quantity : items.quantity + 1
      }));
      // setHandleQuantity(handleQuantity => handleQuantity + 1);
    }
    // console.log(quantities);
    
    const decreaseQuantity = () => {
      dispatch(changeQuantity({
        productID : items.productID,
        quantity : items.quantity - 1
      }));
      // if (handleQuantity <= 1) {
      //   setHandleQuantity(handleQuantity = 1);
      // }else{
      //   setHandleQuantity(handleQuantity => handleQuantity - 1);
      // }
    }
    // console.log(currentUser);
    

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
      <div className="2xl:max-w-[65%] md:max-w-[95%] w-full mx-auto md:p-4 p-2 flex justify-center gap-2 flex-wrap">
        <div className="flex-1 bg-white md:p-4 p-2 rounded-md">
          <div className="flex gap-2 flex-wrap">
            <div className="w-[300px]">
              <div className="w-[300px] flex md:justify-start justify-center">
                <img src={image} alt="" className='max-w-full object-fill'/>
              </div>
              <div className="">

              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-4">
              <div className="flex items-center gap-1 bg-pink-200 py-1 px-2 rounded-r-xl w-[140px]">
                <FaSmileBeam className='text-sm text-pink-600'/>
                <Heading fontSize={13} fontFamily={'revert'} className='font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify <span className="black">Now</span></Heading>
              </div>
              <div className=" mt-4 border-b-[1px] border-b-gray-300 pb-2">
                <Heading fontSize={{md:23, base: 16}} fontWeight={500} color={'gray.800'}>{name}</Heading>
                <div className="mt-3">
                  <p className='text-sm text-gray-500 my-1'>Product Code: <span className='text-gray-600 text-[13px]'>{_id}</span></p>
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
                    <BsCurrencyDollar className='text-2xl'/>
                    <Heading fontSize={{md:30, base: 25}}>{price}</Heading>
                    {/* old price */}
                  </div>
                  <p className="text-[12px] text-green-600 font-medium pt-1">You Save #1000</p>
                </div>
              </div>
              <div className="border-b-[1px] border-b-gray-300 py-3">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <p className='text-sm'>Quantity:</p>
                    <div className="flex gap-2 items-center">
                      <button type='button' className='w-8 h-8 bg-slate-200 rounded-md' onClick={decreaseQuantity}>-</button>
                      <span className="">{handleQuantity}</span>
                      <button type='button' className='w-8 h-8 bg-slate-200 rounded-md' onClick={increaseQuantity}>+</button>
                    </div>
                  </div>
                  <div className="bg-pink-200 py-1 px-2 w-[200px] rounded-md mt-5">
                    <p className='text-sm font-medium text-center'>Call us for Bulk Purchase</p>
                    <div className="flex justify-center items-center text-pink-600 font-medium">
                      <IoMdCall/>
                      <Link to={'tell:07047594667'} className='text-center'>07047594667</Link>
                    </div>
                  </div>
                </div>
                <div className=" mt-5 flex justify-between items-center">
                  <button className="bg-pink-600 text-white px-5 py-2 rounded-md w-[200px] font-medium" onClick={handleCart}>Add To Cart</button>
                  <div className="flex flex-col items-center cursor-pointer">
                    <div className="w-[45px] h-[45px] bg-gray-300 flex justify-center items-center rounded-full">
                      <FcLike className='text-2xl text-white'/>
                    </div>
                    <p className='text-[13px] text-gray-400'>Save For Later</p>
                  </div>
                </div>
              </div>
            </div>
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
