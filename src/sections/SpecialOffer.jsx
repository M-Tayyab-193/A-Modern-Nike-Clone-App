import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'


const SpecialOffer = () => {
  return (
    <section className='flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height = {687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-col flex-1'>
    
     <h2 className='text-4xl capitalize font-palanquin font-bold lg:max-w-lg'>
     <span className='text-coral-red'>Special</span> Offer
     </h2>
     <p className='mt-4 lg:max-w-lg info-text'>
      Embark on a shopping journey that redines yout experience with unbeatable deals. From premier selections to incredible savings.We offer unparralleled value that sets us apart.
     </p>
     <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of expectations.</p>
     <div className='mt-11 flex flex-wrap gap-4'>
      <Button label = "View Details" />
      <Button label = "Learn more" backgroundColor = "bg-white" borderColor= "border-slate-gray" textColor = "text-slate-gray"/>
     </div>
      </div>
    </section>
  )
}

export default SpecialOffer
