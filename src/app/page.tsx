import Contact from "@/components/Contact";
import Coverage from "@/components/Coverage";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Prices from "@/components/Prices";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <div>
      <Header />
      <MainTitle />
      <Prices />
      <Coverage />
      <Contact />
      <WhatsApp />
    </div>
  );
}
