import { shopifyFetch } from "@/lib/shopifyFetch";
import { CART_FRAGMENT } from "./fragments";
import type { Cart, CartLine } from "./types";

type RawCart = Omit<Cart, "lines"> & {
  lines: { edges: Array<{ node: CartLine }> };
};

function mapCart(raw: RawCart): Cart {
  return {
    ...raw,
    lines: raw.lines.edges.map((edge) => edge.node),
  };
}

export async function createCart(
  variantId: string,
  quantity = 1
): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: RawCart } }>({
    query: /* GraphQL */ `
      ${CART_FRAGMENT}
      mutation createCart($lines: [CartLineInput!]!) {
        cartCreate(input: { lines: $lines }) {
          cart { ...CartFields }
          userErrors { message }
        }
      }
    `,
    variables: { lines: [{ merchandiseId: variantId, quantity }] },
  });

  return mapCart(data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity = 1
): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: RawCart } }>({
    query: /* GraphQL */ `
      ${CART_FRAGMENT}
      mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart { ...CartFields }
          userErrors { message }
        }
      }
    `,
    variables: { cartId, lines: [{ merchandiseId: variantId, quantity }] },
  });

  return mapCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: RawCart } }>({
    query: /* GraphQL */ `
      ${CART_FRAGMENT}
      mutation updateCartLine($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart { ...CartFields }
          userErrors { message }
        }
      }
    `,
    variables: { cartId, lines: [{ id: lineId, quantity }] },
  });

  return mapCart(data.cartLinesUpdate.cart);
}

export async function removeCartLine(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: RawCart } }>({
    query: /* GraphQL */ `
      ${CART_FRAGMENT}
      mutation removeCartLine($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart { ...CartFields }
          userErrors { message }
        }
      }
    `,
    variables: { cartId, lineIds: [lineId] },
  });

  return mapCart(data.cartLinesRemove.cart);
}