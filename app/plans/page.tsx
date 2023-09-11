import PlanCard from "@/components/pages/plans/plan-card";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="m-7 space-y-7">
      <div className="flex justify-between items-center">
        <div className="space-y-7 my-7">
          <h5 className="uppercase">Find out exactly what you'll pay for</h5>
          <h3 className="text-6xl">
            No surprises,just honest <br /> and straightforward quotes
          </h3>
        </div>
        <Button size="lg" className="uppercase rounded-full">
          Contact Us
        </Button>
      </div>
      <div className="grid  lg:grid-flow-row gap-2 lg:grid-cols-5">
        <div className="col-span-2 hidden lg:inline-flex"></div>
        <PlanCard
          cardTitle="3D Print - Metal"
          cardPlanPrice="$250"
          cardPlanExchange="PER PART"
        />
        <PlanCard
          cardTitle="3D Print - Metal"
          cardPlanPrice="$250"
          cardPlanExchange="PER PART"
        />
        <PlanCard
          cardTitle="3D Print - Metal"
          cardPlanPrice="$250"
          cardPlanExchange="PER PART"
        />
      </div>
    </div>
  );
}
