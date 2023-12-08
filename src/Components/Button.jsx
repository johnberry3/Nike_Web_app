import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className=' flex justify-center items-center gap-2 font-montserrat py-4 px-7 text-lg leading-none bg-coral-red border rounded-full text-white'>
        {label}
        {iconURL && <img src={iconURL} alt="Arrow right" className='w-5 h-5 ml-2 rounded-full' />}
    </button> 
  )
}

export default Button