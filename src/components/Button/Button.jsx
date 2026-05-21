import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-500
     px-8 py-3 rounded-lg mt-2  md:text-xl text-sm hover:scale-105 cursor-pointer '>
      {props.content}
    </button>
  )
}

export default Button