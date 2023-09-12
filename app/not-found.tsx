import React from "react";
import Home from "@/assets/Icon.svg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="space-y-7 flex flex-col justify-center items-center">
      <Image
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <h4 className="text-4xl font-navaMono">This page was not Found</h4>
      <Link
        href="/"
        className="bg-blue-100 py-2 hover:bg-blue-200 duration-200 flex gap-3 items-center px-5 rounded-full"
      >
        <ChevronLeft size={20} />
        Back to Parify
        <Image width={20} height={20} src={Home} alt="Picture of the author" />
      </Link>
    </div>
  );
}
