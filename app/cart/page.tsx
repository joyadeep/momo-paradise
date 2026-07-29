import { CartClient } from './cartClient';
import { getCurrentCart } from '@/lib/graphql/cart/actions'


const page = async() => {
  const cart = await getCurrentCart();
  return <CartClient initialCart={cart}/>
}

export default page