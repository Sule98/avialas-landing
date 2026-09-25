import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import PulseRings from "./PulseRings";
import { asset } from "@/lib/asset";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-28 text-center">
      <div className="absolute inset-0">
        <Parallax className="h-full w-full" amount={6}>
          <Image
            src={asset("/images/cta-handshake.jpg")}
            alt="Alianza de negocios internacional"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </Parallax>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-avialas-red/95 via-avialas-reddeep/90 to-avialas-dark/90" />
      <PulseRings />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block font-heading text-xs font-bold uppercase tracking-widest text-avialas-yellow">
            04 / Conversemos
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Las grandes alianzas comienzan con una conversación
          </h2>
          <p className="mt-5 text-white/90">
            Si representa a una empresa extranjera o cubana y desea invertir,
            asociarse o colaborar con AVIALAS S.A., conversemos sobre su
            proyecto.
          </p>
          {/* TODO: reemplazar por el correo oficial de contacto una vez confirmado */}
          <a
            href="mailto:contacto@avialas.cu"
            className="group mt-9 inline-flex items-center gap-4 bg-avialas-yellow px-9 py-4 font-heading text-sm font-bold text-avialas-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Escríbanos
            <span
              className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
