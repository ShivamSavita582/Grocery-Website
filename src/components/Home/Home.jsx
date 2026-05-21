import React from 'react'

import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Value from '../Value/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testemonials from '../Testimonials/Testemonials'



const Home = () => {
  return (
    <div> 
      <Hero/>
      <Category/>
      <Value/>
      <Products/>
      <Discount/>
      <Process/>
      <Testemonials/>
    </div>
  )
}

export default Home