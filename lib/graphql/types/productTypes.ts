export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  tags: string[];
  category: { id: string; name: string } | null;
  variants: { edges: Array<{ node: { id: string; price: { amount: string; currencyCode: string } } }> };
  media: { edges: Array<{ node: { id: string; alt: string | null; mediaContentType: string; image?: { url: string; altText: string | null } } }> };
};

export type Product = {
  id: string;
  title: string;
  handle: string;
  tags: string[];
  category: { id: string; name: string } | null;
  price: { amount: string; currencyCode: string } | null;
  images: Array<{ url: string; altText: string | null }>;
};