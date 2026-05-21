import React,{useEffect, useState} from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)
    const togleMenu =()=>{
        setShowMenu(!showMenu);
    }

    useEffect(() => {
      const handleScroll = ()=>{
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener('scroll',handleScroll)
      return()=> window.removeEventListener('scroll',handleScroll)
  
    }, [])
    
  return (
    
    <header className={` bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-[0_4px_25px_rgba(0,0,0,.9)]' :''} `}>
        <nav className=' max-w-[1900px] mx-auto md:h-[14vh] h-[12vh] flex justify-between items-center px-10'>
            <Link to ="/" className='md:text-4xl text-2xl font-semibold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </Link>
            {/* desktop menu */}
            <ul className=' md:flex items-center gap-x-15 hidden '>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Product</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Contact Us</a>
                </li>
            </ul>
            {/* Nav Action */}
            <div className='flex  items-center gap-x-5'>
                {/* input field */}
                <div className=' md:flex  p-1 border-2 border-orange-500 rounded-full hidden'>
                    <input type="text" name='text' id='text' placeholder='search...' autoComplete='off'
                     className=' flex-1 h-[5vh] px-4 focus:outline-none' />
                    <button className='bg-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                        <FaSearch/>
                    </button>
                </div>
                <a href="#" className='md:text-2xl text-xl'>
                    <FaHeart/>
                </a>
                <a href="#" className='md:text-2xl text-xl'>
                    <FaShoppingBag/>
                </a>
                {/* Hamburger -menu */}
                <a href="#" className='text-2xl md:hidden' onClick={togleMenu}>
                {showMenu ?   <TbMenu3 />: <TbMenu2/>}

                </a>
            </div>
            {/* Mobile-Menu */}
            <ul className={` flex  flex-col gap-y-10 bg-orange-500/45 backdrop-blur-xl shadow-xl rounded-xl  p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500  ${showMenu ? 'left-1/2' :""} `}>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Product</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Contact Us</a>
                </li>
                 
                {/* input field */}
                <li className=' flex  p-1 border-2 border-orange-500 rounded-full md:hidden'>
                    <input type="text" name='text' id='text' placeholder='search...' autoComplete='off'
                     className=' flex-1 h-[5vh] px-4 focus:outline-none' />
                    <button className='bg-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                        <FaSearch/>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar