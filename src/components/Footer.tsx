import logo from "@/../public/logo.png";
import { links } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white font-bold text-center text-lg">
      <div className="bg-green-500 flex items-center sm:justify-between justify-center py-3 px-4">
        <div className="hidden sm:block">
          <Image src={logo} height={60} alt="Migo logo" />
        </div>
        <div className="flex justify-center items-center gap-4 font-semibold">
          <a href="/Lucas-Winicius">Criador</a>
          <a href="/green">Migo Green</a>
          <a href={links.speedTest}>Teste de velocidade</a>
          <a href={links.tiket}>2ª Via de boleto</a>
        </div>
      </div>
      <p className="flex items-center justify-center py-6 px-2 bg-green-600">
        &copy; 2024 MigoNet Provedor de Internet - CNPJ 42.329.220/0001-03
      </p>
    </footer>
  );
}
