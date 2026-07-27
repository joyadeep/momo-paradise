import { shopifyFetch } from "@/lib/shopifyFetch";
import type { ShopifyProduct, Product } from "../types/productTypes";
import { unwrapEdges } from "@/lib/unwrapEdges";

const PRODUCT_FIELDS = /* GraphQL */ `
  id
  title
  handle
  tags
  category { id name }
  variants(first: 1) {
    edges { node { id price { amount currencyCode } } }
  }
  media(first: 5) {
    edges {
      node {
        id
        alt
        mediaContentType
        ... on MediaImage { image { url altText } }
      }
    }
  }
`;

function mapProduct(node: ShopifyProduct): Product {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    tags: node.tags,
    category: node.category,
    price: node.variants.edges[0]?.node.price ?? null,
    images: node.media.edges
      .map((edge) => edge.node.image)
      .filter((img): img is { url: string; altText: string | null } => !!img),
  };
}

async function fetchProducts(query?: string, first = 10): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { edges: Array<{ node: ShopifyProduct }> } }>({
    query: /* GraphQL */ `
      query getProducts($first: Int!, $query: String) {
        products(first: $first, query: $query) {
          edges { node { ${PRODUCT_FIELDS} } }
        }
      }
    `,
    variables: { first, query },
  });

  return unwrapEdges(data.products).map(mapProduct);
}



export function getAllProducts() {
  return fetchProducts();
}

// export function getNewProducts() {
//   return fetchProducts("tag:new");
// }