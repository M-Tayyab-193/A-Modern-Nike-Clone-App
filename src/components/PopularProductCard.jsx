import React from 'react'
import {star} from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full '>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px] hover:scale-110 transition-transform duration-300 ease-in-out'/>
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width ={24} height={24}/>
         <p className='font-montserrat leading-normal text-slate-gray text-xl'>(4.5)</p>
      </div>
       <h3 className='mt-2 leading-[1.3] font-semibold font-palanquin text-2xl whitespace-nowrap'>{name}</h3>
         <p className='mt-2 font-semibold font-montserrat leading-normal text-xl text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProductCard
