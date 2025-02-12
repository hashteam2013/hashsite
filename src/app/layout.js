// `use suppressHydrationWarning`
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-[#F2F1F6]">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
