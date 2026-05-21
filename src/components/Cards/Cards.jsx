import React from 'react'
import { FaHeart,FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'


const Cards = ({image,name,price}) => {
  return (
    <div className='bg-zinc-200 p-4 rounded-xl'>
        {/* Card Icons */}
        <div className='flex justify-between'>
            <span className='text-3xl text-zinc-700'>
                <FaHeart/>
            </span>
            <button className='text-2xl bg-orange-500 px-3 py-2 rounded-lg'>
                <FaPlus/>
            </button>
        </div>
        {/* Card Image */}
        <div className='w-full h-50 '>
            <img src={image} className='w-full h-full mx-auto object-contain' />
        </div>
        {/* Card Content */}
        <div className='text-center'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p  className='text-2xl font-bold mt-4 mb-2'>${price.toFixed(2)}</p>
           <Button content ='Shop Now' />
        </div>
    </div>
  )
}

export default Cards