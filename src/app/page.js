import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import QuienesSomos from "@/components/QuienesSomos";
import Valores from "@/components/Valores";
import Servicios from "@/components/Servicios";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-0 focus:top-0 focus:z-[100] focus:bg-avialas-dark focus:px-5 focus:py-3 focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <main id="contenido-principal">
        <Hero />
        <QuickFacts />
        <QuienesSomos />
        <Valores />
        <Servicios />
        <CtaFinal />
      </main>

      <Footer />
    </>
  );
}
