import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NextAuthProvider } from "./providers";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  preload: true,
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
      <body className={`${robotoCondensed.className} dark:bg-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextAuthProvider>{children}</NextAuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
