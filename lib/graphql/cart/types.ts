export type CartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string; // variant GID
    title: string;
    product: { title: string; handle: string };
    price: { amount: string; currencyCode: string };
    image?: { url: string; altText: string | null };
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