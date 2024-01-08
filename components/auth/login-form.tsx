"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Apple } from "lucide-react";
import { signIn } from "next-auth/react";
import TermsAndPolicy from "./terms";

export function LoginForm() {
  return (
    <div className="bg-gray-100 min-h-screen  flex items-center justify-center">
      <div className="rounded-2xl  shadow-lg bg-white p-10 space-y-10 border border-slate-200   dark:border-slate-800">
        <div className="space-y-2 text-center">
          <div className="flex gap-2 items-center justify-center">
            <h1 className="text-3xl font-bold">Login to</h1>
            <h2 className="text-3xl  flex items-center font-navaMono">
              <Image
                src="https://img.freepik.com/premium-vector/elegant-letter-sp-ps-minimalist-logo_649646-229.jpg?size=626&ext=jpg"
                className="object-contain rounded-lg"
                width={50}
                height={50}
                alt="Logo"
              />
              ARIFY
            </h2>
          </div>
          <p className="text-zinc-500  dark:text-zinc-400">
            By logging in, you accept our{" "}
            <TermsAndPolicy>
              <span className="text-blue-500 hover:text-blue-700"> terms </span>
            </TermsAndPolicy>{" "}
            and{" "}
            <TermsAndPolicy>
              <span className="text-blue-500 hover:text-blue-700">
                privacy policy
              </span>
            </TermsAndPolicy>
            .{"\n"}
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="jhondoe@example.com"
              required
              type="email"
            />
          </div>
          <div className="flex items-center space-x-2">
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
          </div>
          <Button className="w-full text-slate-800" variant="outline">
            <div className="flex items-center gap-3 justify-center">
              <Image
                src="https://img.icons8.com/?size=48&id=17949&format=png"
                width={24}
                height={24}
                alt="Logo"
              />
              Login with Google
            </div>
          </Button>

          <Button
            onClick={() =>
              signIn("credentials", { callbackUrl: "/capabilities" })
            }
            className="w-full  "
            variant="default"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
