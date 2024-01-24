"use client";
import { BellDotIcon, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "../auth/signIn";
import { UserInfo } from "../auth/user-info";
import NavLink from "./navlink";
import { useSession } from "next-auth/react";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/hubs-base", label: "Hub Base" },
];

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <div className="lg:flex justify-between m-7  hidden  ">
      <Link href="/">
        <h2 className="text-4xl  flex items-center font-navaMono">
          <Image
            src="https://img.freepik.com/premium-vector/elegant-letter-sp-ps-minimalist-logo_649646-229.jpg?size=626&ext=jpg"
            className="object-contain rounded-lg"
            width={50}
            height={50}
            alt="Logo"
          />
          ARIFY
        </h2>
      </Link>
      <div className="flex gap-16 items-center ">
        <div className="flex gap-2">
          {navLinks.map((link) => {
            return (
              <NavLink
                activeClassName="bg-slate-900 text-slate-50 rounded-full w-32 dark:bg-slate-50 dark:text-slate-300 flex py-2 items-center justify-center pr-2 "
                className="border w-32   flex items-center py-2 justify-center border-slate-200 bg-white pr-2 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 rounded-full"
                key={link.href}
                href={link.href}
              >
                <Dot />
                {link.label}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <BellDotIcon size={20} />
          {session ? <UserInfo /> : <SignInButton />}
        </div>
      </div>
    </div>
  );
}
