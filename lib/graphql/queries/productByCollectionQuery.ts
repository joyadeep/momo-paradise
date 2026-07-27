import { shopifyFetch } from "@/lib/shopifyFetch";
import { Product } from "../types/productByCollectionTypes";
import { ShopifyProduct } from "../types/productTypes";
import { unwrapEdges } from "@/lib/unwrapEdges";

function mapProduct(node: ShopifyProduct): Product {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    tags: node.tags,
    price: node.variants.edges[0]?.node.price ?? null,
    images: node.media.edges
      .map((edge) => edge.node.image)
      .filter((img): img is { url: string; altText: string | null } => !!img),
  };
}

const PRODUCT_FIELDS = `
  id
  title
  handle
  description
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
`

async function fetchProductsByCollection(
  handle: string,
  first = 10
): Promise<Product[]> {
  const data = await shopifyFetch<{
    collection: {
      products: {
        edges: Array<{ node: ShopifyProduct }>;
      };
    } | null;
  }>({
    query: /* GraphQL */ `
      query getCollectionProducts($handle: String!, $first: Int!) {
        collection(handle: $handle) {
          products(first: $first) {
            edges {
              node {
                ${PRODUCT_FIELDS}
              }
            }
          }
        }
      }
    `,
    variables: {
      handle,
      first,
    },
  });

  return data.collection
    ? unwrapEdges(data.collection.products).map(mapProduct)
    : [];
}


export function getNewProducts(){
    return fetchProductsByCollection("new");
} 