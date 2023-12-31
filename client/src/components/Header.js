import React from 'react'
import { cart, image1, logoDark } from '../assets'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
          <img src={logoDark} className='w-28' alt='' />
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Home
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Pages
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Shop
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Element
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Blog
            </li>
          </ul>
          <div className='relative'>
            <img src={cart} className='w-8' alt='cart image' />
            <span className='absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold '>
              0
            </span>
          </div>
          <div>
            <img
              className='w-8 h-8 rounded-full border border-gray-800'
              src={image1}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
