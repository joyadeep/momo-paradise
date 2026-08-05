"use server";

import { cookies } from "next/headers";
import { createCart, addToCart, removeCartLine, updateCartLine } from "./mutations";
import { getCart } from "./queries";
import { revalidatePath } from "next/cache";

const CART_COOKIE = "cartId";

export async function addItemToCart(variantId: string, quantity = 1) {
  const cookieStore = await cookies();
  const existingCartId = cookieStore.get(CART_COOKIE)?.value;

  if (existingCartId) {
    // make sure the cart still exists (carts can expire after ~10 weeks of inactivity)
    const existing = await getCart(existingCartId);
    if (existing) {
      const cart = await addToCart(existingCartId, variantId, quantity);
      revalidatePath("/")
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
  revalidatePath("/")
  return cart;
}

export async function getCurrentCart() {
  const cookieStore = await cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;
  if (!cartId) return null;
  return getCart(cartId);
}

// export async function updateQuantity(lineId: string, quantity: number) {
//   const cookieStore = await cookies();
//   const cartId = cookieStore.get(CART_COOKIE)?.value;
//   if (!cartId) throw new Error("No active cart");

//   if (quantity <= 0) {
//     revalidatePath("/");
//     return removeCartLine(cartId, lineId);
//   }

//   const result = updateCartLine(cartId, lineId, quantity);
//   revalidatePath("/");
//   return result;
// }
export async function updateQuantity(lineId: string, quantity: number) {
  const cookieStore = await cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;
  if (!cartId) throw new Error("No active cart");

  if (quantity <= 0) {
    revalidatePath("/");
    return removeCartLine(cartId, lineId);
  }
  const result = updateCartLine(cartId, lineId, { quantity });
  revalidatePath("/");
  return result;
}

export async function updateVariant(lineId: string, merchandiseId: string) {
  const cookieStore = await cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;
  if (!cartId) throw new Error("No active cart");

  return updateCartLine(cartId, lineId, { merchandiseId });
}

export async function removeItem(lineId: string) {
  const cookieStore = await cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;
  if (!cartId) throw new Error("No active cart");

  const result =removeCartLine(cartId, lineId);
  revalidatePath("/");
  return result;
}