import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucas Winicius",
  description: "Olá, seja bem-vindo(a) aqui você saberá um pouco mais sobre mim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col items-center justify-center min-h-screen">{children}</div>;
}
