import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart,FaLeaf,FaShieldAlt,FaSeedling } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

  const LeftValues = value.slice(0,2).map((item)=>{
    return (
      <div key={item.id} className='md:flex flex-row-reverse items-center gap-7 ' >
        <div>
          <span className='flex justify-center items-center bg-orange-400 text-3xl  text-white h-14 w-14  rounded-full'>{item.icon}</span>
        </div>
        <div className='md:text-right'>
          <h3 className='text-3xl font-bold'>{item.title}</h3>
          <p className='mt-2'>{item.para}</p>
        </div>
      </div>
    )
  })
  const RightValues = value.slice(2).map((item)=>{
    return (
      <div key={item.id} className=' flex  items-center gap-7 ' >
        <div>
          <span className='flex justify-center items-center bg-orange-400 text-3xl  text-white h-14 w-14  rounded-full'>{item.icon}</span>
        </div>
        <div className='text-left'>
          <h3 className='text-3xl font-bold'>{item.title}</h3>
          <p className='mt-2'>{item.para}</p>
        </div>
      </div>
    )
  })


  return (
    <section>
        <div className='max-w-[1900px] mx-auto px-10 py-20'>
            <Heading highlight ='Our' heading='Value'/>

           <div className='flex md:flex-row flex-col items-center gap-15 md:gap-5 mt-15'>
            {/* Left Value */}
            <div className='md:min-h-100 flex flex-col gap justify-between'>
              {LeftValues}
            </div>
            {/* Center Value */}
            <div className='md:flex w-1/2 hidden'>
              <img src={Basket} />
            </div>
            {/* Right Value */}
            <div  className='md:min-h-100 gap-5 flex flex-col justify-between'>
              {RightValues}
            </div>


           </div>
        </div>
    </section>
  )
}

export default Values

const value = [
  {
    id:1,
    title:'Trust',
    para:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaHeart/>
  },
  {
    id:2,
    title:'Always Fresh',
    para:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaLeaf/>
  },
  {
    id:3,
    title:'Food Safety',
    para:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaShieldAlt/>
  },
  {
    id:4,
    title:'100% Organic',
    para:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaSeedling/>
  },
  
]

