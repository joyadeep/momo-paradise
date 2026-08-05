import { cookies } from "next/headers";

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: "/",
};

export async function saveOAuthCookies(data: {
  verifier: string;
  state: string;
  nonce: string;
}) {
  const cookieStore = await cookies();

  cookieStore.set("shopify_pkce_verifier", data.verifier, cookieOptions);

  cookieStore.set("shopify_oauth_state", data.state, cookieOptions);

  cookieStore.set("shopify_oauth_nonce", data.nonce, cookieOptions);
}

export async function getOAuthCookies() {
  const cookieStore = await cookies();

  return {
    verifier: cookieStore.get("shopify_pkce_verifier")?.value,
    state: cookieStore.get("shopify_oauth_state")?.value,
    nonce: cookieStore.get("shopify_oauth_nonce")?.value,
  };
}

export async function saveCustomerTokens(data: {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}) {
  const cookieStore = await cookies();

  cookieStore.set("customer_access_token", data.accessToken, {
    ...cookieOptions,
    maxAge: data.expiresIn,
  });

  cookieStore.set("customer_refresh_token", data.refreshToken, {
    ...cookieOptions,
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearOAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.delete("shopify_pkce_verifier");
  cookieStore.delete("shopify_oauth_state");
  cookieStore.delete("shopify_oauth_nonce");
}