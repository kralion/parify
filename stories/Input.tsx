import React from "react";

export default function Input() {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="Name" className="font-bold pl-3">
        Name
      </label>
      <input type="text" className="w-36 h-10 p-2  rounded-full border-2 " />
    </div>
  );
}
