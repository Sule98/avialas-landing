import Reveal from "./Reveal";
import RevealGroup, { RevealItem } from "./RevealGroup";
import TiltCard from "./TiltCard";

const VALORES = [
  {
    n: "1",
    title: "Integridad",
    text: "Actuamos con honradez, transparencia y apego a la ley en todas las negociaciones con socios extranjeros y nacionales, rechazando cualquier práctica de corrupción o conflicto de intereses.",
    icon: (
      <path d="M12 3 3 7v5c0 5.5 3.8 9.7 9 11 5.2-1.3 9-5.5 9-11V7l-9-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    ),
  },
  {
    n: "2",
    title: "Responsabilidad",
    text: "Asumimos las consecuencias de nuestras decisiones y acciones, cumplimos los plazos y compromisos adquiridos, y respondemos ante la sociedad por el impacto de nuestra gestión.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    n: "3",
    title: "Respeto",
    text: "Valoramos la diversidad de criterios, culturas y formas de trabajo de nuestros socios extranjeros y colaboradores cubanos, fomentando un trato digno y cortés en todos los niveles.",
    icon: (
      <>
        <circle cx="8.5" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M2.5 20c.7-3.7 3-5.5 6-5.5s5.3 1.8 6 5.5M11 20c.7-3.7 3-5.5 6-5.5s5.3 1.8 6 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: "4",
    title: "Solidaridad",
    text: "Cooperamos activamente con otras entidades del MINAG, con las comunidades locales y con los actores económicos nacionales para fortalecer la soberanía alimentaria del país.",
    icon: (
      <>
        <path d="M3 12c3-5 15-5 18 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 15l-3 4m16-4 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  {
    n: "5",
    title: "Disciplina",
    text: "Nos regimos por horarios, procedimientos y normas internas con rigor, entendiendo que la constancia y el orden son fundamentales para producir con eficiencia y seguridad.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </>
    ),
  },
  {
    n: "6",
    title: "Trabajo en equipo",
    text: "Fomentamos la colaboración, la ayuda mutua y la comunicación abierta entre directivos, especialistas, abogados, contadores y operarios, reconociendo que los logros son colectivos.",
    icon: (
      <>
        <circle cx="7" cy="9" r="2.6" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="9" r="2.6" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="15" r="2.6" stroke="currentColor" strokeWidth="2" />
        <path d="M3 21c.5-3 2-4.5 4-4.5s3.5 1.5 4 4.5M13 21c.5-3 2-4.5 4-4.5s3.5 1.5 4 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Valores() {
  return (
    <section id="valores" className="bg-gradient-to-b from-[#FFF9EC] to-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-widest text-avialas-red">
            03 / Nuestra Cultura
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-bold text-avialas-dark sm:text-4xl">
            Valores Compartidos de AVIALAS S.A.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALORES.map((v) => (
            <RevealItem key={v.n}>
              <TiltCard className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-avialas-gray transition-shadow duration-300 hover:shadow-xl">
                <span className="absolute right-6 top-6 font-heading text-5xl font-extrabold text-avialas-gray/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-avialas-yellow/50">
                  {`0${v.n}`}
                </span>
                <span className="icon-draw relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-avialas-yellow text-avialas-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="relative font-heading text-lg font-bold text-avialas-dark">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-avialas-dark/70">
                  {v.text}
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
