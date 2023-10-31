import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Profile() {
  return (
    <div key="1" className="flex items-center justify-center ">
      <div className="rounded-lg shadow-lg w-64 h-[460px] hover:shadow-2xl  hover:shadow-slate-700/50 transition-all duration-200 border-2 border-transparent hover:border-slate-500">
        <div className="h-24 bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-t-lg" />
        <Image
          alt="User avatar"
          className="rounded-full -mt-12 border-4 border-white mx-auto"
          height="100"
          src="https://s3-symbol-logo.tradingview.com/stratasys--big.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">Stratasys</h2>
          <p className="text-gray-500">SSYS | NASDAQ </p>
        </div>
        <div className="flex justify-around my-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg">587</h3>
            <p className="text-gray-500">Contracts</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">352</h3>
            <p className="text-gray-500">Acquisitions</p>
          </div>
        </div>
        <div className="px-6 mt-28 py-4">
          <Button className="w-full bg-zinc-900  rounded-lg">Contact</Button>
        </div>
      </div>
    </div>
  );
}
