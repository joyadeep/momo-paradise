"use server";

import { cookies } from "next/headers";
import { createCart, addToCart } from "./mutations";
import { getCart } from "./queries";

const CART_COOKIE = "cartId";

export async function addItemToCart(variantId: string, quantity = 1) {
  const cookieStore = await cookies();
  const existingCartId = cookieStore.get(CART_COOKIE)?.value;

  if (existingCartId) {
    // make sure the cart still exists (carts can expire after ~10 weeks of inactivity)
    const existing = await getCart(existingCartId);
    if (existing) {
      const cart = await addToCart(existingCartId, variantId, quantity);
      return cart;
    }
  }

  const cart = await createCart(variantId, quantity);
  cookieStore.set(CART_COOKIE, cart.id, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return cart;
}

export async function getCurrentCart() {
  const cookieStore = await cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;
  if (!cartId) return null;
  return getCart(cartId);
}