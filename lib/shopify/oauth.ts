// import { randomBytes, createHash } from "crypto";

// export function generateCodeVerifier() {
//   return randomBytes(64).toString("base64url");
// }

// export function generateCodeChallenge(verifier: string) {
//   return createHash("sha256")
//     .update(verifier)
//     .digest("base64url");
// }

// export function generateState() {
//   return randomBytes(32).toString("hex");
// }

import { randomBytes, createHash } from "node:crypto";

/**
 * Generates the PKCE code verifier.
 */
export function generateCodeVerifier(): string {
  return randomBytes(64).toString("base64url");
}

/**
 * Generates the PKCE code challenge.
 */
export function generateCodeChallenge(verifier: string): string {
  return createHash("sha256")
    .update(verifier)
    .digest("base64url");
}

/**
 * CSRF protection.
 */
export function generateState(): string {
  return randomBytes(32).toString("hex");
}

/**
 * OpenID Connect nonce.
 */
export function generateNonce(): string {
  return randomBytes(32).toString("hex");
}