import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
const Cart = () => {
  const productData = useSelector((state) => state.app.productData)
  const [totalAmt, setTotalAmt] = useState('')

  useEffect(() => {
    let price = 0
    productData.map((item) => {
      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price.toFixed(2))
  }, [productData])
  return (
    <div>
      <img
        className='w-full h-60 object-cover'
        src='
         https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=800'
        alt='cartImg'
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal
              <span className='font-titleFont font-bold text-lg'>
                $ {totalAmt}
              </span>
            </p>
            <p className='flex item-start gap-4 text-base'>
              Shipping{''}
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                error illum itaque eu. Officia
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            {''}
            Total <span className='text-xl font-bold'>$ {totalAmt}</span>
          </p>
          <button className='text-base bg-black text-white w-full py-6 mt-6 hover:bg-gray-800 duration-1000'>
            Proceed tocheckout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
