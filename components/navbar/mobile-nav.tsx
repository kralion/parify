import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LucideMenu } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { UserInfo } from "../auth/user-info";
import { Button } from "../ui/button";
const navLinks = [
  { href: "/parify", label: "Home" },
  { href: "/parify/how-it-works", label: "How it Works" },
  { href: "/parify/capabilities", label: "Capabilities" },
  { href: "/parify/hubs-base", label: "Hub Base" },
];

export default async function MobileNavBar() {
  const session = await getServerSession(authOptions);
  return (
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
                  <Link href="/parify/sign-in">
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
  );
}
