// `use suppressHydrationWarning`
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import HeaderNew from "@/Components/Header/HeaderNew";
import FooterNew from "@/Components/Footer/FooterNew";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <HeaderNew/>
        {children}
        <FooterNew/>
      </body>
    </html>
  );
}
