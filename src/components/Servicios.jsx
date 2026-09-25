import Image from "next/image";
import Reveal from "./Reveal";
import RevealGroup, { RevealItem } from "./RevealGroup";
import Parallax from "./Parallax";
import TiltCard from "./TiltCard";
import { asset } from "@/lib/asset";

const SERVICIOS = [
  {
    title: "Inversión Extranjera y Alianzas",
    text: "Participación como socio o accionista en cualquier modalidad de inversión extranjera en el territorio nacional, y en sociedades y asociaciones con entidades cubanas.",
    icon: (
      <>
        <path d="M4 21V10l8-6 8 6v11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Asesoría en Negocios e Inversión",
    text: "Formulación y manejo de negocios, documentos rectores de inversión extranjera, estudios de oportunidad y mercado, planes de negocios y contratos de producción agrícola.",
    icon: (
      <>
        <path d="M5 3h11l5 5v13H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M15 3v5h5M8 13h8M8 17h8M8 9h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Asuntos Internacionales",
    text: "Cooperación internacional, tramitación de misiones de trabajo al exterior y coordinación de visitas de personal extranjero para el Grupo Empresarial GEALAV.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M3 12h18M12 3c2.4 2.5 3.7 5.6 3.7 9s-1.3 6.5-3.7 9c-2.4-2.5-3.7-5.6-3.7-9S9.6 5.5 12 3Z" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "Ferias y Exposiciones",
    text: "Gestión y contratación de ferias y exposiciones nacionales e internacionales como oportunidades de negocio para el sector.",
    icon: (
      <>
        <path d="M3 21V9l9-5 9 5v12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M3 21h18M7 21v-7h4v7M13 21v-5h4v5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Comercialización y Comercio Exterior",
    text: "Comercialización de productos alimenticios y no alimenticios, contratación de compraventa y arrendamiento, y actividades de comercio exterior.",
    icon: (
      <>
        <path d="M3 7h18l-1.5 11a2 2 0 0 1-2 1.7H6.5a2 2 0 0 1-2-1.7L3 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 7V5.5a4 4 0 0 1 8 0V7" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "Servicios Informáticos y Auditoría",
    text: "Servicios informáticos y auditorías internas a las empresas y sociedades mercantiles del Grupo Empresarial GEALAV.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 12l3-3 3 3 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-widest text-avialas-red">
              02 / Áreas de Actuación
            </span>
            <h2 className="max-w-xl font-heading text-3xl font-bold text-avialas-dark sm:text-4xl">
              Servicios y actividades de AVIALAS S.A.
            </h2>
            <p className="mt-4 max-w-xl text-avialas-dark/70">
              Actividades principales y secundarias aprobadas por la Junta
              General de Accionistas, en el marco de nuestro objeto social.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Parallax className="aspect-[16/7] w-full rounded-3xl shadow-xl">
              <Image
                src={asset("/images/servicios-silos.jpg")}
                alt="Silos industriales de alimentos balanceados"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-avialas-dark/50 to-transparent" />
            </Parallax>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICIOS.map((s, i) => {
            const featured = i === 0;
            // lg (6 columnas): destacada a todo el ancho, luego 3 + 2 tarjetas
            const span = featured
              ? "sm:col-span-2 lg:col-span-6"
              : i <= 3
                ? "lg:col-span-2"
                : "lg:col-span-3";
            return (
              <RevealItem key={s.title} className={span}>
                <TiltCard
                  max={featured ? 3 : 7}
                  glow={featured ? "rgba(248,183,0,0.22)" : "rgba(230,57,5,0.10)"}
                  className={
                    featured
                      ? "rounded-2xl bg-avialas-dark p-8 shadow-xl sm:p-10"
                      : "rounded-2xl border border-avialas-gray bg-white p-8 transition-colors duration-300 hover:border-avialas-yellow hover:shadow-xl"
                  }
                >
                  <div className={featured ? "flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10" : ""}>
                    <div className={featured ? "" : "mb-5 flex items-center justify-between"}>
                      <span
                        className={`icon-draw inline-flex items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                          featured
                            ? "h-20 w-20 bg-avialas-yellow text-avialas-dark"
                            : "h-14 w-14 bg-avialas-red text-white"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" className={featured ? "h-10 w-10" : "h-7 w-7"}>
                          {s.icon}
                        </svg>
                      </span>
                      {!featured && (
                        <span className="font-heading text-4xl font-extrabold text-avialas-gray transition-colors group-hover:text-avialas-yellow/60">
                          {`0${i + 1}`}
                        </span>
                      )}
                    </div>
                    <div>
                      {featured && (
                        <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-widest text-avialas-yellow">
                          01 · Nuestra actividad central
                        </span>
                      )}
                      <h3 className={`font-heading font-bold ${featured ? "text-2xl text-white sm:text-3xl" : "text-lg text-avialas-dark"}`}>
                        {s.title}
                      </h3>
                      <p className={`mt-2 leading-relaxed ${featured ? "max-w-2xl text-white/75" : "text-sm text-avialas-dark/70"}`}>
                        {s.text}
                      </p>
                      {featured && (
                        <a
                          href="#contacto"
                          className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold text-avialas-yellow transition-all hover:gap-4"
                        >
                          Conectemos su proyecto <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
