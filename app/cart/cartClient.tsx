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
    // <main className="px-2 2xl:px-28 flex flex-col gap-5 lg:flex-row lg:gap-10 pb-3">
    <main className="px-2 2xl:px-28 flex flex-col gap-5 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-10 pb-3">
      <CartList products={cart} setCart={setCart} />
      <OrderSummary cost={cart.cost} checkoutUrl={cart.checkoutUrl} />
      <CartHelp/>
    </main>
  );
}