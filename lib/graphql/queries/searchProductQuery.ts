import { shopifyFetch } from "@/lib/shopifyFetch";
import { SearchProduct } from "../types/searchProductTypes";


type RawSearchNode = {
  id: string;
  title: string;
  handle: string;
  variants: { edges: Array<{ node: { price: { amount: string; currencyCode: string } } }> };
  media: { edges: Array<{ node: { image?: { url: string; altText: string | null } } }> };
};

function mapSearchProduct(node: RawSearchNode): SearchProduct {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    price: node.variants.edges[0]?.node.price ?? null,
    images: node.media.edges
      .map((e) => e.node.image)
      .filter((img): img is { url: string; altText: string | null } => !!img),
  };
}

export async function searchProducts(
  term: string,
  first = 20,
  after?: string
): Promise<{ products: SearchProduct[]; hasNextPage: boolean; endCursor: string | null }> {
  const data = await shopifyFetch<{
    search: {
      edges: Array<{ node: RawSearchNode }>;
      pageInfo: { hasNextPage: boolean; endCursor: string | null };
    };
  }>({
    query: /* GraphQL */ `
      query search($term: String!, $first: Int!, $after: String) {
        search(query: $term, first: $first, after: $after, types: [PRODUCT]) {
          edges {
            node {
              ... on Product {
                id
                title
                handle
                variants(first: 1) {
                  edges { node { price { amount currencyCode } } }
                }
                media(first: 1) {
                  edges { node { ... on MediaImage { image { url altText } } } }
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    variables: { term, first, after },
  });

  return {
    products: data.search.edges.map((edge) => mapSearchProduct(edge.node)),
    hasNextPage: data.search.pageInfo.hasNextPage,
    endCursor: data.search.pageInfo.endCursor,
  };
}