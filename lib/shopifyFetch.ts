type ShopifyFetchParams<TVariables = Record<string, unknown>> = {
  query: string;
  variables?: TVariables;
};

export async function shopifyFetch<TData, TVariables = Record<string, unknown>>({
  query,
  variables,
}: ShopifyFetchParams<TVariables>): Promise<TData> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !key) {
    throw new Error("Missing Shopify environment variables.");
  }

  const endpoint = `https://${domain}/api/2026-04/graphql.json`;

  const result = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": key,
    },
    body: JSON.stringify({ query, variables }),
    // optional but recommended in app router:
    // next: { revalidate: 60 },
  });

  const body = await result.json();

  if (!result.ok) {
    throw new Error(`Shopify API error (${result.status}): ${JSON.stringify(body)}`);
  }

  if (body.errors) {
    throw new Error(`Shopify GraphQL error: ${body.errors.map((e: any) => e.message).join(", ")}`);
  }

  return body.data as TData;
}