import Image from "next/image";
import Reveal from "./Reveal";
import RevealGroup, { RevealItem } from "./RevealGroup";

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
              Áreas de Actuación
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
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/servicios-silos.jpg"
                alt="Silos industriales de alimentos balanceados"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-avialas-dark/50 to-transparent" />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s) => (
            <RevealItem key={s.title}>
              <article className="group h-full rounded-2xl border border-avialas-gray p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-avialas-yellow hover:shadow-xl">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-avialas-red text-white transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="font-heading text-lg font-bold text-avialas-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-avialas-dark/70">
                  {s.text}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
