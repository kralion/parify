import PlanCard from "@/components/pages/plans/plan-card";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Printer3D from "@/assets/printer-3d.png";

export default function Page() {
  return (
    <>
      <div
        className=" space-y-7 p-7 "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?size=626&ext=jpg')",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="space-y-7 my-7">
            <h5 className="uppercase tracking-tight text-2xl font-navaMono">
              Find out exactly what you'll pay for
            </h5>
            <h3 className="text-6xl">
              No surprises, just honest <br /> and straightforward quotes
            </h3>
          </div>
          <Button size="lg" className="uppercase rounded-full">
            Contact Us
          </Button>
        </div>
        <div className="grid  lg:grid-flow-row gap-2 lg:grid-cols-5">
          <div className="col-span-2 hidden lg:inline-flex"></div>
          <PlanCard
            cardTitle="3D printing - Metal"
            cardPlanPrice="$250"
            cardPlanExchange="PER PART"
          />
          <PlanCard
            cardTitle="3D printing - Polymer"
            cardPlanPrice="$310"
            cardPlanExchange="PER PART"
          />
          <PlanCard
            cardTitle="CNC - Metal and Polymer"
            cardPlanPrice="$440"
            cardPlanExchange="PER PART"
          />
        </div>
      </div>
      <footer className="grid grid-flow-row grid-cols-5 bg-zinc-300">
        <div className=" border-2 col-span-2  p-5 flex justify-between items-start bg-white rounded-lg ">
          <h3>CHARACTERISTICS</h3>
          <div className="pr-10 px-5 gap-3 grid grid-rows-5 text-zinc-400">
            <span>Technology :</span>
            <span>Post Processing :</span>
            <span>Quality :</span>
            <span>Load Times :</span>
            <span>Maximum sizes :</span>
          </div>
        </div>
        <div className=" border-2 grid grid-rows-5 gap-3 p-5   bg-white rounded-lg ">
          <span>L-PBF</span>
          <span>Medi blasting, CNC machining</span>
          <span>Industrial Grade</span>
          <span>From 12 business day</span>
          <span>Up to 500 x 500 x 500mm</span>
        </div>
        <div className=" border-2  p-5 grid grid-rows-5 gap-3 bg-white rounded-lg ">
          <span>SLS, MLF, FDM </span>
          <span>Dyeing, smothing, painting</span>
          <span>Industrial Grade</span>
          <span>From 6 business day</span>
          <span>Up to 700 x 380 x 580mm</span>
        </div>
        <div className=" border-2 p-5 grid grid-rows-5 gap-3 bg-white rounded-lg ">
          <span>CNC machining</span>
          <span></span>
          <span>Industrial Grade</span>
          <span>From 6 business day</span>
          <span></span>
        </div>
      </footer>
    </>
  );
}
