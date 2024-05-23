import Adresses from "@/components/Adresses";
import Contact from "@/components/Contact";
import Coverage from "@/components/Coverage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Prices from "@/components/Prices";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <div>
      <Header />
      <MainTitle />
      <WhatsApp />
      <Prices />
      <Coverage />
      <Contact />
      <Adresses />
      <Footer />
    </div>
  );
}
