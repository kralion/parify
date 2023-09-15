import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CircleDashed } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { M_PLUS_1_Code } from "next/font/google";

type PlanCardProps = {
  cardTitle: string;
  cardPlanPrice: string;
  cardPlanExchange: string;
};

const m1PlusCode = M_PLUS_1_Code({
  subsets: ["latin-ext", "vietnamese"],
  weight: ["400"],
});

export default function PlanCard({
  cardTitle,
  cardPlanPrice,
  cardPlanExchange,
}: PlanCardProps) {
  return (
    <Card className="hover:bg-indigo-300 rounded-2xl hover:shadow-md bg-zinc-300 border-none group cursor-pointer duration-200 space-y-7">
      <CardHeader className="space-y-3">
        <CardTitle className="flex gap-1 text-md font-normal items-center">
          <CircleDashed
            className="group-hover:bg-black rounded-full"
            size={10}
          />
          {cardTitle}
        </CardTitle>
        <CardDescription
          className={`flex items-baseline ${m1PlusCode.className}`}
        >
          <span className="text-4xl text-black font-bold">{cardPlanPrice}</span>{" "}
          /{cardPlanExchange}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className=" w-full rounded-full uppercase px-5 border-none font-navaMono"
        >
          Print parts
        </Button>
      </CardContent>
    </Card>
  );
}
