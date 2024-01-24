import React from "react";
import NavBar from "../navbar/navbar";
import MobileNavBar from "../navbar/mobile-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <MobileNavBar />
      {children}
    </div>
  );
}
