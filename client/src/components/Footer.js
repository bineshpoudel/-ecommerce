import React from 'react'
import { appstore, logoLight, playstore } from '../assets'
import { ImGithub } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' bg-black text-[#949494] py-20 font-titleFont p-5'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10'>
        <div className='flex flex-col gap-4'>
          <img className='w-32' src={logoLight} alt='' />
          <p className='text-white text-small tracking-wide'>redstore.com</p>
          <div className='flex gap-2'>
            <img className='w-24' src={playstore} alt='social media' />
            <img className='w-24' src={appstore} alt='' />
          </div>
          <div className='flex gap-5 text-lg text-gray-400'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-white mb-4 '>Locate us</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>Kathmandu,Nepal</p>
            <p>Mobile: +977 9860906875</p>
            <p>Phone: 098776556</p>
            <p>Email: redstore2023@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-white mb-4 '>Profile</h2>
          <div className='flex flex-col gap-2'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <MdLocationOn />
              </span>
              Help and support
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <input
              className='w-80 p-2 mb-3'
              type='text'
              placeholder='Enter your email'
            />
          </div>

          <button className='text-sm font-bold border text-white py-2 border-white hover:bg-gray-900 active:bg-white active:text-black'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
