import { shopifyFetch } from "@/lib/shopifyFetch";
import { ProductDetail, ShopifyProductDetail } from "../types/productDetailType";


function mapProductDetail(node: ShopifyProductDetail): ProductDetail {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    descriptionHtml: node.descriptionHtml,
    tags: node.tags,
    category: node.category,
    price: node.variants.edges[0]?.node.price ?? null,
    variants: node.variants.edges.map((edge) => edge.node),
    images: node.media.edges
      .map((edge) => edge.node.image)
      .filter((img): img is { url: string; altText: string | null } => !!img),
  };
}

export async function getProductByHandle(handle: string): Promise<ProductDetail | null> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProductDetail | null }>({
    query: /* GraphQL */ `
      query getProduct($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          handle
          descriptionHtml
          tags
          category {
            id
            name
          }
          variants(first: 25) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          media(first: 10) {
            edges {
              node {
                id
                alt
                mediaContentType
                ... on MediaImage {
                  image {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { handle },
  });

  if (!data.productByHandle) return null;

  return mapProductDetail(data.productByHandle);
}