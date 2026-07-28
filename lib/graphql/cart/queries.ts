import { shopifyFetch } from "@/lib/shopifyFetch";
import { CART_FRAGMENT } from "./fragments";
import type { Cart, CartLine } from "./types";

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cart: (Omit<Cart, "lines"> & { lines: { edges: Array<{ node: CartLine }> } }) | null;
  }>({
    query: /* GraphQL */ `
      ${CART_FRAGMENT}
      query getCart($cartId: ID!) {
        cart(id: $cartId) {
          ...CartFields
        }
      }
    `,
    variables: { cartId },
  });

  if (!data.cart) return null;

  return {
    ...data.cart,
    lines: data.cart.lines.edges.map((edge) => edge.node),
  };
}