import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat  from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import  {Link} from 'react-router-dom'

const Category = () => {

    const renderCards = category.map(card=>{
        return (

            // Card
            <div className='flex-1  ' key={card.id}>

                {/* Card Image */}
                <div className=' w-full min-h-[30vh] relative -mb-10'>
                    <img src= {card.image} className='absolute bottom-0' />
                </div>

                {/* Card Content */}
                <div className='bg-zinc-200 pt-15 p-8 rounded-2xl'>
                   <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                   <p className='text-zinc-800 font-semibold mt-3 mb-9'>{card.description}</p>
                 <Link to={card.path}  className='bg-orange-500   px-8 py-3 rounded-lg mt-2  md:text-xl text-sm hover:scale-105 cursor-pointer '>
                    See All</Link>
                </div>
            </div>
        )
    })


  return (
   <section>
    <div className='mx-w-[1900px] mx-auto px-20 py-20'>
        <Heading  highlight ='Shop' heading ='by Category'/>

        {/* Category Card */}
        <div className='flex flex-wrap gap-5 md:mt-15 mt-25'>
        {renderCards}
        </div>
    </div>
   </section>
  )
}

export default Category

const category =[
    {
        id:1,
        title:'Fruits & Vaggies',
        description :'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image:FruitsCat,
        path:'/fruits'
    },
    {
        id:2,
        title:'Dairy & Eggs',
        description :'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image:DairyCat,
        path:'/dairy'
    },
    {
        id:3,
        title:'Meat & SeaFood',
        description :'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image:SeaFoodCat,
        path:'/meat'
    }
]