import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 rounded-[20px] sm:min-w-[350px] px-10 shadow-xl py-16 hover:scale-110 transition-all duration-300 ease-in-out'>
      <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex'>
        <img src={imgURL} alt="label" width={24} height={24} />
      </div>
      <h3 className='font-palanquin font-bold text-3xl leading-normal mt-5'>{label}</h3>
      <p className='mt-3 leading-normal text-lg text-slate-gray  break-words font-montserrat'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
