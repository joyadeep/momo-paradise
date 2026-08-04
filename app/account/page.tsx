import { cookies } from "next/headers";

export default async function AccountPage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("customer_access_token");

  return (
    <div>
      <h1>Account</h1>

      <p>
        Logged in: {token ? "Yes ✅" : "No ❌"}
      </p>
    </div>
  );
}