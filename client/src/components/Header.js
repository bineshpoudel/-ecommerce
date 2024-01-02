import React from 'react'
import { cart, image1, logoDark } from '../assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const productData = useSelector((state) => state.app.productData)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to='/'>
          <div>
            <img src={logoDark} className='w-28' alt='' />
          </div>
        </Link>
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
          <Link to='./cart'>
            <div className='relative'>
              <img src={cart} className='w-8' alt='cart image' />
              <span className='absolute w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold '>
                {productData.length}
              </span>
            </div>
          </Link>
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
