import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/appSlice'
import { ToastContainer, toast } from 'react-toastify'

const Product = () => {
  const [details, setDetails] = useState({})
  const [baseQty, setBaseQty] = useState(1)
  const dispatch = useDispatch()
  const Location = useLocation()
  useEffect(() => {
    setDetails(Location.state.item)
  }, [])
  return (
    <div>
      {/* <div className='max-w-screen-xl mx-auto my-10 flex gap-10'> */}
      <div className='max-w-screen-xl mx-auto my-10 flex flex-col sm:flex-row gap-10 p-4'>
        {/* <div className='w-2/5 relative '>
          <img
            className='w-full h-[550px] object-cover sm:h-auto'
            src={details.image}
            alt='productimage'
          />
          <div className='absolute right-0 top-4'>
            {details.isNew && (
              <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                Sale
              </p>
            )}
          </div>
        </div> */}
        <div className='w-full sm:w-2/5 relative'>
          <img
            className='w-full h-[550px] object-cover sm:h-auto'
            src={details.image}
            alt='productimage'
          />
          <div className='absolute right-0 top-4'>
            {details.isNew && (
              <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                Sale
              </p>
            )}
          </div>
        </div>

        <div className='w-3/5 flex flex-col justify-center gap-12 '>
          <div>
            <h2 className='text-4xl font-semibold'>{details.title}</h2>
            <div className='flex items-center gap-4 mt-3'>
              <p className='line-through font-base text-gray-500'>
                ${details.oldPrice}
              </p>
              <p className='text-2xl font-medium text-gray-900'>
                ${details.price}
              </p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className='flex'>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className='text-xs text-gray-500'>(1 customer review)</p>
          </div>
          <p className='text-base text-gray-700 -mt-3'>{details.description}</p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button
                  onClick={() => (baseQty > 1 ? setBaseQty(baseQty - 1) : '')}
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black '
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black '
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    name: details.name,
                    image: details.image,
                    title: details.title,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className='bg-black text-white py-3 px-6 active:bg-gray-800'
            >
              add to cart
            </button>
          </div>
          <p className='text-base text-gray-500'>
            Category :
            <span className='text-medium capitalize'>{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoclose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default Product
