import React from "react";
type Props = {
  title: string;
  children: React.ReactNode;
  description: string;
};

export default function FeatureCard({ children, title, description }: Props) {
  return (
    <div className="flex  hover:bg-purple-200 group duration-200 hover:shadow-md flex-col items-center space-y-2  p-4 rounded-lg">
      <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
        {children}
      </div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 dark:text-zinc-100">{description}</p>
    </div>
  );
}
