import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import {Link} from 'react-router-dom'



const Products = () => {

    const categories = ['All','Fruits','Vegetables','Dairy','SeaFood']
    const [activeTab, setActiveTab] = useState('All')

    let filterdItems = activeTab ==='All'
    ? ProductList :ProductList.filter(item=>
        item.category === activeTab)

    const renderCards = filterdItems.slice(0,8).map((product)=>{
        return(
            <Cards image ={product.image} name ={product.name} price ={product.price}/>
        )
    })

  return (
   <section>
    <div className='max-w-[1900px] mx-auto px-10 py-20'>
        <Heading highlight ='Our' heading ='Products'/>
    

        {/* Tabs */}
        <div className='flex  flex-wrap gap-3  justify-center mt-10'>
            {categories.map((category)=>{
                return(
                    <button key={category}
                     className={` px-10 py-2 text-xl rounded-lg cursor-pointer
                      ${activeTab === category? 'bg-orange-500': 'bg-zinc-200'}`}
                      onClick={()=>setActiveTab(category)}>
                        {category}
                    </button>
                )
            })}
        </div>

        {/* Product Listing */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
            {renderCards}
        </div>

        <div className='  mx-auto w-fit mt-10'>
            <Link to='/allproducts'  className='bg-orange-500   px-8 py-3 rounded-lg mt-2  md:text-xl text-sm hover:scale-105 cursor-pointer '>
            View All</Link>
        </div>
    </div>
   </section>
  )
}

export default Products

