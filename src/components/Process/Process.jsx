import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled,TbCircleNumber2Filled,
    TbCircleNumber3Filled, TbCircleNumber4Filled,} from "react-icons/tb";
import { PiPlant,PiFactory } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";

const Process = () => {
    const renderSteps = steps.map(item =>{
        return (
            <div className={`flex-1 basis[300px] ${item.id % 2 === 0 ? 'md:-mt-100':''}`}>
                <span className=' flex justify-center items-center md:mx-auto w-18 h-18 text-8xl bg-zinc-800 text-white ouline-[3px] outline-offset-7 outline-zinc-800 outline-dashed rounded-full '>{item.number}</span>
                
                    <div className='flex items-center gap-x-5 mt-10 '>
                        <span className='  flex justify-center items-center text-3xl bg-orange-500 w-14 h-14  text-white rounded-full mt-4'>{item.icons}</span>

                    
                    <div className='flex-1'>
                        <h4 className='text-2xl font-bold'>{item.title}</h4>
                        <p className='mt-2'>{item.para}</p>
                    </div>
                    </div>
               </div>

           
        )
    })


  return (
      <section>
        <div className='max-w-[1900px] mx-auto px-10 py-20 '>
            <div className='w-fit mr-auto'>
                <Heading  highlight ='Our' heading ='Value'/>
            </div>
            <div className='flex  flex-wrap justify-center items-center md:mt-20 mt-10  md:pt-50 '>
                {renderSteps}
            </div>
           
        </div>
      </section>
  )
}

export default Process

const steps =[
    {
        id:1,
        number:<TbCircleNumber1Filled/>,
        title:'Sourcing',
        para:'It is a long established fact that a reader',
        icons:<PiPlant/>

    },
    {
       id:2,
        number:<TbCircleNumber2Filled/>,
        title:'Manufactering',
        para:'It is a long established fact that a reader',
        icons:<PiFactory/>

    },
    {
        id:3,
        number:<TbCircleNumber3Filled/>,
        title:'Quality Control',
        para:'It is a long established fact that a reader',
        icons:<SlBadge />

    },
    {
        id:4,
        number:<TbCircleNumber4Filled/>,
        title:'Logistics',
        para:'It is a long established fact that a reader',
        icons:<FiTruck />

    },
]