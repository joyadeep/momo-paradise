"use client"
import { useState } from "react";
import CartList from "./cartList";
import OrderSummary from "./orderSummary";
import { Cart } from "@/lib/graphql/cart/types";
import EmptyCart from "./emptyCart";
import CartHelp from "./cartHelp";

export function CartClient({ initialCart }: { initialCart: Cart | null }) {
  const [cart, setCart] = useState(initialCart);

  if (!cart || cart.lines.length === 0) {
    return <EmptyCart/>
  }

  return (
    <main className="px-2 lg:px-20 2xl:px-28 flex flex-col gap-5 sm:grid sm:grid-cols-[2fr_1fr] md:grid md:grid-cols-[3fr_1fr] lg:gap-5 pb-3">
      <CartList products={cart} setCart={setCart} />
      <OrderSummary cost={cart.cost} checkoutUrl={cart.checkoutUrl} />
      <CartHelp/>
    </main>
  );
}