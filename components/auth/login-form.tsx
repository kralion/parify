"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, User } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import TermsAndPolicy from "./terms";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email: "brayan@gmail.com",
      password: "Parify",
      callbackUrl: "/parify",
    });
    if (result?.error) {
      toast({
        title: "Error de autenticacion",
        description: "Las credenciales son incorrectas, intenta de nuevo.",
      });
    }
    router.push("/parify");
  };

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
          <div className="space-y-2">
            <Label htmlFor="email">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="flex items-center space-x-2 ">
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

          <Button onClick={handleSubmit} className="w-full  " variant="default">
            Sign In
          </Button>
        </div>
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
