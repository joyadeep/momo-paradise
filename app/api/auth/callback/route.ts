import { clearOAuthCookies, getOAuthCookies, saveCustomerTokens } from "@/lib/shopify/cookies";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  console.log("url", url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  console.log("code", code);
  console.log("state", state);
  if (!code || !state) {
    return NextResponse.json(
      { error: "Missing code or state" },
      { status: 400 },
    );
  }

  const oauth = await getOAuthCookies();
  console.log("oauth", oauth);

  if (!oauth.state || oauth.state !== state) {
    return NextResponse.json(
      { error: "Invalid state" },
      { status: 400 }
    );
  }

  if (!oauth.verifier) {
    return NextResponse.json(
      { error: "Missing PKCE verifier" },
      { status: 400 }
    );
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.SHOPIFY_CUSTOMER_CLIENT_ID!,
    redirect_uri: process.env.SHOPIFY_CUSTOMER_REDIRECT_URI!,
    code,
    code_verifier: oauth.verifier,
  });

  const response = await fetch(
    process.env.SHOPIFY_CUSTOMER_TOKEN_ENDPOINT!,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",

        // Required by Shopify
        Origin: process.env.SHOPIFY_CUSTOMER_REDIRECT_URI!.replace(
          "/api/auth/callback",
          ""
        ),

        "User-Agent": "Next.js 16",
      },
      body,
    }
  );

  if (!response.ok) {
    const text = await response.text();

    return NextResponse.json(
      {
        status: response.status,
        error: text,
      },
      { status: 500 }
    );
  }

  const tokens = await response.json();

  await saveCustomerTokens({
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    expiresIn: tokens.expires_in,
  });

  await clearOAuthCookies();

  // return NextResponse.redirect(new URL("/account", request.url));
  const host = request.headers.get("x-forwarded-host");
const proto = request.headers.get("x-forwarded-proto") ?? "https";

if (host) {
  return NextResponse.redirect(new URL("/account", `${proto}://${host}`));
}

// Fallback
return NextResponse.redirect(new URL("/account", process.env.APP_URL!));
}