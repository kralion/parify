"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { HubAlert } from "./hub-alert";
import { Profile } from "../component/profile";

const stars = [1, 2, 3, 4, 5];
const sizes = ["CA", "XY", "AA", "XR", "RTS"];

type Props = {
  title: string;
  price: number;
  srcImage?: string;
  rate?: number;
};

export function HubCard({
  srcImage = "https://img.freepik.com/free-photo/genderneutral-hand-lifting-up-from-structure-3d-printed-round-object-made-from-recycled-plastic-futuristic-concept-new-working-possibilities-small-businesses-by-3d-printing-jpg-photo_633478-545.jpg?size=626&ext=jpg",
  title,
  price,
  rate = 3,
}: Props) {
  return (
    <section className="py-12  ">
      <div className="container  group flex items-start gap-8 px-4 md:px-6">
        <Image
          alt="Sneaker Image"
          className="aspect-[1/1]  object-cover object-center rounded-md shadow-sm opacity-80  transition-opacity "
          height={400}
          src={srcImage}
          width={400}
        />
        <div className="space-y-6 border-[1px] py-3 px-7 rounded-xl group-hover:shadow-md">
          <h1 className="text-3xl font-bold tracking-tighter">{title}</h1>
          <div className="flex space-x-3">
            {stars.map((_, i) => (
              <Star
                key={i}
                size={30}
                className={`  ${
                  i < rate ? "text-yellow-400 fill-yellow-400" : null
                }`}
              />
            ))}
          </div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ${price}.00
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            These classic sneakers are perfect for any occasion. They are
            comfortable, stylish, and durable. Made with high-quality materials,
            they are designed to last.
          </p>
          <div className="flex space-x-2">
            {sizes.map((size, i) => (
              <Button
                key={i}
                className="w-10 h-10 rounded-md hover:text-white border border-slate-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 "
              >
                {size}
              </Button>
            ))}
          </div>
          {/* //TODO: HubAlert functionality */}
          <HubAlert />
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p>
        </div>
        <Profile />
      </div>
    </section>
  );
}
