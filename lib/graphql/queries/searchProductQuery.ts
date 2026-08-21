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

// export async function searchProducts(
//   term: string,
//   first = 1,
//   after?: string
// ): Promise<{ products: SearchProduct[]; hasNextPage: boolean; endCursor: string | null; hasPreviousPage: boolean; startCursor: string|null }> {
//   const data = await shopifyFetch<{
//     search: {
//       edges: Array<{ node: RawSearchNode }>;
//       pageInfo: { hasNextPage: boolean; endCursor: string | null; hasPreviousPage: boolean; startCursor: string|null };
//     };
//   }>({
//     query: /* GraphQL */ `
//       query search($term: String!, $first: Int, $after: String, $last: Int, $before: String) {
//         search(query: $term, first: $first, after: $after, last: $last, before: $before, types: [PRODUCT]) {
//           edges {
//             node {
//               ... on Product {
//                 id
//                 title
//                 handle
//                 variants(first: 1) {
//                   edges { node { price { amount currencyCode } } }
//                 }
//                 media(first: 1) {
//                   edges { node { ... on MediaImage { image { url altText } } } }
//                 }
//               }
//             }
//           }
//           pageInfo {
//             hasNextPage
//             hasPreviousPage
//             endCursor
//             startCursor
//           }
//         }
//       }
//     `,
//     variables: { term, first, after: after && after.length > 0 ? after : undefined },
//   });

//   return {
//     products: data.search.edges.map((edge) => mapSearchProduct(edge.node)),
//     hasNextPage: data.search.pageInfo.hasNextPage,
//     hasPreviousPage: data.search.pageInfo.hasNextPage,
//     endCursor: data.search.pageInfo.endCursor,
//     startCursor: data.search.pageInfo.endCursor
//   };
// }

export async function searchProducts(
  term: string,
  options: { first?: number; after?: string; last?: number; before?: string } = {}
): Promise<{
  products: SearchProduct[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string | null;
  startCursor: string | null;
}> {
  const { first, after, last, before } = options;

  const data = await shopifyFetch<{
    search: {
      edges: Array<{ node: RawSearchNode }>;
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        endCursor: string | null;
        startCursor: string | null;
      };
    };
  }>({
    query: /* GraphQL */ `
      query search($term: String!, $first: Int, $after: String, $last: Int, $before: String) {
        search(query: $term, first: $first, after: $after, last: $last, before: $before, types: [PRODUCT]) {
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
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    `,
    variables: {
      term,
      // Shopify only allows first+after OR last+before, never both
      first: last ? undefined : (first ?? 20),
      after: last ? undefined : (after && after.length > 0 ? after : undefined),
      last: last || undefined,
      before: last ? (before && before.length > 0 ? before : undefined) : undefined,
    },
  });

  return {
    products: data.search.edges.map((edge) => mapSearchProduct(edge.node)),
    hasNextPage: data.search.pageInfo.hasNextPage,
    hasPreviousPage: data.search.pageInfo.hasPreviousPage, // ← fixed: was reading hasNextPage
    endCursor: data.search.pageInfo.endCursor,
    startCursor: data.search.pageInfo.startCursor, // ← fixed: was reading endCursor
  };
}

// predictive search
export type PredictiveProduct = {
  id: string;
  title: string;
  handle: string;
  image?: { url: string; altText: string | null };
  price: { amount: string; currencyCode: string } | null;
};

export async function getPredictiveSearch(term: string): Promise<PredictiveProduct[]> {
  if (!term.trim()) return [];

  const data = await shopifyFetch<{
    predictiveSearch: {
      products: Array<{
        id: string;
        title: string;
        handle: string;
        featuredImage?: { url: string; altText: string | null };
        priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
      }>;
    };
  }>({
    query: /* GraphQL */ `
      query predictiveSearch($term: String!) {
        predictiveSearch(query: $term, types: [PRODUCT], limit: 6) {
          products {
            id
            title
            handle
            featuredImage { url altText }
            priceRange { minVariantPrice { amount currencyCode } }
          }
        }
      }
    `,
    variables: { term },
  });

  return data.predictiveSearch.products.map((p) => ({
    id: p.id,
    title: p.title,
    handle: p.handle,
    image: p.featuredImage,
    price: p.priceRange.minVariantPrice,
  }));
}