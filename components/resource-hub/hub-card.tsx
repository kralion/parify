/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Xx6DE3L
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HubCard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Image
          alt="Sneaker Image"
          className="aspect-[1/1] object-cover object-center"
          height="500"
          src="https://img.freepik.com/premium-photo/building-construction-with-crane-other-building-fixtures-top-blue-print3d-rendering_256301-1641.jpg?w=740"
          width="500"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">
            Classic Sneakers
          </h1>
          <div className="flex space-x-1">
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 17.77 5.82 7 8.91" />
            </svg>
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 17.77 5.82 7 8.91" />
            </svg>
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 17.77 5.82 7 8.91" />
            </svg>
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 17.77 5.82 7 8.91" />
            </svg>
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 17.77 5.82 7 8.91" />
            </svg>
          </div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            $120
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            These classic sneakers are perfect for any occasion. They are
            comfortable, stylish, and durable. Made with high-quality materials,
            they are designed to last.
          </p>
          <div className="flex space-x-2">
            <Button className="w-12 h-12 rounded-md border border-slate-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 ">
              7
            </Button>
            <Button className="w-12 h-12 rounded-md border border-slate-200  text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 ">
              8
            </Button>
            <Button className="w-12 h-12 rounded-md border border-slate-200  text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 ">
              9
            </Button>
            <Button className="w-12 h-12 rounded-md border border-slate-200  text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 ">
              10
            </Button>
          </div>
          <Button className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart
          </Button>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p>
        </div>
      </div>
    </section>
  );
}