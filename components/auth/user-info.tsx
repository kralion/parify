import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function UserInfo() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <pre>{JSON.stringify(session?.user.nombres)}</pre>
    </>
  );
}
