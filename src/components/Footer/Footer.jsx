import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
   <footer className='bg-white-300 py-20 '>
    <div className=' flex flex-wrap max-w-[1900px] max-auto  px-20'>
        <div className='flex-1 basis-[300px]'>
         <a href="#" className='md:text-3xl text-2xl font-semibold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </a>
            <p className='  text-zinc-900 mt-6 max-w-[350px]'>
                Bread for a high content of beneficial substance . Our product are all fresh and healthy
            </p>
            <p className='text-zinc-900 mt-6'>
                2025 ©️ All Right Reserverd
            </p>
        </div>
        <ul className='flex-1'>
            <li>
                <h5 className='text-2xl font-bold'>Company</h5>

            </li>
            <li className='mt-6'>
                <a href="#" className='hover:text-orange-500 '>About</a>
            </li>
            <li className='mt-6'>
                <a href="#"  className='hover:text-orange-500'>FAQ'S</a>
            </li>
        </ul>
        <ul className='flex-1'>
            <li>
                <h5 className='text-2xl font-bold'>Support</h5>

            </li>
            <li className='mt-6'>
                <a href="#" className='hover:text-orange-500 '>Support</a>
            </li>
            <li className='mt-6'>
                <a href="#"  className='hover:text-orange-500'>Feedback</a>
            </li>
            <li className='mt-6'>
                <a href="#"  className='hover:text-orange-500'>Contact Us</a>
            </li>
        </ul>

        <div className='flex-1'>
            <h5 className='text-2xl font-bold '>Stay Conncted</h5>
            <p className='mt-6'> Question and Feedback?<br/> we 'd love to hear from you</p>
            <div className='flex bg-white p-1 rounded-lg mt-6'>
                <input  type="email" name='email' id='email'autoComplete='off'
                placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none border-2 rounded-2xl' />
                <button className='bg-orange-500 rounded-lg text-white text-2xl w-10 flex justify-center items-center'><IoIosArrowForward/></button>
            </div>
        </div>
        
    </div>

   </footer>
  )
}

export default Footer