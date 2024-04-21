"use client";
import { HubCard } from "@/components/hub/hub-card";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";
const hubCards = [
  {
    title: "Classic RTO-488/LL",
    price: 1200,
    rate: 4,
    srcImage:
      "https://img.freepik.com/free-photo/creating_1048-1600.jpg?size=626&ext=jpg",
  },
  {
    title: "Roboto Silver 323-22-CKXL",
    price: 1800,
    rate: 3,
    srcImage:
      "https://img.freepik.com/free-photo/printing-abstract-form_1048-1585.jpg?size=626&ext=jpg",
  },
  {
    title: "Golden KIT-JUMBO-288",
    price: 2200,
    rate: 4,
    srcImage:
      "https://img.freepik.com/free-photo/printing-blue-human-heart_1048-1976.jpg?size=626&ext=jpg",
  },
  {
    title: "BLACK-Agressive 323-22-CKXL",
    price: 5000,
    rate: 5,
    srcImage:
      "https://img.freepik.com/free-photo/printing-human-heart_1048-1975.jpg?size=626&ext=jpg",
  },
];
export default function Page() {
  const [cartCount, setCartCount] = React.useState(0);
  function addToCart(count: number) {
    setCartCount((prevCount) => prevCount + count);
  }
  return (
    <>
      {hubCards.map((hubCard, index) => (
        <HubCard addToCart={addToCart} key={index} {...hubCard} />
      ))}
      <button className="rounded-full flex gap-1 m-5 shadow-lg shadow-purple-300 bg-purple-400 text-white p-3  fixed bottom-0 left-0">
        <ShoppingCartIcon size={25} />
        {cartCount}
      </button>
    </>
  );
}
