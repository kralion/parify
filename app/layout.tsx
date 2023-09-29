import NavBar from "@/components/pages/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Partify | Outsourcing your party planning needs.",
  description: "Outsourcing your party planning needs.",
  creator: "Brayan Paucar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://cdn-icons-png.flaticon.com/128/1722/1722082.png"
      />
      <body className={robotoCondensed.className}>
        <div className="">
          <NavBar />
          {children}
        </div>
        <footer className="bg-gray-900 p-4 text-center text-white">
          <p>© 2024 Brayan Joan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
