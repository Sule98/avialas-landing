import Image from "next/image";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-28 text-center">
      <Image
        src="/images/cta-handshake.jpg"
        alt="Alianza de negocios internacional"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-avialas-red/95 via-avialas-reddeep/90 to-avialas-dark/90" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Construyamos juntos el futuro de la industria avícola cubana
          </h2>
          <p className="mt-5 text-white/90">
            Si representas una empresa extranjera o cubana interesada en
            invertir, asociarte o colaborar con AVIALAS S.A., nuestro equipo
            está listo para conversar contigo.
          </p>
          {/* TODO: reemplazar por el correo oficial de contacto una vez confirmado */}
          <a
            href="mailto:contacto@avialas.cu"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-avialas-yellow px-9 py-4 font-heading text-sm font-bold text-avialas-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Escríbenos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
