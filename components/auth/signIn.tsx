import React from "react";
import { Button } from "../ui/button";

export default function SignInButton() {
  function redirectToLoginUnauthenticated() {
    alert("You need to be logged in to access this page");
  }
  return (
    <Button
      className="rounded-full uppercase px-5"
      onClick={redirectToLoginUnauthenticated}
    >
      Sign In
    </Button>
  );
}
