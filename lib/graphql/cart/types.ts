// export type CartLine = {
//   id: string;
//   quantity: number;
//   merchandise: {
//     id: string; // variant GID
//     title: string;
//     product: { title: string; handle: string };
//     price: { amount: string; currencyCode: string };
//     image?: { url: string; altText: string | null };
//   };
// };

// export type Cart = {
//   id: string;
//   checkoutUrl: string;
//   totalQuantity: number;
//   cost: {
//     totalAmount: { amount: string; currencyCode: string };
//     subtotalAmount: { amount: string; currencyCode: string };
//   };
//   lines: CartLine[];
// };

// lib/shopify/cart/types.ts
export type ProductVariantOption = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: Array<{ name: string; value: string }>;
};

export type CartLine = {
  id: string;
  quantity: number;
  cost: { totalAmount: { amount: string; currencyCode: string } };
  merchandise: {
    id: string;
    title: string;
    price: { amount: string; currencyCode: string };
    image?: { url: string; altText: string | null };
    selectedOptions: Array<{ name: string; value: string }>;
    product: {
      title: string;
      handle: string;
      options: Array<{ name: string; values: string[] }>;
      variants: { edges: Array<{ node: ProductVariantOption }> };
    };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: { amount: string; currencyCode: string };
    subtotalAmount: { amount: string; currencyCode: string };
  };
  lines: CartLine[];
};