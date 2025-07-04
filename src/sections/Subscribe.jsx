import React from 'react'
import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section className='max-container flex items-center justify-center max-lg:flex-col gap-12' id = "contact us">
      <h3 className='max-sm:text-[40px] max-sm:leading-[50px] text-center text-[45px] leading-[68px] max-lg:max-w-lg font-palanquin font-bold'>Sign Up from <span className='text-coral-red '>Updates</span> & NewsLetter</h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='Subscribe at Nike.com' className='input'/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label = "Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
