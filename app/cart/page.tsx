import { getCart } from '@/lib/graphql/cart/queries'
import CartList from './cartList'
import OrderSummary from './orderSummary'
import { getCurrentCart } from '@/lib/graphql/cart/actions'


const page = async() => {
  const cart = await getCurrentCart();
  console.log("cart",cart)
  return (
    <main className='px-10 2xl:px-28 flex gap-10 pb-3'>
      <CartList products={cart?.lines}/>
      <OrderSummary cost={cart?.cost} checkoutUrl={cart?.checkoutUrl} />
    </main>
  )
}

export default page