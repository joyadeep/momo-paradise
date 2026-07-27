export type ShopifyProductDetail = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  tags: string[];
  category: { id: string; name: string } | null;
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
        selectedOptions: Array<{ name: string; value: string }>;
      };
    }>;
  };
  media: {
    edges: Array<{
      node: {
        id: string;
        alt: string | null;
        mediaContentType: string;
        image?: { url: string; altText: string | null };
      };
    }>;
  };
};

export type ProductDetail = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  tags: string[];
  category: { id: string; name: string } | null;
  price: { amount: string; currencyCode: string } | null;
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    price: { amount: string; currencyCode: string };
    selectedOptions: Array<{ name: string; value: string }>;
  }>;
  images: Array<{ url: string; altText: string | null }>;
};