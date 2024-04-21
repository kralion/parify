import { authOptions } from "@/lib/auth";
import { Dot, LucideMenu } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import NavLink from "./navlink";
import UserInfo from "../auth/user-info";
const navLinks = [
  { href: "/parify/", label: "Home" },
  { href: "/parify/how-it-works", label: "How it Works" },
  { href: "/parify/capabilities", label: "Capabilities" },
  { href: "/parify/hubs-base", label: "Hub Base" },
];

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="lg:flex justify-between m-7  hidden  ">
        <Link href="/parify">
          <h2 className="text-4xl  flex items-center gap-0.5 font-navaMono">
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
        <div className="flex gap-2">
          {navLinks.map((link) => {
            return (
              <NavLink
                activeClassName="bg-slate-900 text-slate-50 rounded-full w-32 dark:bg-slate-50 dark:text-black flex py-2 dark:border-none items-center justify-center pr-2 "
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
          {session ? (
            <UserInfo />
          ) : (
            <Link href="/sign-in">
              <Button
                variant="secondary"
                className="rounded-full uppercase px-5"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="flex justify-between m-7 lg:hidden ">
        <Link href="/parify">
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
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <LucideMenu size={20} />
            </MenubarTrigger>
            <MenubarContent className="w-screen h-screen">
              {navLinks.map((link) => {
                return (
                  <Link key={link.href} href={link.href}>
                    <MenubarItem className="bg-slate-100 rounded m-2 active:opacity-70">
                      {link.label}
                    </MenubarItem>
                  </Link>
                );
              })}
              <MenubarSeparator />
              <MenubarItem>
                <div className="flex items-center gap-2">
                  {session ? (
                    <UserInfo />
                  ) : (
                    <Link href="/sign-in">
                      <Button
                        variant="secondary"
                        className="rounded-full uppercase px-5"
                      >
                        Sign In
                      </Button>
                    </Link>
                  )}
                </div>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  );
}
