import React from "react";
import NavBar from "../navbar/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
