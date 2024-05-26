import Adresses from "@/components/Adresses";
import Contact from "@/components/Contact";
import Coverage from "@/components/Coverage";
import MainTitle from "@/components/MainTitle";
import Prices from "@/components/Prices";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <div>
      <MainTitle />
      <WhatsApp />
      <Prices />
      <Coverage />
      <Contact />
      <Adresses />
    </div>
  );
}
