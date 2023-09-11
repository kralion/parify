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

type PlanCardProps = {
  cardTitle: string;
  cardPlanPrice: string;
  cardPlanExchange: string;
};

export default function PlanCard({
  cardTitle,
  cardPlanPrice,
  cardPlanExchange,
}: PlanCardProps) {
  return (
    <Card className="hover:bg-indigo-200 w-64 rounded-lg hover:shadow-md bg-zinc-100 border-none group cursor-pointer duration-200 space-y-7">
      <CardHeader>
        <CardTitle className="flex gap-1 text-md font-normal items-center">
          <CircleDashed
            className="group-hover:bg-black rounded-full"
            size={10}
          />
          {cardTitle}
        </CardTitle>
        <CardDescription className="flex items-baseline font-navaMono">
          <span className="text-4xl text-black font-bold">{cardPlanPrice}</span>{" "}
          /{cardPlanExchange}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className=" w-full rounded-full uppercase px-5"
        >
          Print parts
        </Button>
      </CardContent>
    </Card>
  );
}
