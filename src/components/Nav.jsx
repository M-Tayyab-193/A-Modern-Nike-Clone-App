import React from 'react'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x absolute py-8 z-10 w-full'>
      <nav className='flex items-center justify-between max-container'>
        <a href="/"><img src={headerLogo} alt="logo" width = {135} height= {29} /></a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{link.label}</a>
                </li>
            ))}
        </ul>
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt="Hamburger" width= {25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
