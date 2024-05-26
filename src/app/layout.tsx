import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Migo",
  description: "Conecte-se ao mundo da melhor forma possivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"green-100 " + inter.className}>
        <Header />
        <Suspense fallback={<p>Carregando perfil...</p>}></Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
