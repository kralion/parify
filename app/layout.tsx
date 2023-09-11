import NavBar from "@/components/pages/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Partify | Outsourcing your party planning needs.",
  description: "Outsourcing your party planning needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <div className="">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
