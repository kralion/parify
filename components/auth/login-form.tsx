"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Apple } from "lucide-react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  return (
    <div className="bg-gray-100 min-h-screen  flex items-center justify-center">
      <div className="rounded-lg  shadow-lg bg-white p-6 space-y-6 border border-slate-200   dark:border-slate-800">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-zinc-500  dark:text-zinc-400">
            By logging in, you accept our
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              terms
            </Link>
            and
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              privacy policy
            </Link>
            .{"\n"}
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
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
          <Button className="w-full bg-black text-white" variant="outline">
            <div className="flex items-center gap-3  justify-center">
              <Apple size={24} />
              Login with Apple
            </div>
          </Button>
          <Button
            onClick={() =>
              signIn("credentials", { callbackUrl: "/capabilities" })
            }
            className="w-full bg-black text-white"
            variant="outline"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
