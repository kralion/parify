"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function SignInButton() {
  return (
    <Button className="rounded-full uppercase px-5" onClick={() => signIn()}>
      Sign In
    </Button>
  );
}
