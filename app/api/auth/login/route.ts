import { saveOAuthCookies } from "@/lib/shopify/cookies";
import { generateCodeChallenge, generateCodeVerifier, generateNonce, generateState } from "@/lib/shopify/oauth";
import { NextResponse } from "next/server";



export async function GET() {
  const verifier = generateCodeVerifier();
  const challenge = generateCodeChallenge(verifier);
  const state = generateState();
  const nonce = generateNonce();

  await saveOAuthCookies({
    verifier,
    state,
    nonce,
  });

  const params = new URLSearchParams({
    client_id: process.env.SHOPIFY_CUSTOMER_CLIENT_ID!,
    response_type: "code",
    redirect_uri: process.env.SHOPIFY_CUSTOMER_REDIRECT_URI!,
    scope: "openid email customer-account-api:full",
    state,
    nonce,
    code_challenge: challenge,
    code_challenge_method: "S256",
  });

  return NextResponse.redirect(
    `${process.env.SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT}?${params}`
  );
}