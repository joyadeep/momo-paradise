type ShopifyFetchParams<TVariables = Record<string, unknown>> = {
  query: string;
  variables?: TVariables;
};

type ShopifyResponse<TData> = {
  status: number;
  body?: {
    data?: TData;
    errors?: Array<{
      message: string;
      extensions?: Record<string, unknown>;
    }>;
  };
  error?: string;
};

export async function shopifyFetch<
  TData,
  TVariables = Record<string, unknown>
>({
  query,
  variables,
}: ShopifyFetchParams<TVariables>): Promise<ShopifyResponse<TData>> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  const endpoint = `https://${domain}/api/2026-04/graphql.json`;

  if (!endpoint || !key) {
    throw new Error("Missing Shopify environment variables.");
  }

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const body = await result.json();

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      status: 500,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}