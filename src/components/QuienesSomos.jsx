import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import TiltCard from "./TiltCard";
import { asset } from "@/lib/asset";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-widest text-avialas-red">
            01 / Quiénes Somos
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-bold text-avialas-dark sm:text-4xl">
            Un socio confiable para la inversión extranjera en el sector avícola
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.1} className="relative">
            <Parallax className="aspect-[4/3] w-full rounded-3xl shadow-xl">
              <Image
                src={asset("/images/quienes-somos-poultry.jpg")}
                alt="Instalación avícola moderna"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-avialas-dark/40 via-transparent to-transparent" />
            </Parallax>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-avialas-yellow px-6 py-5 shadow-lg sm:block">
              <p className="font-heading text-3xl font-extrabold text-avialas-dark">6</p>
              <p className="text-xs font-semibold text-avialas-dark/80">
                Valores compartidos
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.15}>
              <TiltCard max={4} glow="rgba(230,57,5,0.10)" className="rounded-2xl border border-avialas-gray bg-white p-8 shadow-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-avialas-red/10 text-avialas-red">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <path d="M12 3 3 7v5c0 5.5 3.8 9.7 9 11 5.2-1.3 9-5.5 9-11V7l-9-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="m8 12 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="font-heading text-xl font-bold text-avialas-dark">Misión</h3>
                <p className="mt-3 text-avialas-dark/70">
                  Gestionar, controlar y participar, como socio o accionista,
                  en cualquier modalidad de inversión extranjera en el
                  territorio nacional, así como en sociedades y asociaciones
                  con entidades cubanas, con el fin de lograr el desarrollo
                  sostenible de la actividad avícola y de los alimentos
                  balanceados en Cuba, garantizando calidad, eficiencia y
                  respeto al medio ambiente.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.25}>
              <TiltCard max={4} glow="rgba(230,57,5,0.10)" className="rounded-2xl border border-avialas-gray bg-white p-8 shadow-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-avialas-red/10 text-avialas-red">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <h3 className="font-heading text-xl font-bold text-avialas-dark">Visión</h3>
                <p className="mt-3 text-avialas-dark/70">
                  Ser la entidad líder en la actividad avícola y de alimentos
                  balanceados del MINAG, reconocida nacional e
                  internacionalmente por su elevada contribución al
                  desarrollo de la inversión extranjera, por la excelencia de
                  sus productos y servicios, y por su capacidad de
                  integrarse exitosamente con otros actores económicos
                  cubanos en un marco de sostenibilidad y mejora continua.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
