import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      className="rounded-full uppercase px-5"
      onClick={() => router.push("/sign-in")}
    >
      Sign In
    </Button>
  );
}
