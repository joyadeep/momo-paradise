import { shopifyFetch } from "@/lib/shopifyFetch";
import { CategorySummary } from "../types/collectionTypes";

export async function getAllCategories(first = 20): Promise<CategorySummary[]> {
  const data = await shopifyFetch<{
    collections: { edges: Array<{ node: CategorySummary }> };
  }>({
    query: /* GraphQL */ `
      query getCollections($first: Int!) {
        collections(first: $first) {
          edges {
            node {
              id
              title
              handle
              image {
                url
                altText
              }
            }
          }
        }
      }
    `,
    variables: { first },
  });

  return data.collections.edges.map((edge) => edge.node);
}