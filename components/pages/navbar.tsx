import React from "react";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resource-hub", label: "Resource Hub" },
];

export default function NavBar() {
  return (
    <div className="flex justify-between m-7 ">
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
      <div className="flex gap-16">
        <div className="flex gap-3.5">
          {navLinks.map((link) => {
            return (
              <a key={link.href} href={link.href}>
                <Button
                  variant="outline"
                  className="rounded-full w-38 flex  uppercase"
                >
                  <Dot />
                  {link.label}
                </Button>
              </a>
            );
          })}
        </div>
        <Button className="rounded-full uppercase px-5">Get Quote</Button>
      </div>
    </div>
  );
}
