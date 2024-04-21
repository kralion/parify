import React from "react";
type Props = {
  title: string;
  children: React.ReactNode;
  description: string;
};

export default function FeatureCard({ children, title, description }: Props) {
  return (
    <div className="flex  hover:bg-purple-200 group duration-200 hover:shadow-md flex-col items-center space-y-2  p-4 rounded-lg">
      <div className="p-2 bg-purple-500 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
        {children}
      </div>
      <h2 className="text-xl font-bold dark:group-hover:text-black">{title}</h2>
      <p className=" dark:text-zinc-400">{description}</p>
    </div>
  );
}
