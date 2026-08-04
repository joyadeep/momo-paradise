// components/header/auth-nav.tsx
import Link from "next/link";
// import { isLoggedIn } from "@/lib/shopify/auth/session";
// import { getCustomer } from "@/app/account/_lib/queries";

export async function AuthNav() {
  // const loggedIn = await isLoggedIn();

  // if (!loggedIn) {
  //   return (
  //     <a href="/api/auth/login" className="text-sm">
  //       Log in
  //     </a>
  //   );
  // }

  // const data = await getCustomer();

  return (
    <div className="flex items-center gap-3 text-sm">
      <Link href="/api/auth/login">
    Login
</Link>
    </div>
  );
}