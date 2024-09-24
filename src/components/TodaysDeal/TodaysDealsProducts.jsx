import React, { useContext } from 'react'
import { TodaysDealsProductsContext } from './TodaysDeal'
import { Link } from 'react-router-dom';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';

export default function TodaysDealsProducts() {
    const product = useContext(TodaysDealsProductsContext);

    const {_id, deal, quantity, image, name, price, description} = product;

    console.log(deal);

    const handleCart = () => {

    }

  return (
    <div className='bg-white p-2 rounded-xl shadow-sm '>
        <Link to={`product-details/${_id}`}>
            <div className="flex justify-center pt-0 md:w-[200px] md:h-[200px] w-[140px] mx-auto">
                <img src={image} alt="" className='max-w-full  object-cover object-top'/>
            </div>
            <div className="w-full">
                <h2 className='py-1 font-medium md:text-center truncate'>{name}</h2>
            </div>
        </Link>
        <p className="truncate">{description}</p>
        <div className="flex justify-between items-center mt-2">
            <p className='flex items-center'>
                <BsCurrencyDollar/>
                <span className='font-medium'>{price}.00</span>
            </p>
            <button onClick={handleCart} className='w-[30px] h-[30px] bg-pink-600 rounded-full flex justify-center items-center text-white'><FaCartShopping/></button>
        </div>
    </div>
  )
}
