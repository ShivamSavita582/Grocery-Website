import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';


const Testemonials = () => {
  return (
    <section>
        <div className='max-w-[1900px] mx-auto px-10 py-20'>
            <Heading highlight ='Customers' heading='Saying' className/>

            <div className='py-5 flex justify-end gap-3'>
              <button className='custom-next  text-2xl rounded-lg w-11 h-11 bg-zinc-300  hover:bg-orange-500 text-white cursor:pointer '>
                <IoIosArrowBack/>
              </button>
              <button className='custom-prev  text-2xl rounded-lg w-11 h-11 bg-zinc-300  hover:bg-orange-500 text-white cursor:pointer'>
                <IoIosArrowForward/>
              </button>
            </div>
      <Swiper 
      navigation={{
        nextEl:'.custom-next',
        prevEl:'.custom-prev'
      }}
      loop={true}
      breakpoints={{
        640:{slidesPerView:1,spaceBetween:20 },
        768:{slidesPerView:2, spaceBetween:20},
        1024:{slidesPerView:3, spaceBetween:20},
      }}
      modules={[Navigation]} className="mySwiper">
       {
        review.map(item=>{
          return(
            <SwiperSlide className=' bg-zinc-200 rounded-xl  p-8'>
              <div className='flex gap-5 items-center'>
                <div className='w-16 h-16 rounded-full bg-red-400 outline-2 outline-orange-500 outline-offset-4'>
                  <img src={item.image} className='w-full rounded-full' />
                </div>
                  <div>
                    <h5 className='text-xl font-bold'>{item.name}</h5>
                    <p className='text-lg'>{item.profession}</p>
                    <span className='flex text-orange-400 text-xl mt-2 gap-1'>{Array.from({length:item.rating},(_,index)=>(
                      <FaStar/>

                    )
                    )}</span>
                  </div>
                </div>
                <div className='mt-10 min-h-[20vh]'>
                  <p className='text-zinc-600'>
                    {item.para}
                  </p>
                </div>
            </SwiperSlide> 
          )
        })
       }

      </Swiper>
            
        </div>
    </section>
  )
}

export default Testemonials

const review = [
  {
    id:1,
    name:'Emily Johnson',
    profession:'Food Blogger',
    rating:'4.7',
    para:'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
    image:Customer1,
  },
  {
    id:2,
    name:'David Smith',
    profession:'Chef',
    rating:'4',
    para:'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
    image:Customer2,
  },
  {
    id:3,
    name:'Alya Zahra',
    profession:'Model',
    rating:'3.9',
    para:'Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable',
    image:Customer3,
  },
  {
    id:4,
    name:'Carlos Mendes',
    profession:'Fitness Coach',
    rating:'4.8',
    para:'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
    image:Customer4,
  },
  {
    id:5,
    name:'Natcha',
    profession:'Nutriotion',
    rating:4.5,
    para:'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
    image:Customer5,
  },
]