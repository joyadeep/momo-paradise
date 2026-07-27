export type Product = {
  id: string;
  title: string;
  handle: string;
  tags: string[];
  price: { amount: string; currencyCode: string } | null;
  images: Array<{ url: string; altText: string | null }>;
};

export type Category = {
  id: string;
  title: string;
  handle: string;
  description: string;
  products: Product[];
};