"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import React from "react";
import { useTheme } from "next-themes";
export default function UserInfo() {
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  const session = useSession();
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 duration-200">
          <Image
            src={session?.data?.user.foto || session?.data?.user.image || ""}
            alt="User"
            width={40}
            height={40}
            className="rounded-full "
          />
          <span className="text-slate-900 dark:text-slate-50 group-hover:underline duration-200">
            {session?.data?.user.nombres || session?.data?.user.name}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 m-3">
        <DropdownMenuLabel>Profile </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light Mode
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 hover:text-red-600"
          onClick={handleSignOut}
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
