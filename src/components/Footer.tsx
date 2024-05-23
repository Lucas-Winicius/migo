import logo from "@/../public/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white font-bold text-lg">
      <div className="bg-green-500 flex items-center sm:justify-between justify-center py-3 px-4">
        <div className="hidden sm:block">
          <Image src={logo} height={60} alt="Migo logo" />
        </div>
        <div className="flex gap-4 font-semibold">
          <a href="">Criador</a>
          <a href="">Migo Green</a>
          <a href="">Teste de velocidade</a>
          <a href="">2ª Via de boleto</a>
        </div>
      </div>
      <p className="flex items-center justify-center py-6 px-2 bg-green-600 text-center">
        &copy; 2024 MigoNet Provedor de Internet - CNPJ 42.329.220/0001-03
      </p>
    </footer>
  );
}
