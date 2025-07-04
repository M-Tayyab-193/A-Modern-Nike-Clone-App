import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white rounded-full ${fullWidth && "w-full"}'}`} >
      {label}
     
      { iconURL && <img src={iconURL} alt="Arrow right icon" className='rounded-full ml-2 w-5 h-5' />}
    </button>
  )
}

export default Button;
