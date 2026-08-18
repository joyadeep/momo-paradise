export type SearchProduct = {
  id: string;
  title: string;
  handle: string;
  images: Array<{ url: string; altText: string | null }>;
  price: { amount: string; currencyCode: string } | null;
};