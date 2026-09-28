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
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:avialassa24@gmail.com"
              className="group inline-flex items-center gap-4 bg-avialas-yellow px-9 py-4 font-heading text-sm font-bold text-avialas-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Escríbanos
              <span
                className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
            <a
              href="https://wa.me/qr/MWC3VGTPMM4XF1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white/70 px-9 py-4 font-heading text-sm font-bold text-white transition-colors hover:bg-white hover:text-avialas-dark"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.25.7-1.22 1.28-2 1.44-.55.11-1.26.2-3.68-.79-3.08-1.27-5.06-4.4-5.21-4.6-.15-.2-1.24-1.65-1.24-3.15s.77-2.23 1.05-2.53c.25-.28.55-.35.74-.35.19 0 .37.002.53.01.17.008.4-.065.62.47.25.6.83 2.07.9 2.22.07.15.12.33.02.53-.09.2-.14.32-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.18 1.38Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
