import PlanCard from "@/components/how-it-works/plan-card";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Changa } from "next/font/google";
import { ContactFormulario } from "@/components/how-it-works/contact-formulario";

const rubiPixles = Changa({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Page() {
  return (
    <>
      <div>
        <div
          className=" space-y-7 p-7 "
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?size=626&ext=jpg')",
          }}
        >
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="space-y-7 my-7">
              <h5
                className={` ${rubiPixles.className} uppercase tracking-tight text-3xl`}
              >
                Find out exactly what you&apos;ll pay for
              </h5>
              <h3 className="lg:text-6xl text-4xl">
                No surprises, just honest <br /> and straightforward quotes
              </h3>
            </div>
            <Button
              size="lg"
              className="uppercase lg:w-fit w-full rounded-full"
            >
              Contact Us
            </Button>
          </div>
          <div className="grid lg:grid-flow-row gap-3.5 lg:grid-cols-4">
            <div className=" hidden lg:inline-flex"></div>
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
        <footer className="lg:grid sm:flex sm:flex-col lg:grid-flow-row grid-flow-col grid-cols-1  lg:grid-cols-5 bg-zinc-300">
          <div
            className=" border-2 lg:col-span-2  p-5 flex lg:flex-row flex-col justify-between items-
           bg-white rounded-lg "
          >
            <h3>CHARACTERISTICS</h3>
            <div className="lg:pr-10 px-5 gap-3 lg:grid-flow-col grid-rows-1 grid-flow-row  grid lg:grid-rows-5 text-zinc-500">
              <span>Technology :</span>
              <span>Post Processing :</span>
              <span>Quality :</span>
              <span>Load Times :</span>
              <span>Maximum sizes :</span>
            </div>
          </div>
          <div className=" border-2 grid lg:grid-rows-5 grid-cols-1 lg:grid-flow-row grid-flow-col gap-3 p-5   bg-white rounded-lg ">
            <span>L-PBF</span>
            <span>Medi blasting, CNC machining</span>
            <span>Industrial Grade</span>
            <span>From 12 business day</span>
            <span>Up to 500 x 500 x 500mm</span>
          </div>
          <div className=" border-2 grid lg:grid-rows-5 grid-cols-1 lg:grid-flow-row grid-flow-col gap-3 p-5   bg-white rounded-lg ">
            <span>SLS, MLF, FDM </span>
            <span>Dyeing, smothing, painting</span>
            <span>Industrial Grade</span>
            <span>From 6 business day</span>
            <span>Up to 700 x 380 x 580mm</span>
          </div>
          <div className=" border-2 grid lg:grid-rows-5 grid-cols-1 lg:grid-flow-row grid-flow-col gap-3 p-5   bg-white rounded-lg ">
            <span>CNC machining</span>
            <span></span>
            <span>Industrial Grade</span>
            <span>From 6 business day</span>
            <span></span>
          </div>
        </footer>
      </div>

      <div className="flex lg:flex-row my-8  flex-col justify-center lg:my-20  ">
        <Image
          className="lg:rounded-l-xl  brightness-50"
          src="https://img.freepik.com/free-photo/vertical-shot-female-hand-holding-smartphone-laptop_181624-44972.jpg?size=626&ext=jpg"
          width={422}
          height={500}
          alt="imagen"
        />
        <ContactFormulario />
      </div>
    </>
  );
}
