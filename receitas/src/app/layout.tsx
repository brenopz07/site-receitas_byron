import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Receitas",
  description: "Site de receitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable}antialiased min-h-screen flex flex-col`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
