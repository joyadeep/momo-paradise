import { UserRound } from "lucide-react";
import Link from "next/link";

export async function AuthNav() {

  return (
    <div className="flex items-center gap-3 text-sm">
      <Link href="/api/auth/login">
    <UserRound size={22} strokeWidth={1.5}/>
</Link>
    </div>
  );
}