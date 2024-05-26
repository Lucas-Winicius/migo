import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migo Green",
  description: "Conecte-se ao mundo da melhor forma possivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col items-center justify-center min-h-screen">{children}</div>;
}
