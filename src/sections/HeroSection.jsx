import React from 'react'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const HeroSection = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section id = "home" className = "w-full gap-10 flex flex-col min-h-screen xl:flex-row max-container justify-center">
     <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28' >
     <p className = "text-xl font-montserrat text-coral-red">Our Summer Collections</p>
     <h1 className='mt-10 text-8xl max-sm:text-[72px] font-palanquin max-sm:leading-[82px] font-bold'>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
      <br/>
      <span className='mt-3 text-coral-red inline-block'>Nike</span> Shoes
     </h1>
     <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
      Discover stylish arrivals, quality comfort, and innovation for your active life.
     </p>
     <Button label = "Shop now" iconURL = {arrowRight}/>
     <div className='flex justify-start items-start mt-20 flex-wrap gap-16 w-full '>
          {statistics.map((stat, index) => (
            <div key = {index} > 
              <p className='font-palanquin font-bold text-4xl'>{stat.value}</p>
              <p className='font-montserrat text-slate-gray'>{stat.label}</p>
            </div>

          ))}
     </div>
     </div>
     <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      <img src={bigShoeImage} alt="shoe collection" width = {610} height= {500} className='object-contain relative z-10'/>
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((shoe) => ( 
          <div key={shoe}>
            <ShoeCard imageURL = {shoe} changeBigShoeImage = {(shoe)=>{setBigShoeImage(shoe)}} bigShoeImage = {bigShoeImage}/>
          </div>
        ))}
      </div>
     </div>
    </section>
  )
}

export default HeroSection;
