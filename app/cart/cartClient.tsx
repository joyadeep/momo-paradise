"use client"
import { useState } from "react";
import CartList from "./cartList";
import OrderSummary from "./orderSummary";
import { Cart } from "@/lib/graphql/cart/types";
import EmptyCart from "./emptyCart";

export function CartClient({ initialCart }: { initialCart: Cart | null }) {
  const [cart, setCart] = useState(initialCart);

  if (!cart || cart.lines.length === 0) {
    return <EmptyCart/>
  }

  return (
    <main className="px-10 2xl:px-28 flex gap-10 pb-3">
      <CartList products={cart} setCart={setCart} />
      <OrderSummary cost={cart.cost} checkoutUrl={cart.checkoutUrl} />
    </main>
  );
}