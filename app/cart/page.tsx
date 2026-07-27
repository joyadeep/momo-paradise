import React from 'react'
import CartList from './cartList'
import OrderSummary from './orderSummary'


const page = () => {
  return (
    <main className='px-28 flex gap-10 pb-3'>
      <CartList/>
      <OrderSummary/>
    </main>
  )
}

export default page