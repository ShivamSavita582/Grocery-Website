import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'



const Meat = () => {
  return (
    <div>
      <CategoryPage title="Meat & Sea Food" bgImage={BgSeaFood} categories={['Meat', 'SeaFood']} />
      </div>
  )
}

export default Meat