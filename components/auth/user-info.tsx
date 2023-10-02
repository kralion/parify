"use client";
import { useSession } from "next-auth/react";

export const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Hello</h1>
      <pre>{JSON.stringify(session?.user?.name)}</pre>
    </>
  );
};
