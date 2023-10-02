import React from "react";
import NavBar from "../navbar/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <footer className="bg-gray-900 p-4 text-center text-white">
        <p>© 2024 Brayan Joan. All rights reserved.</p>
      </footer>
    </div>
  );
}
