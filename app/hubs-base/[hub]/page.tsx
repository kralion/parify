import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Profile } from "@/components/component/profile";
import { kv } from "@vercel/kv";

function HubAlert() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${
          show ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 bg-white dark:bg-zinc-900 bg-opacity-80 flex items-center justify-center`}
      >
        <div className="flex flex-col space-y-4 items-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Item added to cart
          </h1>
          <Button
            onClick={() => setShow(false)}
            className="bg-zinc-900 text-white hover:bg-zinc-800"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
      <Button
        onClick={() => setShow(true)}
        className="bg-zinc-900 text-white hover:bg-zinc-800"
      >
        Add to Cart
      </Button>
    </div>
  );
}
export default async function Hub({ params }: { params: { user: string } }) {
  const cart = await kv.get<{ id: string; quantity: number }[]>(params.user);
  return (
    <div>
      {cart?.map((item) => (
        <div key={item.id}>
          {item.id} - {item.quantity}
        </div>
      ))}
    </div>
  );
}

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
          className="aspect-[1/1] object-cover object-center rounded-md shadow-sm opacity-80 group-hover:opacity-100 transition-opacity "
          height={400}
          src={srcImage}
          width={400}
        />
        <div className="space-y-6">
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
