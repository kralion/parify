import React from "react";
import NavBar from "../../components/navbar/navbar";
import MobileNavBar from "../../components/navbar/mobile-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <MobileNavBar />
      {children}
    </div>
  );
}
