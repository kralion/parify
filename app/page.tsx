"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Loader, User } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import TermsAndPolicy from "@/components/auth/terms";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const { toast } = useToast();
  const [values, setValues] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const [loadingGoogle, setLoadingGoogle] = React.useState(false);
  const router = useRouter();
  async function signInGoogle() {
    setLoadingGoogle(true);
    const result = await signIn("google", {
      callbackUrl: "/parify",
    });
    if (result?.error) {
      toast({
        title: "Authentication Error",
        description: "An error occurred while trying to sign in with Google.",
        duration: 2000,
        variant: "destructive",
      });
    }
    setLoadingGoogle(false);
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    setLoading(false);

    if (result?.error) {
      toast({
        title: "Authentication Error",
        description:
          "The credentials are located in the end of the login form.",
        duration: 2000,
        variant: "destructive",
      });
    } else {
      router.push("/parify");
    }
  }
  return (
    <div className="bg-gray-100 dark:bg-slate-900 min-h-screen  flex items-center justify-center">
      <div className="rounded-2xl  shadow-lg bg-white dark:bg-slate-800 p-10 space-y-5 border border-slate-200   dark:border-slate-800">
        <div className="space-y-2 text-center">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-3xl mb-5 flex items-center font-navaMono">
              <Image
                src="https://img.freepik.com/premium-vector/elegant-letter-sp-ps-minimalist-logo_649646-229.jpg?size=626&ext=jpg"
                className="object-contain rounded-lg"
                width={50}
                height={50}
                alt="Logo"
              />
              ARIFY
            </h2>
            <h3 className="text-3xl font-bold">Welcome Back!</h3>
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
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                placeholder="brayan@gmail.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Password</Label>
              <Input
                placeholder="*********"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                id="password"
                required
                type="password"
              />
            </div>
            <div className="flex items-center space-x-2 ">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
              <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                OR
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            </div>

            <Button type="submit" className="w-full " variant="default">
              {loading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                "Sign In"
              )}
            </Button>
          </div>
        </form>
        <Button onClick={signInGoogle} className="w-full">
          {loadingGoogle ? (
            <Loader className="animate-spin" size={20} />
          ) : (
            <div className="flex items-center gap-3 justify-center">
              <Image
                src="https://img.icons8.com/?size=48&id=17949&format=png"
                width={24}
                height={24}
                alt="Logo"
              />
              Continue with Google
            </div>
          )}
        </Button>
        <div className="flex justify-center gap-4 text-xs  text-zinc-600 dark:text-zinc-400">
          <p className="flex items-center gap-1 font-mono ">
            <User size={14} /> <span>brayan@gmail.com</span>
          </p>
          <p className="flex items-center gap-1 font-mono">
            <Key size={14} /> <span>Parify</span>
          </p>
        </div>
      </div>
    </div>
  );
}
