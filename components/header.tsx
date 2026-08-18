import { getCurrentCart } from "@/lib/graphql/cart/actions"
import HeaderClient from "./headerClient";


const Header = async() => {
    const cart = await getCurrentCart();
  return (
    <HeaderClient cart={cart} />    
  )
}

export default Header