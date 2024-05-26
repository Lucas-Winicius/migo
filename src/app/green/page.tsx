import migoGreen from "@/../public/migogreen.png";
import Image from "next/image";

export default function Green() {
  return (
    <div className="flex flex-col text-green-950 gap-7 items-center my-10 mx-7 md:max-w-prose text-xl">
      <h1 className="font-extrabold text-4xl text-center">Conectando você com o mundo</h1>
      <p>
        A Migo possui uma rede totalmente baseada em fibra óptica de ultra
        velocidade. Nosso foco é o mercado de transmissão de dados corporativo e
        residencial, para o qual oferecemos serviços inteligentes e tecnologia
        de última geração, tendo como diferenciais: qualidade, preços
        competitivos, agilidade e operação através de rede própria.
      </p>
      <p>
        Para o mercado corporativo, oferecemos soluções em conectividade de
        dados, VPN/IP, MPLS, Transporte L2, Links dedicados ou escalonáveis e
        projetos especiais. As velocidades podem variar de 10Mbps a 10Gbps.
        Nossos produtos corporativos contam com o sistema de QoS (Quality of
        Service) – que garante tráfego prioritário além de serviços como
        monitoramento proativo, banda exclusiva e soluções de segurança
        avançada.
      </p>
      <Image src={migoGreen} alt="migo green" />
    </div>
  );
}
