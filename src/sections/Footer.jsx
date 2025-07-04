import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container '>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
       <a href="/">
        <img src={footerLogo} alt="" width = {150} height = {46} />
       </a>
       <p className='text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike Store. Find Your Perfect Size in Store. Get Rewards.</p>
       <div className='flex items-center gap-5 mt-8'>
        {socialMedia.map((social) => (
          <div className=' rounded-full bg-white flex justify-center items-center w-12 h-12'>
            <img src={social.src} alt={social.alt} />
          </div>
        ))}
       </div>

      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
{footerLinks.map((handle) => (
  <div key = {handle}> 
  <h4 className='text-white font-montserrat text-2xl font-medium mb-6 leading-normal'>{handle.title}</h4>
  <ul>
    {handle.links.map((item) => (
      <li className='mt-3 text-white-400 font-motserrat text-base leading-normal cursor-pointer' key = {item} > <a href="">{item.name}</a></li>
    ))}
  </ul>
  </div>
))}
      </div>
      </div>
      <div className='flex justify-between text-white-400 max-sm:flex-col mt-24 max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copyright" width= {20} height = {20} className='rounded-full m-0'/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='cursor-pointer font-montserrat'>Terms & Conditions</p>
      </div>
    </footer >
  )
}

export default Footer
