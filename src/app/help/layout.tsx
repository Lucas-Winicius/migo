import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajuda - Migo",
  description: "Tenha aqui a resposta para as perguntas mais frequentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col items-center justify-center min-h-screen">{children}</div>;
}
